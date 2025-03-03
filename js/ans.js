document.getElementById('answer-part').addEventListener('click', function(){
    window.location.href ="./ans.html"
});

// random color Theme code here

document.getElementById('random-color')
.addEventListener('click', function(){
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
})

// All Cards alert function is here;;;


// first card 
document.getElementById('first-card')
.addEventListener('click', function(){
    alert('cholo jai')
});
// second-card
document.getElementById('second-card')
.addEventListener('click', function(){
    alert('khela hobe')
});
// third-card
document.getElementById('third-card')
.addEventListener('click', function(){
    alert('khela hobe')
});
// fourth-card
document.getElementById('fourth-card')
.addEventListener('click', function(){
    alert('khela hobe')
});
// fifth-card
document.getElementById('fifth-card')
.addEventListener('click', function(){
    alert('khela hobe')
});
// sixth-card
document.getElementById('sixth-card')
.addEventListener('click', function(){
    alert('khela hobe')
});
