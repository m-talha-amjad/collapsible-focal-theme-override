// Focal 9.0 
// both simple and rerender dom
// =============Simple=========
{
  
  const mobileNavLink = document.querySelectorAll('.mobile-nav__link');

  const toggleButtons = document.querySelectorAll('body .collapsible-toggle');

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

  

  mobileNavLink.forEach((button) => {
    button.addEventListener('click', toggleCollapsible);
  });

  toggleButtons.forEach((button) => {
    button.addEventListener('click', toggleCollapsible);
  });
}
// =============Mutation Observer=========
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
              const mobileNavLink = document.querySelectorAll('.mobile-nav__link');

              const toggleButtons = document.querySelectorAll('body .collapsible-toggle');
        
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
        
              mobileNavLink.forEach((button) => {
                button.addEventListener('click', toggleCollapsible);
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
