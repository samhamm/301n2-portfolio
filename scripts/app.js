$('#nav1').hover(function(){
  $('.links').hide();
  $('.name').hide();
  $('.hiddenDiv1').fadeIn();
},function(){
  $('.hiddenDiv1').hide();
  $('.name').show();
  $('.links').show();
});

$('#nav2').hover(function(){
  $('.links').hide();
  $('.name').hide();
  $('.hiddenDiv2').fadeIn();
},function(){
  $('.hiddenDiv2').hide();
  $('.name').show();
  $('.links').show();
});

$('#nav3').hover(function(){
  $('.links').hide();
  $('.name').hide();
  $('.hiddenDiv3').fadeIn();
});
$('.button3').click(function(){
  $('.hiddenDiv3').hide();
  $('.name').show();
  $('.links').show();
});
