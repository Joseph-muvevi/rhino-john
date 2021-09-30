class Auth {
    constructor () {
        this.authenticated = false
    }

    login(token){
        this.authenticated = true
        // console.log("auth log in trigger")
        localStorage.getItem(token)
        if (token) {
            // console.log("i have the token", token)
        }

    }

    logout(){
        this.authenticated = false
    }

    isAuthenticated(){
        return this.authenticated
    }
}

export default new Auth()