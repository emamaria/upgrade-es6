//4.1 comentado por conflicto con users de abajo

// const users = [
// 	{id: 1, name: 'Abel'},
// 	{id:2, name: 'Julia'},
// 	{id:3, name: 'Pedro'},
// 	{id:4, name: 'Amanda'}
// ];


// const usersNames = users.map(user => {
//    return {name: user.name} 
// })


// console.log(usersNames);

//4.2

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const partialNameChange = users.map(user =>{

    if(user.name[0] === 'A'){
         return user.name = 'Anacleto'
    }else{
        return user.name;
    }

} )


console.log(partialNameChange);


//4.3

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitedCitiesStatus = cities.map((city) => {
    if(city.isVisited){
        return city.name + ' (Visitado)'
    }else{
        return city.name
    }
})


console.log(visitedCitiesStatus);
