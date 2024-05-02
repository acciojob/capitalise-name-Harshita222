//your JS code here. If required.
let inp = document.querySelector("input")
inp.addEventListener("blur", converted)
function converted(){
	let res = inp.value
		console.log(res.toUpperCase());
}