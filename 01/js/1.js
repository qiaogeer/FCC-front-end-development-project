var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224',
	"#472E32", "#BDBB99", "#77B1A9", "#73A857"
];
var Lyrics = [{
		lrc: '笑得开怀，哭得坦率，为何表情让这世界安排',
		author: '华晨宇《烟火里的尘埃》'
	},
	{
		lrc: '雨纷纷，旧故里草木深。我听闻，你始终一个人。',
		author: '周杰伦《烟花易冷》'
	}, {
		lrc: '等不到天黑，烟火不会太完美。回忆烧成灰，还是等不到结尾。',
		author: '林俊杰《她说》'
	}, , {
		lrc: '如果天黑之前来得及，我要忘了你的眼睛，穷极一生，做不完一场梦。',
		author: '马頔《南山南》'
	},
	{
		lrc: '枕边没有风浪怎么我们会跌荡摇晃伸手不见月光怎么繁星能闪耀光芒,脚印会旧而梦还在走',
		author: '华晨宇《寻》'
	}

]
$("document").ready(function() {
	$("#button").on('click', function() {
		var curColor = colors[Math.floor(Math.random() * colors.length)];
		$("body").css('background-color', curColor);
		$('#button').css('background-color', curColor);
		$('#text').css('color', curColor);
		$('#author').css('color', curColor);
		var curLrc = Lyrics[Math.floor(Math.random() * Lyrics.length)];
		$('#txt').text(curLrc.lrc);
		$('#author').text(curLrc.author);
		$('#txt').animate({
				opacity: 0
			}, 500,
			function() {
				$(this).animate({
					opacity: 1
				}, 500);
			});
		$('#author').animate({
				opacity: 0
			}, 500,
			function() {
				$(this).animate({
					opacity: 1
				}, 500);
			});
	})
})
