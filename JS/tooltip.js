
//為了在footer聯絡我中新增tooltip

    document.addEventListener('DOMContentLoaded', function () {
      // 等待 footer 載入完成後，再初始化 tooltip
      const checkFooter = setInterval(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        if (tooltipTriggerList.length > 0) {
          clearInterval(checkFooter); // 有找到 tooltip 就不再檢查
          tooltipTriggerList.forEach(el => {
            new bootstrap.Tooltip(el, {
              delay: { show: 0, hide: 100 }
            });
          });
          console.log('Tooltip initialized!');
        }
      }, 100); // 每 100ms 檢查一次
    });
