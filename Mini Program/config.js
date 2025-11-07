// 应用全局配置
module.exports = {
	
  baseUrl: 'http://localhost:8080',

  // 服务器地址配置
  server: {
    host: '192.168.5.43',
    // 端口配置
    port: 8080,
    // HTTP服务器地址
    get httpUrl() {
      return `http://${this.host}:${this.port}`;
    },
    // WebSocket服务器地址
    get wsUrl() {
      return `ws://${this.host}:${this.port}`;
    }
  }
}
