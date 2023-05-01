import React, { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState(true)
    const [y] = useState(false)

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>se X for true. Sim</p>}
        {!y && <p>se Y FOR false. Sim</p>}
    </div>
  )
}

export default ConditionalRender