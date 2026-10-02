/* FRAME 光影之间 — 克制的交互 */
(function () {
  'use strict';

  /* 移动端菜单 */
  var menuBtn = document.getElementById('menuBtn');
  var mobileNav = document.getElementById('mobileNav');
  menuBtn.addEventListener('click', function () {
    var open = mobileNav.classList.toggle('open');
    menuBtn.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobileNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      mobileNav.classList.remove('open');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  /* 入场 reveal：图片与文字分开处理，克制 */
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -4% 0px' }
  );
  document.querySelectorAll('.reveal, .reveal-img').forEach(function (el) {
    io.observe(el);
  });
})();
