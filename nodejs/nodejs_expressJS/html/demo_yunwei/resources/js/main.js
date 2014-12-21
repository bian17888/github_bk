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
        var x;
        for (x in data ) {
            var type1st = typeof(data[x]);
            if(type1st === 'object'){
                for(y in data[x]){
                    var type2st = typeof(data[x][y]);
                    dataM[y] = data[x][y];
                }
            }
            else {
                dataM[x] = data[x];
            }
        }
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

  }

})