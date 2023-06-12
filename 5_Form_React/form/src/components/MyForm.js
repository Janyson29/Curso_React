import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {
  // 6 - controlled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const [bio, setBio] = useState('')

  const handleName = (e) => {
    setName(e.target.value);
  };

  // console.log(name);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviando o formulário');
    console.log(name, email, bio);

    // validação
    // envio

    // 7- limpar form
    setName('');
    setEmail('');
    setBio('')
  }

  return (
    <div>
      {/* 1- Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input 
          type="text" 
          name='name' 
          placeholder="digite o seu nome" 
          onChange={handleName} 
          value={name}
          />
        </div>
        {/* 2- Label envolvendo um input */}
        <label>
          <span>E-mail</span>
          <input 
          type="email" 
          name="email" 
          placeholder='digite o seu e-mail' 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          />
        </label>
        {/* 8 - Textarea */}
        <label>
          <span>Bio:</span>
          <textarea 
          name="bio" 
          placeholder='Descrição do usuário' 
          onChange={(e) => setBio(e.target.value)} 
          value={bio}
          >
          </textarea>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm