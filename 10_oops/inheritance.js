class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){ 
        super(username)
    this.email = email
    this.password = password
    }


    addCourse(){
    console.log(`A ne ccourse was addes by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()

const tea = new User("masala chai")

tea.logMe()

console.log(chai === tea);
console.log(chai instanceof Teacher);
