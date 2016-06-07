$(function() {
  var num = 25
  for(var i = 0; i < num; i++) {
    var j = Math.floor(200/num)
    var radius = i*j + Math.floor(Math.random()*j)
    var stroke = Math.floor(radius*0.2 + Math.random()*radius*0.7)
    var offset = Math.floor(radius*0.2 + Math.random()*radius*0.7)
    var animation = Math.floor(Math.random()*2)
    var duration = Math.floor(Math.random()*20) + 5
    animation == 1 ? animation = "clockwise" : animation = "anti-clockwise"
    $('.bg').append('<circle class="bg-circle" cx="50" cy="50" r="'+radius+'" style="stroke-dasharray: '+ stroke +'; stroke-dashoffset: '+ offset + '; animation-name: ' + animation + '; animation-duration: ' + duration + 's; "/>')
  }
  $(".bg").html($(".bg").html());
  for(var j = 0; j < num; j++) {
    $('circle:nth-of-type('+j+')').delay(j*Math.random()*500).fadeIn("slow");
  }
})

$(function() {
  $('.nav-burger, .nav-links').click(function(){
    $('.nav-links').toggleClass('active')
  })
})
