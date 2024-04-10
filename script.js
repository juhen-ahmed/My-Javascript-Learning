const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})
sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'bottom'})





sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

$(window).on("load resize",function() {

	var counters = $(".count");
	var countersQuantity = counters.length;
	var counter = [];
  
	for (i = 0; i < countersQuantity; i++) {
	  counter[i] = parseInt(counters[i].innerHTML);
	}
  
	var count = function(start, value, id) {
	  var localStart = start;
	  setInterval(function() {
		if (localStart < value) {
		  localStart++;
		  counters[id].innerHTML = localStart;
		}
	  }, 4);
	}
  
	for (j = 0; j < countersQuantity; j++) {
	  count(0, counter[j], j);
	}
  });


