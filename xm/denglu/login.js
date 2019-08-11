$(function () {
    (new Captcha({ fontSize: 30 })).draw(document.querySelector('#captcha'));
    console.log($(".submit"));

    $(".submit").click(function () {
        console.log(111);

        let username = $("#usernameID").val();
        let password = $("#password").val();
        $.ajax({
            type: "post",
            url: "./login.php",
            dataType: "json",
            data: `username=${username}&password=${password}`,
            success: function (response) {
                console.log(response);
                if (response.status == "success") {
                    alert(response.msg);
                    /* 跳转到登录页面 */
                    window.location.href = "http://www.baidu.com"
                } else {
                    alert(response.msg);
                }
            }
        });
    })


})