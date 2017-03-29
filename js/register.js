/*Validator.bind();
$("[validate]").on("blur", function() {
    if (Validator.isValidAll()) {
        $("#submit-btn").removeAttr('disabled')
    } else {
        $("#submit-btn").attr('disabled', true)

    }
});*/





var setValid = function(element) {
    element.removeClass('true false');
    element.addClass('true');
}

var setInvalid = function(element) {
    element.removeClass('true false');
    element.addClass('false');
}

var reset = function(element) {
    element.removeClass('true false');

}


var validateEmail = function() {
    var element = $("#exampleInputEmail1");
    var EmailVal = $(element).val();
    return emailRegExp.test(EmailVal);
}

var validatePassword = function() {
    var element = $("#exampleInputPassword1");
    var password1 = element.val();
    return passwordRegExp.test(password1);
}
 var validatePassword2 = function() {
    var element = $("#exampleInputPassword2");
    var password1 = $("#exampleInputPassword1").val();
    var password2 = element.val();
    return password2 == password1
}

var setButtonStatus = function() {
    if (validateEmail() && validatePassword() && validatePassword2()) {
        $("#submit-btn").removeAttr('disabled')
    } else {
        $("#submit-btn").attr('disabled', true)
    }
}

var emailRegExp = /\w+@\w+([-]\w)*(\.\w)+/;
$("#exampleInputEmail1").blur(function() {
    var element = $("#exampleInputEmail1");
    var EmailVal = $(element).val();
    var isValidate = validateEmail();
    EmailVal ? (isValidate ? setValid(element) : setInvalid(element)) : reset(element);

    setButtonStatus();


});

var passwordRegExp = /.{6,}/;
$("#exampleInputPassword1").blur(function() {
    var element = $("#exampleInputPassword1");
    var password1 = element.val();


    password1 ? (passwordRegExp.test(password1) ? setValid(element) : setInvalid(element)) : reset(element);
    setButtonStatus();

});

$("#exampleInputPassword2").keyup(function() {
    var element = $("#exampleInputPassword2");
    var password1 = $("#exampleInputPassword1").val();
    var password2 = $(element).val();
    password2 ? ((password2 == password1) ? setValid(element) : setInvalid(element)) : reset(element);
    setButtonStatus();

});

$("#submit-btn").click(function() {
	$.ajax({
		url: "/snow-reader/userInfos",
		method: "POST",
		data: {"userName":$("#exampleInputEmail1").val(),
		       "password":$("#exampleInputPassword1").val()
	}
	})
	.done(function() {
		window.location.href = "index.html";
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
	/* Act on the event */
});




