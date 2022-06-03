console.log("https://api.github.com/users/Carlos-Tirado") //checking connection

const myProfile = document.querySelector("#profile")
const repoSection = document.querySelector("#repo-section")



let githubUrl = "https://api.github.com/users/Carlos-Tirado"
fetch(githubUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})
        .then(function(response) {
         //response is the promised data
        return response.json()
         //put the response in JSON format
        })


    .then(function(data){
    console.log('Response from GitHub API: ', data.name)


    let profileSection = document.createElement("p") //comienzo envoltura
    

    let imageElement = document.createElement("img")
    imageElement.classList.add("left")
    imageElement.src = data.avatar_url
    profileSection.appendChild(imageElement)
    myProfile.appendChild(profileSection)


    let nameElement = document.createElement("h3")
    nameElement.classList.add("left")
    nameElement.innerText = data.name
    profileSection.appendChild(nameElement)


    let locationElement = document.createElement("h3")
    locationElement.classList.add("left")
    locationElement.innerText = data.location
    profileSection.appendChild(locationElement)

    let urlElement = document.createElement("h3")
    urlElement.classList.add("left")
    urlElement.innerText = data.html_url
    profileSection.appendChild(urlElement) // final envoltura

    })


let githubRepoUrl = "https://api.github.com/users/Carlos-Tirado/repos";

    fetch(githubRepoUrl, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
        .then(function (response) {
            //response is the promised data
            return response.json();
            //put the response in JSON format
        })



        .then(function (repoArray) {
            console.log("Response from GitHub API: ", repoArray)
            //console log the data
            buildRepos(repoArray)
        })


        function buildRepos(repodata) {
            let names = []
            for (let repo of repodata){
                buildRepoElement(repo)
                names.push(repo.name)
            }
        }


function buildrepos(repodata){
    let names = []
    for (let repo of repodata){
        buildRepoElement(repo)
        
        names.push(repo.name)

    }}
    

function buildRepoElement (repo) {
    let el = document.createElement('a')
    el.href = repo.html_url
    el.innerText = repo.name
    repoSection.appendChild(el)
    return el
}
