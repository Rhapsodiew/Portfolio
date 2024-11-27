function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [
"My name is Theo, I'm 20 years old and I'm a student at ETNA.",
"I'm interested in programming and I'm learning how to code with React.",
"I speak mostly french and i'm quite fluent in english.",
]
const el = document.getElementById("typewriter")
let timer = 50;
let index = 0;
const write = async () => {
while (true) {
    let word = phrases[index];

    for (let i = 0; i< word.length; i++){
    el.innerText = word.substring(0,i+1)
    await sleep(timer);
    }

    await sleep(timer*20)

    for (let i = word.length; i> 0; i--){
    el.innerText = word.substring(0,i-1)
    await sleep(timer);
    }
    await sleep(timer * 10);

    if (index === phrases.length -1) {
    index = 0 
    } else {
    index++
    }
}
}
export default write