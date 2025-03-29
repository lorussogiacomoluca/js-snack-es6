//Snack 1: Bikes
const bikes = [
    { 
        name: "Tarmac SL7",
        weigth: 6.7 },
    { 
        name: "Emonda SLR",
        weigth: 6.55 },
    { 
        name: "SuperSix EVO",
        weigth: 6.8 },
    { 
        name: "Dogma F",
        weigth: 6.9 },
    { 
        name: "Ultimate CFR",
        weigth: 6.52 },
    { 
        name: "Teammachine SLR",
        weigth: 6.6 }
  ];
  
console.log(bikes);

//Cercare bici con peso minore
let minWeigth = bikes[0].weigth;
let lightest = '';

//Ciclo FOR
for(let i = 0; i < bikes.length; i++){
  if(bikes[i].weigth < minWeigth){
      minWeigth = bikes[i].weigth;
      lightest = bikes[i]
  }
}

//Stampare risultati
console.log(`La bici che pesa meno è ${lightest.name} e pesa soltanto ${lightest.weigth} kg!`);

//Snack 2: Football Teams

const teams = [
    {
        name: "AC Milan",
        point: 0,
        foulsSuffered: 0
    },
    {
        name: "Real Madrid",
        point: 0,
        foulsSuffered: 0
    },
    {
        name: "Liverpool",
        point: 0,
        foulsSuffered: 0
    },
    {
        name: "Paris Saint-German",
        point: 0,
        foulsSuffered: 0
    },
    {
        name: "Dortumund",
        point: 0,
        foulsSuffered: 0
    },
    {
        name: "Boca Juniors",
        point: 0,
        foulsSuffered: 0
    },
    {
        name: "Ajax",
        point: 0,
        foulsSuffered: 0
    }
]

//Funzione per generare numeri random
function randNum(max){
    return Math.floor(Math.random()*(max+1))
}

//Assegnare valori casuali alle variabili
for(let i = 0; i<teams.length; i++){
    let maxPoints = 90;
    let maxFouls = 150
    teams[i].point = randNum(maxPoints)
    teams[i].foulsSuffered = randNum(maxFouls)
}

