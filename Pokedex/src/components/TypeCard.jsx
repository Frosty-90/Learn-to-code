import { pokemonTypeColors } from "../utils"

export default function Typecard (props) {
    const{type} = props


    return(
        <div className="type-tile" style={{
            color: pokemonTypeColors?.[type]?.color,
            background: pokemonTypeColors?.[type]?.background
        }}>
            <p>{type}</p>
            
        </div>
    )
}