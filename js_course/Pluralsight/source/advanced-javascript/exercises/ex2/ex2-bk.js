var NotesManager = (function(){

	/*
	 * 私有属性
	 */
	var
		// private `notes` data
		notes = [],

		// DOM refs
		$notes;

	/*
	 * 私有方法
	 */
	function fn_name (options) {
		// fn content
	}

	function loadData(data) {
		for (var i=0; i<data.length; i++) {
			notes.push(data[i]);
		}
	}

	function init(opts) {
		// cache references to the DOM elements we need to manage
		$notes = $(opts.notes);	 // 见私有属性处, 已定义

		/*
		 * 事件绑定
		 */
		$open_help.bind("click",handleOpenHelp);
	}

	
	/*
	 * 公有 API : publicAPI
	 */
	var publicAPI = {
		loadData: loadData,
		init: init
	}
	return publicAPI;

})();


// assume this data came from the database
NotesManager.loadData([
	"This is the first note I've taken!",
	"Now is the time for all good men to come to the aid of their country.",
	"The quick brown fox jumped over the moon."
]);


$(document).ready(function(){
	NotesManager.init({
		notes: "#notes"
	});
});
