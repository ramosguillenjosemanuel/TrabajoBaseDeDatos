db.Frutas.insertMany ([
        { Fruta: "Manzana", Numempresas: 15, Recogida:{lugaresrecogidas: ["Sevilla", "Murcia"], pais:"España"},FechaRecogida: new Date("2020-04-20"),Familia:{Frutadulce:true,Exoticas:false,Bayas:false,Cucurbitaceas:false,Citrico:false,} },
        { Fruta: "Platano", Numempresas: 25,  Recogida:{ lugaresrecogidas: ["Rennes", "Nantes"], pais:"Francia"}, FechaRecogida:new Date("2020-02-13"),Familia:{Frutadulce:false,Exoticas:true,Bayas:false,Cucurbitaceas:false,Citrico:false,} },
        { Fruta: "Fresa", Numempresas: 23,  Recogida:{ lugaresrecogidas: ["Liverpool", "Sheffield", "Colchester"], pais:"Reino Unido"}, FechaRecogida: new Date("2020-01-16"),Familia:{Frutadulce:false,Exoticas:false,Bayas:true,Cucurbitaceas:false,Citrico:false,} },
        { Fruta: "Melocoton", Numempresas: 17,  Recogida:{ lugaresrecogidas: ["Sundsvalls", "Bolinas"], pais:"Suecia"}, FechaRecogida:  new Date("2020-07-19"),Familia:{Frutadulce:true,Exoticas:false,Bayas:false,Cucurbitaceas:false,Citrico:false,} },
        { Fruta: "Melon", Numempresas: 9,  Recogida:{ lugaresrecogidas: ["Graz","Salzburgo"], pais:"Austria"}, FechaRecogida:  new Date("2020-08-08"),Familia:{Frutadulce:false,Exoticas:false,Bayas:false,Cucurbitaceas:true,Citrico:false,} },
        { Fruta: "Sandia",Numempresas: 30,  Recogida:{ lugaresrecogidas: ["Lahti","Turku"], pais:"Finlandia"}, FechaRecogida:  new Date("2020-05-13"),Familia:{Frutadulce:false,Exoticas:false,Bayas:false,Cucurbitaceas:true,Citrico:false,} },
        { Fruta: "Limon", Numempresas: 15,  Recogida:{ lugaresrecogidas: ["Murcia","Huelva"], pais:"España"},FechaRecogida: new Date("2020-10-24"),Familia:{Frutadulce:false,Exoticas:false,Bayas:false,Cucurbitaceas:false,Citrico:true,} },
        { Fruta: "Naranja", Numempresas: 15,  Recogida:{ lugaresrecogidas: ["Valencia","Sevilla"], pais:"España"}, FechaRecogida:  new Date("2020-11-07"),Familia:{Frutadulce:false,Exoticas:false,Bayas:false,Cucurbitaceas:false,Citrico:true,} },
        { Fruta: "Kiwi", Numempresas: 40,  Recogida:{ lugaresrecogidas: ["Essen","Hannover"], pais:"Alemania"}, FechaRecogida:  new Date("2020-03-15"),Familia:{Frutadulce:false,Exoticas:true,Bayas:false,Cucurbitaceas:false,Citrico:false,} },
        { Fruta: "Mandarina", Numempresas: 78,  Recogida:{ lugaresrecogidas: ["Zagreb","Knin"], pais:"Croacia"}, FechaRecogida:  new Date("2020-03-10"),Familia:{Frutadulce:false,Exoticas:false,Bayas:false,Cucurbitaceas:false,Citrico:true,} },
        { Fruta: "Arandano", Numempresas: 5,  Recogida:{ lugaresrecogidas: ["Essen","Hannover"], pais:"Alemania"}, FechaRecogida:  new Date("2020-04-10"),Familia:{Frutadulce:false,Exoticas:true,Bayas:false,Cucurbitaceas:false,Citrico:false,} },
      ]);




      db.EmpresasFrutas.insertMany ([
          {Nombreempresa:"Frotogida",Numempleados:180, Funcion:{frutas:["Manzana","Limon"], paisrecogida:["España"]},beneficios:[42000000,120000],FechaDisponibilidadEnvios: new Date("2020-06-15")},
          {Nombreempresa:"Recofrutes",Numempleados:200, Funcion:{frutas:["Platano"], paisrecogida:["Francia"]},beneficios:[500000,170000],FechaDisponibilidadEnvios: new Date("2020-04-20")},
          {Nombreempresa:"Vieta company",Numempleados:120,Funcion:{frutas:["Platano","Melon"], paisrecogida:["Francia","Austria"]},beneficios:[260000,80000],FechaDisponibilidadEnvios: new Date("2020-03-28")},
          {Nombreempresa:"RC Company",Numempleados:100,Funcion:{frutas:["Fresa","Melocoton"], paisrecogida:["Reino Unido","Suecia"]},beneficios:[100000,30000],FechaDisponibilidadEnvios: new Date("2020-09-17")},
          {Nombreempresa:"RF Melon",Numempleados:70,Funcion:{frutas:["Sandia","Limon"], paisrecogida:["España","Finlandia"]},beneficios:[80000,30000],FechaDisponibilidadEnvios: new Date("2020-10-06")},
          {Nombreempresa:"WIN company",Numempleados:40,Funcion:{frutas:["Naranja","Fresa","Platano"], paisrecogida:["España","Reino Unido"]},beneficios:[90000,40000],FechaDisponibilidadEnvios: new Date("2020-08-01")},
          {Nombreempresa:"Frutas Paco",Numempleados:50,Funcion:{frutas:["Manzana","Limon","Sandia","Melocoton"], paisRecogida:["España","Suecia","Finlandia"]},beneficios:[69250,23546],FechaDisponibilidadEnvios: new Date("2020-12-17")},
          {Nombreempresa:"Recogidas Jimenez",Numempleados:200,Funcion:{frutas:["Melon"], paisrecogida:["Austria"]},beneficios:[570000,160000],FechaDisponibilidadEnvios: new Date("2020-12-28")},
          {Nombreempresa:"Paleyu Frutis",Numempleados:150,Funcion:{frutas:["Kiwi"], paisrecogida:["Alemania"]},beneficios:[180785,189036],FechaDisponibilidadEnvios: new Date("2020-05-02")},
          {Nombreempresa:"Recogidas Jimenez",Numempleados:200,Funcion:{frutas:["Arandano","Kiwi"], paisrecogida:["Croatia"]},beneficios:[600785,371000],FechaDisponibilidadEnvios: new Date("2020-06-28")},
          {Nombreempresa:"Recarte",Numempleados:140,Funcion:{frutas:["Mandarina","Arandano"], paisrecogida:["Finlandia","Francia"]},beneficios:[360785,120000],FechaDisponibilidadEnvios: new Date("2020-05-10")},
           {Nombreempresa:"Recoltino",Numempleados:100,Funcion:{frutas:["Arandano","Kiwi"], paisrecogida:["Croatia","Reino Unido"]},beneficios:[780785,150000],FechaDisponibilidadEnvios: new Date("2020-06-10")}
]);