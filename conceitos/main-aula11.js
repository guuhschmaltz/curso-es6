//Aula de async await

const minhaPromise = () => new Promise((resolve,reject)=>{
setTimeout(() => { resolve('OK')}, 2000);
})

//minhaPromise()
//.then(response => {
//    console.log(response);
//})
//.catch(err =>{
//    console.log(err);
//})

async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

//executaPromise();


//transformando essa função assincrona em arrow function

const executaPromise2 = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executaPromise2();