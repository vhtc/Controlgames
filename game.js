var Games;

function abrirgame01() {
    var Games = document.querySelector("#Game01 span").textContent;
    localStorage.setItem('Gamesid', Games);
    achar();
}
function abrirgame02() {
    var Games = document.querySelector("#Game02 span").textContent;
    localStorage.setItem('Gamesid', Games);
    achar();
}

function achar() {
    var game, plataforma, status1, categoria, progresso, recomendo, foto;

  
    var resultado = localStorage.getItem('Gamesid',Games);


    if (resultado=='CODMW')
    {
        var game = "Call of Duty MWIII";
        var plataforma = "Steam";
        var status1 = 'Jogando';
        var categoria = 'Ação';
        var progresso = '80%';
        var recomendo = 'Sim';
        var foto = '<img src="imagens/calf of duty mw.jpg">'; //insira link da imagem dentro do src
             
    }
    else if (resultado=='REDDR')
    {
        var game = "Red Dead Redemption";
        var plataforma = "PS5";
        var status1 = 'Jogando';
        var categoria = 'Ação';
        var progresso = '20%';
        var recomendo = 'Sim';
        var foto = '<img src="imagens/red dead redemption.jpg">'; //insira link da imagem dentro do src
    }
    //inicio get
        document.getElementById("resultado").textContent = resultado;
        localStorage.setItem('resultado', resultado);
        localStorage.setItem('gameid',game);
        localStorage.setItem('plataformaid',plataforma);
        localStorage.setItem('statusid',status1);
        localStorage.setItem('categoriaid',categoria);
        localStorage.setItem('progressoid',progresso);
        localStorage.setItem('recomendoid',recomendo);
        localStorage.setItem('fotoid',foto);   
}