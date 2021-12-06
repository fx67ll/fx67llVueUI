<template>
	<div class="fx67ll-footer" :style="{ '--fontColor': fontColor, '--hoverColor': hoverColor }">
		Designed & Powered by
		<a :href="homePage" target="_blank">{{ this.authorName }}</a>
		&#12288; Copyright© {{ this.startYear + '-'  + this.thisYear }}&#12288;
		<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">{{ this.icpNumber }}</a>
	</div>
</template>

<script>
	export default {
		name: 'fx67llFooter',
		props: {
			// 字体颜色
			fontColor: {
				type: String,
				required: false,
				default: '#bababa',
				validator(color) {
					return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
				}
			},
			// a标签悬浮颜色
			hoverColor: {
				type: String,
				required: false,
				default: '#42b983',
				validator(color) {
					return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(color);
				}
			},
			// 网站作者名称
			authorName: {
				type: String,
				required: false,
				default: 'fx67ll'
			},
			// 网站作者主页
			homePage: {
				type: String,
				required: false,
				default: 'https://fx67ll.com',
				validator(url) {
					return new RegExp('[a-zA-z]+://[^\s]*').test(url);
				}
			},
			// 网站开始运营年份
			startYear: {
				type: String | Number,
				required: false,
				default: 2018,
				validator(year) {
					let date = new Date();
					if (year.toString().length !== 4 || date.getFullYear() < year) {
						return false;
					} else {
						return true;
					}
				}
			},
			// 网站备案号
			icpNumber: {
				type: String,
				required: false,
				default: '皖ICP备18017174号'
			}
		},
		data() {
			return {
				// 当前年份
				thisYear: ''
			}
		},
		mounted() {
			// 自动获取当前年份
			let date = new Date();
			this.thisYear = date.getFullYear()
		}
	}
</script>

<style lang="less" scoped="scoped">
	.fx67ll-footer {
		width: 100%;
		padding: 20px 0;
		text-align: center;
		position: absolute;
		bottom: 0;
		user-select: text;
		z-index: 99999;
		color: var(--fontColor);

		a {
			color: var(--fontColor);
		}

		a:hover {
			color: var(--hoverColor);
		}
	}
</style>
