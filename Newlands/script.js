const textBox = document.querySelector('#textBox');
var i = 0;
function changeWhole(){
    textInBox.innerHTML = "‘I, John Newlands, recently attempted to reorganise the periodic table of elements, and I have noticed that there is an interesting rule of...'";
    document.querySelectorAll('.option').forEach(element => {
        element.style.opacity = '1';
    });
}
textBox.addEventListener('click', changeWhole());

function wrong(){
    alert("Wrong Answer!")
}
function progress(){
    alert("‘OHHHH! That rings a Bell!'");
    changeWhole2()
}
function nextStop(){
    document.querySelector('#scroll-button').style.opacity = '1';
}
function endText(){
    textInBox.innerHTML = "Newlands, suddenly rediscovering his notes in the ruins, remembering everything now, went on to finish his 1884 work, ‘On the discovery of the periodic law, and on relations among the atomic weights’";
}

function changeWhole2(){
    textInBox.innerHTML = "‘I have also noticed that there is an interesting pattern among the...'";
    document.querySelector('.option1').innerHTML = "Bread is Tasty";
    document.querySelector('.option2').innerHTML = "Elemental masses and their properties";
    document.querySelector('.option3').innerHTML = "Alchemy again?";
    document.querySelectorAll('.option').forEach(element => {
        element.style.opacity = '0';
    });
    textInBox.innerHTML = "‘Thank you very much, Mr. Whoever you are, but I really appreciate the help! I can finally work on the Octaves!(They are only good until Calcium)'";
    i++
    if(i==2){
        endText();
        nextStop();
    }
}


