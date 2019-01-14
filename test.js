
document.getElementById("myBtn").addEventListener("click", function(){
    // document.getElementById("demo").innerHTML = "Hello World";
  });
  var nameContainer = document.getElementById('name');
  var btn = document.getElementById("myBtn");
  btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET','http://mba.bkksol.com/PK/getJSON.php?username='+document.getElementById('user').value);
  ourRequest.open('GET','http://mba.bkksol.com/PK/getJSON.php?username='+document.getElementById('pass').value);
  ourRequest.onload = function(){
      var ourData = JSON.parse(ourRequest.responseText);
      console.log(ourData[0]);
      
  };
  ourRequest.send();
  });



// $(function (){
//     var $pinlist = $('#pinlist');

//     $.ajax ({
//         type: 'GET',
//         url: '',
//         success: function(pinlist) {
//             $.each(pinlist, function(i, name){
//                 $pinlist.append('+ name.name +');
//             });
//         },
//         error: function(){
//             alert('error');
//         }
//     });
//     $("#btn").on('click'),function () {
//         var name = {
//             name: $pinlist.val(),
//         };
//         $.ajax ({
//             type: 'GET',
//             url: 'http://mba.bkksol.com/PK/getJSON.php',
//             success: function(pinlist) {
//                 $.each(pinlist, function(i, name){
//                     $pinlist.append('+ name.name +');
//                 });
//             },
//             error: function(){
//                 alert('error');
//             }
//         });


//             }
// })