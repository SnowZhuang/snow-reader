
var setValid = function(element){
	element.removeClass('true false');
	element.addClass('true');
}

var setInvalid = function(element){
	element.removeClass('true false');
	element.addClass('false');
}

var reset = function(element){
		element.removeClass('true false');

}

var emailRegExp = /\w+@\w+([-]\w)*(\.\w)+/;
$("#exampleInputEmail1").blur(function() {
	var element=$("#exampleInputEmail1");
    var EmailVal = $(element).val();
    // if (emailRegExp.test(EmailVal)) {
    //     console.log("邮箱名正确");
    // } else {
    //     console.log("邮箱名错误");
    // }
   EmailVal?(emailRegExp.test(EmailVal)?setValid(element):setInvalid(element)):reset(element)
});

var passwordRegExp = /.{6,}/;
$("#exampleInputPassword1").blur(function() {
	var element =$("#exampleInputPassword1");
    var password1 = element.val();
    password1 ? (passwordRegExp.test(password1) ? setValid(element) : setInvalid(element)) : reset(element);
});






$("#exampleInputPassword2").keyup(function() {
	var element =$("#exampleInputPassword2");
    var password1 = $("#exampleInputPassword1").val();
    var password2 = $(element).val();
    password2?((password2 == password1)?setValid(element) : setInvalid(element)):reset();
});