document.querySelectorAll('.sp-faq-q').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.closest('.sp-faq-item');
    item.classList.toggle('open');
  });
});
