$("#login-btn").click(function() {
    var name = $("#user-name").val(),
        password = $("#user-password").val();

    $.ajax({
        "url": "/snow-reader/userInfos?userName=" + name,
        "method": "get"
    }).done(function(userInfos) {
        var userInfo = userInfos[0];
        if (userInfo.password == password) {
            alert("登录成功");
        }
    });
    /* Act on the event */
});