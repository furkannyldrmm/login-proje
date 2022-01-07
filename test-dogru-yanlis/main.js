
function check(){
	
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	
	
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var question13 = document.quiz.question12.value;

	var correct = 0;

	
	if (question1 == "dogru") {
		correct++;
}
	if (question2 == "dogru") {
		correct++;
}	
	if (question3 == "dogru") {
		correct++;
	}
	if (question4 == "dogru") {
		correct++;
}
	if (question5 == "dogru") {
		correct++;
}	
	if (question6 == "dogru") {
		correct++;
	}
	if (question7 == "dogru") {
		correct++;
	}
	if (question8 == "dogru") {
		correct++;
}
	if (question9 == "dogru") {
	correct++;
}	
	if (question10 == "dogru") {
	correct++;
}	if (question11 == "dogru") {
	correct++;
}
	if (question12 == "dogru") {
	correct++;
}
if (question13 == "dogru") {
	correct++;
}



	
	var pictures = ["img/cevap1.JPG","img/cevap2.JPG","img/cevap3.JPG"];
	
	var score;

	if (correct == 0 || correct < 3) {
		score = 2;
	}

	if (correct > 3 && correct < 10) {
		score = 1;
	}

	if (correct > 10 && correct < 13) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	
	document.getElementById("number_correct").innerHTML = correct + " Cevabın Doğru.";
	document.getElementById("picture").src = pictures[score];
	}
	
