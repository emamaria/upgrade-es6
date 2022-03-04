//3.1  comentado por conflicto con el pointsList de abajo

// const pointsList = [32, 54, 21, 64, 75, 43]

// const pointsListCopy = [...pointsList]

// console.log(pointsListCopy);

//3.2  comento por conflicto con el toy de abajo

// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

// const toyCopy = {...toy}

// console.log(toyCopy);


//3.3

const pointsList = [32, 54, 21, 64, 75, 43];

const pointsLis2 = [54,87,99,65,32];

const combiningPointLists = [...pointsList, ...pointsLis2]

console.log(combiningPointLists);

//3.4

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const fusionToyToyUpdate = {...toy, ...toyUpdate}

console.log(fusionToyToyUpdate);

//3.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copyColors = [...colors]

copyColors.splice(2, 1)

console.log(copyColors);