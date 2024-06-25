import React from "react";
import {useState}  from "react";
import {useEffect} from "react";

function Dive() {
    const [dive, setDive] = useState([]);
    
    const divelist = [
        {id: 1, curso: 'A - Dive Master', Preço: 'R$ 750,00'},
        {id: 2, curso: 'B - Advanced Dive', Preço: 'R$ 500,00'},
        {id: 3, curso: 'C - Open Water', Preço: 'R$ 250,00'},
    ];

    useEffect(() => {
        setDive(divelist)
    }, [])  

    return (
        <div className="dive">
            <h1>Suas Opções de Dive</h1>
            <ul>
            {dive.map(diveItem => (
                <><li key={diveItem.id}> {diveItem.curso} - {diveItem.Preço} </li>
                <button type="button">Diver Level</button></> 
            ))}
            </ul>           
        </div>          
    )
}

export default Dive