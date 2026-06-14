const filterButtons = document.querySelectorAll(".topic-filter");
const researchEntries = document.querySelectorAll(".research-entry");
const noResults = document.querySelector(".no-results");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTopic = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    researchEntries.forEach((entry) => {
      const topics = entry.dataset.topic.split(" ");
      const isVisible = selectedTopic === "all" || topics.includes(selectedTopic);
      entry.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    noResults.hidden = visibleCount !== 0;
  });
});

document.querySelectorAll(".tree-node").forEach((node) => {
  const button = node.querySelector("button");
  const action = node.querySelector(".node-action");
  const startsOpen = button.getAttribute("aria-expanded") === "true";

  node.classList.toggle("open", startsOpen);

  button.addEventListener("click", () => {
    const isOpen = node.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    action.textContent = isOpen ? "−" : "+";
  });
});
