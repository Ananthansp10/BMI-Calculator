function calculateBmi(){
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let gender=document.getElementById("gender").value
    let weight=document.getElementById("weight").value
    let height=document.getElementById("height").value

    height=height/100;
    let BMI=weight/(height*2)
    console.log(BMI)
    if(BMI<18.5){
        document.getElementById("res").innerText=name + " you are Under weight";
        document.getElementById("res").style.color='black';
    }
    else if(BMI>=18.5 && BMI<24.9){
        document.getElementById("res").innerText=name + " you are Normal weight";
        document.getElementById("res").style.color='blue';
    }
    else if(BMI>=25 && BMI<29.9){
        document.getElementById("res").innerText=name + " you are Over weight";
        document.getElementById("res").style.color='orange';
    }
    else{
        document.getElementById("res").innerText=name + " you are Obesity";
        document.getElementById("res").style.color='red';
    }
}