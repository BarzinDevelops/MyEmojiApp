
/* 🔥 ❤️ ✔️ 👨‍💻 🎸 🎰 🚬 🚶‍♂️ */



let myEmojis = ["👨‍💻", "🎸", "🚶‍♂️", "🎰", "🚬","☕"]
const addBeginBtn = document.getElementById("add-to-start-btn");
const addEndBtn = document.getElementById("add-to-end-btn");
const rmvBeginBtn = document.getElementById("rmv-from-start-btn");
const rmvEndBtn = document.getElementById("rmv-from-end-btn");
const emojiContainer = document.getElementById("emoji-container");
const usrInput = document.getElementById("user-input");
const msg = document.getElementById("message");
let span=''
render();
function render(){
    usrInput.value = ''
    msg.textContent = ''
    span = ''
    for(let i=0; i<myEmojis.length; i++){
        span += `<span class="emoji-span">${myEmojis[i]}</span>`
    } 
  emojiContainer.innerHTML = span;
}
addBeginBtn.addEventListener('click', ()=>{
    if(usrInput.value){
        myEmojis.unshift(usrInput.value)
        render()
    } else msg.textContent = "First enter your Emoji before adding!"
})
addEndBtn.addEventListener('click', ()=>{
    if(usrInput.value){
        myEmojis.push(usrInput.value)
        render()
    }else msg.textContent = "First enter your Emoji before adding!"
})
rmvBeginBtn.addEventListener('click', ()=>{
    myEmojis.shift()
    render()
})
rmvEndBtn.addEventListener('click', ()=>{
    myEmojis.pop()
    render()
})
