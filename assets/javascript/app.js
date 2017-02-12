window.onload = function() {

	var countMaster;

	var TriviaGame={

		time: 0,
		wins: 0,
		currentQ:0,

		Questions: [
			Q1={
				question: "How many dragons does Daenerys Targaryen have?",
				correct: "Three",
				options: ["Two", "Three", "Five"]
			},
			Q2={
				question: "What does John Snow know?",
				correct: "Nothing",
				options: ["All", "Some Things", "Nothing"]
			},
			Q1={
				question: "Which one is not a real GOT House",
				correct: "Strey",
				options: ["Stark", "Frey", "Strey"]
			],
			

		printQuestion: function(){
			
				$("#question").append("<h2>"+ TriviaGame.Questions[currentQ].question+"</h2><br>");
					for (i=0; i<3;i++){
						$("#question").append("<p>"+ TriviaGame.Questions[currentQ].options[currentQ]+"</p><br>");
					};

		},

		gameGetQuestion: function () {

			this.count();
			this.printQuestion();

			 $("#options").on("click",function () {
				if(TriviaGame.Questions[currentQ].correct indexOf(this)!= -1){
			 		TriviaGame.wins++;
			 		$("#wins").text("Wins: "+ TriviaGame.wins);
			 		currentQ++;
			}
			 });

			 if (currentQ===3){
			 	$("#question").html("YOU WIN");
			 }
		}

		gameCountStart: function(){

			countMaster= setInterval(TriviaGame.count, 1000);

		},

		reset: function(){
			this.time=0;
		},

		count: function() {

		    this.time++;

		    var converted = TriviaGame.timeConverter(TriviaGame.time);

		    $("#display").html(converted);
	  },

		timeConverter: function(t) {

		    var minutes = Math.floor(t / 60);
		    var seconds = t - (minutes * 60);

		    if (seconds < 10) {
		      seconds = "0" + seconds;
		    }

		    if (minutes === 0) {
		      minutes = "00";
		    }
		    else if (minutes < 10) {
		      minutes = "0" + minutes;
		    }

		    return seconds;
	  },


	};

};