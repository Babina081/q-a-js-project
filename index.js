var questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  var btn = question.querySelector('.questionBtn');

  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});
