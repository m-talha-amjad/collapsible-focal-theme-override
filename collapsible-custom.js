{
  
const mobileNavLink = document.querySelectorAll('.mobile-nav__link');

const toggleButtons = document.querySelectorAll('.collapsible-toggle');

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

  this.setAttribute('aria-expanded', true);
  !isExpanded ? content.classList.add("cus-active") : content.classList.remove("cus-active");
  !isExpanded ? this.classList.add("cus-active") : this.classList.remove("cus-active");
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
