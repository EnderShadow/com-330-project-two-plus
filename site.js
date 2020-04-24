window.addEventListener('keyup', function(e) {
  console.log(e.keyCode);
  // Toggle the visibility of gridlines when `g` is pressed
  if (e.keyCode === 71) {
    document.querySelector('html').classList.toggle('g');
  }
})

if(document.querySelector('body').offsetHeight < window.innerHeight) {
	document.querySelector('footer').style = "position: absolute; bottom: 0; width: 100%;"
}

window.addEventListener('resize', function(e) {
	if(document.querySelector('body').offsetHeight < window.innerHeight) {
		document.querySelector('footer').style = "position: absolute; bottom: 0; width: 100%;"
	}
	else {
		document.querySelector('footer').style = ""
	}
})
