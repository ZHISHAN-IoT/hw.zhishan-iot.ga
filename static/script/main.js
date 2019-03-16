$(document).ready(function() {

	var isiPad = navigator.userAgent.match(/iPad/i) != null;


	// init controller

	if (!isiPad) {
		var controller = new ScrollMagic();
		var stickyOptions = {
			duration: 1600,
			offset: 140
		};
		var fadeOptions = {
			duration: 200,
			offset: 100
		};
		var fadeValueTextOptions = {
			duration: 300,
			offset: 220
		};
		var moveLeftOptions = {
			duration: 300,
			offset: 100
		};
		var fadeOutOptions = {
			duration: 100,
			offset: 100
		};
		var lastClose = {
			duration: 100,
			offset: 100
		};


		var circleContainer = $("#circle-container");
		var circle1 = $(".circle1");
		var circle2 = $(".circle2");
		var circle3 = $(".circle3");
		var valueText = $('.value-text');
		var displayText = $('.display-text');
		var arrows = $('.arrows');
		var descText = $('.desc-text');

		var stickyCircle1 = new ScrollScene(stickyOptions)
			.triggerElement(circle1)
			.setPin(circle1)
			.addTo(controller);

		var stickyCircle2 = new ScrollScene(stickyOptions)
			.triggerElement(circle2)
			.setPin(circle2)
			.addTo(controller);

		var stickyCircle3 = new ScrollScene(stickyOptions)
			.triggerElement(circle3)
			.setPin(circle3)
			.addTo(controller);

		var stickyArrows = new ScrollScene(stickyOptions)
			.triggerElement(arrows)
			.setPin(arrows)
			.addTo(controller);

		var stickyDescText = new ScrollScene(stickyOptions)
			.triggerElement(descText)
			.setPin(descText)
			.addTo(controller);


		var fade = new ScrollScene({
				duration: 400,
				offset: 100
			})
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-fade-circle')
			.setTween(TweenMax.from(circle1, 1, {
				autoAlpha: 0
			}));

		var scaleBig = new ScrollScene(fadeOptions)
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-fade-circle')
			.setTween(TweenMax.to(circle1, 1, {
				scale: 1.7
			}));


		var fade = new ScrollScene(fadeOptions)
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-fade-circle')
			.setTween(TweenMax.from(circle2, 1, {
				autoAlpha: 0
			}));

		var scaleBig = new ScrollScene(fadeOptions)
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-fade-circle')
			.setTween(TweenMax.to(circle2, 1, {
				scale: 1.7
			}));


		var fade = new ScrollScene(fadeOptions)
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-fade-circle')
			.setTween(TweenMax.from(circle3, 1, {
				autoAlpha: 0
			}));

		var scaleBig = new ScrollScene(fadeOptions)
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-fade-circle')
			.setTween(TweenMax.to(circle3, 1, {
				scale: 1.7
			}));


		var fadeText = new ScrollScene(fadeValueTextOptions)
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-fade-circle')
			.setTween(TweenMax.from(valueText, 1, {
				autoAlpha: 0
			}));



		var scaleSmall = new ScrollScene(fadeOptions)
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-scale-small')
			.setTween(TweenMax.to(circle1, 1, {
				scale: 1
			}));

		var scaleSmall = new ScrollScene(fadeOptions)
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-scale-small')
			.setTween(TweenMax.to(circle2, 1, {
				scale: 1
			}));

		var scaleSmall = new ScrollScene(fadeOptions)
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-scale-small')
			.setTween(TweenMax.to(circle3, 1, {
				scale: 1
			}));


		var moveText = new ScrollScene(fadeValueTextOptions)
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-scale-small')
			.setTween(TweenMax.to(valueText, 2, {
				top: -70
			}));

		var moveRed = new ScrollScene(moveLeftOptions)
			.addTo(controller)
			.triggerElement('.trigger-scale-small')
			.setTween(TweenMax.from(circle2, 0.1, {
				css: {
					marginLeft: -140
				}
			}));

		var moveYellow = new ScrollScene(moveLeftOptions)
			.addTo(controller)
			.triggerElement('.trigger-scale-small')
			.setTween(TweenMax.from(circle3, 0.1, {
				css: {
					marginLeft: -140
				}
			}));


		var fadeDisplayText = new ScrollScene({
				duration: 200,
				offset: 100
			})
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-text-arrow')
			.setTween(TweenMax.to(displayText, 1, {
				css: {
					opacity: 1
				}
			}));


		var hideText = new ScrollScene({
				duration: 150,
				offset: 200
			})
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-text-arrow')
			.setTween(TweenMax.from(arrows, 1, {
				autoAlpha: 0
			}));


		var fadeDisplayText = new ScrollScene({
				duration: 150,
				offset: 300
			})
			.addTo(controller)
			.triggerHook("onCenter")
			.triggerElement('.trigger-text-arrow')
			.setTween(TweenMax.to(descText, 1, {
				css: {
					opacity: 1
				}
			}));

	}

	//svg fall back
	if (!Modernizr.svg) {
		var fallback = $(".svg").attr('fallback');
		$(".svg").attr("src", fallback);
	}


	if ($(window).width() > 800) {
		$('.logo-filter-container').mixItUp();
		$('.logo-filter-btn:visible:first').trigger('click');
	} else {
		$('.client-logo').show();
		var p = 12,
			pages = Math.ceil($('.client-logo').length / p);

		for (var i = 0; i < pages; i++) {
			$('.client-logo').slice(i * p, (i + 1) * p).wrapAll('<li></li>');
		}

		$('.logo-filter-container li').wrapAll('<ul class="slides"></ul>');

		$('.logo-filter-container').flexslider({
			animation: "slide",
			directionNav: false,
			slideshowSpeed: 5000,
			initDelay: 3000
		})
	}

	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
		slideshowSpeed: 4000,
		initDelay: 1000,
		animationSpeed: 1000,
		manualControls: ".slider-control-nav li a",
		before: function(slider) {

			$('.slider-span').fadeOut(500, function() {


				var targetSlide = $(slider).find('.flex-active-slide').find('img').attr('alt');
				var targetLink = $(slider).find('.flex-active-slide').find('a').attr('href');

				if (targetSlide == undefined) targetSlide = "<br>";

				$(".slider-link").attr("href", targetLink);
				$('.slider-span').html(targetSlide).fadeIn(400);
			});
		}
	});

	if (page != 'leadership') {
		$(".fancybox").fancybox({
			maxWidth: 800,
			maxHeight: 700,
			fitToView: false,
			width: '100%',
			height: '100%',
			autoSize: false,
			closeClick: false,
			openEffect: 'none',
			closeEffect: 'none',
			helpers: {
				overlay: {
					locked: false
				}
			}
		});
	} else {
		$('.fancybox').fancybox({
			fitToView: true,
			autoSize: true
		});
	}

	//Google tracking
	$('.email-link').click(function() {
		_kmq.push(['record', 'Email clicked']);
	});

	$('.vcard-link').click(function() {
		_kmq.push(['record', 'VCard clicked']);
	});

	//news wall
	$('.news-wall').on("click", '.cell', function() {

		var href = $(this).attr('href');

		if ($(this).hasClass('noteworthy') || $(this).hasClass('team')) {
			window.open(href, '_blank');
		} else {
			window.location = href;
		}

	});

	// news link removal after a year
	if ($('.news-detail').length > 0) {
		var d = new Date($('.news-detail .news-date').text()),
			d2 = new Date(),
			d3 = (d2 - d) / 1000 / 60 / 60 / 24; // diff in ms, converted to days

		if (d3 > 365) {
			$('.news-detail a[href^="http"]').each(function() {
				var tmp = $(this).text();
				$(this).after(tmp);
				$(this).remove();
			})
		}
	}


	if (page == 'logo') {
		if ($("#logowall").width() >= 480) {
			if ($("#logowall").width() < 1024) {
				$("#logowall").masonry({
					columnWidth: 240
				});
			} else if ($("#logowall").width() < 1120) {
				$("#logowall").masonry({
					columnWidth: 256
				});
			} else if ($("#logowall").width() < 1280) {
				$("#logowall").masonry({
					columnWidth: 280
				});

			} else {
				$("#logowall").masonry({
					columnWidth: 320
				});
			}
		}

		$('.logo-box').attr("onclick", "return true");

		$(window).resize(function() {
			if ($("#logowall").width() < 1024) {
				$("#logowall").masonry('option', {
					columnWidth: 240
				});
			} else if ($("#logowall").width() < 1120) {
				$("#logowall").masonry('option', {
					columnWidth: 256
				});
			} else if ($("#logowall").width() < 1280) {
				$("#logowall").masonry('option', {
					columnWidth: 280
				});
			} else {
				$("#logowall").masonry('option', {
					columnWidth: 320
				});
			}
		});

		// ANIMATIONS
		function animate() {
			//            alert("hi");
			$(".logo-box").each(function(e, dom) {
				var $dom = $(dom);
				if ($dom.visible(true)) {
					if (!$dom.hasClass("logo-animate")) {
						$dom.addClass("logo-animate");
					}
				}
			});
		}

		// ANIMATION SUPPORT CHECK
		var animation = false,
			animationstring = 'animation',
			keyframeprefix = '',
			domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
			pfx = '',
			elm = document.createElement('div');

		if (elm.style.animationName !== undefined) {
			animation = true;
		}

		if (animation === false) {
			for (var i = 0; i < domPrefixes.length; i++) {
				if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
					pfx = domPrefixes[i];
					animationstring = pfx + 'Animation';
					keyframeprefix = '-' + pfx.toLowerCase() + '-';
					animation = true;
					break;
				}
			}
		}

		if (animation === false) {
			$(".logo-box").css("opacity", "1");
		} else if (isiPad) {
			$(".logo-box").css("opacity", "1");
		} else {
			$(window).scroll(function() {
				animate();
			});
			animate();
		}

	}
	if (page == 'how') {

		var container = document.querySelector('#teamwall');
		if ($(window).width() >= 480) {
			var msnry = new Masonry(container, {
				columnWidth: 240
			});
		} else {
			var msnry = new Masonry(container, {
				columnWidth: ($(window).width() / 2)
			});
		}

	}

	$('.filter-btn').click(function() {

		$('html,body').animate({
			scrollTop: 0
		}, 300);

		var type = $(this).attr('type');
		$('.loader').show();

		$('.filter-btn').removeClass('active');
		$(this).addClass('active');
		$('#newswall').masonry('destroy');
		$('#newswall').html('');
		$('#newswall').fadeOut();

		$.ajax({
			type: "POST",
			url: baseURL + 'en/ajax/reogranize',
			dataType: 'json',
			data: {
				'lang': lang,
				'type': type
			},
			success: function(response) {

				var html = '';


				response.forEach(function(entry) {

					if (entry.type == 0) {
						html += '<article class="cell company" href="' + baseURL + lang + '/news/detail/' + entry.uri +
							'"><div class="img-cont"><a class="desaturate" href="' + baseURL + lang + '/news/detail/' + entry.uri +
							'"><img src="' + baseURL + 'attachment/news/' + entry.id + '/' + entry.file_name +
							'"></a></div><div class="content"><div class="title">' + entry.news_date +
							'<span>news</span></div><div class="red-line-40"></div><p>' + entry.news_subject +
							'</p></div></article>';
					}


					if (entry.type == 1) {
						if (entry.file_name != null) {
							html += '<article class="cell company team" href="' + entry.link +
								'"><div class="img-cont"><a class="desaturate" href="' + entry.link + '"><img src="' + baseURL +
								'attachment/news/' + entry.id + '/' + entry.file_name +
								'"></a></div><div class="content"><div class="title">' + entry.news_date +
								'<span>team news</span></div><div class="red-line-40"></div><p>' + entry.news_subject +
								'</p></div></article>';
						} else {
							html += '<article class="cell company news-without-images team" href="' + entry.link +
								'"><div class="content"><div class="title">' + entry.news_date +
								'<span>team news</span></div><div class="red-line-40"></div><p>' + entry.news_subject +
								'</p></div></article>';
						}
					}

					if (entry.type == 2) {
						if (entry.file_name != null) {
							html += '<article class="cell company noteworthy" href="' + entry.link +
								'"><div class="img-cont"><a class="desaturate" href="' + entry.link + '"><img src="' + baseURL +
								'attachment/news/' + entry.id + '/' + entry.file_name +
								'"></a></div><div class="content"><div class="title">' + entry.news_date +
								'<span>noteworthy</span></div><div class="red-line-40"></div><p>' + entry.news_subject +
								'</p></div></article>';
						} else {
							html += '<article class="cell company noteworthy news-without-images" href="' + entry.link +
								'"><div class="content"><div class="title">' + entry.news_date +
								'<span>noteworthy</span></div><div class="red-line-40"></div><p>' + entry.news_subject +
								'</p></div></article>';
						}
					}

				});

				if (response.length == 0) {
					$('.loader').delay(300).fadeOut(500, function() {
						$('#newswall').html('<h1>result not found</h1>');
						$('#newswall').fadeIn(500);
					});
				} else {
					$('.loader').delay(300).fadeOut(500, function() {
						$('#newswall').html(html);
						$('#newswall').masonry({
							itemSelector: 'article',
							columnWidth: 320,
							"isFitWidth": true
						});
						$('#newswall').fadeIn(500);
					});
				}

			}
		});

	});

	$('.item').click(function() {

		if ($(this).attr('expand') != undefined) {
			$('.expanded').remove();
			var target = $(this).attr('expand');
			var id = $(this).attr('id');
			if (target != '') {
				$(this).after(
					'<div class="item expanded" style="width:480px; height:300px; display:none"><img width="478" height="298" src="' +
					target + '"></div>');
			} else {
				// job ad
				if (id == "join") {
					$(this).after(
						'<div class="item expanded join-expanded" style="width:478px; height:298px; margin-bottom:2px; display:none; background:#ea3333"><p style="margin-top:90px;">Check out the job requirements for: <br/><a class="black-link fancybox" href="#account-director">Account Director</a><br><a class="black-link fancybox" href="#senior-graphic-designer-art-director">Senior graphic designer / Art director</a></p></div>'
					);

				} else {
					$(this).after(
						'<div class="item expanded wholehearted-expanded" style="width:478px; height:298px; margin-bottom:2px; display:none; background:#ea3333"><p>We aim to make a significant positive difference to the brands and people we work with through our holistic brand building skills. Together with our customers, we build stronger brands that bring valuable competitive advantages.</p></div>'
					);
				}
			}

			$('.expanded').fadeIn(800);
			msnry.reloadItems();
			msnry.layout();

			//Fancy Box
			setTimeout(function() {
				$(".fancybox").fancybox({
					maxWidth: 800,
					maxHeight: 700,
					fitToView: false,
					width: '100%',
					height: '100%',
					autoSize: false,
					closeClick: false,
					openEffect: 'none',
					closeEffect: 'none',
					afterClose: function() {
						window.location = window.location.href.split('#')[0];
					},
					helpers: {
						overlay: {
							locked: false
						}
					}
				}).on('click', function() {
					var href = $(this).attr('href'),
						hash = '#job-' + href.substr(1);
					window.location.hash = hash;
				});

			}, 100);
		}
	});

	$('.item').hover(function() {

		$(this).children('.text').animate({
			bottom: "2",
		}, 300, function() {});

	}, function() {

		$(this).children('.text').animate({
			bottom: "-50",
		}, 300, function() {});

	});


	var steppos = new Number(1);

	$(".next-arrow").click(function(e) {

		steppos = parseInt(steppos) + 1;

		if (steppos == 7) {
			steppos = 1;
		}
		var $icon = $('.step-' + steppos);
		$icon.trigger('click');
	});

	$(".prev-arrow").click(function(e) {

		steppos = parseInt(steppos) - 1;

		if (steppos == 0) {
			steppos = 6;
		}
		var $icon = $('.step-' + steppos);
		$icon.trigger('click');
	});

	$('.step-icon').hover(function() {
		var $item = $(this);
		if (!$(this).hasClass('active')) {
			$(this).children('.static').fadeOut(1, function() {
				$item.children('.hover').fadeIn(1);
			});
		}
	}, function() {
		var $item = $(this);
		if (!$(this).hasClass('active')) {
			$(this).children('.hover').fadeOut(1, function() {
				$item.children('.static').fadeIn(1);
			});
		}
	});



	$('.step-icon').each(function(i) {

		var $icon = $(this);
		var hovering = false;
		var target = $icon.attr('step');


		$icon.click(function(e) {

			steppos = target;
			var $click = $(this);

			$('.step-text').removeClass('active');
			$('.step-text').hide();
			$('.step-' + target + '-text').delay(100).fadeIn("slow", function() {
				$(this).addClass('active');
			});

			$('.step-icon').removeClass('active');
			$(this).children('.static').fadeOut(1);
			$(this).children('.hover').fadeIn(1);
			$(this).addClass('active');


			$('.step-icon').each(function(i) {

				if ($(this).hasClass('active')) {
					//$(this).removeClass('active');
				} else {
					$(this).children('.hover').fadeOut(1, function() {});
					$(this).children('.static').fadeIn(1, function() {});
				}

			});

		});

		if ($icon.hasClass('active')) {

			$icon.children('.static').fadeOut("fast", function() {
				$icon.children('.hover').fadeIn();
			});

		} else {

		}


	});

	var option;

	$(".featured-detail").hover(function() {
		var b = $(this).children(".img-cont").children("a").children("img");
		TweenMax.to(b, 0.8, {
			scale: 1.03,
			ease: Power1.easeOut
		})
	}, function() {
		var b = $(this).children(".img-cont").children("a").children("img");
		TweenMax.to(b, 0.8, {
			scale: 1,
			ease: Power1.easeOut
		});
	});

	$(".work-list-desc").hover(function() {
		var b = $(this).parent('a').parent().children(".img-cont").children("a").children("img");
		TweenMax.to(b, 0.8, {
			scale: 1.03,
			ease: Power1.easeOut
		})
	}, function() {
		var b = $(this).parent('a').parent().children(".img-cont").children("a").children("img");
		TweenMax.to(b, 0.8, {
			scale: 1,
			ease: Power1.easeOut
		});
	});


	$(" div.img-cont:not(.hero) > a").hover(function() {
		var b = $(this).children("img");
		TweenMax.to(b, 0.8, {
			scale: 1.03,
			ease: Power1.easeOut
		})
	}, function() {
		var b = $(this).children("img");
		TweenMax.to(b, 0.8, {
			scale: 1,
			ease: Power1.easeOut
		});
	});


	$('.smooth-scroll').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top + 2
				}, 1000);
				return false;
			}
		}
	});



	var $head = $('header');
	$('.header-waypoint').each(function(i) {
		var $el = $(this);

		$el.waypoint(function(direction) {

			if (direction === 'down' && section != '404') {

				$('.news-filter').animate({
					top: "50px",
				}, 240, function() {});

				if (section == 'branding-agency-detail') {
					if (page != 'logo') {
						$('.progress-bar').animate({
							top: "31px",
						}, 380, function() {
							$(this).fadeIn();
						});
					}

				} else {

				}
				$head.attr('class', 'header header-small');

			} else if (direction === 'up') {
				if (section == 'branding-agency-detail') {
					if (page != 'logo') {
						$('.progress-bar').fadeOut(10);
						$('.progress-bar').animate({
							top: "31px",
						}, 380, function() {})
					}

				} else {

				}


				$('.normal-menu').animate({
					paddingTop: "0",
				}, 380, function() {});




				$('.news-filter').animate({
					top: "80px",
				}, 450, function() {});

				$head.attr('class', 'header header-large');


			}
		}, {
			offset: '100%'
		});

	});



	$('#case-study-meth').waypoint(function(direction) {

		if (direction == 'down') {


		} else if (direction === 'up') {}

	});

	$('#discovery').waypoint(function(direction) {

		$('.sub-nav-btn').removeClass('active');
		if (direction === 'down') {
			$('.discovery-nav').addClass('active');
		} else {
			$('.sub-nav-btn').removeClass('active');
		}

	});

	$('#design').waypoint(function(direction) {

		$('.sub-nav-btn').removeClass('active');
		if (direction === 'down') {
			$('.design-nav').addClass('active');
		} else {
			$('.discovery-nav').addClass('active');
		}

	});


	$('#communications').waypoint(function(direction) {

		$('.sub-nav-btn').removeClass('active');

		if (direction === 'down') {
			$('.communications-nav').addClass('active');
		} else {
			$('.design-nav').addClass('active');
		}

	});


	$('#marketing').waypoint(function(direction) {

		$('.sub-nav-btn').removeClass('active');

		if (direction === 'down') {
			$('.marketing-nav').addClass('active');
		} else {
			$('.communications-nav').addClass('active');
		}

	});


	$('#document').waypoint(function(direction) {

		$('.sub-nav-btn').removeClass('active');

		if (direction === 'down') {
			$('.document-nav').addClass('active');
		} else {
			$('.marketing-nav').addClass('active');
		}

	});

	$('#environment').waypoint(function(direction) {

		$('.sub-nav-btn').removeClass('active');

		if (direction === 'down') {
			$('.environment-nav').addClass('active');
		} else {
			$('.design-nav').addClass('active');
		}

	});


	$('#launch').waypoint(function(direction) {

		$('.sub-nav-btn').removeClass('active');

		if (direction === 'down') {
			$('.launch-nav').addClass('active');
		} else {
			$('.environment-nav').addClass('active');
		}

	});


	$('#production-and-quality-control').waypoint(function(direction) {

		$('.sub-nav-btn').removeClass('active');

		if (direction === 'down') {
			$('.production-and-quality-control-nav').addClass('active');
		} else {
			$('.design-nav').addClass('active');
		}

	});


	$('#enhance').waypoint(function(direction) {

		$('.sub-nav-btn').removeClass('active');

		if (direction === 'down') {
			$('.enhance-nav').addClass('active');
		} else {
			$('.document-nav').addClass('active');
		}

	});

	$('.sub-menu').click(function() {
		if ($('body').hasClass('navopen')) {

			$('body').removeClass('navopen');
			$(this).removeClass('active');
		} else {

			$('body').addClass('navopen');
			$(this).addClass('active');
		}
	});

	$('.sub-menu2').click(function() {
		if ($(this).hasClass('active')) {
			$(this).children('#nav-toggle').removeClass("active");
			$('.external-navbar2').animate({
				top: "-260px",
			}, 380, function() {});
			$(this).removeClass('active');
		} else {
			$(this).children('#nav-toggle').addClass("active");
			$('.external-navbar2').animate({
				top: "80px",
			}, 380, function() {});
			$(this).addClass('active');
		}
	});

	$('.clients-logo').each(function(i) {
		var $el = $(this),
			animClassDown = $el.data('animateDown'),
			animClassUp = $el.data('animateUp');
		var time = 300;
		$el.waypoint(function(direction) {
			if (direction === 'down' && animClassDown) {} else if (direction === 'up' && animClassUp) {

			}
		}, {
			offset: '100%'
		});
	});


	$('.alpha-video-btn').click(function() {

		//ga('send', 'event', 'button', 'click', 'alpha-video');

	});

	$('.daycraft-video-btn').click(function() {

		//ga('send', 'event', 'button', 'click', 'daycraft-video');

	});

	$(".logo-filter-btn").click(function() {
		var $this = $(this);
		if (baseURL == "http://stepworks.com.hk/" || baseURL == "http://www.stepworks.com.hk/") {
			//            console.log($this.data("filter"));
			ga('send', 'event', 'button', 'click', $this.data("filter"));
		}
	})

	$('.round-arrow').click(function() {

		var target = $(this).children('.play-arrow').attr('href');
		$('.youtube-loader').html('<iframe width="560" height="315" src="' + target +
			'" frameborder="0" allowfullscreen></iframe>');
		//		$('.youtube-loader').children('iframe').attr('src', target);
		$('.youtube-loader').show();
		$('.youtube-close').show();

	});

	$('.youtube-close').click(function() {

		$('.youtube-loader').children('iframe').attr('src', '');
		$('.youtube-loader').hide();
		$('.youtube-close').hide();

	});

	$('.subscribe-form input').on('focus', function() {
		$(this).next('label').addClass('up');
	}).on('blur', function() {
		if ($(this).val() == '') {
			$(this).next('label').removeClass('up');
		}
	});

	$('#subForm').on('submit', function(e) {
		e.preventDefault();
		var $form = $(this);

		if ($form.find(':invalid').length == 0) {
			$.ajax({
				url: $form.attr('action'),
				type: 'post',
				data: $form.serialize(),
				success: function(data, status, xhr) {
					$form.slideUp();
					$('.ty2').fadeIn();
				}
			})
		} else {
			$form[0].reset();
		}
	});



});


var map;

function initialize() {

	var myLatlng = new google.maps.LatLng(22.28022, 114.155609);

	var styles = [{
		"stylers": [{
				"gamma": 0.5
			}, //Gama value.
			{
				"hue": "#ff0022"
			}, //Hue value.
			{
				"saturation": -100
			} //Saturation value.
		]
	}];

	var mapOptions = {
		center: myLatlng,
		scrollwheel: false,
		zoom: 20,
		styles: styles,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		streetViewControl: false,
		scaleControl: true,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		}
	};


	var shadow = new google.maps.MarkerImage(baseURL + 'assets/images/icon/sw-map-marker-shadow.png',
		new google.maps.Size(72, 20),
		new google.maps.Point(0, 0),
		new google.maps.Point(47, 16)
	);



	map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		icon: baseURL + 'assets/images/icon/sw-map-marker.png',
		shadow: shadow,
		map: map,
	});

}


//Google Map
if (page == 'contact') {
	google.maps.event.addDomListener(window, 'load', initialize);
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});

	$('.contact-form input, .contact-form textarea').on('focus', function() {
		$(this).next('label').addClass('up');
	}).on('blur', function() {
		if ($(this).val() == '') {
			$(this).next('label').removeClass('up');
		}
	});

	$('#contactform').on('submit', function(e) {
		e.preventDefault();
		$(".error").hide();
		var $form = $(this);
		//honey pot check
		if ($("#website").val() == '99') {
			$("#website").val("36788770");
		}
		if ($form.find(':invalid').length == 0 && $form.find('#company').val() == '') {
			$.ajax({
				url: $form.attr('action'),
				type: 'post',
				data: $form.serialize(),
				success: function(data, status, xhr) {
					if (data == 'success') {
						$form.slideUp();
						$('.ty').fadeIn();
					} else {
						$(".error").show();
						ga('send', 'event', 'contactForm', 'contact-fail', 2);
					}
				}
			})
		} else {
			$form[0].reset();
		}
	});

	$(window).load(function() {
		$('.contact-form input, .contact-form textarea').trigger('blur');
	});
}

$(document).ready(function() {
	if ($(window).width() >= 1024) {
		$('.stepsanim').attr('src', 'https://stepworks.com.hk/3steps/');
	}
	if (window.location.hash == "#connect") {

		// $(".flexslider").data('flexslider').flexAnimate(1);
		setTimeout(function() {
			$("body").addClass("modal-open");

			$(".modal-close").on("click", function() {
				var $this = $(this),
					$modal = $this.closest('.modal');
				if ($('.modal--active').length == 0) {
					$modal.fadeOut();
					setTimeout(function() {
						$("body").removeClass('modal-open');
					}, 500);
				}
			});
			$("body").on('click', function(e) {
				if ($("body").hasClass('modal-open') && $(e.target).hasClass('modal')) {
					$('.modal').fadeOut();
					setTimeout(function() {
						$("body").removeClass('modal-open');
					}, 500);
				}
			});
		}, 2000);
	}

	if (window.location.hash == "#joinus" && $('#join').length > 0) {
		setTimeout(function() {
			$('#join').trigger('click');
			$('html,body').animate({
				'scrollTop': $('#join').offset().top - ($(window).height() / 3) + 'px'
			}, 'slow');
		}, 1000);
	}

	if (window.location.hash.indexOf('#job-') == 0 && $('#join').length > 0) {
		var job = window.location.hash.substr(5);
		// console.log(job);
		$.fancybox({
			href: '#' + job,
			maxWidth: 800,
			maxHeight: 700,
			fitToView: false,
			width: '100%',
			height: '100%',
			autoSize: false,
			closeClick: false,
			openEffect: 'none',
			closeEffect: 'none',
			afterClose: function() {
				window.location = window.location.href.split('#')[0];
			},
			helpers: {
				overlay: {
					locked: true
				}
			}
		});
	}

});

$('#connectForm').on('submit', function(e) {
	e.preventDefault();
	var $form = $(this);

	if ($form.find(':invalid').length == 0) {
		$.ajax({
			url: $form.attr('action'),
			type: 'post',
			data: $form.serialize(),
			success: function(data, status, xhr) {
				$form.addClass("subscribed");
				$('.ty3').addClass("subscribed");
			}
		})
	} else {
		$form[0].reset();
	}
});

if (page == 'news') {

	$('#newswall').masonry({
		itemSelector: 'article',
		columnWidth: 320,
		"isFitWidth": true
	});
}

$(window).scroll(function() {
	var s = $(window).scrollTop(),
		d = $(document).height(),
		c = $(window).height();
	scrollPercent = (s / (d - c)) * 100;
	var position = scrollPercent;

	$("#progressbar").attr('value', position);

	if ($('#ad-video').length > 0 && $('#ad-video').visible()) {
		$('#ad-video')[0].play();
	}
});


var animation = false;

function fadeOutIn(elem, speed) {
	if (animation) {
		return false;
	}
	if (!elem.style.opacity) {
		elem.style.opacity = 0;
	}
	animation = true;
	outInterval = setInterval(function() {
		elem.style.opacity = Number(elem.style.opacity) + 0.02;
		if (elem.style.opacity >= 2) {
			clearInterval(outInterval);
			inInterval = setInterval(function() {
				elem.style.opacity = Number(elem.style.opacity) - 0.02;
				if (elem.style.opacity <= 0) {
					clearInterval(inInterval);
					animation = false;
				}
			}, speed / 50);
		}
	}, speed / 50);

}

function setClipboard(value) {
	var box = document.getElementById('tool-tip');
	var tempInput = document.createElement("input");
	tempInput.style = "position: absolute; left: -1000px; top: -1000px";
	tempInput.value = value;
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand("copy");
	document.body.removeChild(tempInput);
	fadeOutIn(box, 500);
}
