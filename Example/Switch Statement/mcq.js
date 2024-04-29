function checkAnswers() {
    // Get the selected answer
    let selectedAnswer = document.querySelector('input[name="q1"]:checked');

    // Check if an answer is selected
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }

    
    let answerValue = selectedAnswer.value;

  
    let print = document.getElementById('printanswer');

   
    switch(answerValue) {
        case "1":
            print.innerHTML = "Correct! www.codeswithpankaj.com";
            break;
        case "2":
            print.innerHTML = "Incorrect. Try again!";
            break;
        case "3":
            print.innerHTML = "Incorrect. Try again!";
            break;
        case "4":
            print.innerHTML = "Incorrect. Try again!";
            break;
        default:
            print.innerHTML = "An error occurred. Please try again.";
    }
}
