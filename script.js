// みつとら ホームページ 共通スクリプト

document.addEventListener('DOMContentLoaded', function () {

  // モバイルナビ（ハンバーガーメニュー）
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileNav = document.getElementById('mobileNav');

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // リンクをタップしたらメニューを閉じる
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // スタッフカルーセルの矢印スクロール
  var staffTrack = document.getElementById('staffTrack');
  var staffLeft = document.getElementById('staffLeft');
  var staffRight = document.getElementById('staffRight');

  if (staffTrack && staffLeft && staffRight) {
    staffLeft.addEventListener('click', function () {
      staffTrack.scrollBy({ left: -260, behavior: 'smooth' });
    });
    staffRight.addEventListener('click', function () {
      staffTrack.scrollBy({ left: 260, behavior: 'smooth' });
    });
  }

  // スタッフカードのスクロールインアニメーション
  var staffCards = document.querySelectorAll('.staff-card');
  if (staffCards.length) {
    if ('IntersectionObserver' in window) {
      var staffObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            staffObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      staffCards.forEach(function (card) { staffObserver.observe(card); });
    } else {
      // 非対応ブラウザ向けフォールバック：即表示
      staffCards.forEach(function (card) { card.classList.add('in-view'); });
    }
  }

});
