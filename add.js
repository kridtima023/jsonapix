
// $(function () {
//     $("#sessionID").text(localStorage.getItem("name"));

//     $("#addnew").click(function(){
//         $.ajax({
//             type: "POST",
//             url: "https://api-payment.herokuapp.com/api/payment/new",
//             dataType: "json",
//             contentType:"application/json",
//             data: {
//                 "userId": localStorage.getItem("name_id"),
//                 "orderId": "001",
//                 "webName": "Shopping Center Online",
//                 "price": 30
//             },
//             success: function (res) {
//                 alert('Buy Complete');
//                 location.reload();
//             }
//         });
//     });
    
// });


$(function () {
    
    $('#alert').hide();

    $('#addnew').click(function () {

        var formdata = {
            ID: $('#name_id').val(),
            Name: $('#name').val(),
            Username: $('#username').val(),
            Password: $('#password').val()
            
      
        }

        console.log(formdata);


        $(function () {

            $.ajax({

                //CP2. Complete Ajax Code to INSERT new pin data 
                url: 'http://mba.bkksol.com/PK/getJSON.php',
                type: 'POST',
                data: formdata
            }).done(function (res) {

                $('#alert').show();
                $('#name_id').val('');
                $('#name').val('');
                $('#username').val('');
                $('#password').val('');
                console.log('Added', res);

            });
        });
    });
});