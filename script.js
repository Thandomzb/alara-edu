// script.js

function safeExit() {
  window.location.href = 'https://www.google.com';
}

function handleLogin() {
  const phone = document.getElementById('phone').value.replace(/\s+/g, '');
  const otp = document.getElementById('otp').value;

  // Demo credentials for judges
  if (phone === '0821234567' && otp === '123456') {
    window.location.href = 'lesson.html';
  } else {
    alert('For demo, use phone: 0821234567 and OTP: 123456');
  }
}

function checkAnswer(isCorrect) {
  const feedback = document.getElementById('feedback');
  if (isCorrect) {
    feedback.innerHTML = '<p style="color:green; font-weight:bold;">✅ Correct! You earned 50 points.</p>';
    setTimeout(() => {
      window.location.href = 'rewards.html';
    }, 1500);
  } else {
    feedback.innerHTML = '<p style="color:red;">❌ Not quite. Only a clear "YES" is consent.</p>';
  }
}

function redeem(item) {
  alert(`✅ Redeemed: ${item}!\nReward sent to your phone.`);
  window.location.href = 'index.html';
}
// ====== LESSON LOGIC ======
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// 4 ASRHR questions (SA context)
const questions = [
  {
    text: "Your boyfriend says, 'If you love me, you’ll do it.' Is that okay?",
    options: [
      { text: "Yes — love means saying yes", correct: false },
      { text: "No — that’s pressure, not consent", correct: true }
    ]
  },
  {
    text: "Can you withdraw consent during sex?",
    options: [
      { text: "No — once you start, you can’t stop", correct: false },
      { text: "Yes — you can say no at any time", correct: true }
    ]
  },
  {
    text: "Which of the following is NOT consent?",
    options: [
      { text: "A clear 'yes'", correct: false },
      { text: "Silence or not saying no", correct: true }
    ]
  },
  {
    text: "True or False: Consent is only needed for sex.",
    options: [
      { text: "True", correct: false },
      { text: "False — consent is needed for kissing, touching, etc.", correct: true }
    ]
  }
];

// Initialize lesson
function initLesson() {
  document.getElementById('lesson-intro').style.display = 'block';
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('nav-buttons').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
}

// Start quiz
function startQuiz() {
  document.getElementById('lesson-intro').style.display = 'none';
  document.getElementById('question-container').style.display = 'block';
  document.getElementById('nav-buttons').style.display = 'flex';
  loadQuestion(currentQuestionIndex);
}

// Load a question
function loadQuestion(index) {
  const q = questions[index];
  document.getElementById('question-text').innerText = q.text;

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  q.options.forEach((option, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerText = option.text;
    btn.onclick = () => selectAnswer(index, i);
    optionsContainer.appendChild(btn);
  });

  // Update Back/Next buttons
  document.getElementById('back-btn').style.display = index === 0 ? 'none' : 'inline-block';
  document.getElementById('next-btn').innerText = index === questions.length - 1 ? 'Finish' : 'Next →';
}

// Select answer
function selectAnswer(questionIndex, optionIndex) {
  // Store answer
  userAnswers[questionIndex] = optionIndex;

  // Visual feedback
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach((btn, i) => {
    if (i === optionIndex) {
      const isCorrect = questions[questionIndex].options[optionIndex].correct;
      btn.className = isCorrect ? 'quiz-option correct' : 'quiz-option incorrect';
    }
  });

  // Auto-advance after 1.5s (or let them click Next)
  setTimeout(() => {
    if (questionIndex < questions.length - 1) {
      goNext();
    }
  }, 1500);
}

// Navigation
function goBack() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion(currentQuestionIndex);
  }
}

function goNext() {
  // Check if current answer is correct
  const selected = userAnswers[currentQuestionIndex];
  if (selected !== undefined) {
    const isCorrect = questions[currentQuestionIndex].options[selected].correct;
    if (isCorrect) score++;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
}

// Show final score
function showResult() {
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('nav-buttons').style.display = 'none';

  const scoreText = document.getElementById('score-text');
  if (score >= 3) {
    scoreText.innerHTML = `🎉 Great job!<br>You got ${score}/4 correct.<br>You earned 50 Alara Points!`;
  } else {
    scoreText.innerHTML = `Good try!<br>You got ${score}/4 correct.<br>Keep learning — you earned 30 points!`;
  }

  document.getElementById('result').style.display = 'block';
}

// Go to rewards
function goToRewards() {
  window.location.href = 'rewards.html';
}

// Auto-start when page loads
window.onload = function() {
  initLesson();
  // Auto-start quiz after 3 seconds (or add a "Start Quiz" button if preferred)
};