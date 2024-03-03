import { useState } from "react";


export default function Player({initialName , symbol , isActive , onChangeName}) {
    const [isEditing , setIsEditing] = useState(false);
    const [playerName , setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(!isEditing);

        if(isEditing) {
          onChangeName(symbol , playerName);
        }
    }

    function handleChange(event) {
        // console.log(event)
        setPlayerName(event.target.value);  
    }

    let editPlayerName = <span className="player-name">{playerName}</span>
    let buttonCaption = 'Edit';


    if(isEditing) {
        editPlayerName = ( 
            <input type="text" required value ={playerName} onChange={handleChange}/>
        );
        buttonCaption ="Save"; 
    }

 
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
 