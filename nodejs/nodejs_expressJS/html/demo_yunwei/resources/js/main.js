$(function(){
  init();
  bindEvent();

  function init (){

  }

  function bindEvent (){
    getData();
  }

  function getData () {
      var uuid = '',
          ip = '';
      var dataM = {};

      $('#btn_submit').click(function(){
          $.ajax({
              url:'/',
              type:'POST',
              data : {uuid : uuid, ip : ip},
              dataType : 'json',
              success : function(data){
                  modify(data);
                  showInfo();
              }
          })
      });

      // 获取表单value
      $('#uuid').blur(function(){
          uuid = $(this).val();
      });
      $('#ip').blur(function(){
          ip = $(this).val();
      });



      // 格式化数据： 将返回的json数据过滤出来，提到dataM对象内
      function modify(data){
        var x, y, z;
        var str = '';
        for (x in data ) {
            var type1st = typeof(data[x]);
            if(type1st === 'object'){
                if(x === 'securityRuleList'){
                    for(y in data[x]){
                        if(typeof(data[x][y]) === 'object'){
                            for(z in data[x][y]){
                                if(z === 'cidr'){
                                    str = str + data[x][y][z] + '  ';
                                }
                            }
                        }
                    }
                    dataM[x] = str;
                }
                else{
                    for(y in data[x]){
                        var type2st = typeof(data[x][y]);
                        dataM[y] = data[x][y];
                    }
                }
            }
            else {
                dataM[x] = data[x];
            }
        }
        dataM.status = data.instance.status;
        dataM.createTime = formateTime(dataM.createTime);
        dataM.xx = "待确定项";
      }
      // 将数据写入dom
      function showInfo(){
        $('span').each(function(idx, item){
            var key = $(this).data("key") || 'XX';
            $(this).text(dataM[key]);
        })
        $('.row:gt(0)').show();
      }
      // 时钟格式化
      function formateTime (time) {
        var y, m, r,hour,minute,second,resultTime;
        var d = new Date(time);

        y = d.getFullYear();
        m = d.getMonth();
        r = d.getDate();
        hour = d.getHours();
        minute = d.getMinutes();
        second = d.getSeconds();
        minute = cktTime(minute);
        second = cktTime(second);
        // 小于10，前面＋0
        function cktTime(t){
          if (t<10){
              t = '0'+t;
          }
          return t;
        }
        resultTime = y+'-'+m+'-'+r+' ' + hour+':'+minute+':'+second;
        return resultTime;
      }



  }

})