
		var timer = 61;
		var counter = null;
		var questions = ["question1","question2","question3","question4","question5"];
		var answers = ["jupiter","sputnik","mars","titan","venus"];
		var score = 0;

		function run()
		{
			//enable and show all elements
			showElements();
			//start the counter
   			counter = setInterval(decrement, 1000);
 		}
  		function decrement()
  		{
	    	timer--;
	   		 $('#time-left').html('<h2>Time Remaining: ' + timer + '</h2>');
	    	if (timer === 0)
	    	{
	    		//disable all elements
	    		disableQuestions();
	    		//stop the timer
	      		stop();
	      		alert('Time Up!')
	      		showScore();
	      		$('#restart').show();
	    	}
  		}
  		function stop()
  		{
      		clearInterval(counter);
    	}
    	function hideElements()
    	{
    		//hide all the elements on the page
    		$('#triviaview').hide();
    		$('#restart').hide();
    	}
    	function showElements()
    	{
    		$('#triviaview').show();
    		enableQuestions();    		
    		$('.starttext').hide();


    	}
    	function disableQuestions()
    	{
    		$("input[type=radio]").attr('disabled', true);
    	}
    	function enableQuestions()
    	{
    		$("input[type=radio]").attr('disabled', false);
    	}
    	function restart()
    	{
    		location.reload();
    	}
    	function showScore()
    	{
    		var radioChecked = false;
    		var radioVal = "";
    		var answerVal = "";
    		$('#question1').children().each(function(){
			     if($(this).attr('type') == 'radio')
			     {
			     	radioChecked = $(this).prop("checked");
			     	if(radioChecked)
			     	{
			     		radioVal=$(this).val();
			     	}
			     }
			});
			answerVal=getAnswerByQuestion("question1");
			if(radioVal == answerVal)
			{
				score++;
			}
			//-----------------------------
			radioChecked = false;
    		radioVal = "";
			$('#question2').children().each(function(){
			     if($(this).attr('type') == 'radio')
			     {
			     	radioChecked = $(this).prop("checked");
			     	if(radioChecked)
			     	{
			     		radioVal=$(this).val();
			     	}
			     }
			});
			answerVal=getAnswerByQuestion("question2");
			if(radioVal == answerVal)
			{
				score++;
			}
			//-----------------------------
			radioChecked = false;
    		radioVal = "";
			$('#question3').children().each(function(){
			     if($(this).attr('type') == 'radio')
			     {
			     	radioChecked = $(this).prop("checked");
			     	if(radioChecked)
			     	{
			     		radioVal=$(this).val();
			     	}
			     }
			});
			answerVal=getAnswerByQuestion("question3");
			if(radioVal == answerVal)
			{
				score++;
			}
			//-----------------------------
			radioChecked = false;
    		radioVal = "";
			$('#question4').children().each(function(){
			     if($(this).attr('type') == 'radio')
			     {
			     	radioChecked = $(this).prop("checked");
			     	if(radioChecked)
			     	{
			     		radioVal=$(this).val();
			     	}
			     }
			});
			answerVal=getAnswerByQuestion("question4");
			if(radioVal == answerVal)
			{
				score++;
			}
			//-----------------------------
			radioChecked = false;
    		radioVal = "";
			$('#question5').children().each(function(){
			     if($(this).attr('type') == 'radio')
			     {
			     	radioChecked = $(this).prop("checked");
			     	if(radioChecked)
			     	{
			     		radioVal=$(this).val();
			     	}
			     }
			});
			answerVal=getAnswerByQuestion("question5");
			if(radioVal == answerVal)
			{
				score++;
			}
			//All questions verified, proceed to present the score
			$('#scoretext').html("Your score is  : " + score + " out of 5");
    	}
    	function getAnswerByQuestion(questionID)
    	{
    		var answerVal="";
    		for(i=0; i<questions.length; i++)
    		{
    			if(questions[i] == questionID)
    			{
    				answerVal= answers[i];
    			}
    		}
    		return answerVal;
    	}