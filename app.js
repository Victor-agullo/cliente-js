$(document).ready(function buttonPressed() {
    url_base = 'http://127.0.0.1:8888/api/'
    $("#submit").click(function() {
        register();
    });
});

function get_data() {
    var mail = $("#name").val();
    var mail = $("#email").val();
    var mail = $("#password").val();

    var data = {
        "name": obtainedName, 
        "email": mail, 
        "password": pass
    };

    return data;
}
function register() {
    var data = get_data;

    $.ajax({
        type: "POST", 
        url: url_base + 'users',
        data: data,
        success: function (response) {
            console.log(response);
        }
    });
}