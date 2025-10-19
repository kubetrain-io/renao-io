document.addEventListener("DOMContentLoaded", function () {
  // Toggle sidebar mobile
  const toggleButton = document.querySelector(".nav__toggle-button");
  const sidebar = document.querySelector(".sidebar");
  const sidebarOverlay = document.querySelector(".sidebar__overlay");
  const body = document.body;

  // Fungsi untuk menutup sidebar
  const closeSidebar = () => {
    toggleButton.classList.remove("toggle-active");
    sidebar.classList.remove("sidebar-active");
    if (sidebarOverlay) sidebarOverlay.classList.remove("sidebar-active");
    body.classList.remove("no-scroll");
  };

  if (toggleButton && sidebar) {
    toggleButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Mencegah event bubbling
      toggleButton.classList.toggle("toggle-active");
      sidebar.classList.toggle("sidebar-active");
      if (sidebarOverlay) sidebarOverlay.classList.toggle("sidebar-active");
      body.classList.toggle("no-scroll");
    });

    // Tutup sidebar saat klik di luar
    document.addEventListener("click", function (e) {
      if (
        sidebar.classList.contains("sidebar-active") &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".nav__toggle-button")
      ) {
        closeSidebar();
      }
    });

    // Tutup sidebar saat overlay diklik
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener("click", closeSidebar);
    }
  }

  // Toggle dropdown menu (kode sebelumnya tetap sama)
  const menuItems = document.querySelectorAll(".menu__item");
  menuItems.forEach((item) => {
    const submenu = item.querySelector(".submenu");
    if (submenu) {
      item.addEventListener("click", function (e) {
        if (e.target.closest(".submenu")) return;

        // Close other open submenus
        document
          .querySelectorAll(".submenu-active")
          .forEach((activeSubmenu) => {
            if (activeSubmenu !== submenu) {
              activeSubmenu.classList.remove("submenu-active");
              activeSubmenu.style.height = "";
              const prevIcon = activeSubmenu
                .closest(".menu__item")
                .querySelector(".icon-svg.icon-active");
              if (prevIcon) prevIcon.classList.remove("icon-active");
            }
          });

        // Toggle current submenu
        const isOpening = !submenu.classList.contains("submenu-active");
        submenu.classList.toggle("submenu-active");
        submenu.style.height = isOpening ? submenu.scrollHeight + "px" : "";

        // Toggle icon
        const icon = item.querySelector(".icon-svg");
        if (icon) icon.classList.toggle("icon-active");
      });
    }
  });

  // Close submenus when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".menu__item")) {
      document.querySelectorAll(".submenu-active").forEach((submenu) => {
        submenu.classList.remove("submenu-active");
        submenu.style.height = "";
        const icon = submenu
          .closest(".menu__item")
          .querySelector(".icon-svg.icon-active");
        if (icon) icon.classList.remove("icon-active");
      });
    }
  });
});
