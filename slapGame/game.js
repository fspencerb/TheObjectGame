var health=100;
var name = "Teemo";
var hits = 0;

function slap()
{
	health-=1;
	hits++;
	update();
}

function punch()
{
	health -= 5;
	hits++;
	update();
}

function kick()
{
	health -= 10;
	hits++;
	update();
}

function update()
{
	var hp = document.getElementById('hp');
	hp.innerText = "Health: " + health;
	var text = document.getElementById('name');
	text.innerText = "Name: " + name;
	var hit = document.getElementById('hits');
	hit.innerText = "Hits: " + hits;
	
	if(health <= 0)
	{
		alert("DEAD!");
	}
	
}

update();


	
