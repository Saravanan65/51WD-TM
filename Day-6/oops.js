class person {
    constructor (personName, personPlace, personQualification){
        this.name = personName;
        this.place = personPlace;
        this.qualification =personQualification;
    }
    talk(){
        console.log(this.name, "is talking");
    }
    place1(){
       console.log(`${this.name} is from ${this.place}`);
    }
  
    }
 let person1 = new person ("Saravanan", "Pondicherry","Engenier")

 person1.talk(); 
person1.place1();

 