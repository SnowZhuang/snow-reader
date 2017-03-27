$.ajax({
    "url": "/snow-reader/categorys",
    "method":"get"
}).done(function(categorys){
	$.each(categorys,function(index,category){
		$("#categoryList")
		.append('<li role="presentation"><a href="#">'+category.categoryName+'</a></li>')
	})
});

$.ajax({
    "url": "/snow-reader/subscribeItems",
    "method":"get"
}).done(function(subscribeItems){
	$.each(subscribeItems,function(index,subscribeItem){
		// var panel = $('<div class="pannel" ');
		// panel.append('<div class="book-name pull-left " style="padding:10px">'+subscribeItem.subscribeName+'</div>')
		//      .append('<div  class="pull-right"> <button class="btn btn-default  " >订阅</button> </div>')
		// 	 .append('<div class="book-instruction" >'+subscribeItem.subscribeInstruction+' </div>')
		// 	 .append('<div class="book-footer pull-right ">g12:45 ? 27082 人订阅 ? RSS</div>')
		// $("#subcribe-contain").append(panel);
		var panel = $('<div class="bookContain">');
		panel.append('<div class="book-name pull-left "><img src="images/1.jpg" width="20px" height="20px"><a >'+subscribeItem.subscribeName+'</a> </div>' )
	         .append('<div  class="pull-right">  <button class="btn btn-default  " >订阅</button></div>') 
	         .append('<div class="book-instruction " > '+subscribeItem.subscribeInstruction+'</div>')
	         .append('<div class="book-subscribeMessage" style="text-align: right;">时间.订阅人数</div> ')
	    $("#rbight-column").append(panel);
	})
});



