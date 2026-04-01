import React from "react";
import { Tile } from "../../ui/Tile";



export const Board = ({size,tiles,onTileClick}) => { 
    return ( 
        <div style={{
            marginTop:16,
            display:"grid",
            gridTemplateColumns: `repeat(${size},minmax(0,1fr))`,
            gap:10
        }}>
            {  tiles.map((val,index) =>( 
                    <Tile key={index} value={val} onClick={() => onTileClick(index)} />
                ))}
        </div>
    )
}