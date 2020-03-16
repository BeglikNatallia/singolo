let navigation = document.getElementById('nav'),
    phone_btn_vertical = document.getElementById('phone_vertical_circle'),
    phone_btn_horizontal = document.getElementById('phone_horizontal_circle'),
    phone_off = document.getElementsByClassName('phone_off');

//меню с переключением
navigation.addEventListener("click", (event) => {
    navigation.querySelectorAll('a').forEach(el => el.classList.remove('active'));

    event.target.classList.add('active');
});

//активация экрана телефона при нажатии на кнопку телефона
phone_btn_vertical.addEventListener('click', () => {
    phone_off[0].classList.toggle('active');
});

phone_btn_horizontal.addEventListener('click', () => {
    phone_off[1].classList.toggle('active');
});