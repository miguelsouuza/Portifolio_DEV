function trocarimg(elemento)
{    
    var img_png = document.getElementById("imagem_png");
    var nome = document.getElementById('nome_Personagem');
    switch(elemento.id){
        case 'ciclope':
            img_png.src="src/imagens/card-ciclope.png";
            nome.innerHTML="Ciclope";
            nome.style.borderBottom="3px solid aqua";
            nome.style.color="Yellow";       
            break;
        case 'jean':
            img_png.src="src/imagens/card-jean-grey.png";
            nome.innerHTML="Jean Grey";
            nome.style.borderBottom="3px solid aqua";
            nome.style.color="Orange";
            break;
        case 'lince':
            img_png.src="src/imagens/card-lince-negra.png";
            nome.innerHTML="Lince Negra";
            nome.style.borderBottom="3px solid aqua";
            nome.style.color="Pink";
            break;
        case 'magneto':
            img_png.src="src/imagens/card-magneto.png";
            nome.innerHTML="Magneto";
            nome.style.borderBottom="3px solid aqua";
            nome.style.color="Purple";
            break;
        case 'noturno':
            img_png.src="src/imagens/card-noturno.png";
            nome.innerHTML="Noturno";
            nome.style.borderBottom="3px solid aqua";
            nome.style.color="Red";
            break;
        case 'tempestade':
            img_png.src="src/imagens/card-tempestade.png";
            nome.innerHTML="Tempestade";
            nome.style.borderBottom="3px solid aqua";
            nome.style.color="Darkmagenta";
            break;
        case 'vampira':
            img_png.src="src/imagens/card-vampira.png";
            nome.innerHTML="Vampira";
            nome.style.borderBottom="3px solid aqua";
            nome.style.color="Aqua";
            break;
        case 'wolverine':
            img_png.src="src/imagens/card-wolverine.png";
            nome.innerHTML="Wolverine";
            nome.style.borderBottom="3px solid aqua";            
            nome.style.color="Green";
            break;
    }
}