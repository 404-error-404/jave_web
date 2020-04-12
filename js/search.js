
for (let i = 0; i < 40; i++) {
	let ball = document.createElement("div");
	ball.className = "ball"
	ball.style.left = rand(0, window.innerWidth - 150) + 'px';
	ball.style.top = rand(0, window.innerHeight - 150) + 'px';
	ball.setAttribute("id", "ball_" + i);
	let rate = Math.random() * 5;
	ball.innerHTML = "<div class='ballInner' style='animation-delay: " + rate + "s'></div>";
	//"<div class='score'>PG12138<a id='PG12138' class='stretched-link></a></div>"

	let body = document.getElementById("balls");
	body.appendChild(ball);
}

function rand(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function memory(sourceHtml) {
	let memory = sourceHtml.contentWindow.document.body;
	memory.style.zoom = 0.1;
}

var data = "{" +
	"num: '10'," +
	"memories:[" +
	"'第一段记忆'," +
	"'第二段记忆：今天武汉封城了。'," +
	"'第三段记忆'," +
	"]" +
	"}";

var obj = eval("(" + data + ")");

document.getElementById("btnSearch").addEventListener("click", function () {
	//alert("Hello World!");
	/*查询记忆数据
	 * 返回结果 返回数据的个数num,数据内容列表json
	 * 返回结果在ball中显示出来
	 */
	//选择前num个ball
	let num = obj.num;
	console.log("num=" + num);
	for (let i = num; i < 40; i++) {
		let ball = document.getElementById("ball_" + i);
		ball.style.display = "none";
		//其他消失隐藏
	}
	for (let i = 0; i < num; i++) {
		let ball = document.getElementById("ball_" + i);
		ball.addEventListener("click", function () {
			console.log("click the memory");
			select(this);
		});
	}
});

function strentch(obj) {
	obj.style.innerWidth = "100px";
	obj.style.innerHeight = "100px";
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
		"<p>"+obj.memories[1]+"</p>" +
		"<div class='btnGroups'>" +
		"<div class='yesBtn'>查看记忆详情</div>" +
		"<div class='exitBtn'>继续寻找</div>" +
		"</div>" +
		"</div>" +
		"</div>"

	document.body.appendChild(bg);
}

getElementByClassName("exitBtn").addEventListener("click", function () {
	 getElementByClassName("centerBallInner").style.display = "none"; });
