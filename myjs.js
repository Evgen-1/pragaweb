				// smooth scroll from menu 

				
				$('header li:nth-of-type(6n)').click(function(e){
					e.preventDefault();
					$('html, body').animate({scrollTop:$('.contacts').position().top}, 2500);
				});

				$('header li:first-child + li+ li').click(function(e){
					e.preventDefault();
					$('html, body').animate({scrollTop:$('.features').position().top}, 2500);
				});

				$('header li:nth-of-type(4n)').click(function(e){
					e.preventDefault();
					$('html, body').animate({scrollTop:$('.wrap-slider').position().top}, 2500);
				});

				$('header li:nth-of-type(5n)').click(function(e){
					e.preventDefault();
					$('html, body').animate({scrollTop:$('.mobile-main').position().top}, 2500);
				});

				$('.top-header li:first-child').click(function(e){
					e.preventDefault();
					$('html, body').animate({scrollTop:$('.blog').position().top}, 2500);
				});

				$('header li:first-child').click(function(e){
					e.preventDefault();
					$('html, body').animate({scrollTop:$('.mobile').position().top}, 2500);
				});
				$('header li:first-child + li').click(function(e){
					e.preventDefault();
					$('html, body').animate({scrollTop:$('.iframe').position().top}, 2500);
				});


	// customize and start slider

	var slider;
	$(document).ready(function(){
		slider= $('.slider').bxSlider({
			infiniteLoop:true,
			mode:'horizontal',
			speed:'4000',
			minSlides:2,
			maxSlides:2,
			moveSlides:1,
			slideWidth:2000,
			slideMargin:50    
		});
		adaptSlider();
	});

	function adaptSlider(){
		if(window.innerWidth < 800){
			slider.reloadSlider({
				minSlides: 1
			});
		}
	}
	window.addEventListener('resize', adaptSlider);



	// when srcreen achive mobile block start anime
	var sectionMobile=document.querySelector('.mobile'); 
	var activeAnime;
	window.onscroll=function (){
		if (window.pageYOffset +document.documentElement.clientHeight > sectionMobile.offsetTop && activeAnime == undefined ){
			activeAnime = anime({
				targets: '.visits__number',	
				textContent:[   
				function(el){
					if(!el.hasAttribute('data-anime')){
						el.setAttribute('data-anime',
							parseFloat(el.textContent))
					};
					return 0
				},
				function(el){
					return el.getAttribute('data-anime');
				}],
				duration:10000,
				round:1,
				easing:'linear',
			});
		}}