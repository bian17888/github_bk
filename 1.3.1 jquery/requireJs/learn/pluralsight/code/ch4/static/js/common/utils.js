/**
 * Created by bian17888 on 15/10/22.
 */

 define(['init'], function(){

	 /**
	  * 通用 ajax 方法
	  * @param params
	  * @param fnOk
	  * @param fnError
	  * @constructor
	  */
	 function gbAjax (params, fnOk, fnError) {
		 $.ajax({
			 type      : params.type || 'get',
			 url       : params.url,
			 dataType  : 'json',
			 data      : params.data || {},
			 success   : fnOk,
			 error     : function () {
				 console.log('ajax error!')
			 },
			 beforeSend: function () {
				 var dom = '<div style="opacity: 0" class="ajax-loading-wrap"><img class="ajax-loading" src="/static/images/loading.gif" /></div>';
				 $('#' + params.id).html(dom);
				 $('.ajax-loading-wrap').animate({'opacity':1},1500);
			 },
			 complete  : function () {
				 $('.ajax-loading-wrap').remove();
			 }
		 })
	 }


	 /**
	  * 顶部 Tip 弹窗 : 用于提示错误信息
	  */
	 function errorTip(){
		 $('.error-tip').slideDown();
		 setTimeout(function(){
			 $('.error-tip').slideUp();
		 },3000)
	 }


	 /**
	  * 导出模块
	  */
	 return {
		 gbAjax : gbAjax,
		 errorTip : errorTip
	 }

 })