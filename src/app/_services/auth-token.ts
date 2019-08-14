export var TOKEN = {
    getToken() {
        let token = localStorage.getItem('token')
        
        if (token != 'undefined') 
            this.token = token
        else 
            this.token = null

        return token
    }
}