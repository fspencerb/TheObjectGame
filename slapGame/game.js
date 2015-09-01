var health=100;

function slap() {
	health-=1;
}

function update() {
	document.getElementById("hp").innerText = slap();
	console.log(update());
}

console.log(update());