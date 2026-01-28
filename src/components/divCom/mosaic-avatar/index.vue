<template>
	<div class="fx67ll-random-mosaic-avatar" :style="{ '--size': `${avatarSize}px` }" @click="regenerateAvatarUrl"
		v-if="avatarUrl">
		<img :src="avatarUrl" v-if="avatarType === 'png'" />
		<embed :src="avatarUrl" type="image/svg+xml" v-if="avatarType === 'svg'">
	</div>
</template>

<script>
	import Identicon from 'identicon.js';
	import md5 from 'blueimp-md5';
	import {
		getRandomInt
	} from '@u/index.js';
	export default {
		name: 'fx67llRandomMosaicAvatar',
		props: {
			// 生成的随机头像大小，默认230px*230px
			// 默认值：230
			avatarSize: {
				type: String | Number,
				required: false,
				default: 230,
			},
			// 是否使用随机生成，默认随机，可选定制
			// 默认值：true
			isNeedRandom: {
				type: Boolean,
				required: false,
				default: true,
				validator(val) {
					return typeof val === 'boolean';
				}
			},
			// 是否允许点击后重新生成
			// 默认值：false
			isAllowRefresh: {
				type: Boolean,
				required: false,
				default: false,
				validator(val) {
					return typeof val === 'boolean';
				}
			},
			// 定制属性，isNeedRandom为false的时候生效
			// 指定生成的随机头像编号，可以是任意整数  
			// 默认值：1023
			avatarNum: {
				type: String | Number,
				required: false,
				default: 1023,
				validator(num) {
					return new RegExp('^[0-9]*[0-9][0-9]*$').test(parseInt(num));
				}
			},
			// 定制属性，isNeedRandom为false的时候生效
			// 指定生成的随机头像类型，默认png，可选svg  
			// 默认值：png
			avatarType: {
				type: String,
				required: false,
				default: 'png',
				validator(text) {
					return text === 'png' || text === 'svg';
				}
			},
			// 定制属性，isNeedRandom为false的时候生效
			// 指定生成的随机头像的内边距，必须是0-1之间两位以内小数，包括0和1
			// 默认值：0.23
			avatarPadding: {
				type: String | Number,
				required: false,
				default: 0.23,
				validator(num) {
					return new RegExp(/^(?:0(?:\.\d{1,2})?|1(?:\.0{1,2})?)$/).test(num);
				}
			},
			// 定制属性，isNeedRandom为false的时候生效
			// 指定生成的随机头像的颜色，必须是长度为4的数组，每个元素为0-255之间的整数，包括0和255  
			// 默认值：[46, 204, 113, 255]
			avatarColor: {
				type: Array,
				required: false,
				default: function() {
					return [46, 204, 113, 255]
				},
				validator(arr) {
					let isRight = true;
					if (Array.isArray(arr) && arr.length === 4) {
						arr.forEach(function(item) {
							isRight = new RegExp('^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$').test(item);
						})
					} else {
						isRight = false;
					}
					return isRight;
				}
			},
			// 定制属性，isNeedRandom为false的时候生效
			// 指定生成的随机头像的背景颜色，必须是长度为4的数组，每个元素为0-255之间的整数，包括0和255  
			// 默认值：[236, 240, 241, 111]
			avatarBgColor: {
				type: Array,
				required: false,
				default: function() {
					return [236, 240, 241, 111]
				},
				validator(arr) {
					let isRight = true;
					if (Array.isArray(arr) && arr.length === 4) {
						arr.forEach(function(item) {
							isRight = new RegExp('^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$').test(item);
						})
					} else {
						isRight = false;
					}
					return isRight;
				}
			},
		},
		data() {
			return {
				avatarUrl: '',
			}
		},
		watch: {
			avatarUrl(newVal, oldVal) {
				// 返回当前生成的马赛克头像的url
				this.$emit('avatarUrlChange', newVal);
			},
		},
		created() {
			this.randomAvatarUrl();
		},
		methods: {
			randomAvatarUrl() {
				if (this.isNeedRandom) {
					const randomInt = getRandomInt(1, 99999999999);
					this.avatarUrl = 'data:image/png;base64,' + new Identicon(md5(randomInt), this.avatarSize).toString();
				} else {
					const options = {
						foreground: this.avatarColor,
						background: this.avatarBgColor,
						margin: this.avatarPadding,
						size: this.avatarSize,
						format: this.avatarType
					};
					const dataType = this.avatarType === 'svg' ? 'svg+xml' : 'png';
					this.avatarUrl = `data:image/${dataType};base64,` + new Identicon(md5(this.avatarNum), options)
						.toString();
				}
			},
			regenerateAvatarUrl() {
				if (this.isAllowRefresh && this.isNeedRandom) {
					this.randomAvatarUrl();
					// 返回当前生成的马赛克头像的url
					this.$emit('avatarClick', this.avatarUrl);
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.fx67ll-random-mosaic-avatar {
		width: var(--size);
		height: var(--size);

		img {
			width: 100%;
			height: 100%;
		}

		embed {
			width: 100%;
			height: 100%;
		}
	}
</style>