/* Создание обертки 
<div class="wrapper"></div>
Получается с помощью .wrapper + ENTER

Заголовок: header.header + ENTER
<header class = "header"></header>

Основной
<main class="main"></main>

Нижний колонтитул
<footer class="footer"></footer>

<div class="container"></div>
Этот блок содержит контент, дополняет его и выравнивает на устройствах

<div class="header__inner"></div>
Выравнивание логотипа и меню

<a class = "logo" href="#"></a>
logo - это всегда ссылка, поэтому a
href - ссылка

Вставка изображения
<img src="images/logo.svg" alt="" class="logo__img">

Nav - навигация, создаем меню
<nav class="menu"></nav>

Список для меню
<ul class="menu__list"></ul>

Позволяет добавить 5 элементов списка
li.menu__list-item*5>a.menu__list-link + ENTER

Названия для классов берутся из головы, но зачастую с помощью __ идет связь элементов для удобства
*/

/* Работа с css 
Для связи .html и .css в html-файле после title пишем <link rel="stylesheet" href="css/style.css">

html {
    box-sizing: border-box;
}
Использование более крутых моделей

*, *::after, *::before {
    box-sizing: inherit;
}
Чтобы все теги брали модель, как у родителя

Чтобы измерить размеры объекта с помощью figma можно создавать прямоугольник и смотреть его размер
Также можно искать элемент уже нужного размера и просто кликнуть по нему

Расположение
margin: 0 auto;
0 - отсутп сверху, auto - автоматически расстояние слева и справа

padding: 0 10px; 
резервируем пространство для мобильной версии, например

display: flex;
head_inner состоит из логотипа и меню, мы их разделили, чтоб шли друг за другом

justify-content: space-between;
Расстояние между разделенными элементами появилось

gap: 35px;
Задали расстояние между элементами

ul {
    list-style: None;
}
Чтобы пропали точки перед элементами списка

a {
    text-decoration: none;
}
Чтобы у ссылок пропало подчеркивание

align-items: end;
По нижней линии

line-height: 1.3;
Отношение высоты строки к размеру шрифта

html,
body {
    height: 110%;
}.wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
.main {
    flex-grow: 1;
}
Прибить footer к низу страницы

display: inline-block;
Для кнопки

Margin - это свойство, которое управляет внешними отступами элемента. Оно определяет расстояние между элементом и его соседями.
Justify-content - это свойство, которое используется в контексте flexbox для управления выравниванием дочерних элементов вдоль главной оси контейнера.
Text-align - это свойство, которое управляет выравниванием текста внутри элемента.

max-width: 430px;
width: 100%;
В случае кнопки это делали, чтобы она стала шире

Для шрифта https://fonts.google.com/selection/embed

Для слайдера https://swiperjs.com/get-started
Посмотреть через CDN
Можно посмотреть примеры в demos (наверху сайт)

https://codesandbox.io/p/sandbox/6mpl7j?file=%2Findex.html
Здесь смотрим код для слайдера пагинации

Autoplay - взяли код
Effects fade - взяли код

Для изображений пиксельных берем jpg

Чтобы заказчик мог менять изображения, пути к файлам должны быть в HTML

swiper необходимо задать высоту

background-color: rgba(21,21,21,.3);
Так задаем для затемнения. Смотрим в элементах цвет через вычисляемые

В .header-main прописали это
position: absolute;
z-index: 5;
Это сделали, чтобы приподнять элементы

left: 0;
right: 0;
Чтобы элементы растянуло 

Глобальные объекты стараемся вставить вначале

grid-template-columns: repeat(4, 1fr);
gap: 40px;
Мы создаем сетку с четырьмя колонками, каждая из которых занимает равную долю ширины доступного пространства внутри контейнера

ol - нумерованный список

text-align: center; != margin: 0 auto;
В первом случае в блоке просто выравнивается по центру, а во втором на странице по середине ставится

margin для элементов в большом элементе, а padding относительно больших

iframe не является блоком, поэтому применяем к нему display: block;

flex-wrap: wrap;
чтобы элементы могли переноситься, если им мало места

flex-basis: 460px;
Аналог ширины, только круче

.menu__list-link--active {
    color: #0066ff;
}
Прописали, чтобы цветом подсвечивалась активная страница
<a href="#" class="menu__list-link menu__list-link--active">CONTACT US</a>
Это потом добавляем

cursor: pointer;
Чтобы при наведении курсора, он превращался в руку

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    display: flex;
    justify-content: space-between;

Идентичны друг другу как будто бы

Избавляемся от пробела между картинкой и title, делая ее блочной

flex-direction: column;
Чтоб элементы были друг под другом

transition: transform .3s ease;
Добавили анимацию

background-blend-mode: multiply;
background-color: #bcbcbc;
Наложение цветов

display: inline;
В одну строку li станут 

header ul.nav li:hover {
    opacity: 0.5;
}
При наведении текст светлее становится

transition: opacity 500ms ease;
Добавили плавность высветления

overflow: hidden;
Объекты не вылезают за рамки

position: realtive ставим туда, относительно чего хотим позицию установить
position:absolute - в то место, которое позиционируем
*/

/* Адаптивность
У нас у контейнера размер 1220px. До этого размера все было хорошо
Дальше будем писать медиа-запросы

<meta name="viewport" content="width=device-width, initial-scale=1.0">
Обязательно должна быть строчка

*/