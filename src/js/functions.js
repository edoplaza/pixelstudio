$(document).ready(function ($) {
  $(".header__pull").on("click", function () {
    $(".header__pull").toggleClass("close");
    $(".header__nav").toggleClass("open");
  });

  $(".header__nav li a").on("click", function () {
    $(".header__pull").removeClass("close");
    $(".header__nav").removeClass("open");
  });

  $(".header__nav li a").hover(
    function () {
      $(this)
        .parent()
        .siblings()
        .find("a")
        .addClass("blur");
    },
    function () {
      $(this)
        .parent()
        .siblings()
        .find("a")
        .removeClass("blur");
    }
  );

  $('.form input[type="text"], .form input[type="email"], .form textarea').val("");

  $("input:radio[name=bot][value=yes]").click();

  $(document).on(
    "focus",
    '.form input[type="text"], .form input[type="email"], .form textarea',
    function () {
      $(this)
        .parent()
        .find("label")
        .addClass("small-label");
    }
  );

  $(document).on(
    "blur",
    '.form input[type="text"], .form input[type="email"], .form textarea',
    function () {
      if (!$(this).val()) {
        $(this)
          .parent()
          .find("label")
          .removeClass("small-label");
      }
    }
  );

  $(document).on("click", '.form input[type="radio"]', function () {
    $('.form input[type="radio"]').removeClass("checked");
    $(this).addClass("checked");
  });

  function showMask(output) {
    $(".mask")
      .fadeIn(300)
      .delay(700)
      .fadeOut(500);
    $(".output")
      .hide()
      .html(output)
      .fadeIn(300)
      .delay(700)
      .fadeOut(500);
  }

  $(document).on("click", ".submit", function (e) {
    var output;
    e.preventDefault();
    var proceed = true;

    if (!$.trim($('.form input[type="text"]').val())) {
      proceed = false;
      output = '<h3 class="error">Please, enter your name</h3>';
      showMask(output);
    }

    if ($('.form input[type="text"]').val().length < 3 && proceed == true) {
      proceed = false;
      output = '<h3 class="error">Your name is too short</h3>';
      showMask(output);
    }

    if ($('.form input[type="text"]').val().length > 30 && proceed == true) {
      proceed = false;
      output = '<h3 class="error">Your name is too long</h3>';
      showMask(output);
    }

    if (!$.trim($('.form input[type="email"]').val()) && proceed == true) {
      proceed = false;
      output = '<h3 class="error">Please, enter your email</h3>';
      showMask(output);
    }

    var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (
      !email_reg.test($.trim($('.form input[type="email"]').val())) &&
      proceed == true
    ) {
      proceed = false;
      output = '<h3 class="error">Please, enter a valid email</h3>';
      showMask(output);
    }

    if (!$.trim($(".form textarea").val()) && proceed == true) {
      proceed = false;
      output = '<h3 class="error">Please, enter a message</h3>';
      showMask(output);
    }

    if ($(".form textarea").val().length < 5 && proceed == true) {
      proceed = false;
      output = '<h3 class="error">Your message is too short!</h3>';
      showMask(output);
    }

    if ($(".form textarea").val().length > 200 && proceed == true) {
      proceed = false;
      output = '<h3 class="error">Your message is too long!</h3>';
      showMask(output);
    }

    var checked = $('input[name="bot"]:checked').val();
    if (checked == "yes" && proceed == true) {
      proceed = false;
      output = '<h3 class="error">Sorry, no robots allowed</h3>';
      showMask(output);
    }

    if (proceed) {
      var checked = $('input[name="bot"]:checked').val();
      var post_data = {
        user_name: $("input[name=name]").val(),
        user_email: $("input[name=email]").val(),
        msg: $("textarea[name=message]").val(),
        bot: checked
      };

      $.post(
        "mailer.php",
        post_data,
        function (response) {
          if (response.type == "error") {
            output = '<h3 class="error">' + response.text + "</h3>";
          } else {
            output = '<h3 class="success">' + response.text + "</h3>";
            $(
              '.form input[type="text"], .form input[type="email"], .form textarea'
            ).val("");
            $("label").removeClass("small-label");
            $("textarea").css({ height: 90 });
          }
          showMask(output);
          $("input:radio[name=bot][value=yes]").click();
        },
        "json"
      );
    }
  });

  $(document).on("paste input", "textarea", function () {
    if ($(this).outerHeight() > this.scrollHeight) {
      $(this).height(1);
    }
    while (
      $(this).outerHeight() <
      this.scrollHeight +
      parseFloat($(this).css("borderTopWidth")) +
      parseFloat($(this).css("borderBottomWidth"))
    ) {
      $(this).height($(this).height() + 1);
    }
  });

  $(document).on("click", "input:radio[name=bot]", function () {
    var checked = $('input[name="bot"]:checked').val();

    if (checked == "wish") {
      $(".radio span").addClass("superbot");
    } else {
      $(".radio span").removeClass("superbot");
    }
  });

  // Share Button //

  /*var $shareButtons=$(".share-button")
		,$toggleButton=$(".share-toggle-button")

		,menuOpen=false
		,buttonsNum=$shareButtons.length
		,buttonsMid=(buttonsNum/2)
		,spacing=75
	;

	function openShareMenu(){
		TweenMax.to($toggleButton,0.1,{
			scaleX:1.2,
			scaleY:0.6,
			ease:Quad.easeOut,
			onComplete:function(){
				TweenMax.to($toggleButton,.8,{
					scale:1,
					ease:Elastic.easeOut,
					easeParams:[1.1,0.6]
				})
				TweenMax.to($toggleButton.children(".share-icon"),.8,{
					scale:1,
					ease:Elastic.easeOut,
					easeParams:[1.1,0.6]
				})
			}
		})
		$shareButtons.each(function(i){
			var $cur=$(this);
			var pos=i-buttonsMid;
			if(pos>=0) pos+=1;
			var dist=Math.abs(pos);
			$cur.css({
				zIndex:buttonsMid-dist
			});
			TweenMax.to($cur,1.1*(dist),{
				x:pos*spacing,
				scaleY:0.6,
				scaleX:1.1,
				ease:Elastic.easeOut,
				easeParams:[1.01,0.5]
			});
			TweenMax.to($cur,.8,{
				delay:(0.2*(dist))-0.1,
				//scale:0.6,
				scale:1,
				ease:Elastic.easeOut,
				easeParams:[1.1,0.6]
			})

			TweenMax.fromTo($cur.children(".share-icon"),0.2,{
				//scale:0
				scale:0.95
			},{
				delay:(0.2*dist)-0.1,
				scale:0.75,
				ease:Quad.easeInOut
			})
		})
	}
	function closeShareMenu(){
		TweenMax.to([$toggleButton,$toggleButton.children(".share-icon")],1.4,{
			delay:0.1,
			scale:1,
			ease:Elastic.easeOut,
			easeParams:[1.1,0.3]
		});
		$shareButtons.each(function(i){
			var $cur=$(this);
			var pos=i-buttonsMid;
			if(pos>=0) pos+=1;
			var dist=Math.abs(pos);
			$cur.css({
				zIndex:dist
			});

			TweenMax.to($cur,0.4+((buttonsMid-dist)*0.1),{
				x:0,
				scale:.95,
				ease:Quad.easeInOut,
			});

			TweenMax.to($cur.children(".share-icon"),0.2,{
				//scale:0,
				scale:0.95,
				ease:Quad.easeIn
			});
		})
	}

	function toggleShareMenu(){
		menuOpen=!menuOpen

		menuOpen?openShareMenu():closeShareMenu();
	}
	$toggleButton.on("mousedown",function(){
		toggleShareMenu();
	})

	*/
});
