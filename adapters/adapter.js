class Adapter{

    static get BASE_URL(){
        return "http://localhost:3000/api/v1"
    }

    static get headers(){
        return {
            "Content-Type": "application/json",
            "Accept": "application/json"
            // "X-CSRF-TOKEN": DATA.CSRF_TOKEN
        }
    }

    static async get(url){
        return await this.fetch(this.BASE_URL + url, "GET")
    }

    static async post(url, body){
        return await this.fetch(this.BASE_URL + url, "POST", body)
    }

    static async fetch(url, method, data=null, headers=null){
        let opts = {
            method,
            credentials: 'include'
        }
        if(data){
            const body = JSON.stringify(data)
            opts = {...opts, body}
        }
        if(headers){
            const fullHeaders = {headers: {...this.headers, ...headers}}
            opts = {...opts, fullHeaders}
        }else{
            opts = {...opts, headers: this.headers}
        }
        const res = await fetch(url, opts)
        // debugger
        if(!res.ok){
            throw res
        }
        return res
    }
}