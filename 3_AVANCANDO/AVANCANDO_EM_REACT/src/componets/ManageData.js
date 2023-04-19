import { useState } from "react";

const ManageData = () => {
    let soma = 10;

    console.log(soma)

    const [number, setNumber] = useState(15)
  return (
    <div>
        <div>
            <p>valor: {soma}</p>
            <button onClick={() => (soma = 15)}>Mudar o valor</button>
        </div>
        <div>
            <p>valor: {number}</p>
            <button onClick={() => setNumber(25)}>MUDAR O STATE</button>
        </div>
    </div>
  )
}

export default ManageData