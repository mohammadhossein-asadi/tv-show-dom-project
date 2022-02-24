// # Get data from tvmaze api
const getData = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/shows/169/episodes");
    const data = await response.json();
    movieData(data);
    // console.log(data);
  } catch (err) {
    return err;
  }
};
getData();

const movieData = (movie) => {
  let movieSelect = document.getElementById("search");
  let allEpisodes = document.createElement("option");
  allEpisodes.textContent = "All Episodes";
  movieSelect.append(allEpisodes);

  for (const movies of movie) {
    //* Create element

    let movieContainer = document.createElement("div");
    let movieTitle = document.createElement("h3");
    let movieImage = document.createElement("img");
    let movieNumber = document.createElement("p");
    let movieRating = document.createElement("span");
    let movieSummary = document.createElement("p");
    let movieWatch = document.createElement("button");
    let movieLink = document.createElement("a");
    let movieSection = document.getElementById("content");
    let movieOption = document.createElement("option");

    //* Assign values ​​to variables

    movieImage.src = movies.image.medium;
    movieNumber.textContent = `S0${movies.season} - E0${movies.number}`;
    if (movies.season > 9 || movies.number > 9) {
      movieNumber.textContent = `S0${movies.season} - E${movies.number}`;
    }
    movieRating.textContent = movies.rating.average;
    movieSummary.innerHTML = movies.summary;
    movieTitle.textContent = movies.name;
    movieTitle.classList.add("card-title");
    movieLink.href = movies.url;
    movieOption.value = `${movies.name}`;
    movieWatch.innerHTML = `<i class="fa-solid fa-play"></i> Play Movie`;
    movieOption.textContent = `S0${movies.season} - E0${movies.number} - ${movies.name}`;
    if (movies.season > 9 || movies.number > 9) {
      movieOption.textContent = `S0${movies.season} - E${movies.number} - ${movies.name}`;
    }

    //* Set ID & CLASS and append element

    movieImage.classList.add("image");
    movieWatch.classList.add("button");
    movieLink.classList.add("link");
    movieRating.classList.add("rating");
    movieNumber.classList.add("number");
    movieSummary.classList.add("summary");
    movieOption.classList.add("movieOption");
    movieContainer.classList.add("card");
    movieContainer.append(
      movieTitle,
      movieImage,
      movieNumber,
      movieRating,
      movieWatch,
      movieLink,
      movieSummary
    );

    //* Append to body

    document.body.append(movieContainer);
    movieLink.append(movieWatch);
    movieSection.appendChild(movieContainer);
    movieSelect.append(movieOption);
    movieNumber.appendChild(movieRating);
  }

  //* Select input and create search box

  let search = document.getElementById("searchInput");
  // console.log(search);

  search.addEventListener("keyup", () => {
    const input = document.getElementById("searchInput").value.toUpperCase();
    // console.log(input);
    const cardContainer = document.getElementById("content");
    // console.log(cardContainer);
    const cards = cardContainer.getElementsByClassName("card");
    // console.log(cards);
    //* Iterate of cards and change display
    for (let i = 0; i < cards.length; i++) {
      let title = cards[i].querySelector(".card .card-title");
      // console.log(title);
      if (title.innerHTML.toUpperCase().indexOf(input) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  });

  movieSelectOpt();
};

//* Add eventListener for clean input value
const movieSelectOpt = () => {
  const select = document.getElementById("search");
  const cardContainer = document.getElementById("content");
  // console.log(cardContainer);
  const cards = cardContainer.getElementsByClassName("card");

  select.addEventListener("change", function handleChange(event) {
    let test = event.target.value;
    // console.log(test);
    for (let i = 0; i < cards.length; i++) {
      let title = cards[i].querySelector(".card .card-title");
      // console.log(title.innerHTML);
      if (test === title.innerHTML || test === "All Episodes") {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  });
};

// # Swiper

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
