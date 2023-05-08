import { getUser, getUserEvent } from "./services/user.js"
import{ getRepositories } from "./services/repositories.js"

import{ user } from "./objects/user.js"
import { screen } from "./objects/screen.js"


//busca o botão e adiciona o click que executa a função quando clicar
//a função vai buscar o campo de input e o valor que esta no input no momento do click
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
})


//adiciona no input o evento de enter e vendo o verificador da tecla 
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

//pegar os dados e colocar na tela (then: quando terminar de carregar vai fazer alguma coisa, recebendo os dados como parametro)
async function getUserData(userName){

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const eventResponse = await getUserEvent(userName)
    
    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories (repositoriesResponse)
    user.setEvents(eventResponse)

    screen.renderUser(user)
}

