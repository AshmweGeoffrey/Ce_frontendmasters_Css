const cards = document.querySelectorAll(".mushroom-guide .cards");

const seaonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");

const currentFilter = {
  season: "all",
  edible: "all",
};
cards.forEach((card, index) => {

  const mushroomId = `mushroom-${index + 1}`;
  card.style.viewTransitionName = `mushroom-card-${mushroomId}`;
});
seaonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);
function updateFilter(e) {
  const filterType = e.target.name;

  currentFilter[filterType] = e.target.value;
  if (!document.startViewTransition()) {
    filterCards();
    return;
  }
  document.startViewTransition(() => filterCards());
}

function filterCards() {
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;
    if (
      (currentFilter.season === "all" || currentFilter.season === season) &&
      (currentFilter.edible === "all" || currentFilter.edible === edible)
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }
  });
}
