import { AppState } from "../AppState"
import { setHTML } from "../utils/Writer"

export class playersController {
    constructor() {
        this.drawPlayers()
    }

    drawPlayers() {
        const players = AppState.players

        let htmlString = ''

        players.forEach(player => {
            htmlString += player.PlayerTemplateCard
        })

        setHTML('gameplayers', htmlString)
    }
}