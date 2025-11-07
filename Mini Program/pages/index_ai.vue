<template>
	<view class="page-container" :style="{ paddingBottom: keyboardHeight + 'px' }">
		<!-- 侧边栏遮罩 -->
		<view class="sidebar-mask" :class="{ 'show': showSidebar }" @tap="closeSidebar"></view>

		<!-- 侧边栏 -->
		<view class="sidebar" :class="{ 'show': showSidebar }">
			<!-- 侧边栏头部 -->
			<view class="sidebar-header">
				<view class="back-btn" @tap="closeSidebar">
					<text class="back-icon">‹</text>
				</view>
				<view class="sidebar-title">历史会话</view>
			</view>

			<!-- 聊天记录列表 -->
			<scroll-view class="chat-list" scroll-y>
				<!-- 今天 -->
				<view class="time-section">
					<view class="time-label">今天</view>
					<view class="chat-item" @tap="openChat('today1')">
						<text class="chat-title">耀州瓷的产品特征是什么？</text>
					</view>
				</view>

				<!-- 本周 -->
				<view class="time-section">
					<view class="time-label">本周</view>
					<view class="chat-item" @tap="openChat('week1')">
						<text class="chat-title">陶瓷烧制过程中的关键步骤</text>
					</view>
				</view>

				<!-- 本年 -->
				<view class="time-section">
					<view class="time-label">本月</view>
					<view class="chat-item" @tap="openChat('month1')">
						<text class="chat-title">现代陶瓷与传统陶瓷的区别</text>
					</view>
					<view class="chat-item" @tap="openChat('month2')">
						<text class="chat-title">陶瓷的防水性能如何评估</text>
					</view>
					<view class="chat-item" @tap="openChat('month3')">
						<text class="chat-title">如何避免陶瓷制品的开裂问题</text>
					</view>
					<view class="chat-item" @tap="openChat('month4')">
						<text class="chat-title">陶瓷艺术品的收藏价值如何判断</text>
					</view>
					<view class="chat-item" @tap="openChat('month5')">
						<text class="chat-title">陶瓷表面釉料的种类有哪些</text>
					</view>
					<view class="chat-item" @tap="openChat('month6')">
						<text class="chat-title">什么是陶瓷的抗热性能，如何测试</text>
					</view>
					<view class="chat-item" @tap="openChat('month7')">
						<text class="chat-title">陶瓷制作中如何保证质量一致性</text>
					</view>

				</view>
			</scroll-view>
		</view>

		<view class="home-page">
			<!-- 顶部导航栏 -->
			<view class="top-bar">
				<view class="menu-btn" @tap="openSidebar">
					<view class="hamburger">
						<view class="line"></view>
						<view class="line"></view>
						<view class="line"></view>
					</view>
				</view>
			</view>

			<!-- 2. 品牌标题 -->
			<view class="brand-title">
				<image class="brand-icon" src="/static/dog_avatar.png" mode="aspectFit"></image>
			</view>

			<!-- 3. AI 智选 · 电商模块 -->
			<view class="ai-commerce">
				<view class="commerce-header">
					<text class="header-title">瓷语 智选 · 电商</text>
					<view class="ai-badge" @tap="goSmartPick">
						<text class="spark">✦</text> 智能挑选
					</view>
				</view>

				<!-- 快捷芯片：AI 功能挂钩 -->
				<view class="quick-chips">
					<view class="chip" @tap="goImageSearch"><text>以图找陶</text></view>
					<view class="chip" @tap="goVoiceSearch"><text>语音搜陶</text></view>
					<view class="chip" @tap="goSmartPick"><text>今日推荐</text></view>
				</view>

				<!-- 主入口宫格 -->
				<view class="entry-grid">
					<view class="entry-card" v-for="(item, idx) in commerceNav" :key="idx"
						:class="{ featured: item.featured }" @tap="openEntry(item)">
						<image class="entry-icon" :src="item.icon" mode="aspectFit" />
						<text class="entry-text">{{ item.title }}</text>
						<view v-if="item.badge" class="entry-badge">{{ item.badge }}</view>
					</view>
				</view>
			</view>

			<!-- 底部输入区域 -->
			<view class="bottom-section">
				<!-- 模型选择 -->
				<view class="model-selector">
					<view class="model-item" :class="{ active: isLongThinkActive }" @tap="toggleLongThink">
						<text class="model-icon">✦</text>
						<text class="model-text">深度思考</text>
					</view>
					<view class="network-item" :class="{ active: isWebSearchActive }" @tap="toggleWebSearch">
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
						<view class="voice-placeholder" @click="startRecording" @touchcancel="cancelRecording">
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
						<input class="message-input" placeholder="有什么问题尽管问我" v-model="inputValue"
							@confirm="sendMessage" />
						<view class="add-btn" @tap="showAddOptions">
							<text class="add-icon">+</text>
						</view>
						<view class="send-btn" @tap="sendMessage" v-if="inputValue.trim()">
							<image class="send-icon" src="/static/send.png" mode="aspectFit"></image>
						</view>
					</view>
				</view>
			</view>

			<!-- 波形可视化 - 录音时显示在底部 -->
			<view v-if="isRecording" class="wave-visualization">
				<view class="wave-item" v-for="(item, index) in waveData" :key="index"
					:style="{ height: item + 'px', backgroundColor: getWaveColor(index) }">
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commerceNav: [{
						title: '购物中心',
						icon: '/static/icons/shop.png',
						path: '/pages/mall/shop',
						featured: true,
						badge: '热'
					},
					{
						title: '分类',
						icon: '/static/icons/category.png',
						path: '/pages/mall/category'
					},
					{
						title: '新品',
						icon: '/static/icons/new.png',
						path: '/pages/mall/new',
						badge: 'NEW'
					},
					{
						title: '热销榜',
						icon: '/static/icons/hot.png',
						path: '/pages/mall/hot'
					},
					{
						title: '活动',
						icon: '/static/icons/event.png',
						path: '/pages/mall/events'
					},
					{
						title: '个人中心',
						icon: '/static/icons/mine.png',
						path: '/pages/mall/all'
					},
				],
				inputValue: "",
				isLongThinkActive: true,
				isWebSearchActive: false,
				recorderManager: null, // 录音管理器
				isRecording: false, // 是否正在录音
				audioTempFilePath: '', // 临时存储录音文件路径
				audioDuration: 0, // 录音时长
				keyboardHeight: 0,
				currentDate: "",
				isVoiceMode: false,
				showAttachmentModal: false,
				showSidebar: false,
				waveData: Array(50).fill(40),
				waveAnimationTimer: null,
			};
		},
		mounted() {
			uni.onKeyboardHeightChange(res => {
				console.log(res)
				this.keyboardHeight = res.height;
			});

			// 初始化日期
			this.updateDate();

			this.dateInterval = setInterval(() => {
				this.updateDate();
			}, 24 * 60 * 60 * 1000); // 每天更新一次
		},
		created() {
			// 初始化录音管理器
			this.recorderManager = uni.getRecorderManager();

			// 监听录音停止事件
			this.recorderManager.onStop((res) => {
				console.log('recorder stop', res);
				this.isRecording = false;

				if (res.duration < 1000) {
					uni.showToast({
						title: '录音时间太短',
						icon: 'none'
					});
					return;
				}

				// 保存录音文件信息
				this.audioTempFilePath = res.tempFilePath;
				this.audioDuration = Math.floor(res.duration / 1000);
				this.sendAudioMessage()
			});

			// 监听录音错误事件
			this.recorderManager.onError((err) => {
				console.error('录音失败:', err);
				this.isRecording = false;
				uni.showToast({
					title: '录音失败，请重试',
					icon: 'none'
				});
			});
		},
		beforeDestroy() {

			if (this.dateInterval) {
				clearInterval(this.dateInterval);
			}

			clearInterval(this.waveAnimationTimer);
			clearInterval(this.timer);
		},
		methods: {
			openEntry(item) {
				uni.navigateTo({
					url: item.path
				});
			},
			goSmartPick() {
				uni.navigateTo({
					url: '/pages/mall/smart_pick'
				});
			},
			goImageSearch() {
				uni.navigateTo({
					url: '/pages/mall/image_search'
				});
			},
			

			updateDate() {
				const now = new Date();
				this.currentDate =
					`${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getDate().toString().padStart(2, '0')}`;
			},
			toggleLongThink() {
				this.isLongThinkActive = !this.isLongThinkActive;
			},
			toggleWebSearch() {
				this.isWebSearchActive = !this.isWebSearchActive;
			},
			toggleInputMode() {
				this.isVoiceMode = !this.isVoiceMode;
			},
			// 开始录音
			startRecording(e) {

				console.log("start:", this.isRecording)

				if (this.isRecording) {
					clearInterval(this.timer);
					clearInterval(this.waveAnimationTimer);
					this.recorderManager.stop();
					this.isRecording = false;
					return;
				}

				this.isRecording = true;
				this.recordingTime = 0;

				// 开始录音计时器
				this.timer = setInterval(() => {
					this.recordingTime++;
				}, 1000);

				// 开始波形动画
				this.startWaveAnimation();

				// 开始实际录音
				this.recorderManager.start({
					duration: 60000,
					sampleRate: 44100,
					numberOfChannels: 1,
					encodeBitRate: 192000,
					format: 'mp3'
				});
			},

			stopRecording() {
				console.log(this.isRecording);
				if (!this.isRecording) return;

				clearInterval(this.timer);
				clearInterval(this.waveAnimationTimer);

				// 立即停止录音
				this.recorderManager.stop();

				// 重置状态
				this.isRecording = false;
			},

			cancelRecording() {
				if (this.isRecording) {
					console.log("取消录音");
					this.isRecording = false;
					// 停止录音
					this.recorderManager.stop();
				}
			},

			showAddOptions() {
				this.showAttachmentModal = true;
			},
			hideAttachmentModal() {
				this.showAttachmentModal = false;
			},
			selectPhoto() {
				console.log("选择拍照");
				this.hideAttachmentModal();
				// 调用拍照功能
			},
			selectAlbum() {
				console.log("选择本地相册");
				this.hideAttachmentModal();
				// 调用相册选择功能
			},
			selectFile() {
				console.log("从微信聊天记录中选择");
				this.hideAttachmentModal();
				// 调用文件选择功能
			},
			selectDocument() {
				console.log("取消");
				this.hideAttachmentModal();
			},

			// 发送文本消息
			sendMessage() {
				// 文本消息
				const message = {
					type: 'text',
					content: this.inputValue.trim(),
					timestamp: new Date().getTime()
				};

				this.navigateToChat(message);
				this.inputValue = "";
			},

			// 发送语音消息
			sendAudioMessage() {
				// 创建语音消息对象
				const message = {
					type: 'audio',
					filePath: this.audioTempFilePath,
					duration: this.audioDuration,
					timestamp: new Date().getTime()
				};

				this.navigateToChat(message);
				this.audioTempFilePath = '';
				this.audioDuration = 0;
			},

			// 将消息进行编码并跳转
			navigateToChat(message) {
				// 编码消息对象并传递
				const encodedMessage = encodeURIComponent(JSON.stringify(message));
				uni.navigateTo({
					url: `/pages/chat/chat_old?message=${encodedMessage}`
				});
			},

			openSidebar() {
				this.showSidebar = true;
			},
			closeSidebar() {
				this.showSidebar = false;
			},
			openChat(chatId) {
				console.log('打开聊天记录:', chatId);
				uni.navigateTo({
					url: `/pages/chat/chat_previous?chatId=${chatId}`
				});
				this.closeSidebar();
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

		}
	};
</script>

<style scoped>
	.page-container {
		background: linear-gradient(180deg, #A1C6B7 5%, #ffffff 95%);
		position: relative;
		height: 100vh;
		overflow-y: auto;
		box-sizing: border-box;
	}

	/* 页面基础样式 */
	.home-page {
		min-height: 100vh;
		background: linear-gradient(180deg, #A1C6B7 5%, #ffffff 95%);
		padding-top: 80rpx;
		padding-bottom: 180rpx;
		/* 底部留出足够空间 */
	}

	/* 导航栏样式 */
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 80rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		box-shadow: 0 2rpx 5rpx rgba(0, 0, 0, 0.1);
		z-index: 999;
	}

	.navbar-right {
		display: flex;
		align-items: center;
	}

	.navbar-icon {
		margin-left: 30rpx;
	}

	.brand-title {
		margin: 150rpx 0 40rpx 0;
		text-align: center;
	}

	.brand-icon {
		width: 180rpx;
		height: 180rpx;
		margin-right: 10rpx;
	}

	.title-text {
		font-size: 80rpx;
		font-weight: bold;
		color: #333;
		letter-spacing: 10rpx;
	}

	.daily-report {
		background-color: #fff;
		border-radius: 25rpx;
		margin: 0 20rpx;
		padding: 30rpx;
		box-shadow: 0 2rpx 5rpx rgba(0, 0, 0, 0.1);
		margin-bottom: 30rpx;
	}

	.report-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.header-title {
		font-size: 42rpx;
		font-weight: bold;
		color: #333;
	}

	.date-wrap {
		display: flex;
		align-items: center;
	}

	.date-text {
		font-size: 36rpx;
		color: #8f8f94;
		margin-right: 5rpx;
	}

	.date-icon {
		margin-top: 3rpx;
	}

	.report-list {
		margin-top: 20rpx;
	}

	.list-item {
		display: flex;
		align-items: center;
		padding: 30rpx 0;
		border-bottom: 1rpx solid #eee;
	}

	.list-item:last-child {
		border-bottom: none;
	}

	.item-number {
		width: 36rpx;
		height: 36rpx;
		border-radius: 50%;
		background-color: #e0e0e0;
		color: #8f8f94;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20rpx;
	}

	.item-content {
		font-size: 32rpx;
		color: #333;
		flex: 1;
		line-height: 40rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* 底部区域 */
	.bottom-section {
		position: fixed;
		bottom: 20rpx;
		left: 20rpx;
		right: 20rpx;
		z-index: 999;
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
		font-size: 36rpx;
		color: #999;
		padding: 10rpx;
		border-radius: 20rpx;
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

	/* 顶部导航栏 */
	.top-bar {
		position: fixed;
		top: 150;
		left: 0;
		right: 0;
		height: 150rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		z-index: 998;
	}

	.menu-btn {
		width: 60rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hamburger {
		width: 40rpx;
		height: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.line {
		width: 100%;
		height: 4rpx;
		background-color: #333;
		border-radius: 2rpx;
	}

	/* 侧边栏遮罩 */
	.sidebar-mask {
		position: fixed;
		top: 100;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 999;
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s ease;
	}

	.sidebar-mask.show {
		opacity: 1;
		visibility: visible;
	}

	/* 侧边栏 */
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 600rpx;
		height: 100vh;
		background-color: #fff;
		z-index: 1000;
		transform: translateX(-100%);
		transition: transform 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.sidebar.show {
		transform: translateX(0);
	}

	.sidebar-header {
		margin-top: 100rpx;
		height: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 30rpx;
		border-bottom: 1rpx solid #f0f0f0;
		position: relative;
	}

	.back-btn {
		position: absolute;
		left: 30rpx;
		width: 60rpx;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sidebar-title {
		font-size: 36rpx;
		font-weight: bold;
		color: #333;
		text-align: center;
	}

	.back-icon {
		font-size: 50rpx;
		color: #333;
		font-weight: bold;
	}

	.more-icon {
		font-size: 40rpx;
		color: #333;
		font-weight: bold;
	}

	/* 聊天记录列表 */
	.chat-list {
		flex: 1;
		padding: 20rpx 0;
	}

	.time-section {
		margin-bottom: 40rpx;
	}

	.time-label {
		font-size: 28rpx;
		color: #999;
		padding: 0 30rpx 20rpx;
	}

	.chat-item {
		padding: 30rpx;
		border-bottom: 1rpx solid #f0f0f0;
		transition: background-color 0.2s;
	}

	.chat-item:active {
		background-color: #f5f5f5;
	}

	.chat-title {
		font-size: 32rpx;
		color: #333;
		line-height: 1.4;
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

	/* === AI 电商模块样式 === */
	.ai-commerce {
		background: linear-gradient(180deg, rgba(106, 90, 224, 0.08), rgba(0, 209, 255, 0.06));
		border-radius: 25rpx;
		margin: 0 20rpx 30rpx;
		padding: 30rpx;
		box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.06);
		backdrop-filter: blur(8px);
	}

	.commerce-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16rpx;
	}

	.ai-commerce .header-title {
		font-size: 42rpx;
		font-weight: 700;
		color: #243B53;
	}

	.ai-badge {
		padding: 10rpx 18rpx;
		border-radius: 999rpx;
		background: linear-gradient(90deg, #6A5AE0, #00D1FF);
		color: #fff;
		font-size: 26rpx;
		display: flex;
		align-items: center;
		gap: 8rpx;
		box-shadow: 0 6rpx 16rpx rgba(0, 209, 255, 0.4);
	}

	.ai-badge .spark {
		font-size: 28rpx
	}

	.quick-chips {
		display: flex;
		gap: 16rpx;
		margin: 18rpx 0 22rpx;
	}

	.chip {
		padding: 14rpx 22rpx;
		border-radius: 999rpx;
		font-size: 26rpx;
		color: #2F4F4F;
		background: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(6px);
		border: 1rpx solid rgba(255, 255, 255, 0.8);
	}

	.entry-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 18rpx;
	}

	.entry-card {
		width: calc((100% - 36rpx)/3);
		/* 3列 */
		height: 190rpx;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 24rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		box-shadow: 0 4rpx 14rpx rgba(0, 0, 0, 0.06);
		transition: transform 120ms ease, box-shadow 120ms ease;
	}

	.entry-card:active {
		transform: scale(0.96);
		box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.08);
	}

	.entry-card.featured {
		background: linear-gradient(180deg, rgba(106, 90, 224, 0.18), rgba(0, 209, 255, 0.12));
		box-shadow: 0 10rpx 22rpx rgba(0, 209, 255, 0.18);
		border: 1rpx solid rgba(106, 90, 224, 0.3);
	}

	.entry-icon {
		width: 72rpx;
		height: 72rpx;
		margin-bottom: 12rpx;
	}

	.entry-text {
		font-size: 28rpx;
		color: #243B53;
	}

	.entry-badge {
		position: absolute;
		top: 12rpx;
		right: 12rpx;
		font-size: 22rpx;
		color: #fff;
		padding: 6rpx 12rpx;
		border-radius: 999rpx;
		background: linear-gradient(90deg, #FF7A7A, #FFB36B);
		box-shadow: 0 6rpx 12rpx rgba(255, 122, 122, 0.35);
	}
</style>