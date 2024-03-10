function verificar() {
    let usuario = document.getElementById('usuario').value;
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    if (usuario != "" && login != "" && senha != "") {
        location.href = 'pagina2.html' 
    } else {
        alert ('Login ou senha inválido, Por favor tente novamente!')
    }
}   