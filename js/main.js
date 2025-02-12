document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search__input");

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      redirectToSearchPage(searchInput.value);
    }
  });

  if (window.location.pathname.endsWith("search.html")) {
    updateSearchTitle();
  } else {
    console.log("Not on search page.");
  }
});

function redirectToSearchPage(query) {
  const searchQuery = query.trim() !== "" ? query : "";
  const searchResultsUrl = `search.html?query=${encodeURIComponent(
    searchQuery
  )}`;
  console.log("Redirecting to:", searchResultsUrl);
  window.location.href = searchResultsUrl;
}

function updateSearchTitle() {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("query");

  if (query !== null) {
    const searchTitle = document.querySelector(".result__title");
    searchTitle.textContent = `Search Result for: ${query}`;
    searchResult(query);
  } else {
    searchResult(null);
    console.log("No query found in URL.");
  }
}

function searchResult(query) {
  const resultBlock = document.querySelector(".result__block");
  const resultList = document.querySelector(".result__list");

  if (query && query.trim() !== "") {
    resultBlock.classList.add("is-result");
    resultList.classList.remove("is-result");
    console.log("Displaying results for query:", query);
  } else {
    resultBlock.classList.remove("is-result");
    resultList.classList.add("is-result");
    console.log("No results found. Displaying default message.");
  }
}

function modalOpen() {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    choiceSectionMenu: document.querySelectorAll(".burger__link"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.choiceSectionMenu.forEach((link) => {
    link.addEventListener("click", toggleModal);
  });
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
}
modalOpen();

function searchReviews() {
  const search = {
    openModalSearch: document.querySelector("[data-modal-search-open]"),
    modalSearch: document.querySelector("[data-modal-search]"),
  };
  search.openModalSearch.addEventListener("click", toggleSearchModal);

  function toggleSearchModal() {
    search.modalSearch.classList.toggle("is-open");
  }
}
searchReviews();

function headerMenuOpen() {
  const titleBottom = document.querySelector(".header__title-bottom");
  const headerList = document.querySelector(".header__list");
  const menuHeaderItems = document.querySelectorAll(".header__link");
  menuHeaderItems.forEach((link) => {
    link.addEventListener("click", toggleModelHeaderMenu);
  });
  titleBottom.addEventListener("click", toggleModelHeaderMenu);

  function toggleModelHeaderMenu() {
    headerList.classList.toggle("header__list--hidden");
    headerList.classList.toggle("header__list--visible");
  }
}
headerMenuOpen();
