import './userRegisterScreen.css';
import Header from '../../components/Header';
import { useState } from 'react';
import api from '../../api/api';

function UserRegisterScreen(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 

    async function handleSubmit(event){
        event.preventDefault();

        await api.post('/users',{
          name,
          email,
        })

        setName('');
        setEmail('');

        alert('Usuário cadastrado');

      }
    
      return (
        <>
          <Header title="Cadastro de usuário"/>
          <main>
            <form onSubmit={handleSubmit}>
              <label>Nome</label>
              <input type="text" value={name} onChange={event=>setName(event.target.value)}/>
    
              <label>Email</label>
              <input type="email" value={email} onChange={event=>setEmail(event.target.value)}/>
    
              <button type="submit">Cadastrar</button>
            </form>        
          </main>
        </>
      );
    
}

export default UserRegisterScreen;