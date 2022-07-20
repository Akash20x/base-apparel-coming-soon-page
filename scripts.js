let email = undefined;

document.querySelector('.submit').addEventListener('click', validation);

function validation(e) {
    e.preventDefault();

    email = document.querySelector('.email').value;

    const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailReg.test(email) === false) {
        document.querySelector('.error_text').classList.remove('hidden');
        document.querySelector('.error_icon').classList.remove('hidden');        
        document.querySelector('.email').classList.add('error')
    } else {
        document.querySelector('.error_text').classList.add('hidden');
        document.querySelector('.error_icon').classList.add('hidden');    
        document.querySelector('.email').classList.remove('error')
        document.querySelector('.email').value = "";
    }
   
}
