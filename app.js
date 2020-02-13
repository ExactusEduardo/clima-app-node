const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*
lugar.getLugarLatLng(argv.direccion)
    .then((resp) => {
        console.log(resp);
    });
*/

/*
clima.getClima(40.750000, -74.000000)
    .then((resp) => { console.log(resp) })
    .catch((err) => { console.log(err) });
*/

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (error) {
        return `No se puedo determinar el clima de ${ rptLugar.direccion }`;
    }

    //salida
    //El clima de XXXXX es de XX
    //No se pudo determinar el clima de XXXX
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(object));