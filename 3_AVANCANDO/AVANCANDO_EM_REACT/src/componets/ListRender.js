import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Mateus", 'pEDRO', 'JOÃO', 'Maria'])

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender