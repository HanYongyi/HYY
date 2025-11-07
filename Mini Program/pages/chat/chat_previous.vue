<template>
	<view class="chat-container">
		<!-- 聊天消息区域 -->
		<scroll-view class="chat-messages" scroll-y="true" scroll-with-animation="true" :scroll-top="scrollTop"
			:enhanced="true" :show-scrollbar="false">
			<view v-for="(msg, index) in messages" :key="index" class="message-item" :id="'msg-' + index">
				<view class="message"
					:class="[msg.role + '-message', msg.type === 'audio' ? 'audio-message' : '', msg.type === 'image' ? 'image-message' : '']">
					<image v-if="msg.role === 'dog'" class="avatar" src="@/static/dog_avatar.png"></image>

					<view class="message-content">
						<!-- 思考部分（仅对机械狗消息显示） -->
						<view v-if="msg.role === 'dog' && msg.thinking" class="thinking-section">
							<view class="thinking-header">
								<uni-icons type="compose" size="16" color="#888"></uni-icons>
								<text class="thinking-title">思考中</text>
								<view v-if="msg.isThinking" class="thinking-indicator">
									<view class="dot"></view>
									<view class="dot"></view>
									<view class="dot"></view>
								</view>
							</view>
							<view class="thinking-content">
								{{ msg.thinking }}
							</view>
						</view>

						<!-- 文本消息 -->
						<template v-if="msg.type === 'text' || !msg.type">
							<view v-if="msg.role === 'dog'" class="answer-section">
								{{ msg.content }}
								<view v-if="msg.isStreaming" class="streaming-indicator">
									<view class="dot"></view>
									<view class="dot"></view>
									<view class="dot"></view>
								</view>
							</view>
							<view v-else>
								{{ msg.content }}
								<view v-if="msg.isStreaming" class="streaming-indicator">
									<view class="dot"></view>
									<view class="dot"></view>
									<view class="dot"></view>
								</view>
							</view>
						</template>

						<!-- 音频消息 -->
						<template v-else-if="msg.type === 'audio'">
							<view class="audio-content">
								<!-- 上传状态 -->
								<view v-if="msg.isUploading" class="audio-uploading">
									<view class="uploading-icon">
										<uni-icons type="spinner-cycle" size="16" color="#1a73e8"></uni-icons>
									</view>
									<text class="uploading-text">正在上传...</text>
								</view>

								<!-- 上传失败状态 -->
								<view v-else-if="msg.uploadFailed" class="audio-failed"
									@tap="retryAudioUpload(msg.filePath, msg.duration)">
									<view class="failed-icon">
										<uni-icons type="closeempty" size="16" color="#ff3b30"></uni-icons>
									</view>
									<text class="failed-text">{{ msg.content }}</text>
								</view>

								<!-- 正常音频播放器 -->
								<view v-else class="audio-player-container" @tap="toggleAudioPlayback(msg, index)">
									<text class="audio-text">{{ msg.content || '[语音消息]' }}</text>
									<view class="audio-player">
										<view class="play-button">
											<uni-icons :type="msg.isPlaying ? 'pause-filled' : 'play-filled'" size="20"
												:color="msg.isPlaying ? '#ff3b30' : '#1a73e8'"></uni-icons>
										</view>

										<view class="wave-container">
											<view v-for="(bar, idx) in 10" :key="idx" class="wave-bar"
												:style="{ height: msg.isPlaying ? getWaveHeight(idx, index) + 'px' : '8px' }">
											</view>
										</view>

										<text class="time-display">
											{{ formatTime(msg.currentTime) }} / {{ formatTime(msg.duration) }}
										</text>
									</view>

									<view class="progress-container">
										<view class="progress-bar" :style="{ width: msg.progress + '%' }"></view>
									</view>
								</view>

								<!-- 转录文本展开区域 -->
								<view v-if="msg.transcriptText" class="transcript-container">
									<view class="transcript-toggle" @tap="toggleTranscript(msg, index)">
										<text class="toggle-text">{{ msg.showTranscript ? '收起' : '展开' }}转录文本</text>
										<uni-icons :type="msg.showTranscript ? 'up' : 'down'" size="16"
											color="#666"></uni-icons>
									</view>
									<view v-if="msg.showTranscript" class="transcript-content">
										<text class="transcript-text">{{ msg.transcriptText }}</text>
									</view>
								</view>

								<!-- 转录状态 -->
								<view v-if="msg.transcribing" class="transcript-status">
									<text class="status-text">正在识别语音内容...</text>
								</view>
							</view>
						</template>

						<!-- 图片消息 -->
						<template v-else-if="msg.type === 'image'">
							<view v-if="msg.role === 'dog'" class="answer-section">
								<view class="image-content">
									<text class="image-text" style="padding: 20px;">{{ msg.content }}</text>
									<view v-if="msg.isStreaming" class="streaming-indicator">
										<view class="dot"></view>
										<view class="dot"></view>
										<view class="dot"></view>
									</view>
									<!-- 使用两层图片实现渐进效果 -->
									<view class="image-container" :style="{ position: 'relative', width: '100%' }">
										<!-- 模糊缩略图（始终显示） -->
										<image :src="getThumbnailUrl(msg.serverPath)" class="chat-image blur-image"
											mode="widthFix" :style="{ 
						            position: 'absolute',
						            top: 0,
						            left: 0,
						            width: '100%',
						            height: '100%',
						            filter: 'blur(10px)',
						            opacity: msg.imageLoaded ? 0 : 1,
						            transition: 'opacity 5s ease'
						          }" />

										<!-- 清晰原图（加载后显示） -->
										<image :src="getImageUrl(msg.serverPath)" class="chat-image" mode="widthFix"
											:style="{ 
						            position: 'relative',
						            opacity: msg.imageLoaded ? 1 : 0,
						            transition: 'opacity 10s ease'
						          }" @load="handleImageLoad(msg, index)"
											@click="previewImage(msg.localPath || getImageUrl(msg.serverPath))"
											@error="onImageError" />
									</view>
								</view>
							</view>
						</template>
					</view>

					<image v-if="msg.role === 'user'" class="avatar" src="@/static/user_avatar.png"></image>
				</view>
			</view>

			<!-- 添加底部空间 -->
			<view class="bottom-space"></view>
		</scroll-view>

		<!-- 底部输入区域 -->
		<view class="bottom-section" :class="{ 'keyboard-show': isKeyboardShow }">
			<!-- 模型选择 -->
			<view class="model-selector">
				<view class="model-item" :class="{ active: isLongThinkActive }"
					@tap="isLongThinkActive = !isLongThinkActive">
					<text class="model-icon">✦</text>
					<text class="model-text">长思考（k1.5）</text>
				</view>
				<view class="network-item" :class="{ active: isWebSearchActive }"
					@tap="isWebSearchActive = !isWebSearchActive">
					<text class="network-icon">🌐</text>
					<text class="network-text">联网搜索</text>
				</view>
			</view>

			<!-- 输入框 -->
			<view class="input-container" :class="{ 'voice-mode': isVoiceMode, 'recording': isRecording }">
				<!-- 语音模式 -->
				<view v-if="isVoiceMode" class="voice-input-area">
					<view class="voice-btn" @tap="toggleInputMode">
						<image class="voice-icon" src="/static/keyboard.png" mode="aspectFit"></image>
					</view>
					<view class="voice-placeholder" @touchstart="startRecording" @touchend="stopRecording"
						@touchcancel="cancelRecording">
						<text v-if="!isRecording" style="font-size: 38rpx;">长按说话</text>
						<text v-else style="font-size: 38rpx;">松开结束</text>
					</view>
					<view class="add-btn" @tap="showAddOptions">
						<text class="add-icon">+</text>
					</view>
				</view>

				<!-- 文字模式 -->
				<view v-else class="text-input-area">
					<view class="voice-btn" @tap="toggleInputMode">
						<image class="voice-icon" src="/static/microphone.png" mode="aspectFit"></image>
					</view>
					<input class="message-input" placeholder="有什么问题尽管问我" v-model="textMessage" @confirm="sendMessage" />
					<view class="add-btn" @tap="showAddOptions">
						<text class="add-icon">+</text>
					</view>
					<view class="send-btn" @tap="sendMessage" v-if="textMessage.trim()">
						<image class="send-icon" src="/static/send.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
		</view>

		<!-- 附件选择弹窗 -->
		<view class="attachment-modal" v-if="showAttachmentModal" @tap="hideAttachmentModal">
			<view class="attachment-content" @tap.stop>
				<view class="attachment-item" @tap="selectPhoto">
					<text class="attachment-text">拍照</text>
				</view>
				<view class="attachment-item" @tap="selectAlbum">
					<text class="attachment-text">本地相册</text>
				</view>
				<view class="attachment-item" @tap="selectDocument">
					<text class="attachment-text">取消</text>
				</view>
			</view>
		</view>

		<!-- 波形可视化 - 录音时显示在底部 -->
		<view v-if="isRecording" class="wave-visualization">
			<view class="wave-item" v-for="(item, index) in waveData" :key="index"
				:style="{ height: item + 'px', backgroundColor: getWaveColor(index) }">
			</view>
		</view>

		<!-- 录音状态提示 - 上滑时变为取消按钮 -->
		<view v-if="isRecording" class="recording-status">
			<text>{{ isCancelMode ? '松手取消' : '手指上滑，取消发送' }}</text>
		</view>
	</view>
</template>

<script>
	import ChatSocket from '@/utils/socket';
	import config from '@/config';
	import socketInstance from '@/utils/chatSocket.js';

	export default {
		data() {
			return {
				config: config,
				firstSendStatus: true,
				isRecording: false,
				isLongThinkActive: false,
				isWebSearchActive: false,
				recordingTime: 0,
				recorderManager: null,
				innerAudioContext: null,
				scrollTop: 0,
				textMessage: '',
				voiceInputMode: false,
				isVoiceMode: false,
				keyboardHeight: 0,
				isKeyboardShow: false,
				waveHeights: {},
				messages: [{
						role: 'dog',
						type: 'text',
						content: '你好！我是机械狗小R，有什么可以帮您的吗？'
					},
					{
						role: 'user',
						type: 'text',
						content: '你好！我想了解你的功能'
					},
					{
						role: 'dog',
						type: 'text',
						content: '我可以执行语音指令，试试按住下面的按钮和我说话吧！'
					}
				],
				currentAudio: null,
				isPlaying: false,
				audioTimer: null,
				isStreaming: false,
				streamingResponse: '',
				isCancelMode: false,
				touchStartY: 0,
				waveData: Array(50).fill(40),
				waveAnimationTimer: null,
				showAttachmentModal: false,
				socket: null, // socket连接实例
				streamTimeout: null,
				conversationId: null, // 添加对话ID存储
				loadingHistory: false, // 添加历史加载状态
				isSocketConnected: false, // 连接状态标志
				chatId: 'chat_' + new Date().getTime(),
				scrollThrottleTimer: null, // 滚动节流定时器
			}
		},
		onLoad(options) {
			// 优先使用conversationId，没有时才生成新的
			if (options.conversationId) {
				this.conversationId = decodeURIComponent(options.conversationId);
				this.chatId = this.conversationId; // 确保使用历史记录的chatId
				// 如果有历史记录数据，直接使用
				if (options.history) {
					this.messages = JSON.parse(decodeURIComponent(options.history));
					this.smoothScrollToBottom();
				} else {
					this.loadChatHistory();
				}
			} else if (options.message) {
				// 新对话处理
				this.chatId = 'chat_' + new Date().getTime();

				// 初始化WebSocket
				// this.initSocket();

				// 解码并解析消息对象
				const messageData = JSON.parse(decodeURIComponent(options.message));
				console.log(messageData);

				if (messageData.type === 'text') {
					// 添加用户消息
					this.addUserTextMessage(messageData.content);
					if (this.firstSendStatus) {
						// 添加AI流式响应占位符
						this.messages.push({
							role: 'dog',
							type: 'text',
							thinking: '',
							content: '',
							isThinking: true,
							isStreaming: true
						});
					}
				}

				// 初始化WebSocket使用回调
				this.socket = new socketInstance(this.chatId);
				this.socket.connect((success) => {
					if (success) {
						this.isSocketConnected = true;
						this.socket.onMessage((data) => this.handleSocketMessage(data));
						// 根据消息类型处理
						if (messageData.type === 'text') {
							const messageData = JSON.parse(decodeURIComponent(options.message));
							// 通过WebSocket发送消息
							this.$nextTick(() => {
								if (this.socket && this.isSocketConnected) {
									this.socket.sendMessage({
										type: 'text',
										content: messageData.content
									});
								}
							});
						} else if (messageData.type === 'audio') {
							// 处理语音消息
							this.messages.push({
								role: 'user',
								type: 'audio',
								duration: messageData.duration,
								currentTime: 0,
								progress: 0,
								isPlaying: false,
								filePath: messageData.filePath,
								content: '',
								isUploading: true // 添加上传状态
							});

							this.smoothScrollToBottom();

							// 上传并处理音频
							this.uploadAndProcessAudio(messageData.filePath, messageData.duration);
						}
					} else {
						console.error('WebSocket连接失败');
					}
				});


			} else {
				// 全新对话
				this.chatId = 'chat_' + new Date().getTime();
			}
		},

		// 页面卸载生命周期
		onUnload() {
			// 页面离开时关闭WebSocket连接
			if (this.socket && this.isSocketConnected) {
				this.socket.close();
				this.isSocketConnected = false;
				this.socket = null; // 释放引用
			}

			// 清理滚动节流定时器
			if (this.scrollThrottleTimer) {
				clearTimeout(this.scrollThrottleTimer);
				this.scrollThrottleTimer = null;
			}
		},

		created() {
			this.recorderManager = uni.getRecorderManager();

			this.recorderManager.onError((err) => {
				console.error('录音失败:', err);
				uni.showToast({
					title: '录音失败，请重试',
					icon: 'none'
				});
				this.resetRecording();
			});

			this.recorderManager.onStop((res) => {
				console.log("录音结束", res);

				if (this.isCancelMode) {
					console.log("录音已取消");
					return;
				}

				if (res.duration < 1000) {
					uni.showToast({
						title: '录音时间太短',
						icon: 'none'
					});
					return;
				}

				const duration = Math.floor(res.duration / 1000);
				// 添加用户音频消息
				this.messages.push({
					role: 'user',
					type: 'audio',
					duration: duration,
					currentTime: 0,
					progress: 0,
					isPlaying: false,
					filePath: res.tempFilePath,
					content: '',
					isUploading: true // 添加上传状态
				});

				this.smoothScrollToBottom();

				// 上传并处理音频
				this.uploadAndProcessAudio(res.tempFilePath, duration);
			});

			this.innerAudioContext = uni.createInnerAudioContext();
			this.innerAudioContext.obeyMuteSwitch = false;

			this.innerAudioContext.onPlay(() => {
				this.isPlaying = true;
				if (this.currentAudio) {
					this.currentAudio.isPlaying = true;
				}
			});

			this.innerAudioContext.onPause(() => {
				this.isPlaying = false;
				if (this.currentAudio) {
					this.currentAudio.isPlaying = false;
				}
			});

			this.innerAudioContext.onStop(() => {
				this.isPlaying = false;
				if (this.currentAudio) {
					this.currentAudio.isPlaying = false;
					this.currentAudio.currentTime = 0;
					this.currentAudio.progress = 0;
				}
			});

			this.innerAudioContext.onEnded(() => {
				this.isPlaying = false;
				if (this.currentAudio) {
					this.currentAudio.isPlaying = false;
					this.currentAudio.currentTime = this.currentAudio.duration;
					this.currentAudio.progress = 100;
				}
			});

			this.innerAudioContext.onTimeUpdate(() => {
				if (this.currentAudio && this.innerAudioContext.duration) {
					const currentTime = Math.floor(this.innerAudioContext.currentTime);
					const duration = Math.floor(this.innerAudioContext.duration);
					const progress = (currentTime / duration) * 100;

					this.currentAudio.currentTime = currentTime;
					this.currentAudio.progress = progress;

					// 更新波形高度
					const index = this.messages.findIndex(msg => msg === this.currentAudio);
					if (index !== -1) {
						this.updateWaveHeight(index);
					}
				}
			});

			this.innerAudioContext.onError((res) => {
				console.error('音频播放失败:', res);
				uni.showToast({
					title: `播放失败: ${res.errMsg}`,
					icon: 'none'
				});
				this.isPlaying = false;
				if (this.currentAudio) {
					this.currentAudio.isPlaying = false;
				}
			});
		},
		methods: {
			// ========== WebSocket 相关方法 ==========
			// 初始化WebSocket连接
			async initSocket() {
				// 确保chatId已经正确设置
				if (!this.chatId) {
					this.chatId = this.conversationId || 'chat_' + new Date().getTime();
				}
				// 如果已有连接，等待完全关闭
				if (this.socket) {
					await this.socket.close();
					this.socket = null;
					this.isSocketConnected = false;
				}
				try {
					this.socket = new ChatSocket(this.chatId);
					await this.socket.connect();
					this.isSocketConnected = true;
					this.socket.onMessage((data) => this.handleSocketMessage(data));
				} catch (e) {
					console.error('WebSocket连接失败:', e);
					this.isSocketConnected = false;
					// 连接失败时显式清理
					this.socket = null;
				}
			},

			// 处理WebSocket消息
			handleSocketMessage(data) {
				if (this.streamTimeout) clearTimeout(this.streamTimeout);

				switch (data.type) {
					case 'think_start': // 思考开始
						this.startThinking();
						break;

					case 'think': // 思考内容
						this.appendThinkingContent(data.content);
						break;

					case 'think_end': // 思考结束
						this.endThinking();
						break;

					case 'text': // 正文内容
						this.appendDogMessage(data.content);
						break;

					case 'error':
						uni.showToast({
							title: data.content,
							icon: 'none'
						});
						this.endStreaming();
						break;

					case 'stream_end':
						this.endStreaming();
						break;

					case 'transcription_start':
						this.handleTranscriptionStart();
						break;

					case 'transcription_result':
						this.handleTranscriptionResult(data.content);
						break;
				}
			},

			startThinking() {
				// 确保最后一条消息不是AI消息时才创建新消息
				const lastMessage = this.messages[this.messages.length - 1];

				if (!lastMessage || lastMessage.role !== 'dog') {
					console.log("startThinking")
					// 创建新消息
					this.messages.push({
						role: 'dog',
						type: 'text',
						thinking: '',
						content: '',
						isThinking: true,
						isStreaming: true
					});
				} else {
					// 如果最后一条已经是AI消息，更新状态为思考中
					this.$set(this.messages, this.messages.length - 1, {
						...lastMessage,
						isThinking: true,
						isStreaming: true,
						thinking: lastMessage.thinking || '',
						content: lastMessage.content || ''
					});
				}

				this.smoothScrollToBottom();
			},

			// 添加思考内容
			appendThinkingContent(content) {
				const lastIndex = this.messages.length - 1;
				const lastMessage = this.messages[lastIndex];

				// 确保最后一条是AI消息
				if (lastMessage && lastMessage.role === 'dog' && lastMessage.isStreaming) {
					if (!lastMessage.thinking) {
						this.$set(lastMessage, 'thinking', '');
					}
					lastMessage.thinking += content;

					// 更新视图
					this.$set(this.messages, lastIndex, {
						...lastMessage
					});
				}

				this.smoothScrollToBottom();
			},

			// 结束思考
			endThinking() {
				const lastIndex = this.messages.length - 1;
				const lastMessage = this.messages[lastIndex];

				if (lastMessage && lastMessage.role === 'dog' && lastMessage.isThinking) {
					// 转换思考状态为正常消息状态
					this.$set(this.messages, lastIndex, {
						...lastMessage,
						isThinking: false
					});
				}
			},

			// 结束流式响应
			endStreaming() {
				const lastIndex = this.messages.length - 1;
				if (this.messages[lastIndex] && this.messages[lastIndex].role === 'dog' && this.messages[lastIndex]
					.isStreaming) {
					this.$set(this.messages, lastIndex, {
						...this.messages[lastIndex],
						isStreaming: false
					});
				}
				this.streamingResponse = '';
				clearTimeout(this.streamTimeout);
				this.streamTimeout = null;

				// 清除滚动定时器并进行最终滚动
				if (this.scrollThrottleTimer) {
					clearTimeout(this.scrollThrottleTimer);
					this.scrollThrottleTimer = null;
				}
				// 流式结束时使用标准滚动确保到达底部
				this.smoothScrollToBottom();
			},

			// 添加用户文本消息
			addUserTextMessage(content) {
				console.log(content)
				this.messages.push({
					role: 'user',
					type: 'text',
					content: content
				});
				console.log(this.messages)
				this.smoothScrollToBottom();
			},

			// 添加AI正文内容
			appendDogMessage(content) {
				const lastIndex = this.messages.length - 1;
				const lastMessage = this.messages[lastIndex];

				if (lastMessage && lastMessage.role === 'dog' && lastMessage.isStreaming) {
					lastMessage.content += content;
					this.$set(this.messages, lastIndex, {
						...lastMessage
					});
					this.smoothScrollToBottom();
				} else {
					// 如果没有AI消息，创建新消息
					console.log("appendDogMessage")
					this.messages.push({
						role: 'dog',
						type: 'text',
						content: content,
						isStreaming: true
					});
					this.smoothScrollToBottom();
				}
			},

			// ========== 消息发送 ==========
			sendMessage() {
				// if (!this.firstSendStatus) {
				// 	// 添加AI流式响应占位符
				// 	this.messages.push({
				// 		role: 'dog',
				// 		type: 'text',
				// 		thinking: '',
				// 		content: '',
				// 		isThinking: true,
				// 		isStreaming: true
				// 	});
				// }
				// 将第一次的状态置为false，这样就可以直接再次添加I流式响应占位符
				this.firstSendStatus = false;
				// if (this.textMessage.trim() && this.socket) {
				if (this.socket) {
					console.log("用户信息")
					this.addUserTextMessage(this.textMessage);



					// 检查特定输入并返回对应图片
					if (this.textMessage === '请生成一张融合耀州瓷元素和火影元素的陶瓷设计图') {
						this.handleSpecialImageRequest('火影.jpg', '为您生成了一张融合耀州瓷元素和火影元素的陶瓷设计图');
					} else if (this.textMessage === '请生成一张含有花元素的碗') {
						this.handleSpecialImageRequest('flower_ceramic.jpg', '为您生成了一张含有花元素的精美陶瓷碗');
					} else if (this.textMessage === '请生成带有蓝色花纹的瓷器') {
						this.handleSpecialImageRequest('blue_ceramic.png', '瓷韵流转间，青花细描处，匠心之作呼之欲出,瓷语正在为你努力创作中');
					} else {
						// 通过WebSocket发送消息
						console.log("sendMessage")
						this.socket.sendMessage({
							type: 'text',
							content: this.textMessage
						});
					}
					this.textMessage = '';
				}
			},

			// 处理特殊图片请求的统一方法
			handleSpecialImageRequest(imageName, responseText) {
				// 移除流式响应占位符，因为我们要直接返回图片
				this.messages.pop();

				// 添加AI图片回复
				this.messages.push({
					role: 'dog',
					type: 'image',
					content: responseText,
					serverPath: `uploads/images/${imageName}`,
					timestamp: new Date().getTime(),
					isStreaming: true,
					imageLoaded: false // 添加加载状态标记
				});
				this.smoothScrollToBottom();

				// 保存用户输入以便发送到后端
				const userInput = this.textMessage;

				// 通过WebSocket发送特殊消息以保存历史记录
				this.$nextTick(() => {
					// 确保WebSocket连接已建立
					const sendSpecialMessage = () => {
						if (this.socket && this.isSocketConnected) {
							this.socket.sendMessage({
								type: 'special_image_response',
								userInput: userInput,
								imageResponse: `uploads/images/${imageName}`
							});
						} else {
							// 如果还没连接，稍后重试
							setTimeout(sendSpecialMessage, 100);
						}
					};
					sendSpecialMessage();
				});
			},

			// ========== 语音处理 ==========
			// 上传并处理音频
			async uploadAndProcessAudio(filePath, duration) {
				try {
					// 获取最后一条用户音频消息（刚添加的）
					const lastMessage = this.messages[this.messages.length - 1];

					// 显示上传进度
					uni.showLoading({
						title: '正在上传音频...',
						mask: true
					});

					// 上传音频到服务器
					const uploadResult = await this.uploadAudio(filePath);

					if (uploadResult.success) {
						// 更新消息状态
						lastMessage.isUploading = false;
						lastMessage.serverPath = uploadResult.filePath;
						lastMessage.content = `发送了一段${duration}秒的语音`;

						// 添加AI流式响应占位符
						this.messages.push({
							role: 'dog',
							type: 'text',
							content: '',
							isStreaming: true
						});

						// 通过WebSocket发送音频路径给AI分析
						if (this.socket && this.isSocketConnected) {
							this.socket.sendMessage({
								type: 'audio',
								content: uploadResult.filePath
							});
						}

						this.smoothScrollToBottom();

					} else {
						// 上传失败，更新消息状态
						lastMessage.isUploading = false;
						lastMessage.uploadFailed = true;
						lastMessage.content = '语音上传失败，点击重试';

						uni.showToast({
							title: uploadResult.message || '音频上传失败',
							icon: 'none',
							duration: 3000
						});
					}
				} catch (error) {
					console.error('音频处理失败:', error);

					// 获取最后一条用户音频消息
					const lastMessage = this.messages[this.messages.length - 1];
					lastMessage.isUploading = false;
					lastMessage.uploadFailed = true;
					lastMessage.content = '语音上传失败，点击重试';

					// 提供重试选项
					this.retryAudioUpload(filePath, duration);
				} finally {
					uni.hideLoading();
				}
			},

			// 上传音频到服务器
			async uploadAudio(filePath) {
				return new Promise((resolve, reject) => {
					const uploadTimeout = setTimeout(() => {
						reject(new Error('上传超时，请检查网络连接'));
					}, 3000); // 3秒超时

					uni.uploadFile({
						url: `${this.config.server.httpUrl}/api/upload/audio`,
						filePath: filePath,
						name: 'file',
						formData: {
							chatId: this.chatId
						},
						header: {
							'Content-Type': 'multipart/form-data'
						},
						success: (res) => {
							clearTimeout(uploadTimeout);
							try {
								if (res.statusCode !== 200) {
									reject(new Error(`服务器错误: HTTP ${res.statusCode}`));
									return;
								}
								const result = JSON.parse(res.data);
								if (result.success) {
									resolve(result);
								} else {
									reject(new Error(result.message || '上传失败'));
								}
							} catch (e) {
								console.error('解析上传结果失败:', e, 'raw data:', res.data);
								reject(new Error('服务器响应格式错误'));
							}
						},
						fail: (error) => {
							clearTimeout(uploadTimeout);
							console.error('上传请求失败:', error);
							let errorMsg = '上传失败';
							if (error.errMsg) {
								if (error.errMsg.includes('timeout')) {
									errorMsg = '上传超时，请检查网络';
								} else if (error.errMsg.includes('network')) {
									errorMsg = '网络连接失败';
								} else if (error.errMsg.includes('file not found')) {
									errorMsg = '音频文件丢失，请重新录制';
								}
							}
							reject(new Error(errorMsg));
						}
					});
				});
			},

			// 重试音频上传
			retryAudioUpload(filePath, duration) {
				uni.showModal({
					title: '上传失败',
					content: '音频上传失败，是否重试？',
					confirmText: '重试',
					cancelText: '取消',
					success: (res) => {
						if (res.confirm) {
							this.uploadAndProcessAudio(filePath, duration);
						}
					}
				});
			},

			// 处理转录开始
			handleTranscriptionStart() {
				// 找到最后一条用户音频消息
				const audioMessages = this.messages.filter((msg, index) =>
					msg.type === 'audio' && msg.role === 'user'
				);
				if (audioMessages.length > 0) {
					const lastAudioMsg = audioMessages[audioMessages.length - 1];
					const audioIndex = this.messages.findIndex(msg => msg === lastAudioMsg);
					if (audioIndex !== -1) {
						this.$set(this.messages, audioIndex, {
							...this.messages[audioIndex],
							transcribing: true
						});
					}
				}
			},

			// 处理转录结果
			handleTranscriptionResult(transcriptText) {
				// 找到最后一条用户音频消息
				const audioMessages = this.messages.filter((msg, index) =>
					msg.type === 'audio' && msg.role === 'user'
				);
				if (audioMessages.length > 0) {
					const lastAudioMsg = audioMessages[audioMessages.length - 1];
					const audioIndex = this.messages.findIndex(msg => msg === lastAudioMsg);
					if (audioIndex !== -1) {
						this.$set(this.messages, audioIndex, {
							...this.messages[audioIndex],
							transcribing: false,
							transcriptText: transcriptText,
							showTranscript: false // 默认不展开
						});
					}
				}
			},

			// 切换转录文本显示
			toggleTranscript(msg, index) {
				msg.showTranscript = !msg.showTranscript;
				this.$set(this.messages, index, {
					...msg
				});
			},

			// ========== 图片处理 ==========
			// 获取缩略图URL
			getThumbnailUrl(serverPath) {
				console.log("serverPath:", serverPath);
				if (!serverPath) return '';

				if (serverPath.startsWith('uploads/')) {
					return `${this.config.server.httpUrl}/api/files/path?filePath=${encodeURIComponent(serverPath)}&thumbnail=true`;
				}
				return serverPath;
			},

			// 图片加载完成处理
			handleImageLoad(msg, index) {
				this.$set(this.messages, index, {
					...msg,
					imageLoaded: true
				});
				const lastIndex = this.messages.length - 1;
				this.messages[lastIndex].isStreaming = false;
			},

			// 选择图片
			chooseImage(sourceType) {
				const that = this;

				// 检查WebSocket连接状态
				if (!this.isSocketConnected) {
					uni.showToast({
						title: '网络连接异常，请稍后重试',
						icon: 'none',
						duration: 2000
					});
					return;
				}

				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: [sourceType],
					success(res) {
						const tempFilePath = res.tempFilePaths[0];
						// 检查文件大小（5MB限制）
						that.checkFileSize(tempFilePath, (isValid) => {
							if (isValid) {
								that.showImagePreview(tempFilePath);
							} else {
								uni.showToast({
									title: '图片大小不能超过5MB',
									icon: 'none',
									duration: 2000
								});
							}
						});
					},
					fail(error) {
						console.error('选择图片失败:', error);
						let errorMsg = '图片选择失败';
						if (error.errMsg && error.errMsg.includes('cancel')) {
							return; // 用户取消选择，不显示错误
						} else if (error.errMsg && error.errMsg.includes('permission')) {
							errorMsg = '没有相机或相册权限';
						}
						uni.showToast({
							title: errorMsg,
							icon: 'none',
							duration: 2000
						});
					}
				});
			},

			// 显示图片预览
			showImagePreview(imagePath) {
				const that = this;
				uni.showModal({
					title: '发送图片',
					content: '确定要发送这张图片给AI分析吗？',
					confirmText: '发送',
					cancelText: '取消',
					success(res) {
						if (res.confirm) {
							that.uploadAndSendImage(imagePath);
						}
					}
				});
			},

			// 上传并发送图片
			async uploadAndSendImage(imagePath) {
				// 显示上传进度
				const loading = uni.showLoading({
					title: '正在上传图片...',
					mask: true
				});

				try {
					// 上传图片到服务器
					const uploadResult = await this.uploadImageToServer(imagePath);

					if (uploadResult.success) {
						// 添加用户图片消息到界面
						this.addImageMessage('user', uploadResult.filePath, imagePath);

						// 添加AI流式响应占位符
						this.messages.push({
							role: 'dog',
							type: 'text',
							content: '',
							isStreaming: true
						});

						// 通过WebSocket发送图片路径给AI分析
						if (this.socket && this.isSocketConnected) {
							this.socket.sendMessage({
								type: 'image',
								content: uploadResult.filePath
							});
						}

						this.smoothScrollToBottom();
					} else {
						uni.showToast({
							title: uploadResult.message || '图片上传失败',
							icon: 'none',
							duration: 3000
						});
					}
				} catch (error) {
					console.error('上传图片失败:', error);
					// 提供重试选项
					this.retryUpload(imagePath);
				} finally {
					uni.hideLoading();
				}
			},

			// 上传图片到服务器
			uploadImageToServer(imagePath) {
				return new Promise((resolve, reject) => {
					const uploadTimeout = setTimeout(() => {
						reject(new Error('上传超时，请检查网络连接'));
					}, 30000); // 30秒超时

					uni.uploadFile({
						url: `${this.config.server.httpUrl}/api/upload/image`,
						filePath: imagePath,
						name: 'file',
						formData: {
							chatId: this.chatId
						},
						header: {
							'Content-Type': 'multipart/form-data'
						},
						success: (res) => {
							clearTimeout(uploadTimeout);
							try {
								if (res.statusCode !== 200) {
									reject(new Error(`服务器错误: HTTP ${res.statusCode}`));
									return;
								}
								const result = JSON.parse(res.data);
								if (result.success) {
									resolve(result);
								} else {
									reject(new Error(result.message || '上传失败'));
								}
							} catch (e) {
								console.error('解析上传结果失败:', e, 'raw data:', res.data);
								reject(new Error('服务器响应格式错误'));
							}
						},
						fail: (error) => {
							clearTimeout(uploadTimeout);
							console.error('上传请求失败:', error);
							let errorMsg = '上传失败';
							if (error.errMsg) {
								if (error.errMsg.includes('timeout')) {
									errorMsg = '上传超时，请检查网络';
								} else if (error.errMsg.includes('network')) {
									errorMsg = '网络连接失败';
								} else if (error.errMsg.includes('file not found')) {
									errorMsg = '图片文件丢失，请重新选择';
								}
							}
							reject(new Error(errorMsg));
						}
					});
				});
			},

			// 添加图片消息到聊天界面
			addImageMessage(role, serverPath, localPath) {
				this.messages.push({
					role: role,
					type: 'image',
					serverPath: serverPath,
					localPath: localPath,
					timestamp: new Date().getTime()
				});
				this.smoothScrollToBottom();
			},

			// 生成图片访问URL
			getImageUrl(serverPath) {
				if (!serverPath) return '';
				// 如果是相对路径，转换为服务器访问URL
				if (serverPath.startsWith('uploads/')) {
					return `${this.config.server.httpUrl}/api/files/path?filePath=${encodeURIComponent(serverPath)}`;
				}
				return serverPath;
			},

			// 预览图片
			previewImage(imageSrc) {
				uni.previewImage({
					current: imageSrc,
					urls: [imageSrc]
				});
			},

			// 图片加载错误处理
			onImageError(e) {
				console.error('图片加载失败:', e);
				uni.showToast({
					title: '图片加载失败',
					icon: 'none',
					duration: 2000
				});
			},

			// 检查文件大小
			checkFileSize(filePath, callback) {
				uni.getFileInfo({
					filePath: filePath,
					success: (res) => {
						const size = res.size;
						const maxSize = 5 * 1024 * 1024; // 5MB
						callback(size <= maxSize);
					},
					fail: (error) => {
						console.error('获取文件信息失败:', error);
						// 如果获取文件信息失败，允许继续（可能是平台兼容性问题）
						callback(true);
					}
				});
			},

			// 重试上传图片
			retryUpload(imagePath) {
				uni.showModal({
					title: '上传失败',
					content: '图片上传失败，是否重试？',
					confirmText: '重试',
					cancelText: '取消',
					success: (res) => {
						if (res.confirm) {
							this.uploadAndSendImage(imagePath);
						}
					}
				});
			},

			// ========== UI相关方法 ==========
			toggleInputMode() {
				this.isVoiceMode = !this.isVoiceMode;
				console.log('切换输入模式:', this.isVoiceMode ? '语音模式' : '文字模式');
			},

			showAddOptions() {
				this.showAttachmentModal = true;
			},

			hideAttachmentModal() {
				this.showAttachmentModal = false;
			},

			selectPhoto() {
				this.chooseImage('camera');
				this.hideAttachmentModal();
			},

			selectAlbum() {
				this.chooseImage('album');
				this.hideAttachmentModal();
			},

			selectDocument() {
				this.hideAttachmentModal();
			},

			// 获取波形颜色 - 根据索引返回不同颜色
			getWaveColor(index) {
				// 创建一个颜色数组，模拟截图中的颜色
				const colors = [
					'#0066FF', '#3385FF', '#66A3FF', '#99C2FF',
					'#00CCCC', '#00E6E6', '#33FFFF',
					'#0066FF', '#3385FF', '#66A3FF',
					'#00CCCC', '#00E6E6', '#33FFFF',
					'#0066FF', '#3385FF', '#66A3FF',
					'#00CCCC', '#00E6E6', '#33FFFF',
					'#0066FF', '#3385FF', '#66A3FF'
				];

				// 返回对应索引的颜色，如果超出范围则循环使用
				return colors[index % colors.length];
			},

			// 开始录音
			startRecording(e) {
				// 存储初始触摸位置用于滑动检测
				// if (e && e.touches && e.touches[0]) {
				// 	this.touchStartY = e.touches[0].clientY;
				// }

				if (this.isRecording) {
					clearInterval(this.timer);
					clearInterval(this.waveAnimationTimer);
					this.recorderManager.stop();
					this.isRecording = false;
					return;
				}

				this.isRecording = true;
				this.recordingTime = 0;
				// this.isCancelMode = false;

				// 开始录音计时器
				this.timer = setInterval(() => {
					this.recordingTime++;
				}, 1000);

				// 开始波形动画
				this.startWaveAnimation();

				// 提供触觉反馈
				// uni.vibrateShort();

				// 开始实际录音
				this.recorderManager.start({
					duration: 60000,
					sampleRate: 44100,
					numberOfChannels: 1,
					encodeBitRate: 192000,
					format: 'mp3'
				});
			},

			// 处理手指移动检测上滑手势
			handleTouchMove(e) {
				if (!this.isRecording || !e.touches || !e.touches[0]) return;

				const currentY = e.touches[0].clientY;
				const diffY = this.touchStartY - currentY;

				// 如果上滑超过100px，进入取消模式
				if (diffY > 100 && !this.isCancelMode) {
					this.isCancelMode = true;
					uni.vibrateShort(); // 提供触觉反馈
				}
				// 如果移回，退出取消模式
				else if (diffY < 50 && this.isCancelMode) {
					this.isCancelMode = false;
				}
			},

			// 开始波形动画
			startWaveAnimation() {
				// 清除现有动画
				if (this.waveAnimationTimer) {
					clearInterval(this.waveAnimationTimer);
				}

				// 动画波形条
				this.waveAnimationTimer = setInterval(() => {
					// 为波形条生成随机高度
					this.waveData = Array(50).fill(40).map(() => {
						return Math.floor(Math.random() * 35) + 15; // 随机高度在15-50px之间
					});
				}, 100); // 每100ms更新一次，实现平滑动画
			},

			// 停止录音并发送音频
			stopRecording() {
				if (!this.isRecording) return;

				clearInterval(this.timer);
				clearInterval(this.waveAnimationTimer);

				// 立即停止录音
				this.recorderManager.stop();

				// 重置状态
				this.isRecording = false;
				// this.isCancelMode = false;
			},

			// 取消录音
			cancelRecording() {
				if (!this.isRecording) return;

				clearInterval(this.timer);
				clearInterval(this.waveAnimationTimer);

				this.isRecording = false;
				this.isCancelMode = false;

				// 停止录音但不处理它
				this.recorderManager.stop();

				uni.showToast({
					title: '已取消录音',
					icon: 'none'
				});
			},

			resetRecording() {
				this.isRecording = false;
				this.isCancelMode = false;
				clearInterval(this.timer);
				clearInterval(this.waveAnimationTimer);
			},

			// 平滑滚动方法，用于流式响应
			smoothScrollToBottom() {
				// 清除之前的定时器避免重复执行
				if (this.scrollThrottleTimer) {
					clearTimeout(this.scrollThrottleTimer);
				}

				// 使用很短的延迟确保DOM更新，保持实时性
				this.scrollThrottleTimer = setTimeout(() => {
					this.$nextTick(() => {
						const query = uni.createSelectorQuery().in(this);
						query.select('.chat-messages').boundingClientRect();
						query.select('.chat-messages').scrollOffset();
						query.exec(res => {
							if (res[0] && res[1]) {
								// 平滑滚动到底部
								const newScrollTop = Math.max(0, res[1].scrollHeight - res[0]
									.height) + 80;
								this.scrollTop = newScrollTop;
								console.log(newScrollTop)
							}
						});
					});
					this.scrollThrottleTimer = null;
				}, 16); // 约60fps的更新频率，保持流畅
			},

			playAudio(index) {
				const audioMsg = this.messages[index];

				// 如果点击的是当前正在播放的音频
				if (this.currentAudio === audioMsg) {
					if (this.isPlaying) {
						this.innerAudioContext.pause();
					} else {
						this.innerAudioContext.play();
					}
					return;
				}

				// 暂停当前播放的音频
				if (this.currentAudio) {
					this.currentAudio.isPlaying = false;
					this.innerAudioContext.stop(); // 添加停止操作
				}

				// 设置新的音频源
				this.currentAudio = audioMsg;

				// 修复这里：使用正确的路径属性
				const src = audioMsg.filePath || this.getAudioUrl(audioMsg.serverPath);
				console.log("播放音频源:", src); // 调试用
				this.innerAudioContext.src = src;

				// 播放音频
				this.innerAudioContext.play();

				// 初始化波形高度
				if (!this.waveHeights[index]) {
					this.$set(this.waveHeights, index, Array(10).fill(8));
				}
			},

			// 获取波形高度
			getWaveHeight(barIndex, messageIndex) {
				if (!this.waveHeights[messageIndex]) {
					this.$set(this.waveHeights, messageIndex, Array(10).fill(8));
				}

				const waveArray = this.waveHeights[messageIndex];

				if (this.messages[messageIndex].isPlaying) {
					return waveArray[barIndex];
				}
				return 8;
			},

			// 更新波形高度
			updateWaveHeight(index) {
				if (!this.waveHeights[index]) {
					this.$set(this.waveHeights, index, Array(10).fill(8));
				}

				this.waveHeights[index] = this.waveHeights[index].map((height, idx) => {
					if (Math.random() > 0.7) {
						return Math.floor(Math.random() * 15) + 8;
					}
					return height;
				});

				this.$set(this.waveHeights, index, [...this.waveHeights[index]]);
			},

			toggleAudioPlayback(msg, index) {
				this.playAudio(index);

				// 立即更新状态
				this.$set(this.messages, index, {
					...msg,
					isPlaying: !msg.isPlaying
				});
			},

			// 暂停音频
			pauseAudio(index) {
				const audioMsg = this.messages[index];
				if (audioMsg.isPlaying && audioMsg.timer) {
					clearInterval(audioMsg.timer);
					audioMsg.isPlaying = false;
				}
			},

			// 生成音频访问URL
			getAudioUrl(serverPath) {
				if (!serverPath) {
					return '';
				}

				// 如果是相对路径，转换为服务器访问URL
				if (serverPath.startsWith('uploads/audios/')) {
					// 解析路径：uploads/audios/{chatId}/{filename}
					const pathParts = serverPath.split('/');
					if (pathParts.length >= 4) {
						const chatId = pathParts[2]; // chat_xxx
						const filename = pathParts[3]; // audio_xxx.mp3
						return `${this.config.server.httpUrl}/api/files/audio/${chatId}/${filename}`;
					}
					return `${this.config.server.httpUrl}/api/files/path?filePath=${encodeURIComponent(serverPath)}`;
				}

				return serverPath;
			},

			formatTime(seconds) {
				const mins = Math.floor(seconds / 60);
				const secs = Math.floor(seconds % 60);
				return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
			},

			beforeDestroy() {
				if (this.innerAudioContext) {
					this.innerAudioContext.destroy();
				}
				clearInterval(this.audioTimer);
				clearInterval(this.waveAnimationTimer);
				clearInterval(this.timer);
			}
		}
	}
</script>

<style scoped>
	page {
		height: 100vh;
		background-color: #f5f7fa;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
	}

	.chat-container {
		flex: 1;
		/* 关键：填充所有可用空间 */
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
		/* 防止意外滚动 */
	}

	.back-icon {
		padding: 5px 10px;
	}

	.header-title {
		font-size: 18px;
		font-weight: bold;
		margin-left: 10px;
	}

	/* 消息区域 */
	.chat-messages {
		background-color: #f0f2f5;
		flex: 1;
		/* 填充容器剩余空间 */
		padding: 10px;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		margin-bottom: 220rpx;
	}

	/* 添加底部空间容器 */
	.bottom-space {
		height: 0rpx;
	}

	.message-item {
		margin-bottom: 25rpx;
	}

	.message {
		display: flex;
		align-items: flex-start;
		margin-left: -5rpx;
		margin-right: -5rpx;
	}

	.avatar {
		width: 50px;
		height: 50px;
		margin: 0 10px;
		margin-left: 5rpx;
		margin-right: 5rpx;
	}

	.message-content {
		max-width: 80%;
		padding: 5px 8px;
		border-radius: 12px;
		line-height: 1.6;
		font-size: 16px;
		word-break: break-word;
	}

	.user-message {
		justify-content: flex-end;
	}

	.user-message .message-content {
		background: #e6f0ff;
		color: #0d47a1;
		border-top-right-radius: 4px;
	}

	.dog-message {
		justify-content: flex-start;
	}

	.dog-message .message-content {
		background: white;
		color: #333;
		border-top-left-radius: 4px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	/* 思考指示器 */
	.thinking-indicator {
		display: flex;
		align-items: center;
		margin-left: 10rpx;
	}

	.thinking-indicator .dot {
		width: 8rpx;
		height: 8rpx;
		background-color: #666;
		border-radius: 50%;
		margin: 0 3rpx;
		animation: blink 1.4s infinite both;
	}

	.thinking-indicator .dot:nth-child(2) {
		animation-delay: 0.2s;
	}

	.thinking-indicator .dot:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes blink {

		0%,
		100% {
			opacity: 0.2;
		}

		50% {
			opacity: 1;
		}
	}

	/* 思考部分样式 */
	.thinking-section {
		background-color: #f5f7fa;
		border-radius: 12rpx;
		padding: 16rpx;
		margin-bottom: 16rpx;
		border-left: 4rpx solid #5b8ff9;
		font-size: 28rpx;
	}

	.thinking-header {
		display: flex;
		align-items: center;
		margin-bottom: 8rpx;
	}

	.thinking-title {
		margin-left: 8rpx;
		color: #666;
		font-size: 26rpx;
	}

	.thinking-content {
		color: #666;
		font-style: italic;
		line-height: 1.6;
	}

	/* 回答部分样式 */
	.answer-section {
		background-color: #ffffff;
		border-radius: 12rpx;
		padding: 8rpx;
		box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);
	}


	/* 语音消息样式 */
	.audio-message .message-content {
		padding: 15px;
	}

	.audio-content {
		display: flex;
		flex-direction: column;
	}

	.audio-text {
		font-size: 14px;
		color: #666;
		margin-bottom: 10px;
		font-weight: 500;
	}

	.audio-player-container {
		display: flex;
		flex-direction: column;
	}

	.audio-player {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
	}

	.play-button {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 12px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.user-message .play-button {
		background-color: rgba(255, 255, 255, 0.7);
	}

	.wave-container {
		display: flex;
		align-items: flex-end;
		height: 40px;
		flex: 1;
		margin-right: 10px;
	}

	.wave-bar {
		width: 4px;
		margin: 0 1.5px;
		border-radius: 2px;
		transition: height 0.2s ease;
	}

	.dog-message .wave-bar {
		background: linear-gradient(to top, #1a73e8, #0d47a1);
	}

	.user-message .wave-bar {
		background: linear-gradient(to top, #0d47a1, #1a73e8);
	}

	.time-display {
		font-size: 14px;
		color: #666;
		min-width: 90px;
		text-align: right;
		font-weight: 500;
	}

	.user-message .time-display {
		color: #0d47a1;
	}

	.progress-container {
		position: relative;
		height: 6px;
		background-color: #e0e0e0;
		border-radius: 3px;
		overflow: hidden;
		margin-top: 5px;
	}

	.progress-bar {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		border-radius: 3px;
		transition: width 0.3s ease;
	}

	.dog-message .progress-bar {
		background: linear-gradient(to right, #1a73e8, #0d47a1);
	}

	.user-message .progress-bar {
		background: linear-gradient(to right, #0d47a1, #1a73e8);
	}

	.transcript-container {
		margin-top: 12px;
		padding-top: 12px;
		border-top: 1px dashed #e0e0e0;
	}

	.transcript-toggle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #666;
		font-size: 13px;
		padding: 5px 0;
	}

	.transcript-content {
		margin-top: 8px;
		padding: 8px;
		background-color: #f9f9f9;
		border-radius: 8px;
		font-size: 14px;
		color: #444;
	}

	.status-text {
		font-size: 13px;
		color: #666;
		font-style: italic;
	}

	.streaming-indicator {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 8px;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: #1a73e8;
		margin: 0 3px;
		animation: pulse 1.5s infinite;
	}

	.dot:nth-child(2) {
		animation-delay: 0.5s;
	}

	.dot:nth-child(3) {
		animation-delay: 1s;
	}

	@keyframes pulse {

		0%,
		100% {
			opacity: 0.3;
			transform: scale(0.8);
		}

		50% {
			opacity: 1;
			transform: scale(1.1);
		}
	}

	/* 图片容器 */
	.image-container {
		position: relative;
		overflow: hidden;
		border-radius: 8px;
		background-color: #f0f0f0;
		/* 加载时的背景色 */
	}

	/* 模糊图片样式 */
	.blur-image {
		filter: blur(10px);
		transform: scale(1.1);
		/* 轻微放大以覆盖边缘 */
	}

	/* 平滑过渡效果 */
	.chat-image {
		transition: opacity 0.5s ease;
		width: 100%;
		border-radius: 8px;
	}

	/* 底部区域 */
	.bottom-section {
		background-color: #f0f2f5;
		position: fixed;
		bottom: 0rpx;
		left: 5rpx;
		right: 10rpx;
		z-index: 999;
		padding: 10rpx 20rpx;
	}

	/* 键盘弹出时的底部区域调整 */
	.bottom-section.keyboard-show {
		bottom: 0;
		padding-bottom: env(safe-area-inset-bottom);
		/* 兼容全面屏设备 */
	}

	.model-selector {
		display: flex;
		align-items: center;
		margin-bottom: 15rpx;
		padding-left: 10rpx;
	}

	.model-item,
	.network-item {
		display: flex;
		align-items: center;
		margin-right: 20rpx;
		padding: 8rpx 12rpx;
		border-radius: 15rpx;
		transition: all 0.2s;
	}

	.model-item.active,
	.network-item.active {
		background-color: rgba(26, 115, 232, 0.1);
	}

	.model-icon {
		font-size: 36rpx;
		color: #007AFF;
		margin-right: 8rpx;
	}

	.model-text {
		font-size: 36rpx;
		color: #007AFF;
	}

	.network-icon {
		font-size: 36rpx;
		margin-right: 8rpx;
	}

	.network-text {
		font-size: 36rpx;
		color: #333;
	}

	.model-item.active .model-text,
	.network-item.active .network-text {
		color: #007AFF;
		font-weight: 500;
	}

	/* 输入框容器 */
	.input-container {
		margin-bottom: 30rpx;
		display: flex;
		align-items: center;
		background-color: #ffffff;
		border-radius: 50rpx;
		padding: 15rpx 30rpx;
		box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
		height: 120rpx;
	}

	.input-container.voice-mode.recording {
		background-color: #007AFF;
	}

	/* 语音输入区域 */
	.voice-input-area {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 30rpx 0;
	}

	.voice-btn {
		width: 60rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 10rpx;
	}

	.voice-icon {
		width: 60rpx;
		height: 60rpx;
	}

	.voice-placeholder {
		flex: 1;
		text-align: center;
		color: #999;
		font-size: 16px;
		padding: 10px;
		border-radius: 20px;
		transition: background-color 0.2s;
		user-select: none;
	}

	.voice-placeholder:active {
		background-color: rgba(0, 122, 255, 0.1);
	}

	.input-container.recording .voice-placeholder {
		color: #ffffff;
	}

	/* 文字输入区域 */
	.text-input-area {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 30rpx 0;
	}

	.message-input {
		flex: 1;
		font-size: 36rpx;
		color: #333;
		background-color: transparent;
		border: none;
		outline: none;
		padding: 0 10rpx;
	}

	.add-btn {
		width: 35rpx;
		height: 35rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 10rpx;
	}

	.add-icon {
		font-size: 60rpx;
		color: #666;
		font-weight: bold;
	}

	.send-btn {
		width: 60rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 10rpx;
	}

	.send-icon {
		width: 60rpx;
		height: 60rpx;
	}

	/* 附件选择弹窗 */
	.attachment-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: flex-end;
		z-index: 1000;
	}

	.attachment-content {
		width: 100%;
		background-color: #ffffff;
		border-radius: 20rpx 20rpx 0 0;
		padding: 30rpx;
	}

	.attachment-item {
		padding: 30rpx 0;
		border-bottom: 1rpx solid #f0f0f0;
		text-align: center;
	}

	.attachment-item:last-child {
		border-bottom: none;
		color: #ff3b30;
	}

	.attachment-text {
		font-size: 32rpx;
		color: #333;
	}

	/* 波形可视化样式 */
	.wave-visualization {
		position: fixed;
		bottom: 200rpx;
		left: 30rpx;
		right: 40rpx;
		z-index: 1001;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-end;
		height: 80rpx;
		background-color: rgba(0, 122, 255, 0.1);
		border-radius: 25rpx;
		padding: 15rpx 20rpx;
		z-index: 999;
	}

	.wave-item {
		width: 8rpx;
		border-radius: 4rpx;
		transition: height 0.1s ease;
		min-height: 15rpx;
	}

	/* 录音状态提示 */
	.recording-status {
		position: fixed;
		bottom: 300rpx;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgba(0, 0, 0, 0.7);
		color: white;
		padding: 20rpx 40rpx;
		border-radius: 30rpx;
		font-size: 28rpx;
		z-index: 1002;
		transition: all 0.3s ease;
	}

	.recording-status.cancel-mode {
		background-color: rgba(255, 59, 48, 0.8);
	}
</style>