const textArea = document.querySelector('#textarea');
const countBtn = document.querySelector('.countBtn');
const output = document.querySelector('.output');

countBtn.addEventListener('click',() => {
    if(textArea.value === ''){
        output.innerHTML = "Please Enter Some Text";
        return;
    }else{
        let val = textArea.value;
        let count = 0;

        console.log(val.length);
        

        for(let i = 0; i < val.length; i++){
            if(val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u"){
                count++;
            }
        }
        output.innerHTML = `The number of vowels in your text are ${count}`;
    }
})