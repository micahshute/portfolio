class PubSub{

    static topicSubscriptions = {}
    
    static createTopic(name){
        this.topicSubscriptions[name] = []
    }

    static subscribeToTopic(topicName, callback){
        this.topicSubscriptions[topicName].push(callback)
    }

    static publishToTopic(topicName, args){
        for(let callback of this.topicSubscriptions[topicName]){
            callback(...args)
        }
    }

    static unsubscribeToTopic(topic, callback){
        this.topicSubscriptions[topic] = this.topicSubscriptions[topic].filter(cb => cb !== callback)
    }

}