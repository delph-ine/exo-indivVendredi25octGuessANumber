//exo indiv 02_guess_a_number
//Créer une fonction qui demande un nombre à l’utilisateur 
//à l’aide d’un prompteur


//1.variable pour stoker la reponse utilisateur

function one()
{
     const givenNumber= prompt("taper votre numero");

//     //pour apparaitre dans la console
     console.log(givenNumber);
//     //retourne le nombre pour l'utiliser ensuite
     return givenNumber;
 }
// //appel la fonction
 one();

// //2.creer fonction qui prend en parametre givennumber
// //et l'appeller didIWin
 function didIWin(givenNumber)
 {
     const targetNumber= 22;

     if (givenNumber<targetNumber)
   {
     prompt("le nombre est plus grand");
   } 

   else if (givenNumber> targetNumber) 
   {
     prompt("le nombre est plus petit");
   }
   else 
   {
     alert("Bravo ! Vous avez deviné le nombre", 22);
   }
 }
// //appel de la fonction
 didIWin()




// //pour gerer les appels de fonctions 
// //et la transmission de la variable d'une fonction 
// //à l'autre
// //function gamePlay()

// //prompt()

//{   var number;

   // while(isNaN(number){ 
    //number = parseInt(prompt(22));
    //}

   // return Number;
//}


