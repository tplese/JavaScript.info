function sayHiBye(firstName, lastName) {
    //console.log("test1");
    // helper nested function to use below
    function getFullName() {
        //console.log("test2");
      return firstName + " " + lastName;
    }
    
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
  }
  
  sayHiBye("Ned", "Flanders").getFullName();