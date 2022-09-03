function ActiveTallGrass({
    location,
    height, 
    width
}){

    const randomGen = BattleManager.wildEncounterChance
    let lastSpriteLocation = Transporter.sprite.location
    const grass = new TallGrassWithBackground(location, height, width)
    return (
        new Collidable(
            grass,
            () => {
                if(Transporter.sprite.location.x !== lastSpriteLocation.x || Transporter.sprite.location.y !== lastSpriteLocation.y){
                    grass.priority = 101
                    const shouldStartBattle = randomGen.next().value
                    if(shouldStartBattle){
                        PubSub.publishToTopic('startBattle', ['wildEncounter', 'me'])
                    }
                }
                lastSpriteLocation = Transporter.sprite.location
            }
        )
    )


}