// Focal 9.0 
// both simple and rerender dom

// ==========Simple Collapsible=========
{
  
  const mobileNavLink = document.querySelectorAll('.mobile-nav__link');

  const toggleButtons = document.querySelectorAll('body .collapsible-toggle');

  const filterApply = document.querySelectorAll('.filter-apply-item.apply');
  
  function toggleCollapsible(event) {
    event.stopPropagation();

    const content = this.nextElementSibling;
    const isExpanded = this.classList.contains("cus-active");

    toggleButtons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("cus-active");
        button.setAttribute('aria-expanded', false);
        button.nextElementSibling.classList.remove("cus-active");
        button.nextElementSibling.style.height = 0;
        setTimeout(function () {
          button.nextElementSibling.style.overflow = "hidden";
        }, 500);
      }
    });
// ==========Menu Collapsible=========
    mobileNavLink.forEach((button) => {
      if (button !== this) {
        button.classList.remove("cus-active");
        button.setAttribute('aria-expanded', false);
        
        if (button.nextElementSibling) {
          button.nextElementSibling.classList.remove("cus-active");
          button.nextElementSibling.style.height = 0;
          setTimeout(function () {
            button.nextElementSibling.style.overflow = "hidden";
          }, 500);
        }
        
      }
    });
    !isExpanded ? content.classList.add("cus-active") : content.classList.remove("cus-active");
    !isExpanded ? this.classList.add("cus-active") : this.classList.remove("cus-active");
    !isExpanded ? this.setAttribute('aria-expanded', true) : this.setAttribute('aria-expanded', false);
    content.style.height = !isExpanded ? content.scrollHeight + 'px' : 0;
    setTimeout(function () {
      content.style.overflow = !isExpanded ? "visible" : "hidden";

    }, 500);
  }
  // ==========On Save Collapsible=========

  function saveToggleCollapsible() {
    let parent = this.parentNode;
    let collapsible = parent.parentNode;
    let isExpanded = collapsible.classList.contains("cus-active");
    let toggleButton = collapsible.previousElementSibling;

    if (isExpanded) {
      collapsible.classList.add("cus-active");
      toggleButton.classList.remove("cus-active");
      collapsible.style.height = 0;
      setTimeout(function () {
        collapsible.style.overflow = "hidden";
      }, 500);
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
        
                const content = this.nextElementSibling;
                const isExpanded = this.classList.contains("cus-active");
        
                toggleButtons.forEach((button) => {
                  if (button !== this) {
                    button.classList.remove("cus-active");
                    button.setAttribute('aria-expanded', false);
                    button.nextElementSibling.classList.remove("cus-active");
                    button.nextElementSibling.style.height = 0;
                    setTimeout(function () {
                      button.nextElementSibling.style.overflow = "hidden";
                    }, 500);
                  }
                });
        
                !isExpanded ? content.classList.add("cus-active") : content.classList.remove("cus-active");
                !isExpanded ? this.classList.add("cus-active") : this.classList.remove("cus-active");
                !isExpanded ? this.setAttribute('aria-expanded', true) : this.setAttribute('aria-expanded', false);
                content.style.height = !isExpanded ? content.scrollHeight + 'px' : 0;
                setTimeout(function () {
                  content.style.overflow = !isExpanded ? "visible" : "hidden";
        
                }, 500);
              }
              function saveToggleCollapsible() {
                let parent = this.parentNode;
                let collapsible = parent.parentNode;
                let isExpanded = collapsible.classList.contains("cus-active");
                let toggleButton = collapsible.previousElementSibling;

                if (isExpanded) {
                  collapsible.classList.add("cus-active");
                  toggleButton.classList.remove("cus-active");
                  collapsible.style.height = 0;
                  setTimeout(function () {
                    collapsible.style.overflow = "hidden";
                  }, 500);
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
