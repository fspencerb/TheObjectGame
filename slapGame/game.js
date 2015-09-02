
var firstName = prompt("Please enter the name of the person you'd like to Slap, Punch and Kick:", "");
document.getElementById("name").innerText = firstName;

function hit() {
	hits+=1;
	/*hitcount();*/
}

function update() {
	document.getElementById("hp").innerText = player.health;
	document.getElementById("hitshow").innerText = player.hits;
}	

function showHide(id) {
document.getElementById(id).classList.remove("hide");

  var hide = function() {
  document.getElementById(id).classList.add("hide");
  }
 
  setTimeout(hide, 500)
}

var player = 
{
	name: firstName,
	hits: 0,
	health: 100,
	slap:function(){
		showHide("slapshow");
		this.health-=1;
		this.hits+=1;
		update();
	},
	punch:function() {
		showHide("punchshow");
		this.health-=5;
		this.hits+=1;
		update();
	},
	kick:function(){
		showHide("kickshow");
		this.health-=10;
		this.hits+=1;
		update();
	},
	reset:function() {
		this.health = this.health + 100;
			if (this.health > 100) {
			this.hits = 0;
			this.health = 100;
			}		
		update();
	}
	knockedOut:function() {
		if (this.health < 0)
		   this.health = 0;
		if (this.health = 0)
		   prompt("You KO'd " + firstName + "! Now did you really want to go and do that?");
	}

}

update();