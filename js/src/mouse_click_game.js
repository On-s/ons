// window.onload = print;
(function(){
	var p = document.getElementsByTagName('p')[0];
	var span = p.getElementsByTagName('span')[0];
	var score = 0;

	var scoreFn = function (e) {
		var parent = e.target.parentElement;
		parent.innerHTML = "";
		
		score++;
		span.innerText=score;
		gameRenderFn();
	};

	function gameRenderFn() {			
		randomlocation();
		var tdImg = document.getElementsByTagName('button')[0];
		tdImg.addEventListener('click', scoreFn);
	}
	gameRenderFn()


	function randomlocation(){
		var i = Math.floor(Math.random()*10);
		var j = Math.floor(Math.random()*10);
		var td = document.getElementById(i + "x" + j);
		td.innerHTML = '<button type="reset"></button>'
	}
})();
