import config from '@/config'

export default class ChatSocket {
    constructor(chatId) {
        this.chatId = chatId;
        this.socketTask = null;
        this.isConnected = false;
        this.reconnectTimer = null;
        this.messageCallbacks = [];
        this.reconnectCount = 0;
        this.maxReconnectCount = 3;
        this.isManualClose = false; // 主动关闭标记
        this.closeResolve = null; //存储close()方法的resolve回调
        this.connectCallback = null; // 回调函数存储
    }

    // 支持回调的connect方法
    connect(callback) {
        // 如果提供了回调函数，使用回调方式
		console.log("connect before;")
        if (typeof callback === 'function') {
			console.log("connect ing;")
            this.connectCallback = callback;
            return this._connect();
        }
        
        // 否则使用Promise方式
        return this._connect();
    }

    // 内部连接实现
    _connect() {
        return new Promise((resolve, reject) => {
            // 关闭已有连接
            if (this.socketTask) {
                this.socketTask.close();
            }

            // 创建新的WebSocket连接
            this.socketTask = wx.connectSocket({
                url: `${config.server.wsUrl}/ws/chat?chatId=${this.chatId}`,
                header: {
                    'content-type': 'application/json'
                },
                method: 'GET'
            });

            // 监听连接成功
            this.socketTask.onOpen(() => {
                this.isConnected = true;
                this.reconnectCount = 0; // 重置计数器
                clearTimeout(this.reconnectTimer);
                
                // 执行回调
                if (this.connectCallback) {
                    this.connectCallback(true);
                    this.connectCallback = null;
                }
                
                resolve();
            });

            // 监听连接错误
            this.socketTask.onError((error) => {
                console.error('WebSocket连接错误:', error);
                
                // 执行回调
                if (this.connectCallback) {
                    this.connectCallback(false, error);
                    this.connectCallback = null;
                }
                
                reject(error);
            });

            // 监听连接关闭
            this.socketTask.onClose(() => {
                this.socketTask = null;
                this.isConnected = false;
                
                // 执行回调
                if (this.connectCallback) {
                    this.connectCallback(false, new Error('连接已关闭'));
                    this.connectCallback = null;
                }
                
                // 只有非主动关闭才重连
                if (!this.isManualClose) {
                    this.reconnect();
                } else {
                    // 重置主动关闭标记
                    this.isManualClose = false;
                }
                
                // 执行close()方法中的resolve回调
                if (this.closeResolve) {
                    this.closeResolve();
                    this.closeResolve = null;
                }
            });

            // 监听消息接收
            this.socketTask.onMessage((event) => {
                const data = JSON.parse(event.data);
                this.messageCallbacks.forEach(callback => callback(data));
            });
        });
    }

    reconnect() {
        if (this.reconnectCount >= this.maxReconnectCount) {
            console.error('已达到最大重连次数，停止尝试');
            return;
        }
        if (!this.reconnectTimer && !this.isConnected) {
            this.reconnectCount++;
            this.reconnectTimer = setTimeout(() => this.connect(), 3000);
        }
    }

    sendMessage(data) {
		console.log("before");
        if (this.isConnected && this.socketTask) {
			console.log("ing");
            this.socketTask.send({
                data: JSON.stringify(data)
            });
        }
    }

    onMessage(callback) {
        this.messageCallbacks.push(callback);
    }

    close() {
        return new Promise((resolve) => {
            this.isManualClose = true; // 设置主动关闭标记
            this.closeResolve = resolve; // 存储resolve回调
            if (this.socketTask) {
                this.socketTask.close();
            } else {
                resolve();
                this.closeResolve = null;
            }
            clearTimeout(this.reconnectTimer);
            this.messageCallbacks = [];
        });
    }
}