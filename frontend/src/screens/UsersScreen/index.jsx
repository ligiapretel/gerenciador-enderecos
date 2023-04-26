import './usersScreen.css';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import { useState, useEffect } from 'react';
import api from '../../api/api';

function UsersScreen(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        async function getUsers(){
            const response = await api.get('/users');
            setUsers(response.data);
        }

        getUsers();
    },[]);

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