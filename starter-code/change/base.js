console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $("#time").text( Date.now() );

  $('#left').on('change', function() {
    var lnum=Number($('#left').val());
    var rnum=Number($('#right').val());
    var total= lnum+rnum;
    $('#total').val(total);
  });
  $('#right').on('change', function() {
    var lnum=Number($('#left').val());
    var rnum=Number($('#right').val());
    var total= lnum+rnum;
    $('#total').val(total);
  });
  $('#reset').on('click', function() {
    $('#total').val('');
    $('#left').val('');
    $('#right').val('');
  });
});
