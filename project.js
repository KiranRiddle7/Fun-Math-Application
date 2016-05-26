//  intially score will be zero
  score=0;
//functions for multiple pages to show or hide
  function show(shown, hidden) {
        document.getElementById(shown).style.display='block';
        document.getElementById(hidden).style.display='none';
        return false;
   }
// functions used when we click on correct answer alert is popped up and k variable is taken so that when the correct answer is clicked it navigates to next page.
  function correctanswer(x) {
// k value is x and x is a number. When alert of correct answer pop's up then score gets incremented.
       k=x;
  	   alert("Correct Answer");
  	   score++;
       // if k=1 then when we click on a correct answer next page(addeasy2) is shown.
       if(k==1) {
  	      return show('addeasy2','addeasy1');
      }
      // if k=2 then when we click on a correct answer next page(addeasy3) is shown.
      if (k==2) {
      	  return show('addeasy3','addeasy2');
      }
      // if k=3 then when we click on a correct answer next page(addeasy4) is shown.
      if (k==3) {
      	  return show('addeasy4','addeasy3');
      }
      // if k=4 then when we click on a correct answer next page(addeasy5) is shown.
      if (k==4) {
      	  return show('addeasy5','addeasy4');
      }
      // if k=5 then when we click on a correct answer next page(Final) is shown.
      if (k==5) {
      	  return show('Final','addeasy5');
      }
      // if k=6 then when we click on a correct answer next page(subeasy2) is shown.
      if (k==6) {
      	  return show('subeasy2','subeasy1');
      }
      // if k=6 then when we click on a correct answer next page(subeasy3) is shown.
      if (k==7) {
      	  return show('subeasy3','subeasy2');
      }
      // if k=7 then when we click on a correct answer next page(subeasy4) is shown.
      if (k==8) {
      	  return show('subeasy4','subeasy3');
      }
      // if k=9 then when we click on a correct answer next page(subeasy5) is shown.
      if (k==9) {
      	  return show('subeasy5','subeasy4');
      }
      // if k=10 then when we click on a correct answer next page(Final) is shown.
      if (k==10) {
          return show('Final','subeasy5');
      }
      // if k=11 then when we click on a correct answer next page(addmedium2) is shown.
      if (k==11) {
          return show('addmedium2','addmedium1');
      }
      // if k=12 then when we click on a correct answer next page(addmedium3) is shown.
      if (k==12) {
          return show('addmedium3','addmedium2');
      }
      // if k=13 then when we click on a correct answer next page(addmedium4) is shown.
      if (k==13) {
          return show('addmedium4','addmedium3');
      }
      // if k=14 then when we click on a correct answer next page(addmedium5) is shown.
      if (k==14) {
          return show('addmedium5','addmedium4');
      }
      // if k=15 then when we click on a correct answer next page (Final) is shown.
      if (k==15) {
          return show('Final','addmedium5');
      }
      // if k=16 then when we click on a correct answer next page(submedium2) is shown.
      if (k==16) {
          return show('submedium2','submedium1');
      }
      // if k=17 then when we click on a correct answer next page(submedium3) is shown.
      if (k==17) {
          return show('submedium3','submedium2');
      }
      // if k=18 then when we click on a correct answer next page(submedium4) is shown.
      if (k==18) {
          return show('submedium4','submedium3');
      }
      // if k=19 then when we click on a correct answer next page (submedium5)is shown.
      if (k==19) {
          return show('submedium5','submedium4');
      }
      // if k=20 then when we click on a correct answer next page (Final) is shown.
      if (k==20) {
          return show('Final','submedium5');
      }
  }
// function to display a wrong answer alert. when we click on a wrong answer alert pop up displaying it is a wrong answer and score gets decremented.
  function  wronganswer() {

     alert("Wrong Answer");
  	   score--;
  }
// function to display score. when we click on score, score gets displayed.
  function scorefn() {

      alert("Your Score Is  " +score);

  }

// function to reset the score and returns from final page to the page where we can select the options of addition and subtraction.
  function reset() {
      score=0;
      return show('play','Final');
  }
