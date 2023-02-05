{
const toggleButtons = document.querySelectorAll('.collapsible-toggle');

function toggleCollapsible(event) {
    event.stopPropagation();

  let sibling = this.nextElementSibling;
  const isExpanded = this.classList.contains("cus-active");
  let foundSibling;

  while (sibling) {
    if (sibling.classList.contains('collapsible')) {
      foundSibling = sibling;
      break;
    }
    sibling = sibling.nextElementSibling;
  }

  if (foundSibling) {
    console.log(foundSibling);
    // use foundSibling here
  }

  toggleButtons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("cus-active");
      button.setAttribute('aria-expanded', false);
      foundSibling.classList.remove("cus-active");
      foundSibling.style.height = 0;
      foundSibling.style.overflow = "hidden";
    }
  });

  this.setAttribute('aria-expanded', true);
  !isExpanded ? foundSibling.classList.add("cus-active") : foundSibling.classList.remove("cus-active");
  !isExpanded ? this.classList.add("cus-active") : this.classList.remove("cus-active");
  foundSibling.style.height = !isExpanded ? foundSibling.scrollHeight + 'px' : 0;
  foundSibling.style.overflow = !isExpanded ? "visible" : "hidden";
}

toggleButtons.forEach((button) => {
  button.addEventListener('click', toggleCollapsible);
});
}
