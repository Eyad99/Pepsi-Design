function imgslider (anything){
    document.querySelector('.pepsi').src = anything;
}
function changebecolor(color){
    document.querySelector('.sec').style.background = color;
}
function menuToogle(){
    const toogleMenu = document.querySelector('.toogleMenu');
    const navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    toogleMenu.classList.toggle('active');
}