//Configurando Axios

import axios from 'axios';

//criando a configuração do axios para buscar tudo da api do github
const api = axios.create({
    baseURL: 'https://api.github.com',
})

export default api;