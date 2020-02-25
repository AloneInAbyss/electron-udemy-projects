/* 
    Autor > Thiago Assi
    Data > 2020.02.25

    - O projeto é um app que vai selecionar um vídeo e obter sua duração. Criaremos nossa aplicação nesse arquivo, que irá gerar a janela principal.
*/

// Aula 06

/*
    Estamos executando esse código no NODE.JS Runtime.
    Ele ainda não tem suporte para os módulos do ES6 (EcmaScript 6), por isso não usaremos 'import', mas sim 'require()'.
*/

// Recebe a biblioteca do Electron
const electron = require('electron');
/*
    No React, por exemplo, é usado:
        import electron from 'electron';
*/

// Aula 07

// Overall running process of electron on our machine
// 'app' Property da biblioteca Electron (app object)
// 'BrowserWindow' para criar janelas
const { app, BrowserWindow } = electron;
/*
    Usamos isso por exemplo para criar outras janelas
*/

// Espera que o programa esteja pronto para executar
app.on('ready', () => {
    // Escreve no log do console
    //console.log('A aplicacao esta pronta para a execucao.');

    // Inicia uma janela [Aula 08]
    // Passamos para ela um objeto vazio (empty object) já que não temos configurações para passar por enquanto
    //new BrowserWindow({});

    // Passaremos a janela para uma constante
    const mainWindow = new BrowserWindow({});

    // Carrega o documento HTML na janela
    // (pode ser até mesmo um link)
    //mainWindow.loadURL('http://google.com');

    // Carrega um arquivo (file), do diretório (__dirname)
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    // Alternativamente:
    //mainWindow.loadFile('index.html')


});



/* IN A NUTSHELL 
INDEX.JS
    const electron = import('electron');
    const { app } = electron;

    app.on('ready', () => {
        new BrowserWindow({});
    });

CLI
    npm init
    npm install --save electron
    npm run electron

PACKAGE.JSON
    "main": "index.js",
    "scripts": {
        "electron": "electron ."
    }
*/