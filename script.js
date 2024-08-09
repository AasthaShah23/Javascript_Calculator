let btns = document.querySelectorAll("button");
let nums = '';

Array.from(btns).map((btn) => {
    btn.addEventListener("click", () => {

        if(btn.innerHTML == "AC"){
            nums = '';
            document.querySelector("input").value = nums;
        }
        
        else if(btn.innerHTML == "DE"){
            let n = nums.split("");
            n.pop();
            //join is used to convert an arr into str & inside curve brackets we write separater otherwise by default ',' is used in str
            let final = n.join("");  
            document.querySelector("input").value = final;
            nums = final;
        }

        else if(btn.innerHTML == "="){
            nums = eval(nums);
            document.querySelector("input").value = nums;
        }

        else{
            let x = btn.innerHTML;
            nums += x;
            document.querySelector("input").value = nums;
        }
        }); 
})