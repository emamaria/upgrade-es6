//5.1 

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];


const agesOver18 =  ages.filter( age => age > 18);

console.log(agesOver18);


//5.2

const evenNumber = ages.filter( age  =>  age%2 === 0)

console.log(evenNumber);

//5.3 

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const LeagueOfLegendsMostPlayed = streamers.filter( streamer => streamer.gameMorePlayed == 'League of Legends')

console.log(LeagueOfLegendsMostPlayed);

//5.4


const uIncludedInNameStreamers = streamers.filter( streamer =>  streamer.name.includes('u'))


console.log(uIncludedInNameStreamers );

//5.5


const legendsMorePlayedStreamers  = streamers.filter((streamer) =>  streamer.gameMorePlayed.includes('Legends'))
                                       .map( (elem)  => {

                                        if(elem.age > 35){
                                          
                                            return {name: elem.name, age: elem.age, gameMorePlayed: elem.gameMorePlayed.toUpperCase()}
                                        }else{
                                            return  {name: elem.name, age: elem.age, gameMorePlayed: elem.gameMorePlayed}
                                        }
                                    
                                    })


  console.log( legendsMorePlayedStreamers );
                                    

//5.6 



window.onload = function(){

    const streamers = [
        {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
        {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
        {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
        {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
    ];
    
    
    document.querySelector('[data-function="toFilterStreamers"]').addEventListener("change", function(event){
        let inputValue =  event.target.value;
      
        let searchingStreamer = streamers.filter( streamer => streamer.name.includes(inputValue))
      
        console.log(searchingStreamer);
      })



}

//5.7  comento por conflicto con el codigo de window.onload = function(){.. de arriba.

// window.onload = function(){

//     const streamers = [
//         {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
//         {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
//         {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
//         {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
//     ];
    
    
//     document.querySelector('[data-function="toShowFilterStreamers"]').addEventListener("click", function(event){

//         let inputValue =  document.querySelector('[data-function="toFilterStreamers"]').value
      
      
//         let searchingStreamer = streamers.filter( streamer => streamer.name.includes(inputValue))
      
//         console.log(searchingStreamer);
//       })



// }










