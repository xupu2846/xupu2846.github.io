// ===== 明暗主题切换 =====
(function() {
  var STORAGE_KEY = 'theme-prism';

  // 初始化主题
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (saved === 'light') {
    document.documentElement.classList.remove('dark');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }

  function toggleTheme() {
    var isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(STORAGE_KEY, 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem(STORAGE_KEY, 'dark');
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    // 主题切换按钮
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);

    // 导航栏滚动毛玻璃效果
    var navbar = document.getElementById('navbar');
    if (navbar) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
      // 初始检查
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      }
    }

    // 移动端菜单切换
    var hamburger = document.getElementById('hamburger');
    var mobileNav = document.getElementById('mobile-nav');
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('open');
      });
      // 点击菜单项后关闭
      mobileNav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          mobileNav.classList.remove('open');
        });
      });
    }

    // 点赞按钮
    var likeBtn = document.getElementById('like-btn');
    if (likeBtn) {
      var icon = likeBtn.querySelector('.like-icon');
      var text = likeBtn.querySelector('.like-text');
      var liked = localStorage.getItem('jaden-site-liked') === 'true';

      function updateLikeState() {
        if (liked) {
          likeBtn.classList.add('liked');
          icon.textContent = '♥';
          text.textContent = '已点赞';
        } else {
          likeBtn.classList.remove('liked');
          icon.textContent = '♡';
          text.textContent = '点赞';
        }
      }
      updateLikeState();

      likeBtn.addEventListener('click', function() {
        liked = !liked;
        localStorage.setItem('jaden-site-liked', liked ? 'true' : 'false');
        updateLikeState();
      });
    }
  });
})();
