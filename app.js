function buttonPressed() {
    document.getElementById("submit").onclick = poster();
}

function poster() {
    var obtainedName = document.getElementById("name");
    var mail = document.getElementById("email");
    var pass = document.getElementById("password");
    var obj = {"name": obtainedName, "email": mail, "password": pass};
    $.ajax({
        type:"POST", 
        url:"http://localhost:8888/client/",
        data:obj,
        success: function k (response) {
            $("$resoult").html(response);
        }
    });
}