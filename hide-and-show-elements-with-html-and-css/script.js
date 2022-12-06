 let illustration = document.getElementById("oymyakon");
 let buttons = document.getElementsByTagName("button");
 
function clearButtons() {
			illustration.removeAttribute("style");	 
 }

scale.onclick = function() {
	illustration.removeAttribute("style");
	illustration.removeAttribute("hidden");	
	illustration.style.webkitTransform = "scale(0)";
	illustration.style.transform = "scale(0)";
}
hidden.onclick = function() {
	illustration.removeAttribute("style");
	illustration.setAttribute("hidden", "hidden");
}
overflow.onclick = function() {
	illustration.removeAttribute("style");
	illustration.removeAttribute("hidden");	
	illustration.style.height = "0";
	illustration.style.overflow = "hidden";
}
blurfilter.onclick = function() {
	illustration.removeAttribute("style");
	illustration.removeAttribute("hidden");	
	illustration.style.webkitFilter = "blur(200px)";
	illustration.style.filter = "blur(200px)";
}
reset.onclick = function() {
	illustration.removeAttribute("style");	 
	illustration.removeAttribute("hidden");	
}
