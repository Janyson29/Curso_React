import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique aqui para executar a function</button>
    </div>
  )
}

export default ExecuteFunction