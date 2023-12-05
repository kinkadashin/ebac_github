document.addEventListener('DOMContentLoaded', function() {
    const fotoElement = document.querySelector('#fotoUser')
    const nameElement = document.querySelector('#nomeUser')
    const usernameElement = document.querySelector('#usernameUser')
    const reposElement = document.querySelector('#repositorioUser')
    const followsElement = document.querySelector('#followsUser')
    const followingElement = document.querySelector('#followingUser')
    const urlElement = document.querySelector('#urlUser')

    fetch('https://api.github.com/users/kinkadashin')
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(json) {
        fotoElement.src = json.avatar_url;
        nameElement.innerText = json.name;
        usernameElement.innerText = `@${json.login}`;
        reposElement.innerText = json.public_repos;
        followsElement.innerText = json.followers;
        followingElement.innerText = json.following;
        urlElement.href = json.html_url;
    })
    .catch(function(error) {
        alert(error)
    })
})