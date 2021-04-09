class MetricAdapter extends Adapter{

    static async connect(){
        try{
            const res = await this.get(
                "/connect",
                {}
            )      
        }catch(e){
            console.log("Cannot connect to backend")
        }
    }

    static async disconnect(e){
        const url = this.BASE_URL + '/disconnect'
        const data = {}
        const body = JSON.stringify(data)
        navigator.sendBeacon(url, body);
    }
}