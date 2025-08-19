import { useEffect } from "react";

function KajariaSearch() {
  useEffect(() => {
    // Suppress cross-origin script errors
    function suppressScriptError(e) {
      if (e.message === "Script error.") e.preventDefault();
    }
    window.addEventListener("error", suppressScriptError);
    return () => window.removeEventListener("error", suppressScriptError);
  }, []);

  useEffect(() => {
    fetch('https://demowebsite.kajariaceramics.com/api/shared-dependencies')
      .then(res => res.text())
      .then(html => {
        const temp = document.createElement('div');
        temp.innerHTML = html;

        // Inject styles
        temp.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
          if (!document.head.querySelector(`link[href="${link.href}"]`)) {
            document.head.appendChild(link.cloneNode(true));
          }
        });

        // Inject scripts sequentially
        const scripts = Array.from(temp.querySelectorAll('script'));
        function loadScriptsSequentially(scripts, cb) {
          if (!scripts.length) return cb();
          const script = document.createElement('script');
          script.src = scripts[0].src;
          script.onload = () => loadScriptsSequentially(scripts.slice(1), cb);
          document.head.appendChild(script);
        }

        loadScriptsSequentially(scripts, () => {
          // Inject header
          fetch('https://demowebsite.kajariaceramics.com/api/shared-header')
            .then(res => res.text())
            .then(headerHtml => {
              const header = document.getElementById('shared-header');
              if (header) header.innerHTML = headerHtml;

              // Run helper functions from 3rd party
              if (typeof window.attachIframeSearchToggle === 'function') window.attachIframeSearchToggle();
              if (typeof window.reinitKajariaDropdowns === 'function') window.reinitKajariaDropdowns();
              if (typeof window.reinitKajariaMobile === 'function') window.reinitKajariaMobile();

              // Explicitly initialize all Bootstrap dropdowns
              if (window.bootstrap && window.bootstrap.Dropdown) {
                document.querySelectorAll('.dropdown-toggle').forEach(el => {
                  try { new window.bootstrap.Dropdown(el); } catch (e) {}
                });
              }

              // Manual fallback to ensure submenu works
              document.querySelectorAll('.dropdown-toggle').forEach(el => {
                el.addEventListener('click', function(e) {
                  e.preventDefault();

                  // Close other open dropdowns
                  document.querySelectorAll('.dropdown.show').forEach(open => {
                    if (open !== el.closest('.dropdown')) {
                      open.classList.remove('show');
                      const menu = open.querySelector('.dropdown-menu');
                      if (menu) menu.classList.remove('show');
                    }
                  });

                  // Toggle current dropdown
                  const parent = el.closest('.dropdown');
                  if (parent) parent.classList.toggle('show');
                  const menu = parent?.querySelector('.dropdown-menu');
                  if (menu) menu.classList.toggle('show');

                  // Optional: ensure submenu stays in viewport horizontally
                  if (menu) {
                    const rect = menu.getBoundingClientRect();
                    if (rect.right > window.innerWidth) {
                      menu.style.left = 'auto';
                      menu.style.right = '0';
                    } else {
                      menu.style.left = '';
                      menu.style.right = '';
                    }
                  }
                });
              });
            });

          // Inject footer
          fetch('https://demowebsite.kajariaceramics.com/api/shared-footer')
            .then(res => res.text())
            .then(footerHtml => {
              const footer = document.getElementById('shared-footer');
              if (footer) footer.innerHTML = footerHtml;

              if (typeof window.setupFooterFormsJQ === 'function') window.setupFooterFormsJQ();
            });
        });
      });
  }, []);

  return null;
}

export default KajariaSearch;
