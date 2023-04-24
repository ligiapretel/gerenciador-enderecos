import './usersScreen.css';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';

function UsersScreen(){
    const users = [
        {
            id: 1,
            name: "Julia Soares",
            email: "julia@email.com",
        },
        {
            id: 2,
            name: "Amanda Teles",
            email: "amanda@email.com",
        },
        {
            id: 3,
            name: "Conceição Jatoba",
            email: "conceicao@email.com",
        },
        {
            id: 4,
            name: "Beatriz Lira",
            email: "beatriz@email.com",
        },
    ]

    return(
        <>
            <Header title="Usuários cadastrados"/>
            <main>
                {users.map(user=> 
                        <UserCard 
                            key={user.id}
                            id={user.id} 
                            name={user.name} 
                            email={user.email}
                        /> 
                )}
            </main>
        </>
    );
}

export default UsersScreen;