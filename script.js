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

  // Question 4 ------------------------------------------------------------------------------
  const question4text = document.getElementById('question4text');
  const question4 = [document.getElementById('pageLang').checked,
                     document.getElementById('textLang').checked,
                     document.getElementById('terms').checked,
                     document.getElementById('simple').checked];
  const correct4 = [true, true, false, true];
  result = document.getElementById('result4');
  numOfQuestions++;

  var count = 0;
  for (let i = 0; i < question1.length; i++) {
    if (question4[i] == correct4[i]) {
      count++;
    }
  }

  if (count == question4.length) {
    result.innerHTML = "Correct!";
    question4text.style.color = "green";
    result.style.color = "green";
    correct++;
  } else {
    result.innerHTML = "Incorrect! The answer was a, b and d."
    question4text.style.color = "red";
    result.style.color = "red";
  }

  // Question 5 ------------------------------------------------------------------------------
  const question5text = document.getElementById('question5text');
  const question5 = document.getElementById('necessityAtoAAA').checked;
  const correct5 = true;
  result = document.getElementById('result5');
  numOfQuestions++;

  if (question5 == correct5) {
    result.innerHTML = "Correct!";
    question5text.style.color = "green";
    result.style.color = "green";
    correct++;
  } else {
    result.innerHTML = "Incorrect! The answer was d."
    question5text.style.color = "red";
    result.style.color = "red";
  }

  // Question 6 ------------------------------------------------------------------------------
  const question6text = document.getElementById('question6text');
  const question6 = document.getElementById('POUR2').checked;
  const correct6 = true;
  result = document.getElementById('result6');
  numOfQuestions++;

  if (question6 == correct6) {
    result.innerHTML = "Correct!";
    question6text.style.color = "green";
    result.style.color = "green";
    correct++;
  } else {
    result.innerHTML = "Incorrect! The answer was b."
    question6text.style.color = "red";
    result.style.color = "red";
  }

  setTimeout(function() {
    alert(`You got ${correct} out of ${numOfQuestions} questions correct!`);
  }, 10);
}

submitButton.addEventListener('click', showResults);
