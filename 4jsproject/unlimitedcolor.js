hex = '0123456789ABCDEF'
let color=''
let interval

function newColor()
{
  color = ''
  for(let i = 0; i<6; i++)
    {
      color+= hex[parseInt(Math.random()*16)]
    }
    console.log(color)
}

function start()
{
    interval = setInterval(()=>{
    newColor()
    document.body.style.backgroundColor = `#${color}`
  },1000)
}

document.querySelector('#start').addEventListener('click',()=>{
  start()
})

document.querySelector('#stop').addEventListener('click',()=>
{
  clearInterval(interval)
  document.body.style.backgroundColor = `#212121`
})