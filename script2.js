const results = document.getElementById("results");
const select = document.getElementById("searchSelect");

function loadMovies(query) {
  fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`)
    .then((res) => res.json())
    .then((data) => {
      results.innerHTML = "";
      data.forEach((item) => {
        const show = item.show;
        const movie = document.createElement("div");
        movie.classList.add("movie");
        movie.innerHTML = `
          <img src="${
            show.image?.medium || "https://via.placeholder.com/210x295"
          }" alt="${show.name}">
          <h3>${show.name}</h3>
        `;
        results.appendChild(movie);
      });
    });
}

select.addEventListener("change", () => {
  loadMovies(select.value);
});

// defaultní načtení
loadMovies("girl");
