import React, { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState(true)
    const [y] = useState(false)

    const [nome, setName] = useState("Pedro")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>se X for true. Sim</p>}
        {!y && <p>se Y for false. Sim</p>}

        <h1>if ternário</h1>

        {nome === "João" ? (
          <div>
            <p>O nome é João</p>
          </div>
        ) : (
          <div>
            <p>Nome não encontrado</p>
          </div>
        )}
        <button onClick={() => setName("João")}>Clique aqui</button>
    </div>
  )
}

export default ConditionalRender