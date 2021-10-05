const submitButton = document.getElementById('submit');

function showResults() {
  submitButton.disabled = true;
  var result;
  var numOfQuestions = 0;
  var correct = 0;

  // Question 1 ------------------------------------------------------------------------------
  const question1text = document.getElementById('question1text');
  const question1 = [document.getElementById('impairments').checked,
                     document.getElementById('device').checked,
                     document.getElementById('limitations').checked,
                     document.getElementById('interaction').checked];
  const correct1 = [true, true, true, false];
  result = document.getElementById('result1');
  numOfQuestions++;

  var count = 0;
  for (let i = 0; i < question1.length; i++) {
    if (question1[i] == correct1[i]) {
      count++;
    }
  }

  if (count == question1.length) {
    result.innerHTML = "Correct!";
    question1text.style.color = "green";
    result.style.color = "green";
    correct++;
  } else {
    result.innerHTML = "Incorrect! The answer was a, b, and c."
    question1text.style.color = "red";
    result.style.color = "red";
  }

  // Question 2 ------------------------------------------------------------------------------
  const question2text = document.getElementById('question2text');
  const question2 = document.getElementById('yes').checked;
  const correct2 = true;
  result = document.getElementById('result2');
  numOfQuestions++;

  if (question2 == correct2) {
    result.innerHTML = "Correct!";
    question2text.style.color = "green";
    result.style.color = "green";
    correct++;
  } else {
    result.innerHTML = "Incorrect! The answer was yes."
    question2text.style.color = "red";
    result.style.color = "red";
  }

  // Question 3 ------------------------------------------------------------------------------
  const question3text = document.getElementById('question3text');
  const question3 = [document.getElementById('mouseToKeyboard').checked,
                     document.getElementById('labels').checked,
                     document.getElementById('trapTab').checked,
                     document.getElementById('links').checked];
  const correct3 = [true, true, true, true];
  result = document.getElementById('result3');
  numOfQuestions++;

  var count = 0;
  for (let i = 0; i < question1.length; i++) {
    if (question3[i] == correct3[i]) {
      count++;
    }
  }

  if (count == question3.length) {
    result.innerHTML = "Correct!";
    question3text.style.color = "green";
    result.style.color = "green";
    correct++;
  } else {
    result.innerHTML = "Incorrect! All of the statements are true."
    question3text.style.color = "red";
    result.style.color = "red";
  }

  setTimeout(function() {
    alert(`You got ${correct} out of ${numOfQuestions} questions correct!`);
  }, 10);
}

submitButton.addEventListener('click', showResults);
