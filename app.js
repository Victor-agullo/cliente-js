$(document).ready(function buttonPressed() {
    url_base = 'http://localhost:8888/api/'
    
    $("#submit").click(function() {
        register();
    });
    
    $("#obtain").click(function() {
        books();
    });
});

function get_data() {
    var name = $("#name").val();
    var mail = $("#email").val();
    var pass = $("#password").val();

    var data = {
        "name": name, 
        "email": mail, 
        "password": pass
    };

    return data;
}

function register() {
    var data = get_data();

    $.ajax({
        type: "POST", 
        url: url_base + 'registry',
        data: data,
        success: function (response) {
            console.log(response);
            sessionStorage.setItem('token', response.token);
        }
    });
}

function books() {
    $.ajax({
        type: "POST", 
        url: url_base + 'books',
        headers:{
            'Authorization': sessionStorage.getItem('token')
        },
        success: function (response) {
            console.log(response);
        }
    });
}