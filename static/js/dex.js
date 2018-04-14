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
        $.post("/api/encrypt/", JSON.stringify(getFormData()), function (data, status) {
            localStorage.setItem("message", data["message"]);
            window.location.replace("/graph/");
        }).fail(function(data) {
            if (data.status === 400) {
            } else {
            }
        })
    }

    $('#linkAccountForm').submit(function () {
        post();
        return false
    });


});