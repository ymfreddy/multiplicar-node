const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
/*
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]*/
//console.log('base', argv.base);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(listar => console.log(`Listar....`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo cerado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no valido');
        break;
}

/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo cerado: ${archivo}`))
    .catch(err => console.log(err));*/