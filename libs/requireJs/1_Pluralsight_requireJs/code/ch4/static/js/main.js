/**
 * Created by bian17888 on 15/11/12.
 */

/**
 * require config
 */
require.config({
	baseUrl: '../../',
	paths  : {
		"jquery"      : "libs/jquery/dist/jquery.min",
		"underscore"  : "libs/underscore/underscore-min",
		"bootstrap"   : "libs/bootstrap/dist/js/bootstrap.min",
		"validate"    : "libs/jquery-validation/dist/jquery.validate.min",
		"jquery.ui"   : "libs/jquery-ui-redmond/jquery-ui.min",
		//"timepicker": "libs/jqueryui-timepicker-addon/dist/jquery-ui-timepicker-addon.min",
		//"datatables.net" : "libs/datatables.net/js/jquery.dataTables.min",
		//"datatables.net.bs" : "libs/datatables.net-bs/js/dataTables.bootstrap.min",
		"mediaelement": "libs/mediaelement/build/mediaelement-and-player.min",
		"init"        : "js/common/init",
		"utils"       : "js/common/utils"
	},
	shim   : {
		"underscore"  : {
			exports: "_"
		},
		//"timepicker" : {
		//	deps: ['jquery', 'jquery.ui']
		//},
		//"datatables.net" : {
		//	deps: ['jquery']
		//}
		"mediaelement": {
			deps: ['jquery']
		}
	}
});

