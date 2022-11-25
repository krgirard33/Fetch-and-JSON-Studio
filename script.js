window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById("container");
            for(const astronautData of json) {
                let astronaut = listAstronaut(astronautData)
                container.innerHTML = container.innerHTML += astronaut;
            }
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
                `
                return astronaut;
}