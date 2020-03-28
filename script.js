let navigation = document.getElementById('nav'),
    phoneBbtnVertical = document.getElementById('phone_vertical_circle'),
    phoneBtnHorizontal = document.getElementById('phone_horizontal_circle'),
    phoneOff = document.getElementsByClassName('phone_off'),
    iconHumburger = document.getElementsByClassName('icon')[0],
    navLinks = document.getElementsByClassName('navLinks')[0];

//меню с переключением
navigation.addEventListener("click", (event) => {
    navigation.querySelectorAll('a').forEach(el => el.classList.remove('active'));

    event.target.classList.add('active');
});

//активация экрана телефона при нажатии на кнопку телефона
phoneBbtnVertical.addEventListener('click', () => {
    phoneOff[0].classList.toggle('active');
});

phoneBtnHorizontal.addEventListener('click', () => {
    phoneOff[1].classList.toggle('active');
});

//меню гамбургер
iconHumburger.addEventListener('click', () => {
    navLinks.classList.toggle('block');
    iconHumburger.classList.toggle('rotate');
});

navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('block');
    iconHumburger.classList.toggle('rotate');
});
