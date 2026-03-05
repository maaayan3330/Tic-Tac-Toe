import { useState } from "react";

// Here I want a component for one player : input(prop) -> name , symbol
export default function Player({initialName , symbol , isActive, onChangeName}) {
    // set to false becuase the player not editing 
    const [isEditing , setIsEditing] = useState(false);
    // another useState for the name - the initial will be the first name
    const [playerN , setPlayerName] = useState(initialName)


    // func for control the state of the botton - true or false
    function handleEditClick() {
        // React provides the previous state value as 'editing'
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    // func for change the name - FOR CHANGE NAME EVENT
    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    // The name will show up only if the state is false otherwise the field of input will show up. 
    let playerName = <span className='player-name'>{playerN}</span>
    if (isEditing) {
        playerName = <input type="text" required value={playerN} onChange={handleChange}/>;
    }

    // control the edit or save text
    let status = "Edit";
    if (isEditing) {
        status = "Save";
    } else {
        status = "Edit";
    }

    return(
          <li className={isActive ? 'active' : undefined }>
            <span>
                {playerName}
              <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{status}</button>
          </li>
    );
}