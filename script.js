  		$('.main-nav a').on('click', function (e) {
	  if (this.hash !== '') {
	    e.preventDefault();

	    const hash = this.hash;

	    $('html, body')
	      .animate({
	        scrollTop: $(hash).offset().top
	      },800);
	 	 }
		});

		$('.mini-nav a').on('click', function (e) {
	  if (this.hash !== '') {
	    e.preventDefault();

	    const hash = this.hash;

	    $('html, body')
	      .animate({
	        scrollTop: $(hash).offset().top
	      },800);
	 	 }
		});

	    $("a").click(function(event){
	      event.preventDefault();
	    });