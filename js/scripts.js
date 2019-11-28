function convert(gallon){
    return gallon*3.78541;
}
var gallon = parseInt(prompt('Enter gallons to convert'));
var litres = convert(gallon);
alert(litres);