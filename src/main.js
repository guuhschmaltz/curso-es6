import api from './api'; //Importando o arquivo api.js

class App {
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]'); //Buscando input do html com o nome do repositório

        this.registerHandlers();
    }

    registerHandlers(){ 
        this.formEl.onsubmit = event => this.addRepository(event); 
    }

    setLoading(loading = true) { //Função que faz um span escrito "carregando"
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value; //Pegando o que foi digitado no input
        if (repoInput.length === 0)
            return; //Verificando se o que está no imput é vazio

        this.setLoading(); //Chamando a função loading

        try{
            const response = await api.get(`/repos/${repoInput}`);

            const { name , description , html_url, owner: { avatar_url } } = response.data; //Desestruturando o que foi buscado da api;
    
            this.repositories.push({
                name, // poderia deixar dessa forma: name: name, etc.
                description,
                avatar_url,
                html_url,
            }); //Dando push utilizando short syntax
    
            this.render();
        } catch (err){
            alert('O repositório não existe');
        }
        
        this.setLoading(false); //Removendo o loading da tela
    }

    render(){

        this.listEl.innerHTML = ''; //Apagando HTML do list element

        this.repositories.forEach(repo => {

            let imgEl = document.createElement('img'); //Criando tag img apenas dentro desse escopo
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong'); // Criando tag strong
            titleEl.appendChild(document.createTextNode(repo.name)); //Atribuindo nome

            let descriptionEl = document.createElement('p');//Criando tag p
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a'); // Criando tag a
            linkEl.setAttribute('href', repo.html_url); //Abrir em nova aba
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li'); // Criando li
            listItemEl.appendChild(imgEl); //Atribuindo filhos para a list item
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        });
    }
}

new App();