const faq_questions = document.querySelectorAll('.faq-question');
const answers = document.querySelectorAll('.faq-box > p');
const imgs = document.querySelectorAll('.faq-question img');

faq_questions.forEach((e, i) => {
    e.addEventListener('click', () => {
        changeIcon(i);
        showText(i);
    });
});

function showText(i) {
    answers[i].classList.toggle('hide');
};

function changeIcon(i) {

    if (imgs[i].alt == 'plus') {
        imgs[i].src = './assets/images/icon-minus.svg';
        imgs[i].alt = 'minus';
    } else {
        imgs[i].src = './assets/images/icon-plus.svg';
        imgs[i].alt = 'plus';
    }

};




