import axios from 'axios';

// Criamos a variável api e atribuímos a ela axios.create, que será o início e a estrutura base do serviço de API que será acessada
const api = axios.create({
    // Receberemos uma chave baseURL, que indica o endpoint da aplicação que vamos consumir
    baseURL: 'http://localhost:3333/api'
});

export default api;