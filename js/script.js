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

