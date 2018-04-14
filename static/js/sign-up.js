$(document).ready(function () {
    console.log("Finished!");

    var username = $("#id_username");
    var password = $("#id_password");
    var passwordConfirm = $("#id_password_confirm");

    function getFormData() {
        return  {
            username: username.val(),
            password: password.val(),
        }
    }

    function post() {
        if (password.val() === passwordConfirm.val()) {
            $.post("/api/sign-up/", JSON.stringify(getFormData()), function (data, status) {
                console.log(status);
                window.location.replace("/link-services/")
            }).fail(function(data) {
                if (data.status === 400) {
                } else {
                }
            })
        }
    }

    $('#signUpForm').submit(function () {
        post();
        return false
    });
});