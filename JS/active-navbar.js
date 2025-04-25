document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname.split("/").pop(); // 取得當前頁面檔名（例如：portfolio.html）
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (linkPath === currentPath || currentPath.includes(linkPath)) {
        link.classList.add('active');

        // 如果是 dropdown-item，也讓上層 dropdown-toggle 高亮
        if (link.classList.contains('dropdown-item')) {
          const parentDropdown = link.closest('.dropdown-menu');
          const dropdownToggle = parentDropdown?.previousElementSibling;
          if (dropdownToggle) {
            dropdownToggle.classList.add('active');
          }
        }
      }
    });
  });