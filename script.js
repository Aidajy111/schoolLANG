const signUp = document.getElementById('signbtn')
const popUp = document.getElementById('popUP')
const popUpClouse = document.getElementById('pop_up_clouse')


signUp.addEventListener('click', function(e){
    e.preventDefault()  //для кнопок с сылок чтобы отключить не нужные свойттва с сылки
    popUp.classList.add('active')

});

popUpClouse.addEventListener('click',()=>{
    popUp.classList.remove('active')

})