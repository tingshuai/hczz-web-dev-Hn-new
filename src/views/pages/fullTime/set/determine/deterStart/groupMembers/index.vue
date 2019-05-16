<template>
	<div>
		<div class="clearfix">
			<Modal v-model="visible" title="处理部门" class="modal-ct" width="550" :styles="{top: '250px'}" @on-cancel="cancelBtn">
				<div slot="footer">
					<Button @click="cancelBtn">取消</Button>
				</div>
				<div class="groupMembers">
					<!-- <div v-for="item in list">
						<h3>{{item.jzjc}}</h3>
						<ul class="membersImg">
							<li v-for="itemMember in item.userList">
								<img src="../../../../../../../images/icon_person_outline.png" alt="" />
								<p>{{itemMember.userName}}</p>
							</li>
						</ul>
					</div> -->
					<div v-for="(it,ii) in groupMsg" :key="ii" class="item">
						<h3>{{it.jzjc}}:</h3>
						<ul>
							<li v-for="(item,index) in it.jzbmList" :key="index">{{ item.bmqc }}</li>
						</ul>
					</div>
				</div>
			</Modal>
			
		</div>
	</div>
</template>

<script>
	import addMembers from '@/views/pages/workBench/groupModal/selectModal';
	import api from '@/fetch/api';
	export default {
		components:{
			addMembers
		},
		props:{
			groupFnc:{
				type:Promise
			},
			show:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				visible:this.show,
				firstLeader:{},//组长
				secondLeader:[],//副组长
				memberList:[],//组员
				list:[],
				groupMsg:[]
			}
		},
		watch:{
			show(val){
				this.visible=val;
			}
		},
		mounted() {
			console.log(12315555,this.groupFnc)
            this.groupFnc.then(res=>{
							console.log(1231,123123)
            	this.list=res.jzList;
            	this.list.forEach(item=>{
            		api.api('get',api.configUrl+'/hczz/jzpz/queryDetail/'+item.jzpzid).then(resS=>{
            			let arr=resS.jzbmList;
            			let brr=[];
            			arr.forEach(itemBrr=>{
            				brr.push(itemBrr.bmbh)
            			})
						this.$set(item,'officeCode',brr.join(','))
						console.log("resS",resS);
						this.groupMsg.push(resS);
						
						// resS.forEach((item,index)=>{
						// 	item.jzList.forEach((it,i)=>{
						// 		console.log(it);
								
						// 	})
						// })
					})
				})
				console.log(65454,this.groupMsg);
				
            	setTimeout(()=>{
            		this.list.forEach(item=>{
	            		api.api('get',api.systemUrl+'/account/info/queryPage2',{
	            			officeCode:item.officeCode
	            		}).then(result=>{
	            			
	            			this.$set(item,'userList',result.list)
	            		})
	            	})
            	},500)
            })
		},
		methods: {
			cancelBtn(){
				this.$emit('update')
			}
		}
	};
</script>
<style lang="less" scoped>
	.modal-ct{
		/deep/ .item{
			margin: 10px;
		}
	}
	.groupMembers{
		text-align: left;
		.membersImg{
			display: flex;
			justify-content: flex-start;
			list-style: none;
			flex-wrap: wrap;
			max-height:300px;
			overflow:auto;
			li{
				width: 20%;
			}
		}
	}
	
</style>
