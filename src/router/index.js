import Vue from 'vue';
import iView from 'iview';
import Util from '../libs/util';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import { routers } from './router';
import store from '@/store/index.js';
import api from '@/fetch/api';
import Main from '@/views/Main.vue';
import $ from 'jquery';
import lazyLoading from '@/store/modules/lazyLoading';

Vue.use(VueRouter);
// 路由配置
const RouterConfig = {
	routes: routers
};
export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
//	await SetToken.verifySet()
	iView.LoadingBar.start();
	Util.title(to.meta.title);
	if(to.query.token != null) {
		Cookies.set('token', to.query.token);
		Cookies.set('user', to.query.user);
	}
	if(Cookies.get('locking') === '1' && to.name !== 'locking') { // 判断当前是否是锁定状态
		next({
			replace: true,
			name: 'locking'
		});
	} else if(Cookies.get('locking') === '0' && to.name === 'locking') {
		next(false);
	} else {
		if(!Cookies.get('user') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
			next({
				name: 'login'
			});
		} else if(Cookies.get('user') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
			Util.title();
			next({
				name: 'home_index'
			});
		} else {
			if(Cookies.get('user')) {
				api.api('post', api.loginUrl + '/login/getTreeResources', {
							clientName: '合成作战平台'
						})
						.then(res => {
							// console.log(res);
							let tagsList = [];
							res.map((item) => {
								if(item != null) {
									if(item.children.length > 0) {
										let children = [];
										item.children.map((item) => {
											children.push({
												path: item.resourceName + 'Manager',
												title: item.title,
												name: item.resourceName + 'Index',
												component: lazyLoading(item.resourceVal)
											});
										});
										tagsList.push({
											path: '/' + item.resourceName,
											icon: item.icon,
											name: item.resourceName,
											title: item.title,
											resourceId: item.id,
											resourceName: item.resourceName,
											component: Main,
											children: children,
											resourceVal:item.resourceVal
										});
									} else {
										tagsList.push({
											path: '/' + item.resourceName,
											icon: item.icon,
											name: item.resourceName,
											title: item.title,
											resourceId: item.id,
											resourceName: item.resourceName,
											resourceVal:item.resourceVal,
											component: Main,
											children: [{
												path: item.resourceName + 'Manager',
												title: item.title,
												name: item.resourceName + 'Index',
												component: lazyLoading(item.resourceVal)
											}]
										});
									}
								}
							});
							router.addRoutes(tagsList);
							store.commit('setMymenu', tagsList);
//							store.commit('updateMenulist');
							window.localStorage.setItem('menuList', JSON.stringify(tagsList));
						});
			}
			Util.toDefaultPage([...routers], to.name, router, next);
		}
	}
});

router.afterEach((to) => {
	Util.openNewPage(router.app, to.name, to.params, to.query);
	iView.LoadingBar.finish();
	window.scrollTo(0, 0);
});