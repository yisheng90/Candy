$(document).ready(function () {
  $('body').append('<div class="gameBox"></div>')

  var num

  for (var i = 0; i < 15; i++) {
    $('.gameBox').append('<div class="row row'+i+'"></div>')
    for (var j = 0; j < 8; j++) {
      num = Math.floor(Math.random()*4)
      $('.row'+i).append('<div class="column column'+ j+'"></div>')
      $('.row'+i+' .column'+j).text(num)

    }
  }

  
})
