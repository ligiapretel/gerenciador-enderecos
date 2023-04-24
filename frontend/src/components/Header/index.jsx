import './header.css';

function Header({title}){

    return(
        <header>
            <a href="#">Usuários</a>
            <a href="#">Cadastrar usuário</a>
            <a href="#">Cadastrar endereço</a>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;