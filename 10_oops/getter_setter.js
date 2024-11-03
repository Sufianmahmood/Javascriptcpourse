class User {
    constructor(email,  password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value
    }
    get password(){
        return `${this._password}sufian`
    }

    set password(value){
        this._password= value
    }
}

const sufian = new User("sufiam2gamil.com", "123")
console.log(sufian.email)