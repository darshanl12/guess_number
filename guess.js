// let inpt = document.getElementById('input');
// let btnn = document.getElementById('btn');
// let win=50;



// btnn.addEventListener('click',()=>{

//     let num = inpt.value;
//     campare(num);
    

// })

// function campare(num){
//     if(num>win){
//         alert("number is greter----you looosed");
//     }else if(num<win){
//         alert("number is smaller----you looosed");


//     }else{
//         alert("you won");
//     }
// }



//or 

let inpt = document.getElementById('input');
let btnn = document.getElementById('btn');
let win=50;



btnn.addEventListener('click',()=>{

    let num = inpt.value;
    
    if(num>win){
        alert("number is greter----you looosed");
    }else if(num<win){
        alert("number is smaller----you looosed");


    }else{
        alert("you won");
    }
    

})
