<template>
	<view class="login-page">
		<!-- 顶部导航栏 -->
		<view class="header" :style="{ paddingTop: 88 + 'px' }">
			
		</view>
		<!-- 顶部机器人图标（居中） -->
		<image src="/static/dog_avatar.png" class="robot-img" mode="widthFix" />

		<!-- 主标题（居中） -->
		<view class="title">瓷语，伴你同行</view>

		<!-- 输入框容器 -->
		<view class="input-group">
			<view class="input-item">
				<image src="/static/icon-user.png" class="input-icon" />
				<input type="text" placeholder="账号" class="input" v-model="form.username"
					placeholder-style="color: #999" />
			</view>

			<view class="input-item">
				<image src="/static/icon-lock.png" class="input-icon" />
				<input :type="showPassword ? 'text' : 'password'" placeholder="密码" class="input" v-model="form.password"
					placeholder-style="color: #999" />
				<image :src="showPassword ? '/static/icon-eye-open.png' : '/static/icon-eye-close.png'" class="eye-icon"
					@click="togglePasswordVisibility" />
			</view>
		</view>

		<view class="forget-btn" @click="goForgetPassword">忘记密码？</view>

		<view class="login-btn" @click="handleLogin">登录</view>

		<view class="divider">
			<view class="divider-line"></view>
			<view class="divider-text">一键登录</view>
			<view class="divider-line"></view>
		</view>

		<!-- 微信登录按钮（紧跟在一键登录下方） -->
		<view class="wechat-btn" @click="handleWechatLogin">
			<image src="/static/icon-wechat.png" class="wechat-icon" />
		</view>

		<!-- 底部草地背景 -->
		<view class="bottom-container">
			<image src="/static/images/background_1.png" class="grass-bg" mode="widthFix" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					username: 'admin',
					password: '123456'
				},
				showPassword: true
			};
		},
		methods: {
			togglePasswordVisibility() {
				this.showPassword = !this.showPassword;
			},

			goForgetPassword() {
				uni.navigateTo({
					url: '/pages/forget-password/forget-password'
				});
			},

			/**
			 * 账号密码登录
			 */
			handleLogin() {
				// 表单验证
				if (!this.form.username.trim()) {
					uni.showToast({
						title: '请输入账号',
						icon: 'none'
					});
					return;
				}
				if (!this.form.password.trim()) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return;
				}

				// 构造登录请求体
				const loginBody = {
					username: this.form.username,
					password: this.form.password
				};

				// 跳转到首页
				uni.navigateTo({
					url: '/pages/index_ai'
				});

				// 发送登录请求
				// this.sendLoginRequest(loginBody);

				uni.showToast({
					title: '登录成功',
					icon: 'none'
				});
			},

			/**
			 * 微信一键登录
			 */
			handleWechatLogin() {
				// 获取微信登录凭证
				uni.login({
					provider: 'weixin',
					success: (res) => {
						console.log(res.code)
						if (res.code) {
							// 构造登录请求体
							const loginBody = {
								code: res.code
							};

							// 发送登录请求
							// this.sendLoginRequest(loginBody);

							// 跳转到首页
							uni.navigateTo({
								url: '/pages/index'
							});
							uni.showToast({
								title: '登录成功',
								icon: 'none'
							});
						} else {
							uni.showToast({
								title: '获取微信登录凭证失败',
								icon: 'none'
							});
						}
					},
					fail: () => {
						uni.showToast({
							title: '微信登录失败',
							icon: 'none'
						});
					}
				});
			},

			/**
			 * 发送登录请求到后端
			 * @param {Object} loginBody 登录数据
			 */
			sendLoginRequest(loginBody) {
				uni.showLoading({
					title: '登录中...',
					mask: true
				});

				uni.request({
					url: 'http://localhost:8080/wechat/login', // 后端统一登录接口
					method: 'POST',
					data: loginBody,
					header: {
						'Content-Type': 'application/json'
					},
					success: (res) => {
						uni.hideLoading();

						if (res.statusCode === 200) {
							const response = res.data;

							if (response.code === 200) {
								// 登录成功处理
								const token = response.data; // 获取token
								console.log(token)
								uni.setStorageSync('token', token);

								// 跳转到首页
								uni.navigateTo({
									url: '/pages/index'
								});
							} else {
								uni.showToast({
									title: response.msg || '登录失败',
									icon: 'none',
									duration: 3000
								});
							}
						} else {
							uni.showToast({
								title: `请求错误: ${res.statusCode}`,
								icon: 'none',
								duration: 3000
							});
						}
					},
					fail: (err) => {
						uni.hideLoading();
						uni.showToast({
							title: '网络错误，请重试',
							icon: 'none',
							duration: 3000
						});
						console.error('登录请求失败:', err);
					}
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.login-page {
		background: linear-gradient(180deg, #A1C6B7 5%, #ffffff 95%);
		box-sizing: border-box;
		min-height: 100vh;
		padding-top: 88rpx;
		position: relative;
	}

	/* 机器人图标（居中、自适应大小） */
	.robot-img {
		width: 220rpx;
		height: auto;
		display: block;
		margin: 0 auto 60rpx;
	}

	/* 主标题（加粗、居中） */
	.title {
		font-size: 36rpx;
		font-weight: 600;
		color: #333;
		text-align: center;
		margin-bottom: 80rpx;
	}

	/* 输入框容器（上下间距） */
	.input-group {
		margin-bottom: 40rpx;
	}

	/* 输入项（flex布局，图标+输入框+眼睛） */
	.input-item {
		width: 550rpx;
		display: flex;
		align-items: center;
		background: #f0f5ff;
		border-radius: 80rpx;
		padding: 18rpx 25rpx;
		margin: 0 auto 40rpx;
		/* 水平居中，底部保留间距 */
	}

	/* 输入框图标（用户/锁） */
	.input-icon {
		width: 50rpx;
		height: 50rpx;
		margin-right: 20rpx;
	}

	/* 输入框（占满剩余宽度） */
	.input {
		flex: 1;
		font-size: 28rpx;
		color: #333;
		background: transparent;
		border: none;
		outline: none;
		height: 50rpx;
	}

	/* 密码眼睛图标（右对齐） */
	.eye-icon {
		width: 56rpx;
		height: 56rpx;
		cursor: pointer;
	}

	/* 忘记密码（右对齐、浅灰） */
	.forget-btn {
		width: 650rpx;
		font-size: 24rpx;
		color: #666;
		text-align: right;
		margin-bottom: 60rpx;
		cursor: pointer;
	}

	/* 登录按钮（蓝色、圆角、阴影） */
	.login-btn {
		width: 600rpx;
		background: #1890ff;
		/* 按钮颜色（设计图中的蓝色） */
		border-radius: 80rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 32rpx;
		color: #fff;
		font-weight: 500;
		margin-bottom: 20rpx;
		cursor: pointer;
		box-shadow: 0 4rpx 12rpx rgba(24, 144, 255, 0.3);
		margin: 0 auto 40rpx;
		/* 轻微阴影 */
	}

	/* 一键登录分隔线（横线+文字） */
	.divider {
		display: flex;
		align-items: center;
		margin-bottom: 40rpx;
	}

	/* 分隔线（左右横线） */
	.divider-line {
		flex: 1;
		height: 1rpx;
		background: #e8e8e8;
	}

	/* 分隔线文字（中间灰色） */
	.divider-text {
		font-size: 24rpx;
		color: #999;
		margin: 0 20rpx;
	}

	/* 微信登录按钮（紧跟在一键登录下方） */
	.wechat-btn {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 60rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
		cursor: pointer;
		position: relative;
		z-index: 20;
	}

	/* 底部草地背景容器 */
	.bottom-container {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 1;
	}

	/* 底部草地背景图片 */
	.grass-bg {
		width: 100%;
		height: auto;
		display: block;
	}

	/* 微信图标（自适应大小） */
	.wechat-icon {
		width: 60rpx;
		height: 60rpx;
	}
</style>