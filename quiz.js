// Define the function to check the user's answer
function checkAnswer() {
    // The correct answer for the quiz
    var correctAnswer = "4";
    // Get the selected radio button with name="quiz"
    var selectedOption = document.querySelector('input[name="quiz"]:checked');
    // If an option is selected, get its value
    var userAnswer = selectedOption ? selectedOption.value : null;
    // Get the feedback element
    var feedback = document.getElementById("feedback");
    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);