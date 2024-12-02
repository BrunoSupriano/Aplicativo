// Função para mostrar a tela de Login
function showLogin() {
    document.getElementById('loginScreen').style.display = 'block';
    document.getElementById('registerScreen').style.display = 'none';
    document.getElementById('forgotPasswordScreen').style.display = 'none';
}

// Função para mostrar a tela de Cadastro
function showRegister() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('registerScreen').style.display = 'block';
    document.getElementById('forgotPasswordScreen').style.display = 'none';
}

// Função para mostrar a tela de Recuperar Senha
function showForgotPassword() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('registerScreen').style.display = 'none';
    document.getElementById('forgotPasswordScreen').style.display = 'block';
}

// Função para aplicar o efeito no label
function moveLabelOnFocus() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        const label = input.nextElementSibling; // O label fica logo após o input
        const initialTop = 23; // Posição inicial do label

        // Verifica se o campo está preenchido ou em foco
        input.addEventListener('focus', () => {
            label.style.top = '11px'; // Move o label para cima
            label.style.fontSize = '12px'; // Diminui o tamanho da fonte
            label.style.color = '#004d40'; // Muda a cor do label
        });

        // Quando o campo perde o foco, verifica se ele tem valor
        input.addEventListener('blur', () => {
            if (input.value === '') {
                label.style.top = `${initialTop}px`; // Se não tiver valor, retorna à posição inicial
                label.style.fontSize = '14px'; // Restaura o tamanho do font
                label.style.color = '#00796b'; // Restaura a cor original
            }
        });

        // Caso o campo já tenha valor quando o script é carregado
        if (input.value !== '') {
            label.style.top = '2px';
            label.style.fontSize = '12px';
            label.style.color = '#004d40';
        }
    });
}

// Executa a função quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    moveLabelOnFocus();
    showLogin(); // Inicia com a tela de Login
});


// Adicionando eventos de envio de formulário (simulação)
// Lógica do formulário de login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const cpf = document.getElementById('cpf').value;
    const password = document.getElementById('password').value;

    // Validação simples
    if (cpf === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Lógica de autenticação fictícia
    if (cpf === "teste" && password === "teste") {
        alert("Login realizado com sucesso!");
        window.location.href = "../../../Balanca/Balanca.html";
        // Aqui você pode redirecionar para a tela principal ou dashboard
    } else {
        alert("CPF ou senha inválidos.");
    }
});

// Lógica do formulário de cadastro
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;

    // Validação simples
    if (name === "" || cpf === "" || email === "" || phone === "" || address === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Lógica de cadastro fictícia
    alert("Cadastro realizado com sucesso!");
    showLogin(); // Após cadastro, volta para a tela de login
});

// Lógica do formulário de recuperação de senha
document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Validação simples
    if (email === "") {
        alert("Por favor, informe seu e-mail.");
    } else {
    // Lógica de recuperação de senha fictícia
    alert("Instruções para recuperação de senha enviadas!");
    showLogin(); // Após enviar, volta para a tela de login
    }
});
