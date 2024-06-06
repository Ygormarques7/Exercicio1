import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados: ", formData);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      nome: value,

    });
  }


  return (
    <>
      <form onSubmit={handleSubmit}>

        <fieldset>

          <label htmlFor="nome">Nome:</label>
          <input
            name="nome"
            type="text" onChange={handleChange}
            placeholder='Nome:'
            id='nome'
          />

          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email" onChange={handleChange}
            placeholder='Email:'
            id='email'
          />

          <label htmlFor="telefone">Telefone:</label>
          <input
            name="telefone"
            type="tel" onChange={handleChange}
            placeholder='Telefone:'
            id='telefone'
          />


        </fieldset>

        <button type='submit'>Enviar</button>

      </form >
    </>
  )
}

export default App;



