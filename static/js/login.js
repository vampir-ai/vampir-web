$(document).ready(function () {
    console.log("Finished!");

    var username = $("#id_username");
    var password = $("#id_password");

    function getFormData() {
        return  {
            username: username.val(),
            password: password.val()
        }
    }

    function post() {
        $.post("/api-token-auth/", JSON.stringify(getFormData()), function (data, status) {
            console.log(status);
            window.location.replace("/link-services/")
        }).fail(function(data) {
            if (data.status === 400) {
            } else {
            }
        })
    }

    $('#loginForm').submit(function () {
        post();
        return false
    });


});