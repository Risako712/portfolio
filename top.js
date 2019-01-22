// JavaScript Document


//雲
$(document).ready(function(){
		//アニメーションスピード
		var scrollSpeed = 0.2;
        //画像の初期位置
		var posX = 0;
		//ループ処理
		setInterval(function(){
			//1500px動いたら0に戻る。
			if(posX >= 1500) posX = -500;
			//scrollSpeed分移動
			posX += scrollSpeed;
			$('#clouds1').css("background-position",posX+"px 0px");
			},1);

});

$(document).ready(function(){
		//アニメーションスピード
		var scrollSpeed = 0.4;
        //画像の初期位置
		var posX = 0;
		//ループ処理
		setInterval(function(){
			//2000px動いたら0に戻る。
			if(posX >= 2000) posX = -200;
			//scrollSpeed分移動
			posX += scrollSpeed;
			$('#clouds2').css("background-position",posX+"px 0px");
			},1);

});

//気球
$(document).ready(function(){
		//アニメーションスピード
		var scrollSpeed = 0.05;
        //画像の初期位置
		var posY = 2;
		//ループ処理
		setInterval(function(){
			//1500px動いたら0に戻る。
			if(posY <= -2 || posY >= 8) scrollSpeed = scrollSpeed * (-1.0);
			//scrollSpeed分移動
			posY += scrollSpeed;
			$('#kikyu').css("background-position","0px " +posY+"px");
			},1);

});


//tooltip ポップアップ
function simple_tooltip(target_items, name){
 $(target_items).each(function(i){
		$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
		var my_tooltip = $("#"+name+i);

		if($(this).attr("title") != "" && $(this).attr("title") != "undefined" ){

		$(this).removeAttr("title").mouseover(function(){
					my_tooltip.css({opacity:0.95, display:"none"}).fadeIn(400);
		}).mousemove(function(kmouse){
				var border_top = $(window).scrollTop();
				var border_right = $(window).width();
				var left_pos;
				var top_pos;
				var offset = 20;
				if(border_right - (offset *2) >= my_tooltip.width() + kmouse.pageX){
					left_pos = kmouse.pageX+offset;
					} else{
					left_pos = border_right-my_tooltip.width()-offset;
					}

				if(border_top + (offset *2)>= kmouse.pageY - my_tooltip.height()){
					top_pos = border_top +offset;
					} else{
					top_pos = kmouse.pageY-my_tooltip.height()-offset;
					}


				my_tooltip.css({left:left_pos, top:top_pos});
		}).mouseout(function(){
				my_tooltip.css({left:"-9999px"});
		});

		}

	});
}
$(document).ready(function(){
	 simple_tooltip("#concept img","tooltip");
});

$(document).ready(function(){
	 simple_tooltip("#setsumei img","tooltip2");
});



//ボタンを押して下にコンテンツ表示
$(function(){
     $(".open").click(function(){
      $("#slideBox").slideToggle("slow");
     });
});

//ボタンを押して下にコンテンツ表示
$(function(){
     $(".open2").click(function(){
      $("#slideBox2").slideToggle("slow");
     });
});
