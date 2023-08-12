const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const loader = document.getElementById('loader');
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', validateData);

function validateData(e) {
    e.preventDefault();

    if (!nameField || nameField.value.length < 5) {
        alert('Informe o nome corretamente!');
        return;
    }

    if (!emailField || emailField.value.length < 5) {
        alert('E-mail Inválido!');
        return;
    }

    if (!messageField || messageField.value.length < 10) {
        alert('Mensagem Inválida!');
        return;
    }

    loader.style.display = 'block';
    btnSubmit.style.display = 'none';

    setTimeout(() => {
        alert('Mensagem enviada com sucesso!');
        
        nameField.value = '';
        emailField.value = '';
        messageField.value = '';

        loader.style.display = 'none';
        btnSubmit.style.display = 'block';
    }, 1000);
}