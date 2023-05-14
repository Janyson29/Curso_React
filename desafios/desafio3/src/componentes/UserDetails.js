const UserDetails = ({name, age, profession, minor, id}) => {
  return (
    <div>
        <h2>Detalhes da pessoa {id}</h2>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {profession}</li>
        </ul>
        {age >= 18 ? (
            <div>
            <p>Essa pessoa pode tirar a CNH</p>
          </div>
        ) : (
            <div>
            <p>Essa pessoa não pode</p>
          </div>
        )}
        {minor && <p>Essa pessoa tem menos de 18 anos</p>}
    </div>
  )
}

export default UserDetails