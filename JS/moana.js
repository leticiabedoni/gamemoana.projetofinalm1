function moana() {

    while (opcao !=1 && opcao !=2) {
        var opcao
        opcao = prompt("Qual opção?\n1 ee \n2 fef")

        if (opcao == 1) {
            location.href = "moana-win.html"
            break
        }
        else if (opcao == 2) {
            location.href = "moana-gameover.html"
            break
        }
        else    {
            alert ("Por favor, escolha 1 ou 2.")
        }
    }
}