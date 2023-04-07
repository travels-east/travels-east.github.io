// Acc
$(document).on("click", ".naccs .menus div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menus div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});

$(document).ready(function() {

    function close_accordion_section() {
        $('.accordion .title').removeClass('active');
        $('.accordion .section-content').slideUp(100).removeClass('open');
    }

    $('.title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(100).addClass('open'); 
        }

        e.preventDefault();
    });

});//ready 


$(document).ready(function() { 
	var button = $('#button-up');	
	$(window).scroll (function () {
	  if ($(this).scrollTop () > 300) {
		button.fadeIn();
	  } else {
		button.fadeOut();
	  }
  });	 
  button.on('click', function(){
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });		 
  });


  const cards = document.querySelectorAll('.card');

function transition() {
  if (this.classList.contains('active2')) {
    this.classList.remove('active2')
  } else {
    this.classList.add('active2');
  }
}

cards.forEach(card => card.addEventListener('click', transition));




(function($) {

    // Animate bar menu
    $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate');
        if( $('body').hasClass('open-menu')){
            $('body').removeClass('open-menu');
        }else{
            $('body').toggleClass('open-menu');
        }
    });

    // Close menu when press esc
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('.bar').removeClass('animate');
            $('body').removeClass('open-menu');
        }
    });

})(jQuery);





// $(document).ready(function(){
    
//     // Slider Options
//     $(".Modern-Slider").slick({
//     autoplay:true,
//     autoplaySpeed:7000,
//     speed:600,
//     slidesToShow:1,
//     slidesToScroll:1,
//     pauseOnHover:false,
//     dots:true,
//     pauseOnDotsHover:true,
//     cssEase:'linear',
//     fade:true,
//     draggable:false,
//     prevArrow:'<button class="PrevArrow"> <span class="Thumbnail"></span></button>',
//     nextArrow:'<button class="NextArrow"> <span class="Thumbnail"></span></button>', 
//     // Custom Dots With Thumbnails Tool Tip
//     customPaging : function(slider, i) {
//     var thumbnail = $(slider.$slides[i]).data('thumbnail');
//     return '<a href="javascript:void(0)"><img src="'+thumbnail+'"></a>';},
//     });
    
//     // Arrows Thumbnails Trick
//     var PrevThumbinalFirst = $(".Modern-Slider .itemf:last-child").children(".img-fill").children("img").attr("src");
//     $(".Modern-Slider .PrevArrow .Thumbnail").css({ "background-image":"url(" + PrevThumbinalFirst + ")"})
//     var NextThumbinalFirst = $(".Modern-Slider .itemf:first-child").next().children(".img-fill").children("img").attr("src");
//     $(".Modern-Slider .NextArrow .Thumbnail").css({ "background-image":"url(" + NextThumbinalFirst + ")"})
//     $(".Modern-Slider").on('afterChange', function(event, slick, currentSlide){ 
//         var PrevThumbinal = $(".Modern-Slider .itemf.slick-active").prev(".itemf").children(".img-fill").children("img").attr("src");
//         $(".Modern-Slider .PrevArrow .Thumbnail").css({ "background-image":"url(" + PrevThumbinal + ")"})
//         var NextThumbinal = $(".Modern-Slider .itemf.slick-active").next(".itemf").children(".img-fill").children("img").attr("src");
//         $(".Modern-Slider .NextArrow .Thumbnail").css({ "background-image":"url(" + NextThumbinal + ")"})   
//     });
    
// })
 



window.addEventListener('load', function() {
	
	// setTimeout to simulate the delay from a real page load
	setTimeout(lazyLoad, 1000);
	
});

function lazyLoad() {
	var cardi_images = document.querySelectorAll('.cardi-image');
	
	// loop over each cardi image
	cardi_images.forEach(function(cardi_image) {
		var image_url = cardi_image.getAttribute('data-image-full');
		var content_image = cardi_image.querySelector('img');
		
		// change the src of the content image to load the new high res photo
		content_image.src = image_url;
		
		// listen for load event when the new photo is finished loading
		content_image.addEventListener('load', function() {
			// swap out the visible background image with the new fully downloaded photo
			cardi_image.style.backgroundImage = 'url(' + image_url + ')';
			// add a class to remove the blur filter to smoothly transition the image change
			cardi_image.className = cardi_image.className + ' is-loaded';
		});
		
	});
	
}











$(document).ready(function() {
  
	
	$( ".explore-button" ).hover(function() {
	  $( this ).parent().addClass("hovered-card");
	}, function() {
	  $( this ).parent().removeClass("hovered-card");
	}
  );
	
  });












  (function($) {

    var tabs =  $(".tabss li a");
    
    tabs.click(function() {
      var content = this.hash.replace('/','');
      tabs.removeClass("active4");
      $(this).addClass("active4");
      $("#contents > aside").hide();
      $(content).fadeIn(200);
    });
  
  })(jQuery);










  const relemle = document.querySelector(".but");
  const relemlem = relemle.querySelectorAll("span");

function addE0() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[0]) {
            relemlem[0].style.cssText = 'opacity: .9; background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);  color: rgb(255, 255, 255);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[0]) {
        relemlem[0].style.cssText = 'left: 100px;'
    }
})

function addEl() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[1]) {
            relemlem[1].style.cssText = 'left: 40px; transform: rotateY(300deg); background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[1]) {
        relemlem[1].style.cssText = 'left: 100px;'
    }
})
function addE2() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[2]) {
            relemlem[2].style.cssText = 'left: 70px; transform: rotateY(90deg); background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[2]) {
        relemlem[2].style.cssText = 'left: 130px;'
    }
})
function addE3() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[3]) {
            relemlem[3].style.cssText = 'left: 70px; width: 0px; height: 0px; background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[3]) {
        relemlem[3].style.cssText = 'left: 160px;'
    }
})
function addE4() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[4]) {
            relemlem[4].style.cssText = 'left: 70px; width: 0px; height: 0px; background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[4]) {
        relemlem[4].style.cssText = 'left: 190px;'
    }
})
function addE5() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[5]) {
            relemlem[5].style.cssText = ' left: 340px; width: 0px; height: 0px; background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[5]) {
        relemlem[5].style.cssText = 'left: 220px;'
    }
})

function addE6() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[6]) {
            relemlem[6].style.cssText = 'left: 340px; width: 0px; height: 0px; background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[6]) {
        relemlem[6].style.cssText = 'left: 250px;'
    }
})
function addE7() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[7]) {
            relemlem[7].style.cssText = 'left: 340px; transform: rotateY(90deg); background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[7]) {
        relemlem[7].style.cssText = 'left: 280px;'
    }
})
function addE8() {
    relemlem[0].addEventListener('mouseenter', () => {
        if (relemlem[8]) {
            relemlem[8].style.cssText = 'left: 370px; transform: rotateY(300deg); background: linear-gradient(180deg, #924e01 0%, #131111 50%,#b96f00 100%);'
        }
    })
}
relemlem[0].addEventListener('mouseout', () => {
    if (relemlem[8]) {
        relemlem[8].style.cssText = 'left: 310px;'
    }
})
addEl();

addE2();
addE3();
addE4();
addE5();
addE6();
addE7(); 
addE8();
addE0();