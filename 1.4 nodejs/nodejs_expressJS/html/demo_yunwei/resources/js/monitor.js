var ecList = {};

$(function() {
    var $monitorList = $('.m-monitor-list'),
        $monitorListTitle = $('.m-monitor-title', $monitorList),
        $monitorInfoTabsLi = null;
    var options = {};
       
    $monitorListTitle.on('click', function() {
        var $that = $(this);
        $that.parent().toggleClass('active');
        // 联带点击事件 : 点击‘磁盘空间’ － 联带点击‘最近1天’
        $that.parent().find('li').eq(0).trigger('click');
    });

    for (var i = 0; i < $monitorList.children('li').length; i++) {
        var $monitorInfoList = $monitorList.children('li').eq(i).find('li');
        $monitorInfoList.on('click', function() {
            $(this).parent().find('li').removeClass('active');
            $(this).addClass('active');
            // 点击时间按钮，获取参数，参数list见getParams方法
            options.params = getParams($(this));
            // 处理获取的options，新增echartsFormat字段，用于将00:00转换为x月x日
            options.params.echartsFormat = modifyParams(options);
            // 处理获取的options，新增step字段，用于区分0.5小时与其他天数的x轴步长
            options.params.step = modifyParams_step(options);
            // 获取异步数据
            ksc.rds.monitor.getRdsMonitor(options.params, function(data) {
                // 处理异步数据
                options.series = dataModify(data.data);
                // 绘制echarts图表
                var myChart = echartsDraw(options);
                // echarts图表自适应
                // ecList.push(myChart);
            });
        })
    }
    init();
});

// 初始化: 默认点击‘磁盘空间－最近1天’
function init() {
    var $li = $('.m-monitor-list > li');
    $li.eq(0).trigger('click');
    $li.find('.m-monitor-info li').eq(0).trigger('click');

    window.onresize = function(){
        for(index in ecList){
            ecList[index].resize();
        }
    }
}

// 获取echart所需参数，放在options对象里
function getParams($this) {
    var params = {};
    // echarts，画图的params参数
        params.uuid = $('#monitor_rdsid').val();
    params.metric = $this.parent().closest('li').data('metric');
    params.time_type = parseInt($this.data('timetype'));
    params.time_value = parseInt($this.data('timevalue'));
    // echarts，画图的echartID
    params.echartId = $this.closest('.m-monitor-info-tabs').next().attr('id');
    // 本地调试 : 假数据用
    params.url = $this.parent().closest('li').data('dayname') + $this.data('day');
    return params;
}

// 处理echart所需参数：echartsFormat_seven，放在options对象里
function modifyParams(options) {
    var time_type = options.params.time_type;
    var time_value = options.params.time_value;
    if (time_type === 4 && time_value === 1) {
        return echartsFormat_one;
    }
    if (time_type === 4 && time_value === 3) {
        return echartsFormat_three;
    }
    if (time_type === 5 && time_value === 1) {
        return echartsFormat_seven;
    }
}

function echartsFormat_one(value) {
    if (value.substr(1, 1) === '月' || value.substr(2, 1) === '月' || value.substr(0, 4) === '4:00' || value.substr(0, 4) === '8:00' || value.substr(0, 5) === '12:00' || value.substr(0, 5) === '16:00' || value.substr(0, 5) === '20:00') {
        return value;
    }
}

function echartsFormat_three(value) {
    if (value.substr(1, 1) === '月' || value.substr(2, 1) === '月' || value.substr(0, 5) === '12:00') {
        return value;
    }
}

function echartsFormat_seven(value) {
    // if (value.substr(1, 1) === '月' || value.substr(2, 1) === '月'){
    //     return value;
    // }
    var result = value.search('日');
    if (result !== -1) {
        return value;
    }
}

// 处理步长方法
function modifyParams_step(options) {
    var time_type = options.params.time_type;
    var time_value = options.params.time_value;
    if (time_type === 2 && time_value === 30) {
        return 11;
    }
    else{
        return 0;
    }
}

// 处理异步请求数据
function dataModify(data) {
    var series = {};
    var draw_x_datas = [],
        draw_y_datas = [],
        charts = [],
        chartname = [];
    var toZh;

    // 处理x轴数据(data.xAxais)，将logTime转换为24时制
    for (var i = 0; i < data.xAxais.length; i++) {
        var dataLogTime = new Date(parseInt(data.xAxais[i]) * 1000);
        var month = dataLogTime.getMonth()+1;
        var day = dataLogTime.getDate();
        var hour = dataLogTime.getHours();
        var minute = dataLogTime.getMinutes();
        if (hour === 0 && minute === 0) {
            tempDate = month + '月' + day + '日';
            data.xAxais[i] = tempDate;
        } else if (minute < 10) {
            tempDate = hour + ':0' + minute;
            data.xAxais[i] = tempDate;
        } else {
            tempDate = hour + ':' + minute;
            data.xAxais[i] = tempDate;
        }
    }
    // 处理y轴数据(data.yAxais)，将数据名称push到chartname数组，将每组数据值push到charts数组
    for (var index in data.yAxais) {
        // echarts，标题英文转换中文
        switch (index) {
            case 'quotasUsed':
                toZh = '磁盘空间配额使用百分比';
                break;
            case 'qps':
                toZh = '每秒查询数';
                break;
            case 'tps':
                toZh = '每秒事务数';
                break;
            case 'maxConnection':
                toZh = '最大连接数';
                break;
            case 'usedConnection':
                toZh = '当前连接数';
                break;
            case 'rbps':
                toZh = '磁盘每秒读字节数';
                break;
            case 'wiops':
                toZh = '磁盘每秒写次数';
                break;
            case 'wbps':
                toZh = '磁盘每秒写字节数';
                break;
            case 'riops':
                toZh = '磁盘每秒读次数';
                break;
            case 'usage_in_bytes':
                toZh = '已使用内存数';
                break;
            case 'limit_in_bytes':
                toZh = '最大内存数';
                break;
            default:
                break;
        }
        var arr = {
            "name": toZh,
            "type": "line",
            "data": data.yAxais[index],
            smooth: true,
            symbol: 'none',
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            }
        }
        charts.push(arr);
        chartname.push(toZh);
    }
    series.chartname = chartname;
    series.draw_x_datas = data.xAxais;
    series.draw_y_datas = charts;
    return series;
}

// echarts绘制方法
function echartsDraw(options) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById(options.params.echartId));
    var option = {
        color: ['#6eb5e5', '#4bc38d'],
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            y: 40
        },
        //控制右侧对应点的位置
        legend: {
            x: 'center',
            y: 'bottom',
            data: options.series.chartname
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: options.series.draw_x_datas,
            boundaryGap: false,
            axisLabel: {
                interval: options.params.step,
                formatter: options.params.echartsFormat
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false,
                length: 1,
                inside: true,
                lineStyle: {
                    color: '#666'
                }
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: options.series.draw_y_datas
    };

    // 为echarts对象加载数据 
    myChart.setOption(option);

    var id = parseInt(myChart.id);
    ecList['e'+ id] = myChart;
    if($.isEmptyObject(ecList)){
        ecList['e'+ id] = myChart;
    }

    return myChart;
}
