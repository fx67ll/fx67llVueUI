<template>
	<div class="fx67ll-box">
		<!-- 网站页脚插件测试 -->
		<!-- <fx67ll-footer fontColor="#aa0000" hoverColor="#5500ff" zIndex="999" authorName="123456"
			homePage="https:fx67ll.xyz" startYear="1234" icpNumber="1234567890" /> -->

		<!-- 加载进度条插件测试 -->
		<!-- <loading-progress progressNum="38" :isFinished="false" styleType="colorful" zIndex="999999" bgColor="#20232a"
			textColor="#d0ff34" :isShowText="false" stripedFirstColor="#ff0000" stripedSecondColor="#00aa00"
			gradientFirstColor="#ff5500" gradientSecondColor="#00ff00" animationTime="0.4" /> -->

		<!-- 加载动画组件测试 -->
		<!-- 静态示例：不同类型 / 颜色 / 大小，放开注释即可查看 -->
		<!-- <fx67ll-loading type="ball-pulse" color="#42b983" />
		<fx67ll-loading type="pacman" color="#f6d860" size="lg" />
		<fx67ll-loading type="ball-spin" color="#3ccad1" size="sm" />
		<fx67ll-loading type="circle" color="#ef8e81" />
		<fx67ll-loading type="jumping" color="#42b983" size="lg" />
		<fx67ll-loading type="heart" color="#ef8e81" />
		<fx67ll-loading type="line-scale" color="#dbbe39" size="lg" /> -->

		<!-- 交互示例：切换类型 / 大小 / 颜色，放开下方注释块与对应 data/methods 即可 -->
		<!-- <div class="fx67ll-loading-test">
			<div class="fx67ll-loading-preview">
				<fx67ll-loading :type="currentLoadingType" :color="currentLoadingColor" :size="currentLoadingSize" tip="加载中..." />
			</div>
			<div class="fx67ll-loading-controls">
				<button @click="prevLoadingType">上一个</button>
				<span>{{ currentLoadingType }}</span>
				<button @click="nextLoadingType">下一个</button>
				<button @click="toggleLoadingSize">切换大小</button>
				<button @click="toggleLoadingColor">切换颜色</button>
				<button @click="showFullscreenLoading">全屏加载</button>
				<button @click="showDelayLoading">延迟加载</button>
			</div>
			<fx67ll-loading v-model="isFullscreen" fullscreen tip="全屏加载中..." background="#20232a" />
		</div> -->

		<!-- 加载动画场景式组件测试（天生全屏遮罩，放开注释触发，右上角自带关闭按钮） -->
		<!-- <button class="fx67ll-loading-demo-btn" @click="isScreenLoading = true">显示场景式加载</button>
		<fx67ll-loading-screen v-model="isScreenLoading" type="grid-pulse" tip="场景式加载中..." /> -->
		<!-- <fx67ll-loading-screen v-model="isScreenLoading" type="solar-system" tip="太阳系加载中..." /> -->
		<!-- <fx67ll-loading-screen v-model="isScreenLoading" type="windows-flag" tip="Windows 加载中..." /> -->
		<!-- <fx67ll-loading-screen v-model="isScreenLoading" type="robot-engine" tip="引擎启动中..." /> -->
		<!-- <fx67ll-loading-screen v-model="isScreenLoading" type="book-flip" tip="翻书加载中..." /> -->
		<!-- <fx67ll-loading-screen v-model="isScreenLoading" type="dot-matrix" color="#42b983" tip="八点方阵..." /> -->
		<!-- 隐藏关闭按钮：:closeable="false" -->

		<!-- 形状插件合集测试 -->
		<!-- <shape-infinity shapeColor="#ffff7f" :shapeSize="0.5" />
		<shape-star-five shapeColor="#aaffff" :shapeSize="3" />
		<shape-triangle type="up" shapeColor="#ff5500" :shapeSize="2" />
		<shape-heart shapeColor="#dedede" :shapeSize="4" />
		<shape-triangle shapeColor="#ff5500" :shapeSize="2" />
		<shape-space-invader shapeColor="#00ff00" :shapeSize="2.5" />
		<shape-egg shapeColor="#ffff7f" :shapeSize="1.5" />
		<shape-pac-man shapeColor="#aaffff" :shapeSize="2" />
		<shape-diamond shapeColor="#ff0000" :shapeSize="1" />
		<shape-yinyang shapeColorYin="#ff0000" shapeColorYang="#ffffff" :shapeSize="1" />
		<shape-cross shapeColor="#ffaaff" :shapeSize="2.5" />
		<shape-moon shapeColor="#ffff00" :shapeSize="4" />
		<shape-star-six shapeColor="#aaffff" :shapeSize="3.5" />
		<shape-talk-bubble talkText="测试文字" textColor="#ff0000" shapeColor="#00aa00" :shapeSize="2" />
		<shape-yinyang shapeColorYin="#ff0000" shapeColorYang="#ffffff" :shapeSize="1" /> -->

		<!-- 二进制时钟插件测试 -->
		<!-- <fx67ll-binary-clock :isShowTime="true" :zoomSize="1" /> -->

		<!-- 随机马赛克头像插件测试 -->
		<!-- <fx67ll-random-mosaic-avatar /> -->
		<!-- <fx67ll-random-mosaic-avatar :isAllowRefresh="true" @avatarUrlChange="getAvatarUrl" /> -->
		<!-- <fx67ll-random-mosaic-avatar :avatarSize="300" :isNeedRandom="false" :avatarNum="404" avatarType="svg"
			:avatarPadding="0.1" :avatarColor="[0, 0, 0, 255]" :avatarBgColor="[255, 255, 255, 255]" /> -->

		<!-- 放烟花插件测试 -->
		<!-- <div class="fx67ll-fireworks-box">
			<fx67ll-nan-fireworks />
		</div> -->
	</div>
</template>

<script>
export default {
	name: 'fx67llIndex',
	data() {
		return {
			// loading 组件交互演示相关数据（放开模板中交互示例注释后生效）
			loadingTypeList: [
				'ball-pulse', 'ball-clip-rotate', 'ball-fall', 'ball-newton-cradle',
				'ball-running-dots', 'ball-scale-pulse', 'ball-scale', 'ball-spin-clockwise',
				'ball-spin-rotate', 'ball-spin', 'line-scale', 'pacman',
				'square-jelly-box', 'square-loader', 'timer', 'ball-climbing-dot',
				'circle', 'circle-side', 'arrow-circle', 'ball-circle',
				'rectangle', 'heart', 'ball-rotate', 'jumping', 'satellite'
			],
			loadingTypeIndex: 0,
			loadingSizeList: ['sm', 'md', 'lg', 'xl'],
			loadingSizeIndex: 1,
			loadingColorList: ['#42b983', '#ef8e81', '#3ccad1', '#f6d860', '#9b7ad5'],
			loadingColorIndex: 0,
			isFullscreen: false,
			isScreenLoading: false
		}
	},
	computed: {
		// 当前演示的 loading 类型
		currentLoadingType() {
			return this.loadingTypeList[this.loadingTypeIndex];
		},
		// 当前演示的 loading 大小
		currentLoadingSize() {
			return this.loadingSizeList[this.loadingSizeIndex];
		},
		// 当前演示的 loading 颜色
		currentLoadingColor() {
			return this.loadingColorList[this.loadingColorIndex];
		}
	},
	methods: {
		getAvatarUrl(url) {
			console.log('avatarUrl: ', url);
		},
		// 上一个 loading 类型
		prevLoadingType() {
			this.loadingTypeIndex = (this.loadingTypeIndex - 1 + this.loadingTypeList.length) % this.loadingTypeList.length;
		},
		// 下一个 loading 类型
		nextLoadingType() {
			this.loadingTypeIndex = (this.loadingTypeIndex + 1) % this.loadingTypeList.length;
		},
		// 切换 loading 大小
		toggleLoadingSize() {
			this.loadingSizeIndex = (this.loadingSizeIndex + 1) % this.loadingSizeList.length;
		},
		// 切换 loading 颜色
		toggleLoadingColor() {
			this.loadingColorIndex = (this.loadingColorIndex + 1) % this.loadingColorList.length;
		},
		// 显示全屏加载
		showFullscreenLoading() {
			this.isFullscreen = true;
			// 3 秒后自动关闭
			setTimeout(() => {
				this.isFullscreen = false;
			}, 3000);
		},
		// 延迟显示加载（delay 属性演示）
		showDelayLoading() {
			console.log('delay 加载已触发，500ms 后显示');
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.fx67ll-box {
	width: 100%;
	height: 100%;
	.ban-user-select();

	.fx67ll-fireworks-box {
		width: 500px;
		height: 500px;
		margin: 0 auto;
	}

	// loading 组件交互测试区样式（放开模板中交互示例注释后生效）
	.fx67ll-loading-test {
		width: 500px;
		margin: 40px auto;
		text-align: center;

		.fx67ll-loading-preview {
			height: 120px;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #f7f8fa;
			border-radius: 8px;
			margin-bottom: 20px;
		}

		.fx67ll-loading-controls {
			display: flex;
			flex-wrap: wrap;
			gap: 8px;
			justify-content: center;

			button {
				padding: 6px 12px;
				border: 1px solid #42b983;
				border-radius: 4px;
				background: #fff;
				color: #42b983;
				cursor: pointer;
				font-size: 13px;

				&:hover {
					background: #42b983;
					color: #fff;
				}
			}

			span {
				line-height: 30px;
				padding: 0 8px;
				color: #666;
				font-size: 13px;
			}
		}
	}
}
</style>