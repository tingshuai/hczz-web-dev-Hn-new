<template>
	<div class="bar">
		<p class="op">
			<img style="margin-right: 0px;" src="../../../images/home/office.png" alt="" />
			<span>部门数据</span>
		</p>
		<div class="ColumneChart" ref="ColumneChart">
			<p class="noData">暂无数据</p>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import { debounce } from '@/libs/util'
	import echarts from 'echarts' //引入echarts
	export default {
		props: {
			echarttop: {
				type: Array
			}
		},
		name: 'eCharts',
		computed: {

		},
		data() {
			return {
				name: [],
				chartData: [],
				xAxisTitle: [],
				myChart: null,
			};
		},
		watch: {
			echarttop() {
				this.initEcharts();
			},
		},
		mounted() {
			this.__resizeHanlder = debounce(() => {
				if(this.myChart) {
					this.myChart.resize()
				}
			}, 100)
			window.addEventListener('resize', this.__resizeHanlder);
		},
		methods: {
			initEcharts() {
				let _xAxisData = [],_series = [{
					data:[],
					name:"处理中",
					type:'bar'
				},{
					data:[],
					name:"已完成",
					type:'bar'
				}];
				this.echarttop[1].childrenList.forEach((val,i,arr)=>{
					_xAxisData.push(val.name);//填充X轴....
					// let dd = val.childrenList.findIndex((item)=>item.code == 'clz');
					if( val.childrenList.findIndex((item)=>item.code == 'clz') != -1 ){
						let _itemClz = val.childrenList[val.childrenList.findIndex((item)=>item.code == 'clz')];//处理中
						_series[0].data.push( _itemClz.count );//填充处理中呢一组...
						_series[1].data.push( val.count - _itemClz.count );//填充已完成呢一组...
					}else{
						_series[0].data.push( 0 );//填充处理中呢一组...
						_series[1].data.push( val.count );//填充已完成呢一组...						
					}
				})
				this.myChart = this.$echarts.init(this.$refs.ColumneChart);

				var option = {
					backgroundColor: '#fff',
					color: ['#5eb2ed', '#c8b7e9'],
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						right:'0',
						top:"5px",
						data:["处理中","已完成"]
					},
					toolbox: {
						show: false
					},
					calculable: true,
					xAxis: [{
						type: 'category',
						axisTick: {
							show: false
						},
						boundaryGap: ['50%', '80%'],
						data: _xAxisData,
						axisLine: {
							lineStyle: {
								color: '#ddd'
							}
						},
						axisLabel: {
							color: '#333',
							fontSize: 14
						}
					}],
					yAxis: [{
						type: 'value',
						splitLine: {
							show: false
						},
						minInterval: 1,
						boundaryGap: [0, 0.1],
						axisLine: {
							lineStyle: {
								color: '#ddd'
							}
						},
						axisLabel: {
							color: '#333',
							fontSize: 14
						}
					}],
					series: _series
				};
				this.myChart.setOption(option);
				//              this.myChart.group = 'mygroup';
			}

		}
	}
</script>
<style lang="less" scoped>
	.bar {
		background: white;
		width: 53%;
		height: 300px;
		box-shadow: #999 0 0 5px;
		border-radius: 8px;
		margin-left: 2%;
		.ColumneChart{
			display: flex;
			justify-content: center;
			align-items: center;	
		}
		.op {
			height: 40px;
			line-height: 40px;
			border-bottom: 1px solid #eee;
			background: rgb(250, 250, 250);
			img {
				display: inline-block;
				vertical-align: middle;
				margin-left: 15px;
				margin-right: 15px;
			}
			span{
				display: inline-block;
				vertical-align: middle;
			}
		}
	}
</style>