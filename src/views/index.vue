<template>
	<div class="fx67ll-box">
		<!-- 网站页脚插件测试 -->
		<!-- <fx67ll-footer fontColor="#aa0000" hoverColor="#5500ff" zIndex="999" authorName="123456"
			homePage="https:fx67ll.xyz" startYear="1234" icpNumber="1234567890" /> -->

		<!-- 加载进度条插件测试 -->
		<!-- <loading-progress progressNum="38" :isFinished="false" styleType="colorful" zIndex="999999" bgColor="#20232a"
			textColor="#d0ff34" :isShowText="false" stripedFirstColor="#ff0000" stripedSecondColor="#00aa00"
			gradientFirstColor="#ff5500" gradientSecondColor="#00ff00" animationTime="0.4" /> -->

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
	</div>
</template>

<script>
	export default {
		name: 'fx67llIndex',
		data() {
			return {}
		},
		methods: {
			getAvatarUrl(url) {
				console.log('avatarUrl: ', url);
			},
		}
	};
</script>

<style lang="less" scoped="scoped">
	.fx67ll-box {
		width: 100%;
		height: 100%;
		.ban-user-select();
	}
</style>