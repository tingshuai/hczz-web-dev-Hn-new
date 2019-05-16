<template>
		<div class="bodyWrap">
			<!--签收反馈评价-->
			<div style="" class="bottom-div">
				<div class="lcTop flex0">
					<div class="startJ flex0">
						<!--开始标记-->
						<div>
							开始
						</div>
						<i class="top-x"></i>
					</div>
					<ul class="bottom-ul flex0">
						<li class="bottom-approve flex0">
							<div class="bottom-recive flex0">
								<div class="recive flex0">
									<div class="lcInfo-t flex0">
										<div class="headImg">
											<img src="@/images/ksh/img_p_two.png">
										</div>
										<div class="userMsg">
											<p :title="zlObj.czrxm || 'XXX'" class="lancolor">{{ zlObj.czrxm | subString(6)}}</p>
											<p :title="zlObj.czrdwmc">{{zlObj.czrdwmc | subString(16) }}</p>
										</div>
									</div>
									<div class="line flex0"></div>
									<div class="lcInfo-c flex0">
										<p>{{zlObj.slsj | timestampToTime}}</p>
										<div class="lcInfo-c1">
											<p class="green">发起指令</p>
											<div>
												<Icon type="md-checkmark" class="md-checkmark"/>											
												<i class="angle"></i>
											</div>
										</div>
									</div>								
								</div>
							</div>	
						</li>
						<i class="top-y flex0" v-show="jsbmList.length!=1"></i>
					</ul>
				</div>				
				<ul class="bottom-ul flex0">
					<!-- <div class="line_center"></div> -->
					<div class="list flex0">
						<li class="bottom-approve flex0" :class="jsbmList.length > 1 ? 'getLine' : ''" v-for="(item,index) in jsbmList" :key="index">
							<!--虚线框内-->
							<div class="bottom-recive flex0">
								<i class="top-x flex0"></i>
								<div class="recive flex0" :class="Number(item.zt) > 1 ? '' : 'filterGray'">
									<div class="lcInfo-t flex0">
										<div class="headImg">
											<img src="@/images/ksh/img_p_two.png">
										</div>
										<div class="userMsg">
											<p :title="item.qsrxm || 'XXX'" class="lancolor">{{item.qsrxm || 'XXX' | subString(6)}}</p>
											<p :title="item.jsdwmc || 'XXX XXX'">{{item.jsdwmc | subString(16)}}</p>
										</div>
									</div>
									<div class="line flex0"></div>
									<div class="lcInfo-c flex0">
										<p style="font-size: 12px;" v-if="item.qssj">{{ item.qssj | timestampToTime }}</p>
										<p style="font-size: 12px;" v-else>XXXX-XX-XX XX:XX:XX</p>										
										<div class="lcInfo-c1">
											<p :class=" Number(item.zt) > 1 ? 'green' : 'yellow' ">{{ Number(item.zt) > 1 ? '已签收' : '待签收' }}</p>
											<div v-if="Number(item.zt) > 1">
												<Icon type="md-checkmark" class="md-checkmark"/>											
												<i class="angle"></i>
											</div>
										</div>
									</div>
									<!-- <i class="bottom-x"></i> -->
								</div>
								<i class="top-x flex0" style="margin-top:10px;"></i>
								<div class="recive flex0" :class="Number(item.zt) >= 3 ? '' : 'filterGray'">
									<div class="lcInfo-t flex0">
										<div class="headImg">
											<img src="@/images/ksh/img_p_two.png">
										</div>
										<div class="userMsg">
											<p :title="item.fkrxm || 'XXX'" class="lancolor">{{item.fkrxm || 'XXX' | subString(6)}}</p>
											<p :title="item.jsdwmc || 'XXX XXX'">{{item.jsdwmc | subString(16)}}</p>
										</div>
									</div>
									<div class="line flex0"></div>
									<div class="lcInfo-c flex0">
										<p style="font-size: 12px;" v-if="item.fksj">{{ item.fksj | timestampToTime }}</p>
										<p style="font-size: 12px;" v-else>XXXX-XX-XX XX:XX:XX</p>											
										<div class="lcInfo-c1">
											<p :class="Number(item.zt) >= 3 ? 'green' : 'yellow'">{{ Number(item.zt) >= 3 ? '已反馈' : '待反馈' }}</p>
											<div v-if="Number(item.zt) >= 3">
												<Icon type="md-checkmark" class="md-checkmark"/>											
												<i class="angle"></i>
											</div>
										</div>
									</div>
								</div>
								<!-- <i class="bottom-x"></i> -->
							</div>
							<!--虚线框外-->
							<i class="top-x flex0" style="margin-top:10px;"></i>
							<div class="recive flex0" :class="Number(item.pjzt) == 1 ? '' : 'filterGray'">
								<!-- <i class="top-x-bottom" v-show="jsbmList.length!=1"></i> -->
								<div class="lcInfo-t flex0">
									<div class="headImg">
										<img src="@/images/ksh/img_p_two.png">
									</div>
									<div class="userMsg">
										<p :title="item.pjr || 'XXX'" class="lancolor">{{item.pjr || 'XXX' | subString(6) }}</p>
										<p :title="item.pjrdw || zlObj.czrdwmc">{{item.pjrdw || zlObj.czrdwmc | subString(16) }}</p><!--评价部门应为发起部门-->
									</div>
								</div>
								<div class="line flex0"></div>
								<div class="lcInfo-c flex0">
									<p style="font-size: 12px;" v-if="item.pjsj">{{ item.pjsj | timestampToTime }}</p>
									<p style="font-size: 12px;" v-else>XXXX-XX-XX XX:XX:XX</p>							
									<div class="lcInfo-c1">
										<p :class="Number(item.pjzt) == 1 ? 'green' : 'yellow'">{{ Number(item.pjzt) == 1 ? '已评价' : '待评价' }}</p>
										<div v-if="Number(item.pjzt) == 1">
											<Icon type="md-checkmark" class="md-checkmark"/>											
											<i class="angle"></i>
										</div>
									</div>									
								</div>
							</div>
							<i class="top-y flex0" v-show="jsbmList.length!=1"></i>
						</li>
					</div>
					<!-- <div class="line_center"></div> -->
					<i class="top-x flex0"></i>
					<span class="end-box flex0" :class="{'green':isAllOver}">
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
				isAllOver:true,//是否全部评价完.....
				isqs: false,
				isfq: false, //发起
				issp: false, //审批
				iszf: false, //转发
				spr: [], //审批人集合
				fqr: [], //发起人
				zlObj: {},
				list: [1],
				gzlList: [],
				jsbmList: [],
				zfinfo: {},
				zlcgpj: [],
				iszxqsry: false,
				left: 0,
				top: 0
			}
		},
		mounted() {
			this.getZlDetail();

		},
		computed: {
			zlid() {
				return this.$route.query.zlid
			}
		},
		filters: {
			ztFilter(val) {
				switch(val) {
					case '1':
						return '待签收'
						break;
					case '2':
						return '已签收'
						break;
					case '3':
						return '已反馈'
						break;
					case '4':
						return '已评价'
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
			getZlDetail() {
				api.json('post', api.configUrl + '/hczz/zl/getZlxxDetail', {
					id: this.zlid
				}).then(res => {
					this.zlObj = res;
					if(this.zlObj.parentid) {
						this.zfinfo = res;
						this.iszf = true;
						this.getZlDetailAgain(this.zlObj.parentid); //获取上级指令id
					} else {
						this.getGzl(this.zlObj.id); //
					}
					this.getJSBM(this.zlObj.id); //获取接收的单位
				})
			},
			getZlDetailAgain(id) {
				api.json('post', api.configUrl + '/hczz/zl/getZlxxDetail', {
					id: id
				}).then(res => {
					this.zlObj = res;
					this.getGzl(this.zlObj.id); //
				})
			},
			getGzl(id) {
				api.json('get', api.configUrl + '/hczz/common/clrz/getClrzList?glid='+id).then(res => {
					this.gzlList = res;
					this.spr = [];
					this.fqr = [];
					$.each(res, (index, value) => {
						if(value.cznr != null && value.cznr.indexOf("新增") > -1) {
							this.isfq = true;
							this.fqr = value; //发起人数组
						} else if(value.cznr != null && value.cznr.indexOf("审批") > -1) {
							this.issp = true;
							this.spr.push(value); //审批人
							this.spr=[];
							if(index < 2) {
								this.getJsInfo(value.czrid);
							}

						}
					})
				})
			},
			getJSBM(id) {
				api.json('post', api.configUrl + '/hczz/zl/getDetailZlxx', {
					id: id
				}).then(res => {
					this.getZlcgpjList(id, res.zldwgl);
				})
			},
			getJsInfo(id) { //获取是否该角色
				api.api("get", api.systemUrl + '/role/getRolesByAccountId?accountId=' + id, {}).then(res => {
					this.iszxqsry = false;
					$.each(res, (index, item) => {
						if(item.roleName == "中心签收员") {
							this.iszxqsry = true;
						}
					})
				})
			},
			getZlcgpjList(id, zldwgl) {
				api.json('post', api.configUrl + '/hczz/zl/getZlcgpjList', {
					id: id
				}).then(res => {
					let _zldwgl = zldwgl.filter(item=>{
						return item.lx==1//类型为接收单位....
					});
					this.isAllOver = res.every((item)=>{
						return item.zt == '1'
					})
					_zldwgl.forEach((item,i,arr) => {
						res.forEach((it,ii,array) =>{
							if( item.id == it.zldwglid ){
								arr[i].pjzt = it.zt;
								arr[i].pjr = it.pjrxm;
								arr[i].pjsj = it.pjsj;
								arr[i].pjrdw= it.pjbmmc;								
							}
						})
					});
					this.jsbmList = _zldwgl;
					console.log(33333,this.jsbmList);
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
	ul,
	li {
		list-style: none;
	}
	
	p {
		margin: 0;
	}
	
	.fl {
		float: left;
	}
	
	.cl:before {
		content: '';
		display: inline-block;
		clear: both;
	}
	
	.ptop17 {
		position: relative;
		top: 17px
	}
	
	.ml10 {
		margin-left: 10px;
	}
	
	.font12 {
		font-size: 12px;
	}
	
	/*.lancolor {
		color: #88d47a;
	}*/
	
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
	
	.startX {
		width: 70px;
		height: 16px;
		background: url('~@/images/ksh/lcx.png') no-repeat;
		transform: rotate(90deg);
		background-size: 100% 100%;
		display: inline-block;
		top: 10px;
		position: relative;
		z-index: 0;		
	}
	
	.lcTopUl {
		/* color: green; */
		position: relative;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;		
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
	.lcTopUl>li,
	.lcMiddle>div,
	.lcMiddle ul li {
		position: relative;
		width: @liWidth;
		height: 140px;
		border: 1Px solid @blue;
		border-radius: 8px;
		float: left;
		background: #f9f8f9;
	}
	
	.lcMiddle .directive {
		left: 560px;
		top: 80px;
	}
	
	.top-right {
		float: left;
		margin-left: 80px;
		border: 1Px solid #b8e5af;
		padding: 16px;
		position: relative;
		border-radius: 8px;
	}
	
	.top-right>p {
		position: absolute;
		top: -22px;
		text-align: center;
		width: 100%;
		font-size: 14px;
	}
	
	.top-right .box {
		margin-right: 5px;
		position: relative;
		width: 250px;
		height: 140px;
		border: 1Px solid #b8e5af;
		border-radius: 8px;
		float: left;
		background:#f9f8f9;
	}
	
	.top-right .bottom-x {
		left: 300px;
	}
	
	.bottom-recive {
		// float: left;
		/*border: 1Px solid #b8e5af;*/
		/*padding: 10px 0 10px 10px;*/
		position: relative;
		text-align: center;
		width: 100%;
		/*background: #f9f8f9;*/
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
				.md-checkmark{
					color: white;
					line-height: 28px;	
					z-index: 10;			
					position: relative;	
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
	
	.bottom-w {
		background: #f9f8f9;
		position: relative;
		width: 100%;
		height: 140px;
		border: 1Px solid #b8e5af;
		clear: both;
		border-radius: 8px;
	}
	
	.bottom-recive .recive:nth-child(2) {
		margin-bottom: 0 !important;
	}
	
	// .bottom-recive>.bottom-x {
	// 	// left: 56px;
	// }
	
	.lcTopUl>li:nth-child(2) {
		margin: 0 80px;
	}
	
	.zdInfo {
		width: calc(100% - 50px);
	}
	
	.zdInfo>p:nth-child(2) {
		font-size: 12px;
		color: #2576d2;
		font-weight: bold;
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
	
	.lcInfo-b {
		color:#57c1da;
	}
	.flex0{
		flex: none;
	}
	.right-x {
		position: absolute;
		display: inline-block;
		width: 70px;
		height: 16px;
		background: url('~@/images/ksh/lcx.png') no-repeat;
		background-size: 100% 100%;
		right: -80px;
		top: 59px;
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
			height: fit-content;		
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
	.bottom-x {
		position: absolute;
		display: inline-block;
		width: 70px;
		height: 16px;
		background: url('~@/images/ksh/lcx.png') no-repeat;
		background-size: 100% 100%;
		margin-left: 34%;
		bottom: -49px;
		transform: rotate(90deg);
	}
	
	.move-x {
		position: absolute;
		display: inline-block;
		width:70px;
		height: 16px;
		background: url('~@/images/ksh/lcx.png') no-repeat;
		background-size: 100% 100%;
		/*left: 66px;*/
		bottom: -49px;
		transform: rotate(90deg);
	}
	
	.line-x {
		position: absolute;
		display: inline-block;
		width: 260px;
		height: 16px;
		background: url('~@/images/ksh/lcx.png') no-repeat;
		background-size: 138% 100%;
		left: 0;
		top: -55px;
	}
	
	.first-line {
		width: 156px;
		transform: translate(104px);
		position: absolute;
		display: inline-block;
		height: 16px;
		background: url('~@/images/ksh/lcx.png') no-repeat;
		background-size: 138% 100%;
		left: 0;
		top: -55px;
	}
	
	.bottom-left-line {
		width: 155px;
		transform: translate(104px);
		position: absolute;
		display: inline-block;
		height: 16px;
		background: url('~@/images/ksh/lcx.png') no-repeat;
		background-size: 138% 100%;
		left: -7px;
		bottom: 177px;
	}
	
	.end-line {
		width: 109px;
		position: absolute;
		display: inline-block;
		height: 16px;
		background: url('~@/images/ksh/lcx.png') no-repeat;
		background-size: 138% 100%;
		left: 0;
		top: -55px;
	}
	
	.bottom-right-line {
		width: 104px;
		position: absolute;
		display: inline-block;
		height: 16px;
		background: url('~@/images/ksh/lcx.png') no-repeat;
		background-size: 138% 100%;
		left: -8px;
		bottom: 177px;
	}
	
	.top-x {
		display: inline-block;
    	width: 12px;
		height: 46px;
		background: url('~@/images/ksh/lcx_h.png') no-repeat;
		// transform: rotate(-270deg);
		background-position: top;
	}
	.top-y{
		display: inline-block;
		// margin-top:10px;
		width: 2px;
		height: 50px;
		background: #dfe1e4;		
	}
	.top-x-bottom {
		// position: absolute;
		display: inline-block;
		width: 70px;
		height: 46px;
		background: url('~@/images/ksh/lcx_h.png') no-repeat;
		background-size: 50% 100%;
		// left: 30%;
		// top: -9px;
		// transform: rotate(-270deg);
	}
	
	.bottom-x-bottom {
		width: 70px;
		height: 16px;
		background: url('~@/images/ksh/lcx_h.png') no-repeat;
	}
	
	.lcMiddle {
		margin-top: 77px;
		margin-left: 72px;
		border: 1Px dotted @blue;
		width: 925px;
		clear: both;
		padding: 0 20px 30px;
	}
	
	.lcMiddle>ul>li {
		float: left;
		margin-left: 70px;
		margin-top: 17px;
	}
	
	.lcMiddle>ul>li:last-child {
		margin-right: 0;
	}
	
	.lcMiddle>div,
	.lcMiddle ul li {
		width: 250px;
	}
	
	.lcMiddle>div .zdInfo,
	.lcMiddle ul li .zdInfo {
		width: 70%;
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
	.bg-green {
		background: #fff;
	}
	
	.bg-blue {
		background: #fff;
	}
	
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
	
	.bottom-all-line {
		top: 453px;
		left: -8px;
	}
</style>