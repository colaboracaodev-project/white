// Alterar o comportamento do formulário para que os campos sejam limpos após o usuário clicar no botão calcular.

function limparInput() { // add função ao "button", com a propriedade "onclick"
    document.getElementById("myForm").reset(); // add "id" como propriedade ao formulário (<form>).
}