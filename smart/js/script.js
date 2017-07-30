$('.menu').click(function(){
	$('.main_menu').animate({"left": "0"}).click(function(){
		$(this).animate({"left": "-300px"});
		$('.menu').animate({marginLeft: "0"});
	});
	if($(document).width() > 1340)
		{$('.menu').animate({marginLeft: "220px"});};
});

$('.message_form').submit(function () {
	var mail = $('.mail_message').val();
	$('.modal_window').fadeIn();
	$('.modal_content').animate({marginTop: '200px'});
	$('.mail_message_verify').val(mail);
 	return false;
});

$('.plan_button').click(function () {
	var title = $(this).parent(),
		name = $(title).find('h3').text();
	$('.plan_blog').removeClass('active_plan');
	$(title).addClass('active_plan');
	$('.modal_plan_title').text("Ви обрали " + name);
	$('.modal_window_plan').fadeIn();
	$('.modal_plan_content').animate({marginTop: '200px'});
 	return false;
});

$('#modal').submit(function(){
	$('.modal_content').animate({marginTop: '0'});
	$('.modal_window').fadeOut();
	return false;
});

$('#modalPlan').submit(function(){
	$('.modal_plan_content').animate({marginTop: '0'});
	$('.modal_window_plan').fadeOut();
	return false;
});

var modal = document.getElementById('modal');
var modalPlan = document.getElementById('modalPlan');

window.onclick = function(event) {
    if (event.target == modal) {
       $('.modal_content').animate({marginTop: '0'});
    	$('.modal_window').fadeOut();
    	return false;
    }
    else if (event.target == modalPlan) {
       $('.modal_plan_content').animate({marginTop: '0'});
		$('.modal_window_plan').fadeOut();
    	return false;
    }
}

$(document).ready(function(){
 $(".owl-carousel").owlCarousel({
		autoplay:true,
		autoplayTimeout:3000,
		nav:true,
		navText: ["<p class='arrow'><</p>", "<p class='arrow'>></p>"],
		loop:true,
		dots:false,
		responsive:{
		0:{
		    items:1
		},
		600:{
		    items:2
		},
		900:{
			items:3
		}
		}
  });
 	function scrollHref(selector){
 		var id  = $(selector).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
 	}; 

 	$(".main_menu").on("click","a", function (event) {
    event.preventDefault();
	 	scrollHref(this);
	});

	$(".logo").on("click","a", function (event) {
    event.preventDefault();
	 	scrollHref(this);
	});

	$(".footer_content").on("click","a", function (event) {
    event.preventDefault();
	 	scrollHref(this);
	});

});

$('#all').click(function () {
	$('.light_image').fadeIn();
	$('.climate_image').fadeIn();
	$('.buildings_image').fadeIn();
});

$('#light').click(function () {
	$('.light_image').fadeIn();
	$('.climate_image').fadeOut();
	$('.buildings_image').fadeOut();
});

$('#climate').click(function () {
	$('.light_image').fadeOut('');
	$('.buildings_image').fadeOut();
	$('.climate_image').fadeIn('');
});

$('#buildings').click(function () {
	$('.light_image').fadeOut();
	$('.climate_image').fadeOut();
	$('.buildings_image').fadeIn();
});

var light = $("label[for='light']").text();
var climate = $("label[for='climate']").text();
var build = $("label[for='buildings']").text();
$('.light_image .port_type').text("Тип: " + light);
$('.climate_image .port_type').text("Тип: " + climate);
$('.buildings_image .port_type').text("Тип: " + build);

$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();
  if (windowScrollTop > ($('.progress').offset().top - windowHeight/4)){
  $('.bar1').animate({width: '80%'}, 1000);
  $('.bar2').animate({width: '95%'}, 1000);
  $('.bar3').animate({width: '85%'}, 1000);
  $('.bar4').animate({width: '75%'}, 1000);}

});
$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > $('.bars').offset().top) {
        $(window).off("scroll", startCounter);
        $('.num').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}


$('.plan_blog').click(function () {
	$('.plan_blog').removeClass('active_plan');
	$(this).addClass('active_plan');
})

var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

$('#contactsForm').submit(function(event){
	event.preventDefault();

	var name = $('#name').val();
	var email = $('#email').val();
	var body = $('#body').val();
	var url = window.location.href+$(this).attr('action');
	console.log(url+name+email+body);

	$.ajax({
	  type: "POST",
	  url: url,
	  data: {name: name, email: email, body: body},
	  success: function(data) {
	  	console.log(data);
	  	$('#name').val('');
	 	$('#email').val('');
		$('#body').val('');
	  }
	});

})


$('#contactsForm').submit(function(e){
	e.preventDefault();

	var name = $('#name').val();
	var email = $('#email').val();
	var body = $('#body').val();
	var url = window.location.href+$(this).attr('action');
	console.log(url+name+email+body);

	$.post(url, {name: name, email: email, body: body}).done(function(data){
		console.log('Post saved');
		console.log(data);
		$('#name').val('');
	 	$('#email').val('');
		$('#body').val('');
	});
})

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
