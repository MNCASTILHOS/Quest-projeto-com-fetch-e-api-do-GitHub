const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser (user){
        this.userProfile.innerHTML = `<div class="info">
                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                        <div class="data">
                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                            <p>${user.bio ?? 'Não possui Bio cadastrada 😥'} </p> <br>
                            <h3>Followers: ${user.followers}</h3>
                            <h3>Fallowing: ${user.following}</h3>
                        </div>
                    </div> `
        
        let eventsListiner = ''
        user.events.forEach(event => 
            eventsListiner += `<li>${event.repo.name} - ` + (event.payload.commits ? `${event.payload.commits[0].message}` : '') +  `</li>`);
        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsListiner}</ul>         
                                            </div>`
        }


        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
        <br> 🍴${repo.forks} ⭐${repo.stargazers_count} 👀${repo.watchers} 👩‍💻${repo.language}</a>
        </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>         
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
    
}

export { screen }