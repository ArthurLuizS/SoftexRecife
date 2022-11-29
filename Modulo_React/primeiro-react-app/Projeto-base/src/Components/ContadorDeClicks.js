import { useState } from 'react'
function ContadorDeClicks(){
    const [count, setCount] = useState(0) ;
    return(
        <div>
            <input type="button" value="Clique Aqui!" onClick={(e) => setCount(count+1)}/>
            <p>O numero de cliques foi: {count}</p>
        </div>
    )
}
export default ContadorDeClicks