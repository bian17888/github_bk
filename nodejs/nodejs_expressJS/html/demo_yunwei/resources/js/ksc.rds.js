var ksc = ksc || {};

void (function () {
	var rds = {};

	// 获取RDS资源监控charts数据
	var monitor = {};
	
	monitor.getRdsMonitor = function(options, callback){

		var url =  '/monitor';
		// var url = ksc.util.getFakeUrl('rds/api/monitor/' + options.url);
		var data = {
			"metric" : options.metric,
			"uuid" : options.uuid,
			"time_type" : options.time_type,
			"time_value" : options.time_value,
		}
		$.ajax({
			url: url,
			type: 'post',
			complete: function(){
				$('.m-monitor-info-unit').show();
			},
			data: data,
            dataType : 'json',
			success: function(data){
				if(callback !== undefined && typeof(callback) === 'function' ){
					callback(data);
				}
			}
		}); 
	};
	
	rds.monitor = monitor;

	ksc.rds = rds;

})();