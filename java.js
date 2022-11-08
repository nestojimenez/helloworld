//const myText = document.getElementById('my_text');
const myButton = document.getElementById("my_button");
const myLabel = document.getElementById("my_label");

//myLabel.textContent = "Cesar";

myButton.addEventListener('click', printHello)

function printHello(){
    let input = document.getElementById("my_text").value;
    if(input===""){
        alert("Please enter your name")
    }else{
        myLabel.textContent = "Hello World " + input;
    }
    
}

