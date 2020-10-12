const callbackForm = document.querySelector('.call-back-container');
const requestReceivedModal = document.querySelector('#request-received');

const userName = document.querySelector('#call-back-form-input-name')
const userMail = document.querySelector('#call-back-form-input-mail')
const userPhone = document.querySelector('#call-back-form-input-phone')

userPhone.addEventListener('click',function() {
    if (!userPhone.value.trim()) {
        userPhone.value = '+972';
    }

});

userPhone.addEventListener('blur',function() {
    if (userPhone.value === '+972') {
        userPhone.value = '';
    }

});

callbackForm.addEventListener('submit', function(event){
    event.preventDefault();
    let hasEror = false

    if (!userName.value.trim()) {
        userName.classList.add('call-back-form-input-error')
        hasEror = true;
    } else {
        userName.classList.remove('callback-form-input-error');
    }

    if (!userMail.value.trim() || !isMailValid(userMail.value)) {
        userMail.classList.add('call-back-form-input-error')
        hasEror = true;
    } else {
        userMail.classList.remove('call-back-form-input-error');
    }

    if (!userPhone.value.trim() || !isPhoneValid(userPhone.value)) {
        userPhone.classList.add('call-back-form-input-error')
        hasEror = true;
    } else {
        userPhone.classList.remove('call-back-form-input-error')
    }

    if (hasEror) {
        return;
    }

    userName.value = '';
    userMail.value = '';
    userPhone.value = '';



    requestReceivedModal.classList.add('modal-active');

    setTimeout(function() {
        requestReceivedModal.classList.remove('modal-active');
    }, 2000);

   
});    

function isPhoneValid(phone = '') {
    const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;

    return phone.match(regexp);
}

function isMailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}