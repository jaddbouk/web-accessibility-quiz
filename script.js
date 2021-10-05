const submitButton = document.getElementById('submit');

function showResults() {
  submitButton.disabled = true;
  var result;

  // Question 1 ------------------------------------------------------------------------------
  const question1text = document.getElementById('question1text');
  const question1 = [document.getElementById('impairments').checked,
                     document.getElementById('device').checked,
                     document.getElementById('limitations').checked,
                     document.getElementById('interaction').checked];
  const correct1 = [true, true, true, false];
  result = document.getElementById('result1');

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

  if (question2 == correct2) {
    result.innerHTML = "Correct!";
    question2text.style.color = "green";
    result.style.color = "green";
  } else {
    result.innerHTML = "Incorrect! The answer was yes."
    question2text.style.color = "red";
    result.style.color = "red";
  }
}

submitButton.addEventListener('click', showResults);
