const myParagraph = document.createElement("p");
myParagraph.innerHTML = "Odstavec, který mění barvu dle přepínání třídy.";

const myButton = document.createElement("button");
myButton.innerHTML = "Přepínej";

let prepinatko = true;

const myApp = document.querySelector(".myApp");
myApp.append(myButton, myParagraph);


myParagraph.classList.add('modra');

myButton.addEventListener("click", () => {
    if (prepinatko) {
        myParagraph.classList.add('cervena');
        myParagraph.classList.remove('modra');
        prepinatko = false;
    } else {
        myParagraph.classList.add('modra');
        myParagraph.classList.remove('cervena');
        prepinatko = true;
    }
    });
    
