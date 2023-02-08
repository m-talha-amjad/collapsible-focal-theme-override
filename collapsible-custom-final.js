// Focal 9.0.0 
// ==========Simple Collapsible=========
// Majorly checking aria-expanded attribute
{
  
  const mobileNavLink = document.querySelectorAll('.mobile-nav__link');

  const toggleButtons = document.querySelectorAll('body .collapsible-toggle');

  const filterApply = document.querySelectorAll('.filter-apply-item.apply');
  
  function toggleCollapsible(event) {
    event.stopPropagation();
    toggleButtons.forEach((button) => {
      if (button !== this) {
        let defaultOpen = button.classList.contains("default-open");
        if (!defaultOpen) {
          button.setAttribute('aria-expanded', false);
        }

      }
    });
    // ==========Menu Collapsible=========

    mobileNavLink.forEach((button) => {
      if (button !== this) {
        // button.classList.remove("cus-active");
        defaultOpen = button.classList.contains("default-open");
        if (!defaultOpen) {
          button.setAttribute('aria-expanded', false);
        }
      }
    });
  }
  // ==========On Save Collapsible=========

  function saveToggleCollapsible() {
    let parent = this.parentNode;
    let collapsible = parent.parentNode;
    let toggleButton = collapsible.previousElementSibling;
    let isExpanded = toggleButton.getAttribute("aria-expanded");
    if (isExpanded) {
      toggleButton.setAttribute('aria-expanded', false);
    }
  }
  
  filterApply.forEach((button) => {
    button.addEventListener('click', saveToggleCollapsible);
  });

  mobileNavLink.forEach((button) => {
    button.addEventListener('click', toggleCollapsible);
  });

  toggleButtons.forEach((button) => {
    button.addEventListener('click', toggleCollapsible);
  });
}
// ==========Mutation Observer Collapsible=========
// Don't add event listners to outside target observer
{
  let targetElement = document.getElementById("facet-filters");
  if (targetElement) {
    window.addEventListener('DOMContentLoaded', (event) => {
      console.log('DOM fully loaded and parsed');

      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.addedNodes.length) {
            mutation.addedNodes.forEach(node => {
              console.log("dom changed");
              const toggleButtons = document.querySelectorAll('body .collapsible-toggle');
              const filterApply = document.querySelectorAll('.filter-apply-item.apply');

              function toggleCollapsible(event) {
                event.stopPropagation();
                toggleButtons.forEach((button) => {
                  if (button !== this) {
                    let defaultOpen = button.classList.contains("default-open");
                    if (!defaultOpen) {
                      button.setAttribute('aria-expanded', false);
                    }
                  }
                });
              }
              // ==========On Save Collapsible=========

              function saveToggleCollapsible() {
                let parent = this.parentNode;
                let collapsible = parent.parentNode;
                let toggleButton = collapsible.previousElementSibling;

                let isExpanded = toggleButton.getAttribute("aria-expanded");

                if (isExpanded) {
                  toggleButton.setAttribute('aria-expanded', false);
                }
              }
              
              filterApply.forEach((button) => {
                button.addEventListener('click', saveToggleCollapsible);
              });
        
              toggleButtons.forEach((button) => {
                button.addEventListener('click', toggleCollapsible);
              });
            });
          }
        });
      });

      observer.observe(targetElement, { childList: true, subtree: true });
    });
  
  }
}
