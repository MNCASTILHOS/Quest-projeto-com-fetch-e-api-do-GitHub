const user = {
     avatarUrl: '',
     nome: '',
     bio: '',
     userName: '',
     events: [],
     followers: '',
     following:'',
     repositories: [],
     setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
     },
     setEvents(events){
      this.events = events
     },
     setRepositories(repositories){
        this.repositories = repositories
     }
}

export { user }