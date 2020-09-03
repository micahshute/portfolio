class ProbabilityGenerator{

    static* binaryChoice (prob){
        while(true){
            const num = 1 - Math.random()
            // console.log(`Rando: ${num}, prob: ${prob}`)
            yield num < prob 
        }
    }

    static* saturationGrowth(max, growthRate){
        const fn = x => max * (1 - Math.E ** (-x))
        count = 1
        while(true){
            yield fn(growthRate * count)
            count++
        }
    }

    static* saturationChoice(max, growthRate){
        const satGen = this.saturationGrowth(max, growthRate)
        while(true){
            const prob = satGen.next().value
            const rand = 1 - Math.random()
            yield rand < prob
        }
    }

    
}