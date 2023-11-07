var Games, Gamesid; //Variavel global, não mexer

function abrirgame(Jogo) {
    var Gamesid = Jogo.id;
    localStorage.setItem('Gamesid', Gamesid);
    achar();
}
//FIm da abertura dos games

// achar os games, tabelas de cada game
function achar() {
    var game, plataforma, plataformaok, status1, categoria, progresso, recomendo, ano, descricao, foto, gameimg;
    var resultado = localStorage.getItem('Gamesid', Games);

    // json games 
    if (resultado == "CODMW3") {
        var game = "Call of Duty MWIII";
        var plataforma = "Playstation";
        var status1 = 'Jogando';
        var categoria = 'Tiro em primeira pessoa';
        var progresso = '100%';
        var recomendo = 'Sim';
        var ano = '2011';
        var descricao = 'Ao longo do jogo vais lutar a partir do ar, do mar e da terra, bem como passar por países como a Inglaterra, França, Alemanha, Somália, Serra Leoa e Dubai. Ainda que a campanha não seja muito complicada, é preciso que domines muito bem as tuas armas. Tem sempre em conta as as diferentes estratégias existentes para atingires o teu objetivo.';
        var foto = 'imagens/Jogos img menor/calf of duty mw.jpg';  //insira link da imagem
    }
    else if (resultado == "RDR2") {
        var game = "Red Dead Redemption";
        var plataforma = "Xbox";
        var status1 = 'Jogando';
        var categoria = 'Ação e Aventura';
        var progresso = '60%';
        var recomendo = 'Sim';
        var ano = '2018';
        var descricao = 'Red Dead Redemption 2 é um jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar Games. O jogo se passa em 1899, no final da era do Velho Oeste, e segue a história do fora-da-lei Arthur Morgan, membro da gangue Van der Linde. Morgan e seus companheiros estão em fuga após um assalto fracassado em Blackwater, e agora precisam sobreviver em um mundo implacável enquanto são perseguidos por agentes da lei e caçadores de recompensas.';
        var foto = 'imagens/Jogos img menor/red dead redemption.jpg'; //insira link da imagem 
    }
    else if (resultado == 'SDIF') {
        var game = "Six Day in Fallujah";
        var plataforma = "Steam";
        var status1 = 'Jogando';
        var categoria = 'Tiro Tático';
        var progresso = '100%';
        var recomendo = 'Sim';
        var ano = '2022';
        var descricao = 'Six Days in Fallujah é um jogo de tiro tático em primeira pessoa realista baseado em histórias reais de fuzileiros navais, soldados e civis iraquianos durante a batalha urbana mais difícil desde 1968. Por fim, Six Days in Fallujah está disponível em acesso antecipado para PC via Steam.';
        var foto = 'imagens/Jogos img menor/six day in fallujah.jpg'; //insira link da imagem 
    }
    else if (resultado == 'WarT') {
        var game = "War Thunder";
        var plataforma = "Playstation";
        var status1 = 'Jogando';
        var categoria = 'Simulação de Combate';
        var progresso = '100%';
        var recomendo = 'Sim';
        var ano = '2013';
        var descricao = "Um jogo de simulação de combate que abrange várias eras, permitindo que os jogadores controlem uma variedade de veículos militares, como tanques, aviões e navios. A jogabilidade é focada em batalhas multiplayer.";
        var foto = 'imagens/Jogos img menor/war thunder.jpg'; //insira link da imagem 
    }
    else if (resultado == 'SE4') {
        var game = "Sniper Elite 4";
        var plataforma = "Xbox";
        var status1 = "Jogado";
        var categoria = "Tiro tático";
        var progresso = "100%";
        var recomendo = "Sim";
        var ano = "2017";
        var descricao = "Um jogo de tiro tático que coloca os jogadores no papel de um atirador de elite durante a Segunda Guerra Mundial. Ele é conhecido pelos tiros de precisão e pelas mortes cinematográficas.";
        var foto = 'imagens/Jogos img menor/sniper elite 4.jpg';
    }
    else if (resultado == 'FH5') {
        var game = "Forza Horizon 5";
        var plataforma = "Xbox";
        var status1 = "Jogando";
        var categoria = "Corrida";
        var progresso = "55%";
        var recomendo = "Sim";
        var ano = "2021";
        var descricao = "Um jogo de corrida de mundo aberto que se passa no México. Oferece uma grande variedade de carros e eventos, com gráficos impressionantes e mecânicas de direção realistas.";
        var foto = 'imagens/Jogos img menor/forza horizon5.jpg';
    }
    else if (resultado == 'SC2') {
        var game = "Sniper Contracts 2";
        var plataforma = "Steam";
        var status1 = "Jogando";
        var categoria = "Tiro tático";
        var progresso = "30%";
        var recomendo = "Sim";
        var ano = "2021";
        var descricao = "Outro jogo da série Sniper, onde os jogadores assumem o papel de um atirador de elite contratado para completar missões de eliminação de alvos em cenários variados.";
        var foto = 'imagens/Jogos img menor/sniper contracts 2.jpg';
    }
    else if (resultado == 'NFSH') {
        var game = "Need for Speed: Heat";
        var plataforma = "PlayStation";
        var status1 = "Jogado";
        var categoria = "Corrida";
        var progresso = "90%";
        var recomendo = "Sim";
        var ano = "2019";
        var descricao = "Um jogo de corrida de rua que combina ação, personalização de carros e uma narrativa centrada em pilotos que competem nas ruas à noite. Os jogadores podem criar e personalizar seus veículos para dominar as corridas.";
        var foto = 'imagens/Jogos img menor/nfs.jpg'
    }
    else if (resultado == 'DtD') {
        var game = "Dave the Diver";
        var plataforma = "Steam";
        var status1 = "Jogando";
        var categoria = "Aventura submarina";
        var progresso = "40%";
        var recomendo = "Sim";
        var ano = "2023";
        var descricao = "Uma aventura submarina que segue a história de Dave, um mergulhador, enquanto ele explora recifes de coral e descobre tesouros subaquáticos. O jogo oferece uma experiência tranquila e exploratória.";
        var foto = 'imagens/Jogos img menor/dave.jpg';
    }
    else if (resultado == 'MTaS') {
        var game = "My Time at Sandrock";
        var plataforma = "Steam";
        var status1 = "Jogando";
        var categoria = "Simulação";
        var progresso = "75%";
        var recomendo = "Sim";
        var ano = "2022";
        var descricao = "Um jogo de simulação que coloca os jogadores em um ambiente rural e os desafia a construir, cultivar e interagir com a comunidade. É uma continuação de 'My Time at Portia'.";
        var foto = 'imagens/Jogos img menor/mytime.jpg';
    }
    else if (resultado == 'SnowR') {
        var game = "SnowRunner";
        var plataforma = "Xbox";
        var status1 = "Jogado";
        var categoria = "Simulação off-road";
        var progresso = "100%";
        var recomendo = "Sim";
        var ano = "2020";
        var descricao = "Um simulador de veículos off-road que desafia os jogadores a enfrentar terrenos difíceis e condições extremas. É um jogo de resistência, onde você deve transportar cargas valiosas por estradas perigosas.";
        var foto = 'imagens/Jogos img menor/snow runner.jpg';
    }
    else if (resultado == 'Stardew') {
        var game = "Stardew Valley";
        var plataforma = "PlayStation";
        var status1 = "Jogado";
        var categoria = "Simulação de fazenda";
        var progresso = "85%";
        var recomendo = "Sim";
        var ano = "2016";
        var descricao = "Um jogo de simulação de fazenda onde os jogadores herdam uma fazenda e podem cultivar colheitas, criar animais, minerar e interagir com os habitantes da cidade. É um jogo relaxante e cheio de atividades para desfrutar.";
        var foto = 'imagens/Jogos img menor/stardewvalley.jpg';
    }
    else if (resultado == 'Hogwarts') {
        var game = "Hogwarts Legacy";
        var plataforma = "PlayStation";
        var status1 = "Jogado";
        var categoria = "Ação e Aventura";
        var progresso = "40%";
        var recomendo = "Sim";
        var ano = "2022";
        var descricao = "Embarque em uma aventura mágica no mundo de Harry Potter. Você é um estudante em Hogwarts e pode explorar o castelo, aprender magias e enfrentar desafios misteriosos. Uma experiência imersiva no universo bruxo.";
        var foto = 'imagens/Jogos img maior/hogwarts.jpeg';
    }

    // logo de plataformas 
    if (plataforma == 'Steam') {
        var plataformaok = '<a class="fa-brands fa-steam">';
    }
    else if (plataforma == 'Playstation' || plataforma == 'PlayStation') {
        var plataformaok = '<a class="fa-brands fa-playstation">';
    }
    else if (plataforma == 'Xbox') {
        var plataformaok = '<a class="fa-brands fa-xbox">';
    }
    // simplificando imagem pra não ficar grande no código
    var gameimg = '<img src="' + foto + '" style="width: 100%;">';

    //inicio get/set
    localStorage.setItem('gameid', game);
    localStorage.setItem('plataformaid', plataforma);
    localStorage.setItem('plataformaokid', plataformaok);
    localStorage.setItem('statusid', status1);
    localStorage.setItem('categoriaid', categoria);
    localStorage.setItem('progressoid', progresso);
    localStorage.setItem('recomendoid', recomendo);
    localStorage.setItem('anoid', ano);
    localStorage.setItem('descricaoid', descricao);
    localStorage.setItem('fotoid', gameimg);
    //Fim Get/Set
}