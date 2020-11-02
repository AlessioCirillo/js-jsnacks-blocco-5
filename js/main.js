// JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.

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

var source = $("bici-template").html();
var template = Handlebars.compile(source);

var data = {
    nome: biciLeggera.nome,
    peso: biciLeggera.peso
}

var html = template(data);
$('.jsnack1').html(html);