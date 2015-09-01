var health=100;

function slap() {
	health-=1;
	update();
}

function update() {
	document.getElementById("hp").innerText = health;
}

console.log(update());