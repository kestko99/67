document.getElementById('themeToggle').addEventListener('click', function() {
  let body = document.body;

  if(body.classList.contains('day-mode')) {
      body.classList.remove('day-mode');
      body.classList.add('night-mode');
  } else {
      body.classList.remove('night-mode');
      body.classList.add('day-mode');
  }
});

javascript:(function() {
  var button = document.querySelector('.drag-btn');
  if (button) {
      button.setAttribute('draggable', 'true');

      button.addEventListener('dragstart', function(e) {
          e.dataTransfer.setData('text/plain', 'dummy');
      });

      button.addEventListener('dragover', function(e) {
          e.preventDefault();
      });

      button.addEventListener('drop', function(e) {
          e.preventDefault();
          var rect = button.getBoundingClientRect();
          button.style.position = 'absolute';
          button.style.left = e.clientX - rect.width / 2 + 'px';
          button.style.top = e.clientY - rect.height / 2 + 'px';
      });

      button.addEventListener('dragend', function() {
          button.style.position = 'static';
      });
  }
})();
