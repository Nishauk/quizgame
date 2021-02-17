function myFunc(){
    alert("Are you sure you want to submit?")
    var c=0;
    var q1 = document.quiz.ques1.value;
    var q2 = document.quiz.ques2.value;
    var q3 = document.quiz.ques3.value;
    var q4 = document.quiz.ques4.value;
    var q5 = document.quiz.ques5.value;

    if( q1=="nilgiri"){c++;}

    if( q2=="palm"){c++;}

    if( q3=="jackfruit"){c++;}

    if( q4=="glorosa"){c++;}

    if( q5=="kabaddi"){c++;}
    //document.write("Your Score is ",c);

    document.getElementById("cnt").style.display = "none";
    document.getElementById("res").innerHTML=("Your Score is " + c);
}
function resetForm(){
    alert("This will clear all your answer")
    document.getElementById("quiz").reset();
}