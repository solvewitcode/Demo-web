const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

function changeBackground(color)
{
  body.style.backgroundColor = (color)
}

buttons.forEach((button)=>(
  button.addEventListener('click',()=>{
    changeBackground(button.id)
    console.log(button.id)
  })
))
