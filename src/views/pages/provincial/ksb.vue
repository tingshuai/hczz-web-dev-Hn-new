<template>
		<div class="bodyWrap">
			<div style="" class="bottom-div">
				<div class="lcTop flex0">
					<div class="startJ flex0">
						<!--开始标记-->
						<div>开始</div>
						<i class="top-x"></i>
					</div>
					<ul class="bottom-ul flex0">
						<li class="bottom-approve flex0">
							<div class="bottom-recive">
								<div class="recive">
									<div class="lcInfo-t cl fq-spr flex0">
										<div class="headImg">
											<img src="@/images/ksh/img_p_two.png">
										</div>
										<div class="userMsg">
											<p :title="flowData.flowMsg.zxr || 'XXX'" class="lancolor">{{flowData.flowMsg.zxr || "XXX" | subString(6)}}</p>
											<p :title="flowData.flowMsg.bmmc">{{flowData.flowMsg.bmmc | subString(16) }}</p>
										</div>
									</div>
									<div class="line flex0"></div>
									<div class="lcInfo-c flex0">
										<p>{{flowData.flowMsg.czsj | timestampToTime}}</p>
										<div class="lcInfo-c1">
											<p class="green">发起请求</p>
											<div>
												<Icon type="md-checkmark" class="md-checkmark"/>											
												<i class="angle"></i>
											</div>
										</div>
									</div>								
								</div>
							</div>	
						</li>
						<!-- <i class="top-y" v-show="flowData.flowBody.length!=0"></i> -->
					</ul>
				</div>
                <!-- 审核 -->
				<ul style="" class="bottom-ul flex0 sh" v-if="flowData.spMsg.length">
					<!-- <div class="line_center"></div> -->
					<i class="top-x flex0"></i>
					<div class="list flex0">
						<li class="bottom-approve" :class="flowData.spMsg.length > 1 ? 'getLine' : ''" v-for="(item,index) in flowData.spMsg" :key="index">
							<!--虚线框内-->
							<div class="bottom-recive flex0" :class="item.czlx == '审批同意' || item.czlx == '审批不同意' ? '' : 'filterGray'">
								<i class="top-x flex0" v-if="flowData.spMsg.length > 1"></i>
								<div class="recive flex0">
									<div class="lcInfo-t flex0">
										<div class="headImg">
											<img src="@/images/ksh/img_p_two.png">
										</div>
										<div class="userMsg">
											<p :title="item.zxr || 'XXX'" class="lancolor">{{item.zxr || 'XXX' | subString(6)}}</p>
											<p :title="item.bmmc">{{item.bmmc | subString(16) }}</p>
										</div>
									</div>
									<div class="line flex0"></div>
									<div class="lcInfo-c flex0">
										<p v-if="item.czsj">{{item.czsj | timestampToTime}}</p>
										<p v-else>XXXX-XX-XX XX:XX:XX</p>
										<div class="lcInfo-c1"><!--判断条件不足暂时用文字判断-->
											<p :class="item.czlx == '审批同意' ? 'green' : 'yellow'">{{ item.czlx }}</p>
											<div v-if="item.czlx != '待审批'" :class="item.czlx == '审批同意' ? 'green' : 'yellow'">
												<Icon type="md-checkmark" class="md-checkmark"/>											
												<i class="angle"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
							<i class="liney flex0" v-if="flowData.spMsg.length > 1"></i>
						</li>
					</div>				
				</ul>                
				<ul style="" class="bottom-ul flex0">
					<!-- <div class="line_center"></div> -->
					<div class="list flex0">
						<li class="bottom-approve flex0" :class="flowData.flowBody.length > 1 ? 'getLine' : ''" v-for="(item,index) in flowData.flowBody" :key="index">
							<!--虚线框内-->
							<div class="bottom-recive flex0">
								<i class="top-x flex0"></i>
								<div class="recive flex0" :class="Number(item.zt) >= 2 && Number(item.zt) <= 6 || Number(item.zt) == 8 ? '' : 'filterGray'">
									<div class="lcInfo-t flex0">
										<div class="headImg">
											<img src="@/images/ksh/img_p_two.png">
										</div>
										<div class="userMsg">
											<p :title="item.qsrxm || 'XXX'" class="lancolor">{{item.qsrxm || 'XXX' | subString(6)}}</p>
											<p :title="item.jsdwmc">{{item.jsdwmc | subString(16) }}</p>
										</div>
									</div>
									<div class="line flex0"></div>
									<div class="lcInfo-c flex0">
										<p v-if="item.qssj">{{item.qssj | timestampToTime}}</p>
										<p v-else>XXXX-XX-XX XX:XX:XX</p>
										<div class="lcInfo-c1">
											<p :class="Number(item.zt) >= 2 && Number(item.zt) <= 6 ? 'green' : 'yellow' ">{{ Number(item.zt) == 8 ? '拒绝签收' : Number(item.zt) >= 2 && Number(item.zt) <= 6 ? '已签收' : '待签收' }}</p>
											<div v-if="(Number(item.zt) >= 2 && Number(item.zt) <= 6)||Number(item.zt) == 8" :class="Number(item.zt) == 8 ? 'yellow' : 'green' ">
												<Icon type="md-checkmark" class="md-checkmark"/>											
												<i class="angle"></i>
											</div>
										</div>
									</div>
								</div>
								<i class="top-x flex0" style="margin-top:10px;"></i>
								<div class="recive flex0" :class="Number(item.zt) >= 3 && Number(item.zt) <= 6 ? '' : 'filterGray'">
									<div class="lcInfo-t flex0">
										<div class="headImg">
											<img src="@/images/ksh/img_p_two.png">
										</div>
										<div class="userMsg">
											<p :title="item.fkrxm || 'XXX'" class="lancolor">{{item.fkrxm || 'XXX' | subString(6)}}</p>
											<p :title="item.jsdwmc">{{item.jsdwmc | subString(16) }}</p>
										</div>
									</div>
									<div class="line flex0"></div>
									<div class="lcInfo-c flex0">
										<p v-if="item.fksj">{{ item.fksj | timestampToTime }}</p>
										<p v-else>XXXX-XX-XX XX:XX:XX</p>
										<div class="lcInfo-c1">
											<p :class="Number(item.zt) >= 3 && Number(item.zt) <= 6 ? 'green' : 'yellow'">{{ Number(item.zt) >= 3 && Number(item.zt) <= 6 ? '已反馈' : '待反馈' }}</p>
											<div v-if="Number(item.zt) >= 3 && Number(item.zt) <= 6">
												<Icon type="md-checkmark" class="md-checkmark"/>											
												<i class="angle"></i>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!--虚线框外-->
							<i class="top-x flex0" style="margin-top:10px;"></i>
							<div class="recive flex0" :class="Number(item.zt) == 5 || Number(item.zt) == 6 ? '' : 'filterGray'">
								<div class="lcInfo-t cl pj-spr flex0">
									<div class="headImg">
										<img src="@/images/ksh/img_p_two.png">
									</div>
									<div class="userMsg">
										<p :title="item.pjr || 'XXX'" class="lancolor">{{item.pjr || 'XXX' | subString(6) }}</p>
										<p :title="item.pjbmmc || flowData.flowMsg.bmmc" style="font-size: 12px;">{{item.pjbmmc || flowData.flowMsg.bmmc | subString(16) }}</p><!--评价部门应和发起部门相同-->
									</div>
								</div>
								<div class="line flex0"></div>
								<div class="lcInfo-c flex0">
									<p style="font-size: 12px;" v-if="item.pjrq">{{ item.pjrq | timestampToTime }}</p>
									<p style="font-size: 12px;" v-else>XXXX-XX-XX XX:XX:XX</p>
									<div class="lcInfo-c1">
										<p :class="Number(item.zt) == 5 || Number(item.zt) == 6 ? 'green' : 'yellow'">{{ Number(item.zt) == 5 || Number(item.zt) == 6 ? '已评价' : '待评价' }}</p>
										<div v-if="Number(item.zt) == 5 || Number(item.zt) == 6">
											<Icon type="md-checkmark" class="md-checkmark"/>											
											<i class="angle"></i>
										</div>
									</div>									
								</div>
							</div>
							<!-- <i class="top-y" v-show="flowData.flowBody!=1"></i> -->
						</li>
					</div>
					<!-- <div class="line_center"></div> -->
					<i class="top-x flex0"></i>
					<span class="end-box flex0" :class="{'green':flowData.flowBody[0].zt=='5' || flowData.flowBody[0].zt=='6'}"><!--当判断是已完成（5：已完成，6：出战果）显示为绿色-->
						<span class="end">结束</span>
					</span>					
				</ul>
			</div>
		</div>
</template>

<script>
	import api from '@/fetch/api.js';
	export default {
		data() {
			return {
				flowData:{
                    flowMsg:{},
                    spMsg:[],//审批信息....
                    flowBody:[
						{
							zt:0
						}
					]//签收反馈评价信息
                }
			}
        },
        created(){},
		mounted() {
			this.getSqxxDetail();
		},
		computed: {
			id() {
				return this.$route.query.id
			},			
		},
		filters: {
			ztFilter(val) {
				switch(val) {
					case '0':
						return '未审核'
						break;					
					case '1':
						return '已审核'
						break;
					case '2':
						return '已签收'
						break;
					case '3':
						return '已反馈'
						break;
					case '4':
						return '已研判'
                        break;
					case 'a':
						return '审批中'
						break;       
					case '5':
						return '已评价'
						break;   	
					case '6':
						return '已完成'
						break; 
					case '7':
						return '审批不通过'
						break;
					case '8':
						return '拒绝签收'
						break;												  											                 
					default:
						break;
				}
			},
			subString(val,cont){//当字符超过16个时加省略号....
				if(val){
					if(val.length > cont){
						return val.substr(0,cont) + '...';
					}else{
						return val;
					}
				}else{
					return 'XXX XXX'
				}
			}			
		},		
		methods: {
			getSqxxDetail() {
                let that = this;
				api.api('get', api.configUrl + '/hczz/qqxc/getFlow/' + this.id+'?type=2').then(res => {
                    res.clrzList.map((val,i,arr)=>{
                        if( val.czlx.indexOf("审批") != -1 ){
							that.flowData.spMsg.push(val);
                        }
                        if( val.czlx == "发起请求" ){
                            that.flowData.flowMsg = val;
                        }
                    })
					that.getflowBody();
				})
            },
            getflowBody(){//请求签收反馈信息
				api.api('get', api.configUrl + '/hczz/qqxc/getDetailById?sqid=' + this.id).then(res => {
					if(res.data.zt == 'a'){
						res.data.zt = 0.5;
					}
					this.flowData.flowBody = [res.data];
					this.getPj();
				})
            },
            getPj(){//请求评价详情
                let that = this;
				api.api('post', api.configUrl + '/hczz/hc/pj/getPjDetal', { id: this.id }).then(result => {
					if( result.length ){
                        Object.assign(that.flowData.flowBody[0],{ "pjbmmc":result[0].pjbmmc, "pjr":result[0].pjr, "pjrq":result[0].pjrq });//评价日期//评价人//评价部门名称
					}
					that.flowData.flowBody = Array.from(that.flowData.flowBody);
                })
            }
		}
	}
</script>

<style lang="less" scoped>
	@liWidth:210px;
	@liHeight:210px;
	@blue:#569BE4;
	@green:#58C278;
	@yellow:#EBAC00;
	.bodyWrap {
		overflow: auto;
		height: 100%;
		background: #fff;
		display: flex;
		flex-direction: column;	
		justify-content: center;
	}
	
	.lcTop {
		display: flex;
		position: relative;
		align-items: center;
		flex-direction: column;
	}
	
	.startJ {
		width: 80px;
		height: 110px;
		text-align: center;
	}
	
	 .startJ>div {
		height: 60px;
		width: 60px;
		border: 1px solid #88d47a;
		border-radius: 50%;
		line-height: 60px;
		text-align: center;
		box-sizing: border-box;
		background: #5dc17a;
		color: #fff;
		margin: 0 auto;
		z-index: 10;
		position: relative;		
	}
	.bottom-div{
		text-align: center;
		position: relative;
		display: flex;
		justify-content: center;		
		align-items: center;		
		margin: 0 auto;
		flex-direction: column;
		padding: 30px;
		width: 100%;
    	overflow: auto;
		justify-content: flex-start;	
		height: fit-content;	
	}
	.bottom-recive {
		position: relative;
		text-align: center;
		width: 100%;
	}
	
	 .recive {
		position: relative;
		height: 120px;
		border: 2px solid @blue;
		border-radius: 4px;
		text-align: left;
		display: flex;
		flex-direction: column;	
		overflow: hidden;
		width: 100%;
		.line{
			height: 1px;
			width: 85%;
			background: #E2E2E2;
			margin: 4px auto;
		}
		.lcInfo-c{
			flex: 1 1 auto;
			display: flex;
			flex-direction: column;
			>p{
				height: 50%;
				padding-left: 10px;
				line-height: 22px;	
				color: #A3A3A3;			
			}
			.lcInfo-c1{
				height: 50%;
				line-height: 29px;
				display: flex;
				justify-content: space-between;
				position: relative;
				>p{
					padding-left: 10px;
					line-height: 22px;
					font-weight: 600;
				}
				>p.green{
					color: @green;
				}
				>p.yellow{
					color: @yellow;
				}
				>div.yellow{
					.angle{
						border-bottom: 15px solid @yellow;
					}
				}
				.md-checkmark{
					color: white;
					line-height: 28px;	
					z-index: 10;			
					position: relative;	
					display: inline-block;
					height: 100%;
					vertical-align: top;
				}
				.angle{
					width: 0;
					height: 0;
					border-right: 15px solid transparent;
					border-left: 15px solid transparent;
					border-bottom: 15px solid @green;
					position: absolute;
					right: -10px;
					bottom: -2px;
					transform: rotate(135deg);
					z-index: 0;
				}
			}
		}	
	}
	.bottom-recive .recive:nth-child(2) {
		margin-bottom: 0 !important;
	}
	.lcInfo-t{
		border-radius: 8px 8px 0 0;
		height: 65px;
		padding: 8px 10px;
		display: flex;
		justify-content: left;		
		>.userMsg{
			display: flex;
			flex-direction: column;
			>p{
				height: 50%;
				padding-left: 10px;
			}
			>p.lancolor{
				line-height: 25px;
				color: @blue;
				font-size: 14px;
				font-weight: 600;				
			}
			>p:last-child{
				font-size: 12px;
				color: #B3B3B3;
				line-height: 16px;
			}
		}
	}
	
	.lcInfo-t>.headImg {
		position: relative;
		border-radius: 50%;
		overflow: hidden;
		height: 50px;
		width: 50px;
		text-align: center;
		flex: 0 0 auto;
		>img{
			width: auto;
			height: 100%;
		}
	}
	.bottom-ui.sh{
		min-height: 263px;
	}
	.bottom-ul{
		display: inline-block;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		max-width: 100%;
		.line_center{
			width: calc(100% - 208px);
			background-color: #dfe1e4;
			height: 2px;
		}
		.list{
			display: flex;
			width: 100%;
			overflow: auto;		
    		max-width: 100%;				
		}
		li.bottom-approve.getLine{
			&::after{
				content: '';
				display: inline-block;
				position: absolute;
				bottom: 0;
				width: 100%;
				background-color: #dfe1e4;
				height: 2px;				
				right: 0;
			}
			&::before{
				content: '';
				display: inline-block;
				position: absolute;
				top: 0;
				background-color: #dfe1e4;
				height: 2px;
				width: 100%;
				right: 0;
			}
			&:first-child{
				&::after{
					right: 0;
					left: unset;
					width: 50%;
				}
				&::before{
					right: 0;
					left: unset;
					width: 50%;
				}
			}
			&:last-child{
				&::after{
					right: unset;
					left: 0;
					width: 50%;
				}
				&::before{
					right: unset;
					left: 0;
					width: 50%;
				}
			}
		}
	}
	.top-x {
		display: inline-block;
    	width: 12px;
		height: 46px;
		background: url('~@/images/ksh/lcx_h.png') no-repeat;
		// transform: rotate(-270deg);
		background-position: top;
	}
	.flex0{
		flex: none;
	}
	.liney{
		display: inline-block;
		width: 2px;
		height: 46px;
		background-color: #dfe1e4;	
	}
	.top-y{
		display: inline-block;
		// margin-top:10px;
		width: 2px;
		height: 50px;
		background: #dfe1e4;		
	}
	.bottom-approve {
		position: relative;
		display: inline-block;
		min-width: @liWidth;
		width: @liWidth;
		text-align: left;
		padding: 0 5px;
		display: flex;
		flex-direction: column;
		align-items: center;	
		position: relative;	
	}
	.filterGray{
		filter: grayscale(100%);
	}	
	/* .xwbg {
		background-image: url(../../../../images/ksh/bg_xw.png);
	}
	 */
	.end-box {
		width: 70px;
		height: 70px;
		display: inline-block;
		background: #dcdcdc;
		border-radius: 50%;
		text-align: center;
		line-height: 72px;
	}
	.end-box.green{
		background-color: @green;
	}	
	.end {
		color:#fff;
	}
</style>