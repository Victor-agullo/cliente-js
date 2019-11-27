window.onload = buttonPressed;

function buttonPressed() {
    document.getElementById("submit").onclick = poster;
}

function poster() {
    var obtainedName = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var obj = {"name": obtainedName, "email": mail, "password": pass};
    $.ajax({
        type: "POST", 
        url: "http://localhost:8888/library/public/index.php/api/users",
        data: obj,
        success: function (response) {
            $("$resultado").html(response);
        }
    });
}