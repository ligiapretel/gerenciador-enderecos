import './App.css';
import Header from './components/Header';

function App() {

  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input type="text" />

          <label>Email</label>
          <input type="email" />

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </>
  );
}

export default App;
