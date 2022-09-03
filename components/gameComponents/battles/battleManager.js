class BattleManager{

    static wildEncounterChance = ProbabilityGenerator.binaryChoice(0.05)

    static handleBattleStart = (type, player) => {
        alert(`START BATTLE: ${type}, ${player}`)
    }

}
PubSub.createTopic('startBattle')
PubSub.subscribeToTopic('startBattle', BattleManager.handleBattleStart)