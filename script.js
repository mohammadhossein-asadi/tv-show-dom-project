const movieData = async () => {
  const data = await axios.get("https://api.tvmaze.com/shows/82/episodes");
  return data;
};

const movie = movieData()
  .then((res) => res.data)
  .then((data) => {
    let name;
    data.forEach((element) => {
      console.log(element);
      let movieContainer = document.createElement("div");
      movieContainer.id = "movieContainer";
      let url = document.createElement("a");
      url.id = "url";
      let div = document.createElement("div");
      div.id = "div";
      let link = document.createElement("div");
      link.id = "link";
      let title = document.createElement("h2");
      title.id = "title";
      name = title.innerText = `${element.name}`;
      div.setAttribute("class", `${name}`);
      div.classList.add("container");
      document.body.appendChild(movieContainer);
      movieContainer.appendChild(div);
      div.appendChild(url);
      url.appendChild(link);
      url.href = `${element.url}`;
      link.appendChild(title);
      let image = document.createElement("img");
      image.id = "image";
      image.src = `${element.image.medium}`;
      link.appendChild(image);
      let numberOfse = document.createElement("span");
      numberOfse.id = "season";
      numberOfse.innerText = `🎥 S0${element.number}-E0${element.season}`;
      div.appendChild(numberOfse);
      let rating = document.createElement("span");
      rating.id = "rating";
      rating.innerText = `${element.rating.average}`;
      div.appendChild(rating);
      let summary = document.createElement("p");
      summary.id = "summary";
      summary.innerHTML = `${element.summary}`;
      div.appendChild(summary);
      let select = document.querySelector("select");
      let opt = document.createElement("option");
      opt.innerText = `S0${element.number}-E0${element.season} 🎬 ${element.name}`;
      select.appendChild(opt);
    });

    // let test = document.querySelector("div")
    // console.log(test.className);

    select.addEventListener("change", (e) => {
      let value = e.target.value;
      // console.log(value);
      let sliceName = value.substring(10);

      let divClass = [];

      let allDiv = document.querySelectorAll("container");
      allDiv.forEach((element) => {
        divClass.push(element.classList);
        console.log(divClass);
      });

      if (sliceName !== title) {
        document.getElementById("div").style.display = "none";
      }
    });
  });

console.log(movie);

let search = document.querySelector("input");

async function getData() {
  const data = await axios.get("https://api.tvmaze.com/shows/82/episodes");
  const movies = data.data;
  console.log(movies);

  search.addEventListener("keyup", (e) => {
    const data = movies.filter((movie) => movie.body.includes(e.target.value));
    console.log(data);
  });
}
getData();
