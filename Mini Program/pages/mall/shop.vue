<template>
	<view class="mall-page">
		<!-- ① 固定头部：标题 + 搜索 + 类目 -->
		<view class="header-fixed">
			<view class="topbar">
				<view class="nav-left" @tap="goBack">
					<text class="back-icon">←</text>
				</view>
				<view class="nav-center">
					<text class="title">购物中心</text>
				</view>
				<view class="nav-right">
					<!-- 可放购物车或收藏按钮 -->
					<!-- <text class="cart-icon">🛒</text> -->
				</view>
			</view>

			<view class="search-bar">
				<view class="search-input">
					<text class="search-icon">🔍</text>
					<input v-model="searchQuery" placeholder="搜索：品类 / 釉色 / 产地 / 名称" @confirm="onSearchConfirm"
						confirm-type="search" />
					<view v-if="searchQuery" class="clear-btn" @tap="clearSearch">✕</view>
				</view>
				<scroll-view scroll-x class="tabs-wrap" :scroll-with-animation="true">
					<view v-for="(t, i) in tabs" :key="i" class="tab" :class="{ active: activeTab === t.key }"
						@tap="switchTab(t.key)">
						{{ t.name }}
					</view>
				</scroll-view>
			</view>
		</view>

		<!-- ② 占位层：高度与 header-fixed 一致，避免内容被遮挡 -->
		<view class="header-spacer"></view>

		<!-- ③ 仅商品区域滚动 -->
		<scroll-view scroll-y class="grid-wrap">
			<view class="grid">
				<view class="card" v-for="(p, idx) in filteredProducts" :key="idx" @tap="openDetail(p)">
					<image class="cover" :src="p.image" mode="aspectFill" />
					<view class="info">
						<text class="name">{{ p.name }}</text>
						<text class="price">{{ p.priceText }}</text>
					</view>
					<view class="meta">
						<text class="sold">已售 {{ p.soldText }}</text>
						<text class="tag" v-if="p.tag">{{ p.tag }}</text>
					</view>
					<view class="actions">
						<view class="ai-chip pulse" @tap.stop="openAiPanel(p)">
							<text class="spark">✦</text>
							<text class="chip-text">瓷语解析</text>
						</view>
					</view>
				</view>
			</view>
			<view class="pad-bottom" />
		</scroll-view>

		<!-- AI 解析弹窗 -->
		<view v-if="showAi" class="mask" @tap="closeAiPanel">
			<view class="ai-panel" @tap.stop>
				<view class="panel-header">
					<view class="badge"><text class="spark">✦</text><text>AI 瓷语解析</text></view>
					<view class="panel-title"><text>{{ currentItem ? currentItem.name : '' }}</text></view>
				</view>

				<view class="panel-body">
					<view class="ai-stage">
						<view v-if="phase==='thinking'" class="thinking">
							<view class="spinner"></view>
							<text class="thinking-text">AI 瓷语思考中</text>
							<text class="dots"><text class="dot d1">•</text><text class="dot d2">•</text><text
									class="dot d3">•</text></text>
						</view>
						<view v-else class="speaking">
							<view class="speak-icon pulse-min">🔊</view>
							<view class="typing-area">
								<text class="typing">{{ storyDisplay }}</text>
								<text v-if="isTypingStory" class="cursor">▋</text>
							</view>
						</view>
					</view>

					<view class="section">
						<view class="section-title">
							<view class="dot alt" /><text>来源</text>
						</view>
						<view class="typing-area source"><text class="typing">{{ sourceDisplay }}</text></view>
					</view>
				</view>

				<view class="panel-actions">
					<button class="btn ghost" @tap="toggleVoice">{{ isPlaying ? '暂停语音' : '播放语音' }}</button>
					<button class="btn primary" @tap="closeAiPanel">完成</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchQuery: '',
				tabs: [{
						key: 'all',
						name: '全部'
					},
					{
						key: 'hot',
						name: '热销'
					},
					{
						key: 'new',
						name: '新品'
					},
					{
						key: 'cate',
						name: '分类'
					},
				],
				activeTab: 'all',

				productsRaw: [{
						name: '青花瓷梅瓶',
						price: 1299,
						sold: 2150,
						tag: '典藏',
						image: '/static/mall/qinghuaci.png',
						source: '景德镇·手工拉坯·1280℃ 还原焰',
						cate: '瓶',
						isHot: true,
						isNew: false,
						aiBrief: ['胎体细腻致密，透光性良好；', '青花料色层次分明，笔触有留锋；', '肩部线条饱满，足圈修坯规整。'],
						storySeed: [
							'青花瓷梅瓶起源于唐代，因其小口、丰肩、瘦腹、圈足的造型，宛若盛开的梅花由瘦口向宽肩舒展，因此被称为“梅瓶”。到宋元时期，它逐渐成为陈设与礼器的代表。',

							'元代青花梅瓶采用进口钴料，发色浓艳深沉。工艺上，匠人选用优质瓷土，胎体细腻，先以氧化钴勾勒纹饰，再施透明釉，经1280摄氏度高温焙烧，形成青花底色。',

							'梅瓶常用于陈设与赏玩，线条流畅，釉色润泽，如水中月、镜中花。它不仅是一件日用器皿，更是一件承载历史与文化的艺术品。'
						],
					},
					{
						name: '汝窑公道杯',
						price: 468,
						sold: 980,
						tag: '口碑',
						image: '/static/mall/ruyao.png',
						source: '河南汝州·仿古配方·入窑一色',
						cate: '茶具',
						isHot: false,
						isNew: true,
						aiBrief: ['釉面如凝脂，开片细密；', '器型匀称，线条圆融；', '口沿微内收，利于出水控流。'],
						storySeed: '汝釉温润，开片如初雪消融的纹络。手持温热茶汤，杯壁微泛青，恰似雨过天青。',
					},
					{
						name: '定窑刻花盏',
						price: 620,
						sold: 1630,
						tag: '',
						image: '/static/mall/dingyao.png',
						source: '曲阳·白釉刻花·覆烧工艺',
						cate: '茶盏',
						isHot: true,
						isNew: true,
						aiBrief: ['刻花刀法利落，花叶转折自然；', '釉色清亮泛乳白，积釉处微见泪痕；', '圈足干净，露胎细腻偏黄。'],
						storySeed: '定瓷白若凝脂，刻花在光里浮沉。捧盏观纹，如见风过芦苇，留下一瞬的波纹。',
					},
					{
						name: '耀州刻花梅瓶',
						price: 980,
						sold: 740,
						tag: '匠作',
						image: '/static/mall/yaozhou.png',
						source: '铜川耀州·青釉·模印与刻花结合',
						cate: '瓶',
						isHot: false,
						isNew: false,
						aiBrief: ['青釉通透微泛黄绿；', '刻花深浅有致，层次分明；', '瓶肩转折过渡柔和。'],
						storySeed: '耀州青釉带着山石的清气。灯下观之，花叶一明一暗，像被风吹皱的湖面。',
					},
					{
						name: '龙泉青瓷茶壶',
						price: 850,
						sold: 1310,
						tag: '人气',
						image: '/static/mall/longquan.png',
						source: '龙泉·梅子青釉·还原焰',
						cate: '茶具',
						isHot: true,
						isNew: false,
						aiBrief: ['釉色清润通透，呈梅子青；', '壶钮与壶嘴比例协调；', '出水顺畅，断水利落。'],
						storySeed: '龙泉青瓷若雨后青苔的颜色，握在手心，像水光在掌间打转。',
					},
					{
						name: '景德镇粉彩盖碗',
						price: 730,
						sold: 560,
						tag: '雅玩',
						image: '/static/mall/fencai.png',
						source: '景德镇·粉彩工艺·彩绘',
						cate: '茶具',
						isHot: false,
						isNew: true,
						aiBrief: ['粉彩晕染细腻，层层渲染；', '盖、碗、托尺寸配比协调；', '适合观汤色与闷香。'],
						storySeed: '粉彩如雾中花影，茶香从釉色间漫开，一盏一会，像把春天端在掌心。',
					},
					{
						name: '宜兴紫砂杯',
						price: 420,
						sold: 2040,
						tag: '热卖',
						image: '/static/mall/zisha.png',
						source: '宜兴·段泥·手工成型',
						cate: '茶具',
						isHot: true,
						isNew: false,
						aiBrief: ['泥料细腻、砂感明显；', '器壁均匀，气孔通透；', '久用更显温润。'],
						storySeed: '紫砂“养人”，也被人养。日复一日，杯色更暖，仿佛留住了茶的四季。',
					},
				],

				products: [],
				showAi: false,
				currentItem: null,
				phase: 'thinking',
				storyFull: '',
				storyDisplay: '',
				sourceFull: '',
				sourceDisplay: '',
				isTypingStory: false,
				timerThink: null,
				timerStory: null,
				isPlaying: false,
				audio: null,
			};
		},

		computed: {
			filteredProducts() {
				let list = this.products;

				if (this.activeTab === 'hot') list = list.filter(p => p.isHot);
				else if (this.activeTab === 'new') list = list.filter(p => p.isNew);
				else if (this.activeTab === 'cate') list = list.slice().sort((a, b) => a.cate.localeCompare(b.cate));

				const q = this.searchQuery.trim();
				if (q) {
					const s = q.toLowerCase();
					list = list.filter(p => {
						const text = (p.name || '') + (p.source || '') + (p.cate || '') + (p.tag || '');
						return text.toLowerCase().indexOf(s) !== -1;
					});
				}
				return list;
			},
		},

		created() {
			this.products = this.productsRaw.map(p => ({
				...p,
				priceText: '¥' + Number(p.price).toFixed(2),
				soldText: this.toSoldText(p.sold),
			}));
		},

		beforeDestroy() {
			this.clearTimers();
			if (this.audio) {
				this.audio.destroy();
				this.audio = null;
			}
		},

		methods: {
			toSoldText(n) {
				const num = Number(n) || 0;
				if (num >= 10000) return (num / 10000).toFixed(1).replace(/\.0$/, '') + '万';
				if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
				return String(num);
			},
			switchTab(k) {
				this.activeTab = k;
			},
			clearSearch() {
				this.searchQuery = '';
			},
			onSearchConfirm() {},

			openDetail(p) {
				uni.showToast({
					title: '可跳转到商品详情页',
					icon: 'none'
				});
			},

			openAiPanel(p) {
				this.currentItem = p;
				this.showAi = true;
				this.phase = 'thinking';
				this.storyDisplay = '';
				this.sourceDisplay = '';

				const intro = `让我们用三十秒，讲清「${p.name}」的看点。\n`;
				const facts = p.aiBrief.map(l => `· ${l}`).join('\n');
				const bridge = '\n——\n';

				let story = '';
				if (Array.isArray(p.storySeed)) {
					story = p.storySeed.join('\n\n'); 
				} else {
					story = p.storySeed || '';
				}

				this.storyFull =intro + facts + bridge + story ;

				this.sourceFull = `${p.source}`;

				const thinkMs = 1200 + Math.floor(Math.random() * 800);
				this.timerThink = setTimeout(() => {
					this.phase = 'speaking';
					this.typeStory();
					this.sourceDisplay = this.sourceFull;
				}, thinkMs);
			},


			typeStory() {
				this.isTypingStory = true;
				let i = 0;
				const text = this.storyFull;
				const tick = () => {
					if (i >= text.length) {
						this.isTypingStory = false;
						return;
					}
					const step = 1 + Math.floor(Math.random() * 3);
					const chunk = text.slice(i, i + step);
					this.storyDisplay += chunk;
					i += step;
					const next = 28 + Math.floor(Math.random() * 32);
					this.timerStory = setTimeout(tick, next);
				};
				tick();
				this.playVoice();
			},

			closeAiPanel() {
				this.showAi = false;
				this.stopVoice();
				this.clearTimers();
			},
			clearTimers() {
				if (this.timerThink) clearTimeout(this.timerThink);
				if (this.timerStory) clearTimeout(this.timerStory);
				this.timerThink = null;
				this.timerStory = null;
				this.isTypingStory = false;
			},

			playVoice() {
				try {
					if (!this.audio) {
						this.audio = uni.createInnerAudioContext();
						this.audio.src = '/static/audio/ai_story.mp3'; // 放置你的占位音频
						this.audio.onEnded(() => {
							this.isPlaying = false;
						});
						this.audio.onError(() => {
							this.isPlaying = false;
							uni.showToast({
								title: '未找到语音文件 /static/audio/ai_story.mp3',
								icon: 'none'
							});
						});
					}
					this.audio.play();
					this.isPlaying = true;
				} catch (e) {
					this.isPlaying = false;
					uni.showToast({
						title: '暂不支持语音播放',
						icon: 'none'
					});
				}
			},
			stopVoice() {
				if (this.audio) {
					try {
						this.audio.stop();
					} catch (e) {}
				}
				this.isPlaying = false;
			},
			toggleVoice() {
				if (this.isPlaying) {
					this.stopVoice();
				} else {
					this.playVoice();
				}
			},
			goBack() {
				// 返回上一级
				uni.navigateBack();

			}
		},
	};
</script>

<style scoped>
	/* 背景 */
	.mall-page {
		min-height: 100vh;
		background: linear-gradient(180deg, #A1C6B7 5%, #ffffff 95%);
		box-sizing: border-box;
	}

	/* ① 固定头部（总高度要与 header-spacer 一致） */
	.header-fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 998;
		background: linear-gradient(180deg, #A1C6B7 5%, #ffffff 95%);
		/* 与页面一致 */
		padding: 20rpx 20rpx 10rpx;
		box-sizing: border-box;
	}

	.topbar {
		height: 208rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav-left,
	.nav-right {
		width: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-center {
		flex: 1;
		text-align: center;
	}

	.back-icon {
		font-size: 36rpx;
		color: #23323a;
		line-height: 1;
	}

	.title {
		font-size: 40rpx;
		font-weight: 700;
		color: #23323a;
		letter-spacing: 2rpx;
	}

	.search-bar {
		margin: -60rpx 0 6rpx;
	}

	.search-input {
		display: flex;
		align-items: center;
		gap: 12rpx;
		background: rgba(255, 255, 255, 0.86);
		border: 1rpx solid rgba(0, 0, 0, 0.06);
		border-radius: 999rpx;
		padding: 14rpx 18rpx;
		box-shadow: 0 6rpx 16rpx rgba(0, 0, 0, 0.05);
	}

	.search-input input {
		flex: 1;
		font-size: 28rpx;
		color: #23323a;
	}

	.search-icon {
		font-size: 28rpx;
		opacity: .75;
	}

	.clear-btn {
		width: 40rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		opacity: .6;
	}

	.tabs-wrap {
		margin-top: 12rpx;
		white-space: nowrap;
	}

	.tab {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12rpx 26rpx;
		margin-right: 16rpx;
		font-size: 26rpx;
		color: #2f4f4f;
		background: rgba(255, 255, 255, 0.65);
		border: 1rpx solid rgba(0, 0, 0, 0.04);
		border-radius: 999rpx;
	}

	.tab.active {
		color: #fff;
		font-weight: 600;
		background: linear-gradient(90deg, #6A5AE0, #00D1FF);
		box-shadow: 0 6rpx 16rpx rgba(0, 209, 255, 0.35);
	}

	/* ② 占位层：高度与 header-fixed 内部总高一致（按需微调） */
	.header-spacer {
		height: 328rpx;
	}

	/* 标题 + 搜索 + tabs 的总高度 */

	/* ③ 仅商品滚动区域 */
	.grid-wrap {
		height: calc(100vh - 20rpx);
		/* 让 scroll-view 占满剩余高度 */
		padding: 0 20rpx 0;
		box-sizing: border-box;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 18rpx;
		padding: 8rpx 4rpx 20rpx;
	}

	.card {
		position: relative;
		border-radius: 26rpx;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(8px);
		box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.08);
	}

	.cover {
		width: 100%;
		height: 300rpx;
		display: block;
	}

	.info {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		padding: 14rpx 16rpx 4rpx;
	}

	.name {
		font-size: 30rpx;
		color: #243b53;
		font-weight: 600;
		line-height: 1.3;
	}

	.price {
		font-size: 28rpx;
		color: #0a7d6a;
		font-weight: 700;
	}

	.meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16rpx 10rpx;
	}

	.sold {
		font-size: 24rpx;
		color: #5b6b73;
	}

	.tag {
		font-size: 22rpx;
		color: #fff;
		padding: 4rpx 10rpx;
		border-radius: 999rpx;
		background: linear-gradient(90deg, #f59e0b, #f97316);
	}

	.actions {
		padding: 0 16rpx 16rpx;
	}

	.ai-chip {
		display: inline-flex;
		align-items: center;
		gap: 10rpx;
		padding: 12rpx 18rpx;
		border-radius: 999rpx;
		color: #fff;
		font-size: 26rpx;
		background: linear-gradient(90deg, #6A5AE0, #00D1FF);
		box-shadow: 0 8rpx 18rpx rgba(0, 209, 255, 0.35);
		transform: translateZ(0);
	}

	.ai-chip:active {
		transform: scale(0.96);
	}

	.spark {
		font-size: 28rpx;
	}

	.pulse {
		animation: pulse 2.4s ease-in-out infinite;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 8rpx 18rpx rgba(0, 209, 255, 0.35);
		}

		50% {
			box-shadow: 0 10rpx 28rpx rgba(0, 209, 255, 0.55);
		}

		100% {
			box-shadow: 0 8rpx 18rpx rgba(0, 209, 255, 0.35);
		}
	}

	/* 弹窗与 AI 动效（保持原样） */
	.mask {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.28);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 30rpx;
		z-index: 999;
	}

	.ai-panel {
		width: 92vw;
		max-width: 720rpx;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(10px);
		border-radius: 26rpx;
		box-shadow: 0 16rpx 42rpx rgba(0, 0, 0, 0.18);
		border: 1rpx solid rgba(106, 90, 224, 0.25);
	}

	.panel-header {
		padding: 24rpx 26rpx 12rpx;
	}

	.badge {
		display: inline-flex;
		align-items: center;
		gap: 10rpx;
		font-size: 24rpx;
		color: #fff;
		padding: 10rpx 16rpx;
		border-radius: 999rpx;
		background: linear-gradient(90deg, #6A5AE0, #00D1FF);
		box-shadow: 0 6rpx 16rpx rgba(0, 209, 255, 0.35);
	}

	.panel-title {
		margin-top: 14rpx;
		font-size: 32rpx;
		font-weight: 700;
		color: #243b53;
	}

	.panel-body {
		padding: 8rpx 26rpx 6rpx;
	}

	.ai-stage {
		margin-bottom: 10rpx;
	}

	.thinking {
		display: flex;
		align-items: center;
		gap: 14rpx;
		padding: 12rpx 0;
	}

	.spinner {
		width: 28rpx;
		height: 28rpx;
		border-radius: 50%;
		border: 4rpx solid rgba(0, 0, 0, 0.08);
		border-top-color: #6A5AE0;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.thinking-text {
		font-size: 26rpx;
		color: #2f4f4f;
	}

	.dots {
		display: inline-flex;
		gap: 6rpx;
		margin-left: 6rpx;
	}

	.dot {
		font-size: 34rpx;
		line-height: 1;
		color: #6A5AE0;
		opacity: .2;
	}

	.d1 {
		animation: float 1.2s ease-in-out infinite;
	}

	.d2 {
		animation: float 1.2s ease-in-out .2s infinite;
	}

	.d3 {
		animation: float 1.2s ease-in-out .4s infinite;
	}

	@keyframes float {

		0%,
		100% {
			transform: translateY(0);
			opacity: .2;
		}

		50% {
			transform: translateY(-6rpx);
			opacity: .9;
		}
	}

	.speaking {
		display: flex;
		gap: 12rpx;
		align-items: flex-start;
	}

	.speak-icon {
		font-size: 28rpx;
		margin-top: 10rpx;
	}

	.pulse-min {
		animation: pulseMin 2s ease-in-out infinite;
	}

	@keyframes pulseMin {
		0% {
			text-shadow: 0 0 0 rgba(106, 90, 224, 0.0);
		}

		50% {
			text-shadow: 0 0 10rpx rgba(0, 209, 255, 0.6);
		}

		100% {
			text-shadow: 0 0 0 rgba(106, 90, 224, 0.0);
		}
	}

	.typing-area {
		min-height: 120rpx;
		background: rgba(255, 255, 255, 0.7);
		border: 1rpx solid rgba(0, 0, 0, 0.06);
		border-radius: 16rpx;
		padding: 18rpx;
		color: #23323a;
		line-height: 1.7;
		white-space: pre-wrap;
		font-size: 26rpx;
		box-shadow: inset 0 2rpx 8rpx rgba(0, 0, 0, 0.03);
	}

	.typing-area.source {
		min-height: 64rpx;
	}

	.cursor {
		margin-left: 6rpx;
		color: #6A5AE0;
		animation: blink 1s steps(1) infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	.section {
		margin: 18rpx 0 8rpx;
	}

	.section-title {
		display: flex;
		align-items: center;
		gap: 12rpx;
		font-size: 26rpx;
		color: #2f4f4f;
		margin-bottom: 8rpx;
	}

	.dot,
	.dot.alt {
		width: 12rpx;
		height: 12rpx;
		border-radius: 50%;
		background: #6A5AE0;
		box-shadow: 0 0 12rpx rgba(0, 209, 255, 0.6);
	}

	.dot.alt {
		background: #00D1FF;
	}

	.panel-actions {
		display: flex;
		gap: 14rpx;
		padding: 16rpx 20rpx 22rpx;
		justify-content: flex-end;
	}

	.btn {
		padding: 14rpx 22rpx;
		border-radius: 14rpx;
		font-size: 26rpx;
		color: #243b53;
		background: #eef3ff;
	}

	.btn.ghost {
		background: rgba(0, 0, 0, 0.04);
	}

	.btn.primary {
		color: #fff;
		background: linear-gradient(90deg, #6A5AE0, #00D1FF);
		box-shadow: 0 6rpx 16rpx rgba(0, 209, 255, 0.35);
	}

	.pad-bottom {
		height: 80rpx;
	}
</style>