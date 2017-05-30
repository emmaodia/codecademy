if (/* Some condition */) {
    // Do something
} else if (/* Some other condition */) {
    // Do something else
} else {    // Otherwise
    // Do a third thing
}

switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}

// Complete lines 3 and 4!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false

//The logical operator NOT is written in JavaScript like this: !. It makes true expressions false, and vice-versa.

!true;   // => false
!false;  // => true
