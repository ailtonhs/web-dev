let menu = document.getElementById("menu");
function clickMenu() {

    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

}

function larguraTotal() {
    if (innerWidth > 768) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}



let funcao = document.getElementById("funcao");


funcao.addEventListener("click", minhaFuncao);

function minhaFuncao() {
    let nome = String(document.getElementById("inome").value)
    let ano = Number(document.getElementById("iano").value);
    let mes = Number(document.getElementById("imes").value);
    let dia = Number(document.getElementById("idia").value);
    let radsex = document.getElementsByName("isexo");
    let sexo;

    let anoAtual = new Date().getFullYear();
    let mesAtual = new Date().getMonth();

    mesAtual = mesAtual;


    let diaAtual = new Date().getDate();

    let idade = anoAtual - ano;


    let res = document.getElementById("res");

    if (nome == "" || ano == "" || mes == "" || dia == "") {
        swal("ERRO", "Faltam dados!", "error");

    } else {
        if (radsex[0].checked) {
            sexo = "Masculino";

            if (mes >= (mesAtual + 1)) {
                res.innerHTML = `<p><strong>Nome:</strong> ${nome} </p>`;

                res.innerHTML += `<p><strong>Sexo:</strong> ${sexo} </p>`;

                res.innerHTML += `<p><strong>Idade:</strong> Você tem ${idade - 1} anos, e irá completar ${idade} anos, no dia ${dia} do mês ${mesAtual + 1} do ano ${anoAtual}.</p>`


            } else {
                res.innerHTML = `<p><strong>Nome:</strong> ${nome} </p>`;

                res.innerHTML += `<p><strong>Sexo:</strong> ${sexo} </p>`;

                res.innerHTML += `<p><strong>Idade:</strong> Você tem ${idade} anos, e irá completar ${idade + 1} anos, no dia ${dia} do mês ${mes} do ${anoAtual += 1}.</p>`;

            }


        } else {
            sexo = "Feminino";


            if (mes >= (mesAtual + 1)) {
                res.innerHTML = `<p><strong>Nome:</strong> ${nome} </p>`;
                10
                res.innerHTML += `<p><strong>Sexo:</strong> ${sexo} </p>`;

                res.innerHTML += `<p><strong>Idade:</strong> Você tem ${idade - 1} anos, e irá completar ${idade} anos, no dia ${dia} do mês ${mes} do ano ${anoAtual}.</p>`


            } else {
                res.innerHTML = `<p><strong>Nome:</strong> ${nome} </p>`;

                res.innerHTML += `<p><strong>Sexo:</strong> ${sexo} </p>`;

                res.innerHTML += `<p><strong>Idade:</strong> Você tem ${idade} anos, e irá completar ${idade + 1} anos, no dia ${dia} do mês ${mes} de ${anoAtual += 1}.</p>`;

            }




        }
    }


}