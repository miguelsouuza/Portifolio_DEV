function trocarimg(elemento)
{    
    var img_png = document.getElementById("imagem_png");
    var nome = document.getElementById('nome_Personagem');
    switch(elemento.id){
        case 'ciclope':
            img_png.src="src/imagens/card-ciclope.png";
            nome.innerHTML="Ciclope"            
            break;
        case 'jean':
            img_png.src="src/imagens/card-jean-grey.png";
            nome.innerHTML="Jean Grey"
            break;
        case 'lince':
            img_png.src="src/imagens/card-lince-negra.png";
            nome.innerHTML="Lince Negra"
            break;
        case 'magneto':
            img_png.src="src/imagens/card-magneto.png";
            nome.innerHTML="Magneto"
            break;
        case 'noturno':
            img_png.src="src/imagens/card-noturno.png";
            nome.innerHTML="Noturno"
            break;
        case 'tempestade':
            img_png.src="src/imagens/card-tempestade.png";
            nome.innerHTML="Tempestade"
            break;
        case 'vampira':
            img_png.src="src/imagens/card-vampira.png";
            nome.innerHTML="Vampira"
            break;
        case 'wolverine':
            img_png.src="src/imagens/card-wolverine.png";
            nome.innerHTML="Wolverine"
            break;
    }    
}