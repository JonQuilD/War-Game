

const theUsersTurn = [];
const theDealersTurn = [];

const userScore = 26;
const dealerScore = 26;
// const userCard = []
// const dealerCard = []

const SUITS = ["♠", "♣", "♥", "♦"]
const cardValue = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }


function warCards() {
    // event.preventDefault()
    let userCard = Math.floor(Math.random() * 5 + 2 );
    theUsersTurn.push(userCard)
    console.log(theUsersTurn)
    // display user cards
    
    let userCardOutput = " ";
    if(userCard === 11) {
         userCardOutput= "J";
    } else {
        if(userCard === 12) {
           userCardOutput= "Q";
        } else {
            if (userCard === 13) {
              userCardOutput = "K"
            } else {
                if(userCard === 14) {
                    userCardOutput = "A";
                } 
                
            }
        }
    }
    document.getElementById("userCardNumber").innerHTML = userCard;

   let dealerCard = Math.floor(Math.random() * 5 + 2);
    theDealersTurn.push(dealerCard)
    console.log(theDealersTurn)

    let dealerCardOutput = "";
    if(dealerCard=== 10) {
        dealerCardOutput = "J"

    } else {
        if(dealerCard === 12) {
            dealerCardOutput = "Q";
        } else {
            if (dealerCard === 13) {
                dealerCardOutput = "K"
            } else {
                if(dealerCard === 14) {
                    dealerCardOutput = "A"
                } 
                
            }
        }
    }



    //display dealer card
    document.getElementById("dealerCardNumber").innerHTML = dealerCard;



    // Chars :
    const userChar = Math.floor(Math.random() * 4 + 1);
    console.log("userChar" + userChar)
    // switch : evaluates one values against a list of values, and returns the result corresponding to the first matching value.
    // switch (userChar) {
    //     case 1:
    //         userChar = "&heartsuit;";
    //         document.getElementById("userChar").style.color = "black";
           
    //     //
       
    //     case 2:
    //         userChar = "&spadesuit;";
    //         document.getElementById("userChar").style.color = "red";
    //     //
        
    //     case 3:
    //         userChar = "diamondsuit;";
    //         document.getElementById("userChar").style.color = "red";
    //     //
        
    //     case 4:
    //         userChar = "clubsuit;";
    //         document.getElementById("userChar").style.color = "black";
    //     //
       
    // }
    // document.getElementById("userChar").innerHTML = userChar;
    // document.getElementById("userBigChar").innerHTML = userChar;


  let dealerChar = Math.floor(Math.random() * 4 + 1);
    console.log("dealerchar" + dealerChar)
    // switch : evaluates one values against a list of values, and returns the result corresponding to the first matching value.
    switch (dealerChar) {
        case 1:
            dealerChar = "&heartsuit";
            document.getElementById("dealerChar").style.color = "black";
            document.getElementById("dealerBigChar").style.color = "black";
        //
       
        case 2:
            dealerChar = "&spadesuit";
            document.getElementById("dealerChar").style.color = "red";
            document.getElementById("dealerBigChar").style.color = "red";
        //
        
        case 3:
            dealerChar = "&diamondsuit";
            document.getElementById("dealerChar").style.color = "black";
            document.getElementById("dealerBigChar").style.color = "black";
        //
        
        case 4:
            dealerChar = "&clubsuit";
            document.getElementById("dealerChar").style.color = "red";
            document.getElementById("dealerBigChar").style.color = "black";
        //
       
    }
    // document.getElementById("dealerChar").innerHTML = dealerChar;
    // document.getElementById("dealerBigChar").innerHTML = dealerChar;

//scores
let pointer = document.querySelector("#pointer")
console.log(pointer)

    if (userCard === dealerCard){
        // ifequal();
        pointer.innerText = "="
    } else {
    if (userCard > dealerCard) {
        userCard++ ;
        dealerCard--;
        pointer.innerText = ">" ;
    } else {
        if(dealerCard > userCard) {
            dealerCard++;
            userCard--;
           pointer.innerText = "<";
        }
    }
}


// display scores
document.getElementById("dealerScore").innerHTML = dealerScore;
document.getElementById("userScore").innerHTML = userScore;



console.log("user score: " + userScore);
console.log("dealer score: " + dealerScore);
// checkingScores()
// display(dealerCard,userCard)

//turns
let dealerTurns = "";

for(i = 0; i < theDealersTurn.length; i++) {
    dealerTurns = dealerTurns + theDealersTurn[i] + " ";
    document.getElementById("dealerTurns").innerHTML = theDealersTurn
}

let userTurns = "";

for(j = 0; j < theUsersTurn.length; j++) {
    userTurns = userTurns + theUsersTurn[j] + ", ";
    document.getElementById("userTurns").innerHTML = theUsersTurn
}

checkingScores();
// display(dealerCardNumber, userCardNumber);
}


function ifequal() {
    // event.preventDefault()
    const userCard = Math.floor(Math.random() * 13 + 2 );
    theUsersTurn.push(userCard)
    console.log(userCard)

    const dealerCard = Math.floor(Math.random() * 13 + 2);
    theDealersTurn.push(dealerCard)
    console.log(dealerCard)

    if(userCard === dealerCard) {
        ifequal();
        document.getElementById("pointer").innerHTML = "=";
    } else {
        if(userCard > dealerCard) {
            userScore = userScore + 4;
            dealerScore = dealerScore - 4; 
            document.getElementById("pointer").innerHTML = ">";
        } else {
            if(dealerScore > userScore) {
                userScore = userScore + 4;
                dealerScore = dealerScore - 4; 
                document.getElementById("pointer").innerHTML = "<";
            }
        }
    }


}
    function checkingScores() {
        if(userScore <= 1) {
            userScore = 0;
            alert("The Dealer Wins!!!");
            document.getElementById("mainbtn").disable = true;
        } else {
            if(dealerScore <= 1) {
                userScore = 0;
                alert("You Win!!");
                document.getElementById("mainbtn").disable = true;
            }
        }
        
    }
// display();
    function display() {
        document.getElementById("dealerScore").innerHTML = dealerScore;
        document.getElementById("userScore").innerHTML = userScore;

        document.getElementById("dealerCardNumber").innerHTML = dealerCard;
        document.getElementById("userCardNumber").innerHTML = userCard;
    }





