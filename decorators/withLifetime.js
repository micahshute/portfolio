class WithLifetime extends Picture{

    constructor(component, lifetimeSeconds, stopTime = false){
        super(document.querySelector('canvas'), component.location)
        this.add(component)
        this.stopTime = stopTime
        this.timeStopped = false
        this.lifetimeLimit = lifetimeSeconds
        this.lifetime = 0
    }


    render(dt){
        super.render(dt)
        this.lifetime += dt
        if(!this.timeStopped && this.stopTime){
            Transporter.sprite.makeUncontrollable()
            this.timeStopped = true
        }
        if(this.lifetime >= this.lifetimeLimit){
            if(this.stopTime){
                Transporter.sprite.makeControllable()
            }
            this.parent.remove(this)
        }
    }



}