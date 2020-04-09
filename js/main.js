for(let i = 0; i < 40; i++){
	let ball = document.createElement("div");
	ball.className = "ball"
	ball.style.left = rand(0,window.innerWidth-150) + 'px';
	ball.style.top = rand(0,window.innerHeight-150) + 'px';

	let rate = Math.random() * 5;
	ball.innerHTML = "<div class='ballInner' style='animation-delay: " + rate + "s'>" +
		"<div class='score'>PG12138<a id='PG12138' class='stretched-link' onclick='select(this)'></a></div></div>"

	let body = document.body;
	body.appendChild(ball);
}

function rand(min,max) {
	return Math.round(Math.random() * (max-min) + min);
}

function memory(sourceHtml) {
	let memory = sourceHtml.contentWindow.document.body;
	memory.style.zoom = 0.1;
}

function select(event) {
	console.log(window.event.target.id);
	let bg = document.createElement("div");
	bg.className = "bg";
	bg.id = "bg"
	bg.innerHTML =
		"<div class='ball' style='width: 400px;height: 400px;animation: fadeIn 3s'>" +
			"<div class='centerBallInner'>" +
				"<iframe class='sourceHTML' src='../page/ball.html' onload='memory(this)'>" +
				"</iframe>" +
				"<div class='btnGroups'>" +
					"<div class='yesBtn'>查看记忆</div>" +
					"<div class='exitBtn'>继续寻找</div>" +
				"</div>" +
			"</div>" +
		"</div>"

	document.body.appendChild(bg);
}