const textBox = document.querySelector('#textBox');
var i = 0;

function changeWhole(){
    textInBox.innerHTML = "‘What did Mendeleev create his periodic table based on?'";
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
    textInBox.innerHTML = "Mendeleev Wakes up, furious. 'Who disturbed my sleep? I was so close... Oh what's that written there? *Reads* OH, THIS IS IT, DIVINE INTERVENTION, I HAVE FOUND IT!'";
}

function changeWhole2(){
    textInBox.innerHTML = "‘What did Mendeleev do to incorporate future discoveries?'";
    document.querySelector('.option1').innerHTML = "Filled his periodic table?";
    document.querySelector('.option2').innerHTML = "Discovered them himself?";
    document.querySelector('.option3').innerHTML = "Left gaps?";
    document.querySelectorAll('.option').forEach(element => {
        element.style.opacity = '0';
    });
    textInBox.innerHTML = "‘You hear grumbling in the other room, Mendeleev is furious! Better act quick!'";
    i++
    if(i==2){
        nextStop();
        endText();
    }
}


