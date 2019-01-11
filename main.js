

var showName = document.getElementById("show-name");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://mba.bkksol.com/jsonapix/getjson.php');
    ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    console.log(ourData[0]);
};
ourRequest.send();
});

function renderHTML(data){  
    var htmlString = "test";
    for(i=0; i<data.length; i++) {
        htmlString += "<p>" + data[i].name_id + "=" + "<p>";
    }
    showName.insertAdjacentHTML('beforeend', htmlString);
}

