import { baseUrl, repositoriesQuantity } from '../variables.js'

// buscando os dados do repositorio do usuario no github
async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
    
}

async function getUserEvent(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
    
}

// console.log(await getUserEvent('mncastilhos'))
// // console.log(await getUser('mncastilhos'))
export { getUser, getUserEvent }