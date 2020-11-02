//JSnack 1
var biciclette = [
    {
        nome: 'scott',
        peso: 12
    },
    {
        nome: 'bianchi',
        peso: 10
    },
    {
        nome: 'giant',
        peso: 14
    }
];

console.log(biciclette);

var biciLeggera = biciclette[0];

for (var i = 0; i < biciclette.length; i++){
    if (biciclette[i].peso < biciLeggera.peso){
        biciLeggera = biciclette[i];
    }
};

console.log(biciLeggera);

var source = $("#bici-template").html();
var template = Handlebars.compile(source);

var data = {
    nome: biciLeggera.nome,
    peso: biciLeggera.peso
}

var html = template(data);
$('.jsnack1').html(html);


//JSnack 2
var array = ['alessio', 'marco', 'paolo', 'luigi', 'fabio', 'giorgio'];

var tot = array.length - 1; 
var min = parseInt( prompt( 'inserisci un valore iniziale tra 0 e ' + tot ) );
var max = parseInt( prompt( 'inserisci un valore finale tra 0 e ' + tot ) );


var newArray = [];

for ( var i = 0; i < array.length; i++){
    if ( min <= i && max >= i ){
        newArray.push(array[i]);
    }
}

console.log(array);
console.log(newArray);



//JSnack 3

var oggetti = [
    {
        nome: 'mario',
        cognome: 'rossi',
        anni: 30
    },{
        nome: 'dario',
        cognome: 'de angelis',
        anni: 45
    }
];



var newOggetti = [];

for( var i = 0; i < oggetti.length; i++){

    var newObject = {
        nome: oggetti[i].nome,
        cognome: oggetti[i].cognome,
        anni: oggetti[i].anni,
        position: randomLetters()
    }

    newOggetti.push(newObject);
}



function randomLetters(){
    var lettere = 'abcdefghijklmnopqrstuvwxyz';

    var lettera = lettere [randomNumbers (0, lettere.length - 1)];

    return lettera;
    
};


function randomNumbers(max,min){
    return Math.floor(Math.random() *(max - min + 1 )) + min;
};

console.table(oggetti);
console.table(newOggetti);