import './userCard.css';

function UserCard({id, name, email, addresses}){
    return(
        <div>
            <span>Id: {id}</span>
            <span>Nome: {name}</span>
            <span>Email: {email}</span>
            <div>Endereços: 
                <button>Adicionar</button>
                {addresses.map(address=>{
                return(
                    <div>
                        <span>CEP: {address.postal_code}</span>
                        <span> {address.street},</span>
                        <span> {address.house_number}</span>
                        <span> {address.city}</span>                    
                    </div>
                )
            })}</div>
        </div> 
    );
}

export default UserCard;