function addContato() {
    // Obter valores do formulário
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    // Verificar se ambos os campos estão preenchidos
    if (nome !== "" && telefone !== "") {
        // Obter referência da tabela
        var tabelaContatos = document.getElementById("TabelaContatos");

        // Inserir uma nova linha na tabela
        var novaLinha = tabelaContatos.insertRow(-1);

        // Inserir células na nova linha
        var cellNome = novaLinha.insertCell(0);
        var cellTelefone = novaLinha.insertCell(1);

        // Definir o conteúdo das células com os valores do formulário
        cellNome.innerHTML = nome;
        cellTelefone.innerHTML = telefone;

        // Limpar os campos do formulário após cadastrar
        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}