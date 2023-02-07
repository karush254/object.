// let primerLeague = {
//     cloub: "Manchester United",
//     stadion: "Old Trafford",
//     size: {
//       height: 100,
//       width: 60,
//     },
//     golaScorer: "Rashford",
//     goalCount: 20,
//     assit: 10,
//     foot: true,
//     bestPlayer: [
//       {
//         name: "Cristiano Ronaldo",
//         age: "38",
//         goalOfutd: "+145 goals",
//         assistUtd: "64",
//       },
//       {
//         name: "Wayne Rooney",
//         age: "38",
//         goalOfutd: "253",
//         assistUtd: "101",
//       },
//       {
//         name: "Robin Van Persie",
//         age: "39",
//         goalOfutd: "86",
//         assistUtd: "35",
//       },
//       {
//         name: "Ryan Giggs",
//         age: "49",
//         goalOfutd: "114",
//         assistUtd: "35",
//       },
//     ],
//     titule: [
//       {
//         allTitule: [
//           {
//             ucl: 3,
//             primerLeague: 20,
//             faCup: 26,
//             worldCup: false,
//           },
//         ],
//         finalLoseCl: [],
//         loseLeague: [],
//         cupLose: [],
//       },
//     ],
//   };
// console.log(primerLeague);


//////////////////////////////////////////////////////////////////////////////////////////
function fnbestplayer (name,age,goalOfutd,assistUtd) {
  return {name,
  age,
  goalOfutd,
  assistUtd}
};

let bestPlayer = [
  fnbestplayer("Cristiano Ronaldo", 38, "+149", 68),
  fnbestplayer("Wayne Roney",39,"+249",101),
  fnbestplayer("ROvin van Persie",39,"86",39)
];

function fnsize (height,width) {
  return {
    height,
    width
  }
};
let size = fnsize(100,60);
function fnallTitle (ucl,primerLeague,faCup,worldCup) {
  return {
    ucl,primerLeague,faCup,worldCup
  }
};

let allTitle = fnallTitle(3,20,26,false);

function fntitle (allTitle) {
  return {
    allTitle
  }
};

let title =  [fntitle(allTitle)];


function fnprimer (cloub,size,stadion,golaScorer,goalCount,assit,foot,bestPlayer,title) {
  return {
    cloub,
    size,
    stadion,
    golaScorer,
    goalCount,
    assit,
    foot,
    bestPlayer,
    title
    
  }
};

let primerLeague2 = fnprimer ("Manchester United",size,"Old Trafford","Rashfor",20,10,true,bestPlayer,title);
console.log(primerLeague2);





let primerLeague = {
  cloub: "Manchester United",
  stadion: "Old Trafford",
  size: {
    height: 100,
    width: 60,
  },
  golaScorer: "Rashford",
  goalCount: 20,
  assit: 10,
  foot: true,
  bestPlayer: [
    {
      name: "Cristiano Ronaldo",
      age: "38",
      goalOfutd: "+145 goals",
      assistUtd: "64",
    },
    {
      name: "Wayne Rooney",
      age: "38",
      goalOfutd: "253",
      assistUtd: "101",
    },
    {
      name: "Robin Van Persie",
      age: "39",
      goalOfutd: "86",
      assistUtd: "35",
    },
    {
      name: "Ryan Giggs",
      age: "49",
      goalOfutd: "114",
      assistUtd: "35",
    },
  ],
  title: [
    {
      allTitle:
        {
          ucl: 3,
          primerLeague: 20,
          faCup: 26,
          worldCup: false,
        },
    },
  ],
};
console.log(primerLeague);




