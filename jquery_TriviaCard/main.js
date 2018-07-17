$(document).ready(() =>{
	$('.hint-box').on('click', () => {
    $('.hint').slideToggle(500);
  });
  
  $('.wrong-answer-one').on('click', () => {
    $('.wrong-answer-one').fadeOut(800);
    $('.frown').show();
  });
  
  $('.wrong-answer-two').on('click', () => {
    $('.wrong-answer-two').fadeOut(800);
    $('.frown').show();
  });
  
  $('.wrong-answer-three').on('click', () => {
    $('.wrong-answer-three').fadeOut(800);
    $('.frown').show();
  });
  
  $('.correct-answer').on('click', () => {
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-answer-one').fadeOut(800);
    $('.wrong-answer-two').fadeOut(800);
    $('.wrong-answer-three').fadeOut(800);
  });
});