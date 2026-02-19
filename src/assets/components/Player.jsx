import { useState } from "react"

export default function Player({ name = "Player", symbol = "X", usePrompt = false }) {

    let [playerName, setPlayerName] = useState(name)
    let [temporaryPlayerName, setTemporaryPlayerName] = useState(name)

    let [playerSymbol, setPlayerSymbol] = useState(symbol)

    let [textButton, setTextButton] = useState("Edit")
    let [isEditing, setIsEditing] = useState(false)

    const openPrompt = () => {
        const newName = prompt("Enter new player name:", playerName)
        const newSymbol = prompt("Enter new player symbol:", playerSymbol)

        if (newName) setPlayerName(newName)
        if (newSymbol) setPlayerSymbol(newSymbol)
    }

    let onChangePlayerName = (event) => {
        console.log(temporaryPlayerName)
        setTemporaryPlayerName(event.target.value)
    }

    let onKeyDown = (event) => {
        if (event.key === "Enter") {
            openAndCloseTextInput();
        }
    }

    let playerNameElement = !isEditing || usePrompt ?
        (
            <span className="player-name">{playerName}</span>
        ) :
        (
            <input className="player-name" type="text" defaultValue={playerName} onChange={onChangePlayerName} onKeyDown={onKeyDown} />
        )

    let openAndCloseTextInput = () => {
        setIsEditing(isEditing => !isEditing);
        setTextButton(isEditing ? "Edit" : "Save");
        if (!usePrompt) {
            setPlayerName(temporaryPlayerName)
        }
    }

    return (
        <li>
            <span className="player">
                <span className="player">
                    {playerNameElement}
                    <span className="player-symbol">{playerSymbol}</span>
                </span>
            </span>
            <button onClick={usePrompt ? openPrompt : openAndCloseTextInput}>{textButton}</button>
        </li>
    )
}