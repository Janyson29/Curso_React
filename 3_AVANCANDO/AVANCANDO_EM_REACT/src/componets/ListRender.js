import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Mateus", 'pEDRO', 'JOÃO', 'Maria'])

    const [users] = useState([
        { id: 1, name: 'Matheus', age: 31},
        { id: 341634, name: 'Pedro', age: 25},
        { id: 546464, name: 'Maria', age: 22}
    ])

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}> {user.name} - {user.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender