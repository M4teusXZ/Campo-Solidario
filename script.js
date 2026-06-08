//_________INICIO__________

window.onload = () => {

    trocarTela("home");
}

/* LOADING */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading =
        document.getElementById("loading");

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        },1000);

    },1800);
});

//___________MODO ESCURO____________

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML = "☀️";

    }else{

        darkBtn.innerHTML = "🌙";
    }
});

//___________ACESSIBILIDADE___________

let tamanhoFonte = 100;

function aumentarFonte(){

    tamanhoFonte += 5;

    document.body.style.fontSize =
tamanhoFonte + "%";
}

function diminuirFonte(){

    tamanhoFonte -= 5;

    document.body.style.fontSize =
    tamanhoFonte + "%";
}

//____________REGISTRAR DOAÇÃO_______________

function registrarDoacao(){

    const inputs =
    document.querySelectorAll(".doacao-input");

    let vazio = false;

    

    inputs.forEach(input => {

        if(input.value.trim() === ""){

            vazio = true;
        }
    });

    if(vazio){

        const mensagem =
        document.getElementById("mensagemErro");

        mensagem.style.display = "block";

        setTimeout(() => {

            mensagem.style.display = "none";

        },2500);

        return;
    }

    const popup =
    document.getElementById("popup");

    popup.style.display = "block";

    audio.pause();

    audio.currentTime = 0;

    audio.play();

    setTimeout(() => {

        popup.style.display = "none";

        trocarTela("home");

        inputs.forEach(input => {

            input.value = "";
        });

    },2500);

    const fazenda =
document.getElementById("fazenda").value;

const alimento =
document.getElementById("alimento").value;

let emoji = "🥬";

const alimentoLower =
alimento.toLowerCase();

if(alimentoLower.includes("banana")){

    emoji = "🍌";
}

else if(alimentoLower.includes("maçã")){

    emoji = "🍎";
}

else if(alimentoLower.includes("tomate")){

    emoji = "🍅";
}

else if(alimentoLower.includes("cenoura")){

    emoji = "🥕";
}

else if(alimentoLower.includes("batata")){

    emoji = "🥔";
}

else if(alimentoLower.includes("milho")){

    emoji = "🌽";
}

const quantidade =
document.getElementById("quantidade").value;

const cidade =
document.getElementById("cidade").value;

const categoria =
document.getElementById("categoria").value;

const lista =
document.getElementById("listaDoacoes");

const novaDoacao =
document.createElement("div");

novaDoacao.classList.add("doacao");

novaDoacao.dataset.tipo =
categoria;

const agora = new Date();

const hoje = new Date();

const ontem = new Date();

ontem.setDate(hoje.getDate() - 1);

let textoData = "hoje";

const hora =
agora.toLocaleTimeString('pt-BR', {

    hour: '2-digit',

    minute: '2-digit'
});

novaDoacao.innerHTML = `

<h3> ${fazenda}</h3>

<p>${emoji} ${alimento} - ${quantidade} </p>

<p class="cidade-doacao">📍 ${cidade}</p>

<button onclick="abrirChat('${fazenda}')">

Entrar em contato

</button>

<p class="data-doacao">

    ⏰ Registrado ${textoData} às ${hora}

</p>

`;

lista.appendChild(novaDoacao);

    setTimeout(() => {

        popup.style.display = "none";

        trocarTela("home");

    },2500);
}

//____________ABRIR CHAT_______________

function abrirChat(nome){

    trocarTela("chat");

    conversaAtual = nome;

    document.getElementById("chatNome")
    .innerText = nome;

    const avatar =
    document.querySelector(".avatar");

    const fotos = {

        "Fazenda Boa Esperança":
        "imagens/Fazenda1.jpg",

        "Sítio São João":
        "imagens/Fazenda2.jpg",

        "Fazenda Santa Luzia":
        "imagens/Fazenda3.jpg",

        "Fazenda Oliveira":
        "imagens/Fazenda4.jpg",

        "default":
        "imagens/usuario-sem-foto.png"
    };

    avatar.src = fotos[nome] || fotos["default"];

    const mensagens =
    document.getElementById("messages");

    if(!conversas[nome]){

        const chatsAntigos = [

            "Fazenda Boa Esperança",

            "Sítio São João",

            "Fazenda Santa Luzia",

            "Fazenda Oliveira"
        ];

        if(chatsAntigos.includes(nome)){

            conversas[nome] = `

            <div class="msg received">

                Olá! Temos alimentos disponíveis 😊

            </div>
            `;
        }

        else{

            conversas[nome] = "";
        }
    }

    mensagens.innerHTML =
    conversas[nome];
}

//__________ENVIAR MENSAGEM________________

function enviarMensagem(){

    const input =
    document.getElementById("mensagemInput");

    const mensagens =
    document.getElementById("messages");

    if(input.value.trim() === "")
    return;

    const novaMensagem =
    document.createElement("div");

    novaMensagem.classList.add("msg");
    novaMensagem.classList.add("sent");

    novaMensagem.innerText =
    input.value;

    mensagens.appendChild(novaMensagem);

    conversas[conversaAtual] =
    mensagens.innerHTML;

    mensagens.scrollTop =
    mensagens.scrollHeight;

    input.value = "";
}

//__________________PESQUISA___________________

function pesquisarDoacoes(){

    const pesquisa =
    document.getElementById("pesquisaInput")
    .value.toLowerCase();

    const doacoes =
    document.querySelectorAll(".doacao");

    doacoes.forEach(doacao => {

        const texto =
        doacao.innerText.toLowerCase();

        if(texto.includes(pesquisa)){

            doacao.style.display = "block";
        }

        else{

            doacao.style.display = "none";
        }
    });
}

//_______________ANIMAÇÂO DOS NÙMEROS_______________-

function animarNumeros(){

    const numeros =
    document.querySelectorAll(".stat-card h3");

    numeros.forEach(numero => {

        const textoOriginal =
        numero.innerText;

        const valorTexto =
        textoOriginal
        .replace(/\./g,'')
        .replace('kg','');

        const valorFinal =
        parseInt(valorTexto);

        if(!valorFinal) return;

        let contador = 0;

        numero.innerText = "0";

        const intervalo =
        setInterval(() => {

            contador +=
            Math.ceil(valorFinal / 35);

            if(contador >= valorFinal){

                contador = valorFinal;

                clearInterval(intervalo);
            }

            if(textoOriginal.includes("kg")){

                numero.innerText =
                contador.toLocaleString('pt-BR')
                + "kg";

            }else{

                numero.innerText =
                contador.toLocaleString('pt-BR');
            }

        },25);
    });
}

//______________ENTRAR INSTITUIÇÃO_________________
function entrarInstituicao(){

    const inputs =
    document.querySelectorAll(".instituicao-input");

    let vazio = false;

    inputs.forEach(input => {

        if(input.value.trim() === ""){

            vazio = true;
        }
    });

    if(vazio){

        const mensagem =
        document.getElementById("mensagemErro");

        mensagem.style.display = "block";

        setTimeout(() => {

            mensagem.style.display = "none";

        },2500);

        return;
    }

    trocarTela("doacoesTela");

    inputs.forEach(input => {

    input.value = "";
});
}
function limparFormularioDoacao(){

    const inputs =
    document.querySelectorAll(".doacao-input");

    inputs.forEach(input => {

        input.value = "";
    });

    document.getElementById("categoria")
    .selectedIndex = 0;
}

//____________FILTRAR DOAÇÕES___________________
function filtrarDoacoes(tipo, event){

    const doacoes =
    document.querySelectorAll(".doacao");

    const filtros =
    document.querySelectorAll(".filtro-btn");

    filtros.forEach(btn => {

        btn.classList.remove("ativo");
    });

    if(event){

        event.target.classList.add("ativo");
    }

    doacoes.forEach(doacao => {

        const categoria =
        doacao.dataset.tipo;

        if(tipo === "todos"){

            doacao.style.display = "block";
        }

        else if(categoria === tipo){

            doacao.style.display = "block";
        }

        else{

            doacao.style.display = "none";
        }
    });
}
function toggleAcessibilidade(){

    const menu =
    document.getElementById("menuAcessibilidade");

    menu.classList.toggle("ativo");
}
//___________LIMPAR CONVERSA____________
const conversas = {};

let conversaAtual = "";

//_________SOM DE CONFIRMAÇÃO_____________
const audio =
    new Audio(
    "Som/som.mp3"
    );

//________________TROCAR TELAS____________

function trocarTela(id){

    const inputsInstituicao =
document.querySelectorAll(".instituicao-input");

inputsInstituicao.forEach(input => {

    input.value = "";
});

    const telas =
    document.querySelectorAll(".screen");

    telas.forEach(tela => {

        tela.style.display = "none";
    });

    if(id !== "doacao"){

    limparFormularioDoacao();
}

    document.getElementById(id)
    .style.display = "flex";

    // anima números

    if(id === "estatisticas"){

        animarNumeros();
    }
}
