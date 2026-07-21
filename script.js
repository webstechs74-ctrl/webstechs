document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      links.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }

  // testimonial slider dots (simple, decorative + functional on home)
  var dots = document.querySelectorAll('.testi-dot');
  var track = document.querySelector('.testi-track');
  if (dots.length && track) {
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        dots.forEach(function (d) { d.classList.remove('active'); });
        dot.classList.add('active');
        var card = track.children[i];
        if (card) track.scrollTo({ left: card.offsetLeft - 0, behavior: 'smooth' });
      });
    });
  }

  // FAQ accordion (pricing / services pages)
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (o) {
        if (o !== item) o.classList.remove('open');
      });
      item.classList.toggle('open', !wasOpen);
    });
  });

  // simple contact form (no backend) - prevent default, show inline confirmation
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.querySelector('#form-note');
      if (note) {
        note.textContent = "Thanks! Your message has been noted. Our team will reach out within 24 hours.";
        note.style.display = 'block';
      }
      form.reset();
    });
  }
});
