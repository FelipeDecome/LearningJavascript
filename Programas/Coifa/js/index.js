let coifa = new Coifa(100, 100, 40);

let l = console.log.bind(console);

l("Costas: ", coifa.getCostas());
l("Lateral: ", coifa.getLateral("tubo", 40));
l("Frente: ", coifa.getFrente("tubo", 40));
