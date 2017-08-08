let container = document.getElementById("container");





let submit = document.getElementById("submit");
submit.addEventListener("click", function() {
  container.innerHTML = "";
  let search = document.getElementById("search");

  let info = "https://recipepuppyproxy.herokuapp.com/api/?q=" + search.value;

// fetch call
fetch(info)
  .then(function(response) {
    if (response.status !== 200) {
      console.log("Response status: ", response);
      return;
    }
    response.json().then(function(data) {
      console.log("test", response.url);

      for (var i = 0; i < data.results.length; i++) {

        let recipe = document.createElement("a");
        let h2 = document.createElement("h2");
        let thumbnail = document.createElement("img");

        recipe.setAttribute("href", "${data.results[i].href}");
        if (data.results[i].thumbnail === "") {
          thumbnail.setAttribute("src", "http://via.placeholder.com/180x130")
        } else {
          thumbnail.setAttribute("src", `${data.results[i].thumbnail}`);
        }


        h2.textContent = `${data.results[i].title}`;

        container.appendChild(recipe);
        recipe.appendChild(thumbnail);
        recipe.appendChild(h2);
      }


    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
  });
