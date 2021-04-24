Runner.instance_.gameOver = function(){}

function autoPlay()
{

	this.Obstacle.types[0]["minGap"] = 150;
	this.Obstacle.types[1]["minGap"] = 150;

	setTimeout(function(){
		
		myinstance = this.Runner.instance_;
		myobstacles = myinstance.horizon.obstacles;

		myinstance.setSpeed(9);

		if(myinstance.tRex.ducking)
		{
			myinstance.tRex.setDuck(true);
		}
		if(myinstance.crashed)
		{
			console.log("Game over.")
			return;
		}

		if(myobstacles.length>0)
		{
			action = "JUMP";
			obstacle_type = myobstacles[0]["typeConfig"]["type"];

			if(obstacle_type=="CACTUS_SMALL" || obstacle_type=="CACTUS_LARGE")
			{
				action = "JUMP";
			}
			else if(obstacle_type=="PTERODACTYL")
			{
				if(myobstacles[0]["yPos"]==75 || myobstacles[0]["yPos"]==50)
					action = "DUCK";
			}

			if(myobstacles[0].xPos<=100)
			{
				console.log(myobstacles[0]);
				//perform the action
				if(action=="JUMP")
				{
					console.log("JUMPING");
					curr_speed = myinstance.currentSpeed;
					myinstance.tRex.startJump(curr_speed);
				}
				else if(action=="DUCK")
				{
					console.log("DUCKING");
					myinstance.tRex.setDuck(true);
				}
			}
		}

		autoPlay();
	},50)
}
console.log("Done, now start the game");
autoPlay();
