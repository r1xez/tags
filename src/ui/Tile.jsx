export const Tile = ({value,onClick}) => {
    const isEmpty = value === 0;
    
    return( 
        <button 
        onClick={onClick}
        aria-label={isEmpty ? 'Порожня клітинка' : `Клітинка з числом ${value}`}
        style={{ 
            height:72,
            borderRadius:12,
            border:"1px solid var(--border)",
            background:isEmpty ? 'var(--tileEmpty)' : "var(--tile)",
            color:"var(--tileText)",
            fontSize:20,
            fontWeight:700,
            display:"grid",
            placeItems:"center",
            cursor:isEmpty ? 'default' : 'pointer',
            boxShadow:isEmpty ? 'none' : '0 2px 10px rgba(0,0,0,0.8)',
            transition:"transform 0.6s ease-in-out,box-shadow .2s ease",

        }}
        disabled={isEmpty}
        onMouseDown={(e) => {
            if(!isEmpty) e.currentTarget.style.transform="translateY(1px)"
        }}
        onMouseUp={(e) => {
           e.currentTarget.style.transform=""
        }}
        >{isEmpty ? "" : value}</button>
    )
}