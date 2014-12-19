$(function(){
  var uuid,ip;
  uuid = $('#uuid').val();
  ip = $('#ip').val();
  console.log(uuid + ip);
  $('#btn_submit').click(function(){
      $.ajax({
          type:'POST',
          data : {uuid : uuid, ip : ip},
          dataType : 'json',
          success : function(){
              alert('success');
          }
      })
  });
})