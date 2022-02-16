// let content = (document.createElement("div"));
// content.classList.add("movie-content");
// document.body.append(content);

const movieData = async () => {
  const data = await axios.get("https://api.tvmaze.com/shows/82/episodes");
  return data;
};

const movie = movieData()
  .then((res) => res.data)
  .then((data) => {
    data.forEach((element) => {
      console.log(element);
      let url = document.createElement("a");
      let div = document.createElement("div");
      let link = document.createElement("div");
      let title = document.createElement("h3");
      title.innerText = `${element.name}`;
      document.body.appendChild(div);
      div.appendChild(url);
      url.appendChild(link);
      url.href = `${element.url}`;
      link.appendChild(title);
      let image = document.createElement("img");
      image.src = `${element.image.medium}`;
      link.appendChild(image);
      let summary = document.createElement("p");
      summary.innerHTML = `${element.summary}`;
      div.appendChild(summary);
    });
  });

console.log(movie);
