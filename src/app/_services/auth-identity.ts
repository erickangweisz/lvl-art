export var IDENTITY = {
    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'))
        
        if (identity != 'undefined') 
            this.identity = identity
        else 
            this.identity = null

        return 
            identity
    }
}