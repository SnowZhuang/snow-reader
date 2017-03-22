$.ajax({
    "url": "/snow-reader/categorys",
    "method":"get"
}).done(function(categorys){

	$.each(categorys,function(index,category){
		$("#category-left-bar")
		.append('<li role="presentation"><a href="#">'+category.categoryName+'</a></li>')
	})
});


$.ajax({
	"url":"/snow-reader/categorys/5",
	"method":"put",
	"data":{
		"categoryName":"科技2"
	}
})