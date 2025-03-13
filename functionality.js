let s = document.querySelector("#start");
let b = document.querySelectorAll(".buttons");

for(buttons of b){
    buttons.disabled = true;

    console.log("Buttons disabled");
}

const enableButtons = () =>{
    for(buttons of b){
        buttons.disabled = false;

        console.log("Buttons enabled");
    }
}

let d = document.querySelector("#display");

d.disabled = true;
s.disabled = false;

s.addEventListener("click", () => {
    enableButtons();
    s.style.backgroundColor= "coral";

    d.style.backgroundColor= "rgb(87, 85, 85)";
});

let ans = "";
let a ="";

let keys = Array.from(b);

keys.forEach(button => {
    button.addEventListener("click", (i) => {

        if(i.target.innerText == "AC"){
            ans = "";
            d.value = ans;
        }

        else if(i.target.innerText == "C"){
            let l = ans.length;
            ans = ans.substring(0, l-1);
            d.value = ans;
        }

        else if(i.target.innerText == "Ans"){
            ans = ans + a;
            d.value = ans;
        }

        else if(i.target.innerText == "="){
            try {
                ans = eval(ans);
                d.value = ans;
            } catch (error) {
                d.value = "Syntax Error";
            }

            a = ans;
            ans ="";
        }

        else{
            ans = ans + i.target.innerText;
            d.value = ans;
        }
    });
});