import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])
console.log(games);
    return (
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__gametype">Game type is {game.gametype.label}</div>
                    </section>
                })
            }
        </article>
    )
}