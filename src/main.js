class App {
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers(){ 
        this.formEl.onsubmit = event => this.addRepository(event); 
    }

    addRepository(event){
        event.preventDefault();

        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua ideia do papel e dê vida a sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat/',
        });

        this.render();
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
            linkEl.setAttribute('taget', '_blank'); //Abrir em nova aba
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