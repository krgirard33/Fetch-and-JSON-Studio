window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      const container = document.getElementById("container");
      const sorted = json.sort(sortByProperty("hoursInSpace"));
      for (const astronautData of sorted) {
        let astronaut = listAstronaut(astronautData);
        container.innerHTML = container.innerHTML += astronaut;
      }
      activeIsGreen();
    });
  });
});

function listAstronaut(astronautData) {
  let astronaut = `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronautData.firstName} ${astronautData.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronautData.hoursInSpace}</li>
                            <li>Active: ${astronautData.active}</li>
                            <li>Skills: ${astronautData.skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${astronautData.picture}>
                </div>
                `;
  return astronaut;
}

function sortByProperty(property) {
  return function (a, b) {
    if (a[property] > b[property]) {
      return 1;
    } else if (a[property] < b[property]) {
      return -1;
    }
    return 0;
  };
}

function activeIsGreen() {
  const values = document.querySelectorAll("li");
  for (const element of values) {
    if (element.innerText === "Active: true") {
      element.style.color = "green";
      element.style.textDecoration = "underline";
      element.style.textTransform = "capitalize";
    }
  }
}
