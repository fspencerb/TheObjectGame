

var player = {

	name: "Teemo",
	hits: 0,
	health: 100,
	isAlive: function () {
		if (this.health <= 0) {
			this.health = 0;
		}
	},
	damage: function (damage) {
		this.hits++;
		this.health -= damage;
		this.isAlive();
		update();
	}
}

function slap() {
	player.damage(1);
}

function punch() {
	player.damage(5);
}

function kick() {
	player.damage(10);
}

function reset() {
	player.health = 100;
	player.hits = 0;
	update();
}

function update() {
	var hp = document.getElementById('hp');
	hp.innerHTML = player.health.toString();
	var text = document.getElementById('name');
	text.innerHTML = name;
	var hit = document.getElementById('hits');
	hit.innerHTML = player.hits.toString();

	if (player.health <= 0) {
		alert("DEAD!");
	}

}

update();






	
