$(document).ready(function() {

    $(document).on('click', '#linkMenuHome', function () {
        $('.container').load("src/separadores/home.html");
    });

    $(document).on('click', '#linkMenuAboutMe', function () {
        $('.container').load("src/separadores/aboutMe.html");
    });

    $(document).on('click', '#linkAboutMe', function () {
        $('.container').load("src/separadores/aboutMe.html");
    });

    $(document).on('click', '#linkMenuProjetos', function () {
        $('.container').load("src/separadores/projetos.html");
    });

    $(document).on('click', '#linkMenuContactos', function () {
        $('.container').load("src/separadores/contactos.html");
    });
    
    //envio do formulário de contacto
    $(document).on('submit', '.formContacto', (e) => {
       e.preventDefault();

        const form = e.target;
        const msgErro = document.querySelector('.msgErro');

        fetch('https://formsubmit.co/xaviergomesoliveira@gmail.com', {
            method: 'POST',
            body: new FormData(form)
        })

        .then(response => {
            if (response.ok) {
                msgErro.textContent = 'Mensagem enviada com sucesso';
                msgErro.style.color = '#198754'; 
                form.reset(); 
                setTimeout(() => {
                    msgErro.textContent = '';
                }, 4000);
            } else {
                msgErro.textContent = 'Ocorreu um erro. Tente novamente.';
                msgErro.style.color = 'red';
                setTimeout(() => {
                    msgErro.textContent = '';
                }, 4000); 
            }
        })

        .catch(() => {
            msgErro.textContent = 'Falha de rede. Verifique a sua ligação.';
            msgErro.style.color = 'red'; 
            setTimeout(() => {
                msgErro.textContent = '';
            }, 4000);
        })

    });

    });

