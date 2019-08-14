$("document").ready(function() {
	var index = 1; //记录图片索引
	var timer = null; //seInterval()函数会返回一个值，这是用来接收那个值的，可以用来停止轮播的效果
	var size = $('.slide').children().size(); //图片的张数
	var picWidth = $('.pic').width(); //获取图片的宽度
	//鼠标移上去的时候图片轮播要暂停
	$('#slideBanner').mouseover(function() {
		clearInterval(timer);
	});
	//鼠标移走的时候再次开始
	$('#slideBanner').mouseleave(function() {
		autoSlide();
	});
	$('.slide').mouseleave();

	function autoSlide() {
		timer = setInterval(function() {
			index++;
			changeImg();
		}, 3000);
	};

	function changeImg() {
		var slideWidth = -1 * picWidth * index;
		$('.slide').animate({
			'left': slideWidth + 'px'
		}, 1500);
		if (index >= size-1 ) {
			$('.slide').animate({
				'left': -picWidth + 'px'
			}, 0);
			index = 1;
		};

		// if (index < 1) {
		// 	$('.slide').animate({
		// 		'left': -(size - 2) * picWidth + 'px'
		// 	}, 0);
		// 	index = size - 2;
		// }
	}

	$("#plusmode1").hover(
		function() {
			$("#plusmode").css('background', 'url(img/plusmode1.png)center/110%');
		}
	);
	$("#plusmode2").hover(
		function() {
			$("#plusmode").css('background', 'url(img/plusmode2.png)center/110%');
		}
	);
	$("#plusmode3").hover(
		function() {
			$("#plusmode").css('background', 'url(img/plusmode3.png)center/110%');
		}
	);
	$('.wechat').hover(
		function() {
			$('.qrcode').css('display', 'block');
		},
		function() {
			$('.qrcode').css('display', 'none');
		}
	)
	$(".table_box").hover(
		function() {
			$(".box_p1").css('color', '#fff');
			$(".box_p2").css('color', '#fff');
		},function(){
			$(".box_p1").css('color', '#666666;');
			$(".box_p2").css('color', '#fff');
		}
	);
});
