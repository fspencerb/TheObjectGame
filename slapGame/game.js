
var firstName = prompt("Please enter the name of the person you'd like to Slap, Punch and Kick:", "");
document.getElementById("name").innerText = firstName;

function hit() {
	hits+=1;
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
		this.knockedOut();
		this.sickPerson();
		update();
		
	},
	punch:function() {
		showHide("punchshow");
		this.health-=5;
		this.hits+=1;
		this.knockedOut();
		this.sickPerson();
		update();
	},
	kick:function(){
		showHide("kickshow");
		this.health-=10;
		this.hits+=1;
		this.knockedOut();
		this.sickPerson();
		update();
	},
	reset:function() {
			if (this.health < 100) {
			this.hits = 0;
			this.health = 100;
			}		
		update();
	},
	knockedOut:function() {
		if (this.health <= 0) {
			this.health = 0;
			prompt("You KO'd " + firstName + "! Now did you really want to go and do that?" <br/>
				<img src="/image/humbledstickman.jpg">);
		} 
	},
	sickPerson:function() {
		if (this.health = 0) {
			prompt("What are you?! SICK and TWISTED?! Messing with a person while they're down and out? Just refill their health and go at it again. Or refresh the page and put in someone else's name.")
		}
	}
}

update();