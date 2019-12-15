let seekProgres = 0;

function setProgress() {
	 $("#success").width("10%")
	 seekProgres = 10;
     console.log("Нажата кнопка1")
}
function addProgress(step) {
	seekProgres = seekProgres + step
	let wth = `${seekProgres}%`
	$("#success").width(wth)
	console.log("Нажата кнопка_1")
}

function init() {
  $("button.btn btn-info").click(setProgress()) 
}
$(document).ready(init);