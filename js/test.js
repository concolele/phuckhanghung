// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
// ' ﾌｧｲﾙ名：test.js
// ' 備　考：
// ' 作成日：2018/04/11 ... Vinh
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// $(document).ready(function(){
// 	$('.menu-mobile').on('click', onClickMenu);
// });

// function onClickMenu(){
// 	$(this).toggleClass('open');
//}

$(document).ready(function(){
	$('.menu-mobile').click(function(){
		$(this).toggleClass('open');
	});
});