function getRandomJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const jokeContainer = document.getElementById("jokeContainer");

      if (data.type === "twopart") {
        jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
      } else {
        jokeContainer.innerHTML = `<p>${data.joke}</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
}

function getProgrammingJoke() {
  fetch("https://v2.jokeapi.dev/joke/Programming")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const jokeContainer = document.getElementById("jokeContainer");

      if (data.type === "twopart") {
        jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
      } else {
        jokeContainer.innerHTML = `<p>${data.joke}</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching programming joke:", error);
    });
}

function getMiscellaneousJoke() {
  fetch("https://v2.jokeapi.dev/joke/Miscellaneous")
    .then((response) => {
      if (!response.ok) {
        throw Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const jokeContainer = document.getElementById("jokeContainer");

      if (data.type === "twopart") {
        jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
      } else {
        jokeContainer.innerHTML = `<p>${data.joke}</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching miscellaneous joke:", error);
    });
}
function getDarkJoke() {
  fetch("https://v2.jokeapi.dev/joke/Dark")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const jokeContainer = document.getElementById("jokeContainer");

      if (data.type === "twopart") {
        jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
      } else {
        jokeContainer.innerHTML = `<p>${data.joke}</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching dark joke:", error);
    });
}

function submitJoke() {
  const joke = {
    formatVersion: 3,
    category: "Programming",
    type: "single",
    joke: "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    lang: "en",
  };

  fetch("https://v2.jokeapi.dev/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8", // Corrected header name
    },
    body: JSON.stringify(joke),
  })
    .then((response) => {
      if (!response.ok) {
        console.log(response);
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Joke submitted successfully:", data);
      alert("Joke submitted successfully!");
    })
    .catch((error) => {
      console.error("Error submitting joke:", error);
      alert("Error submitting joke.");
    });
}
