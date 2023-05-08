import { baseUrl, repositoriesQuantity } from '../variables.js'

// buscando os dados dos repositórios no github
async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}
console.log(await getRepositories('mncastilhos'))

export {getRepositories}