console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $('#imperatives span').on('click', function(){
    $('ul').append('<li>You clicked: '+$(this).text()+' at '+Date.now()+'</li>');
  });
});
