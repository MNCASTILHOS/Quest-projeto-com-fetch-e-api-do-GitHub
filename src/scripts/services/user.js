import { baseUrl, repositoriesQuantity } from '../variables.js'

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
    
}

async function getUserEvent(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
    
}

export { getUser, getUserEvent }