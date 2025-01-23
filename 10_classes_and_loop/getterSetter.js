class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
    get password(){
        return `${this._password.toUpperCase()}hitesh`
    }

    set password(value) {
        this._password = value //_password - new variable
    }
}
// when we intialize variable in class that time defaultly getter and setter function create of variable name
const hitesh = new User("H@hitesh.ai", "abc")

console.log(hitesh.password)
console.log(hitesh.email)