let memoryIDs = ["111", "222", "333", "444", "5", "666", "777", "888"];
let memories = [];
let runTimer = 0;
let createTimer = 0;

createMemories();

runTimer = setInterval(function () {
	run();
},33);

createTimer = setInterval(function () {
	let ID = Math.random()+"";
	// memoryIDs.push(ID);
	createMemory(ID);
},2000);

let mainVue = new Vue({
	el: '#main',
	data: {
		memories: memories,
		seen: false,
		iframeSrc:""
	},
	methods: {
		clickMemory(event) {
			this.seen = true;
			this.iframeSrc = "../page/ball.html";
		},
		iframeLoad(event){
			let iframe = event.currentTarget;
			iframe.contentWindow.document.body.style.zoom = 0.1;
		},
		yes() {
			this.seen = false;
		},
		no(){
			this.seen = false;
		}
	}
})

function createMemory(memoryID) {
	let memory = {};
	memory.id = memoryID;
	memory.zoom = rand(0.7, 2);
	memory.backgroundColor = getRandomColor();
	memory.left = rand(0, document.getElementById("main").offsetWidth / 2) + "px";
	memory.top = rand(0, document.getElementById("main").offsetHeight / 2) + "px";
	memory.speedX = rand(-1, 1) < 0 ? -1 : 1;
	memory.speedY = rand(-1, 1) < 0 ? -1 : 1;
	memory.animationDelay = rand(0, 2) + "s";
	memory.seen = true;
	memories.push(memory);
}

function createMemories() {
	for (let i = 0; i < memoryIDs.length; i++) {
		createMemory(memoryIDs[i])
	}
}



function rand(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomColor() {
	return 'rgb(' + Math.floor(Math.random() * 255) + ','
		+ Math.floor(Math.random() * 255) + ','
		+ Math.floor(Math.random() * 255) + ')';
}
function run() {
	for (let i = 0; i < memories.length; i++) {
		let memory = document.getElementById(mainVue.$data.memories[i].id);
		if(memory!==null && mainVue.$data.memories[i].seen !== false){
			if (memory.offsetTop < 0 || memory.offsetTop > document.getElementById("main").offsetHeight / 2 - 30) {
				// document.getElementById("main").removeChild(memory);
				mainVue.$data.memories[i].seen = false;
			} else if (memory.offsetLeft < 0 || memory.offsetLeft > document.getElementById("main").offsetWidth / 2 - 30) {
				// document.getElementById("main").removeChild(memory);
				mainVue.$data.memories[i].seen = false;
			} else {
				// memory.style.top = memory.offsetTop + memories[i].speedY + "px";
				memories[i].top = memory.offsetTop + memories[i].speedY + "px";
				// memory.style.left = memory.offsetLeft + memories[i].speedX + "px";
				memories[i].left = memory.offsetLeft + memories[i].speedX + "px";
			}
		}

	}
}