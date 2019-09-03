const $ = selector => document.querySelector(selector);


const changeVisibilty = () => {
    const intro = $(".intro");
    const body = $('.body')


    intro.classList.remove('show');
    intro.classList.add('hide');

    body.classList.remove('hide');
    body.classList.add('show');

    setTimeout(() => {
        intro.style.display = 'none';
    }, 1000);

    console.log(intro);
}

const startApp = () => { 
    setTimeout(() => {
        changeVisibilty();
    }, 3000);
}

window.addEventListener('load', () => {
    startApp();
})