<template>
	<view class="container">
		<!-- 顶部导航栏 -->
		<view class="header" :style="{ paddingTop: 40 + 'px' }">
			<view class="header-content">
				<view class="header-title">动作表演</view>
			</view>
		</view>
		
		<!-- 连接状态栏 - 固定在顶部 -->
		<view class="status-card-fixed" :style="{ top: 96 + 'px' }">
			<text class="status-text" :class="{ 
				      'status-success': isConnected, 
				      'status-error': connectionError, 
				      'status-loading': isConnecting 
				    }">
				{{
				      isConnected ? '已连接机械狗' : 
				      (connectionError ? `${connectionError}` : 
				      (isConnecting ? '连接中...' : '未连接机械狗')) 
				    }}
			</text>
			<button v-if="!isConnected && !isConnecting" class="connect-btn" @tap="initDogConnection">
				<text class="btn-text">连接机械狗</text>
			</button>
			<button v-if="isConnected" class="disconnect-btn" @tap="closeConnection">
				<text class="btn-text">断开连接</text>
			</button>
		</view>
		
		<view class="page-container" :style="{ paddingTop: (statusBarHeight + 130) + 'px' }">
			<!-- 动作模块 -->
			<view class="module-card">
				<text class="module-title">机械狗动作列表</text>
		
				<view class="action-item" v-for="(action, idx) in actionList" :key="idx">
					<view class="action-info">
						<text class="action-name">{{ action.label }}</text>
						<text class="action-desc">{{ action.desc }}</text>
					</view>
		
					<view class="action-control">
						<view v-if="currentAction === action.name" class="status-tag running">
							<text class="tag-text">正在执行</text>
						</view>
						<button v-else class="action-btn" :disabled="!isConnected || isActionRunning"
							@tap="addActionToQueue(action.name)">
							<text class="btn-text">做动作</text>
						</button>
					</view>
				</view>
		
				<view class="emergency-btn" @tap="emergencyStop" :class="{ disabled: !isConnected }">
					<text class="btn-text">紧急停止按钮</text>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import RobotDogController from '@/api/dog_controller.js';

	export default {
		data() {
			return {
				statusBarHeight: 32,
				dogController: null,
				isConnected: false, // 初始状态为未连接
				isConnecting: false, // 连接中状态
				actionQueue: [],
				currentAction: null,
				isActionRunning: false,
				connectionError: null,
				actionList: [{
						name: 'twist_body',
						label: '扭身体',
						desc: '站立姿态下，身体左右扭转（需保持平衡）'
					},
					{
						name: 'wave',
						label: '招手',
						desc: '趴下姿态下，前爪抬起摆动（友好互动）'
					},
					{
						name: 'moonwalk',
						label: '太空步',
						desc: '站立姿态下，向后滑动（趣味动作）'
					},
					{
						name: 'flip_over',
						label: '翻身',
						desc: '趴下姿态下，侧翻（测试平衡能力）'
					},
					{
						name: 'backflip',
						label: '后空翻',
						desc: '趴下姿态下，向后翻转180度（高难度动作）'
					},
					{
						name: 'front_jump',
						label: '向前跳',
						desc: '趴下姿态下，向前跳跃（短距离移动）'
					},
					{
						name: 'twist_jump',
						label: '扭身跳',
						desc: '站立姿态下，扭身并跳跃（旋转动作）'
					}
				]
			};
		},

		onLoad() {
			// 获取系统状态栏高度
			const systemInfo = uni.getSystemInfoSync();
			this.statusBarHeight = systemInfo.statusBarHeight-15 || 20;
		},

		beforeDestroy() {
			if (this.dogController) {
				this.dogController.close();
			}
		},

		methods: {
			async initDogConnection() {
				// 重置状态
				this.isConnecting = true;
				this.isConnected = false;
				this.connectionError = null;

				try {
					this.dogController = new RobotDogController();
					await this.dogController.init();
					this.isConnected = true;
					uni.showToast({
						title: '连接机械狗成功',
						icon: 'success'
					});
				} catch (err) {
					// 根据错误类型提示用户
					let errorMsg = '连接失败:';
					if (err.message.includes('端口绑定失败')) {
						errorMsg += '本地端口45000被占用';
					} else if (err.message.includes('初始化超时')) {
						errorMsg += '未连接WIFI或机械狗未开机';
					} else if (err.message.includes('设备不支持')) {
						errorMsg += '当前设备不支持UDP';
					} else {
						errorMsg += err.message;
					}
					uni.showToast({
						title: errorMsg,
						icon: 'none'
					});
					this.connectionError = errorMsg;
					console.error('机械狗连接失败:', err);
				} finally {
					this.isConnecting = false;
				}
			},

			closeConnection() {
				if (this.dogController) {
					this.dogController.close();
					this.dogController = null;
				}
				this.isConnected = false;
				this.connectionError = null;
				uni.showToast({
					title: '已断开连接',
					icon: 'none'
				});
			},

			addActionToQueue(actionName) {
				if (!this.isConnected) {
					uni.showToast({
						title: '请先连接机械狗',
						icon: 'none'
					});
					return;
				}
				if (this.isActionRunning) {
					uni.showToast({
						title: '当前有动作正在执行',
						icon: 'none'
					});
					return;
				}
				if (!this.actionQueue.includes(actionName)) {
					this.actionQueue.push(actionName);
					this.processActionQueue();
				}
			},

			async processActionQueue() {
				if (this.actionQueue.length === 0 || this.isActionRunning) return;

				this.currentAction = this.actionQueue.shift();
				this.isActionRunning = true;
				console.log(`[动作队列] 开始执行: ${this.currentAction}`);

				try {
					await this.dogController.perform(this.currentAction);
					uni.showToast({
						title: `${this.currentAction} 执行成功`,
						icon: 'success'
					});
				} catch (err) {
					uni.showToast({
						title: `${this.currentAction} 执行失败: ${err.message}`,
						icon: 'none'
					});
					console.error(`[动作执行失败] ${this.currentAction}:`, err);
				} finally {
					this.currentAction = null;
					this.isActionRunning = false;
					this.processActionQueue();
				}
			},

			emergencyStop() {
				if (!this.isConnected || !this.dogController) return;
				try {
					this.dogController.emergencyStop();
					this.actionQueue = [];
					this.currentAction = null;
					this.isActionRunning = false;
					uni.showToast({
						title: '已紧急停止所有动作',
						icon: 'none'
					});
				} catch (err) {
					uni.showToast({
						title: `紧急停止失败: ${err.message}`,
						icon: 'none'
					});
					console.error('[紧急停止失败]', err);
				}
			},

			gotoChatPage() {
				uni.navigateTo({
					url: '/pages/chat/chat'
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.container {
		min-height: 90vh;
		background: linear-gradient(180deg, #E8F4FD 0%, #F5F5F5 100%);
		padding-bottom: 30rpx;
	}
	
	/* 固定顶部导航栏 */
	.header {
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  background: linear-gradient(180deg, #E8F4FD 100%, #F5F5F5 0%);
	  z-index: 100;
	}
	
	.header-content {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 20rpx 30rpx;
	  height: 88rpx;
	}
	.header-title {
	  font-size: 36rpx;
	  font-weight: 600;
	  color: #333;
	}
	
	/* 固定连接状态卡片 */
	.status-card-fixed {
		position: fixed;
		width: 100%;
		padding: 20rpx 30rpx;
		background-color: linear-gradient(180deg, #E8F4FD 100%, #F5F5F5 0%);
		border-radius: 10rpx;
		box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.1);
		z-index: 90;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	/* 页面基础样式 */
	.page-container {
		padding: 30rpx;
		background-color: linear-gradient(180deg, #E8F4FD 100%, #F5F5F5 0%);
	}

	.status-card {
		margin-bottom: 10rpx;
		padding: 15rpx 10rpx;
		background-color: linear-gradient(180deg, #E8F4FD 100%, #F5F5F5 0%);
		border-radius: 30rpx;
		box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.05);
	}

	.status-text {
		font-size: 36rpx;
		line-height: 1.6;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.status-loading {
		color: #999;
		font-weight: 400;
	}

	.status-success {
		color: #52c41a;
		font-weight: 500;
	}

	.status-error {
		color: #ff4d4f;
		font-weight: 500;
	}

	.status-bar {
		padding: 20rpx 0;
		margin-bottom: 20rpx;

		.status-text {
			font-size: 28rpx;
			color: #666;
		}

		.status-text.connected {
			color: #52c41a;
			font-weight: 500;
		}
	}

	.module-card {
		background-color: linear-gradient(180deg, #E8F4FD 100%, #F5F5F5 0%);
		border-radius: 30rpx;
		padding: 30rpx;
		margin-bottom: 30rpx;
		box-shadow: 0 4rpx 15rpx rgba(0, 0, 0, 0.05);
	}

	.module-title {
		font-size: 36rpx;
		font-weight: bold;
		color: #333;
		margin-bottom: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.action-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 25rpx 0;
		border-bottom: 1rpx solid #eee;

		&:last-child {
			border-bottom: none;
		}
	}

	.action-info {
		flex: 1;
		margin-right: 20rpx;

		.action-name {
			font-size: 32rpx;
			color: #333;
			font-weight: 500;
			margin-bottom: 10rpx;
		}

		.action-desc {
			font-size: 26rpx;
			color: #999;
			line-height: 1.4;
		}
	}

	.action-control {
		display: flex;
		align-items: center;
	}

	.status-tag {
		padding: 12rpx 25rpx;
		border-radius: 8rpx;
		font-size: 26rpx;
	}

	.status-tag.running {
		background-color: #fff7e6;
		color: #fa8c16;
		border: 1rpx solid #ffe6cc;
	}

	.action-btn {
		padding: 15rpx 40rpx;
		background-color: #1890ff;
		color: #fff;
		border-radius: 30rpx;
		font-size: 28rpx;
	}

	.action-btn[disabled] {
		background-color: #e5e5e5;
		color: #999;
		cursor: not-allowed;
	}

	.emergency-btn {
		background-color: #ff4d4f;
		color: #fff;
		padding: 25rpx 0;
		border-radius: 30rpx;
		text-align: center;
		margin-top: 30rpx;
		box-shadow: 0 4rpx 15rpx rgba(255, 77, 79, 0.3);
		cursor: pointer;
	}

	.emergency-btn.disabled {
		background-color: #e5e5e5;
		color: #999;
		box-shadow: none;
		cursor: not-allowed;
	}

	.emergency-btn .btn-text {
		font-size: 32rpx;
		font-weight: 500;
	}

	.chat-desc {
		font-size: 26rpx;
		color: #999;
		line-height: 1.6;
		margin-bottom: 30rpx;
	}

	.chat-btn {
		background: linear-gradient(90deg, #1890ff 0%, #52c41a 100%);
		color: #fff;
		padding: 25rpx 0;
		border-radius: 30rpx;
		text-align: center;
		box-shadow: 0 4rpx 15rpx rgba(24, 144, 255, 0.3);
		cursor: pointer;

		.btn-text {
			font-size: 32rpx;
			font-weight: 500;
		}
	}

	/* 新增连接按钮样式 */
	.status-card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 30rpx !important;
	}

	.connect-btn,
	.disconnect-btn {
		padding: 10rpx 25rpx;
		border-radius: 30rpx;
		font-size: 28rpx;
		margin-left: 20rpx;
		white-space: nowrap;
	}

	.connect-btn {
		background-color: #1890ff;
		color: #fff;
	}

	.disconnect-btn {
		background-color: #ff4d4f;
		color: #fff;
	}
</style>