class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.lucoins=0;
    }
        login(){
            console.log(+ this.name + " has logged in. ");
            return this;
    }
        logout(){
            console.log(+ this.name + " has logged out. ");
            return this;
    }
}
class Moderator extends User {
    constructor(name,age,email,role){
        super(name,age,email);
        this.role=role;
    }
        addCoins(){
            this.lucoins++;
            console.log(+this.name + " has " +this.luCoins +  " coins.");
        return this;
    }
    removeCoins(){
        this.lucoins--;
        console.log(+this.name + " has " +this.luCoins +  " coins.");
    return this;

    }
}
class Admin extends Moderator{
   addcourse(user,course){
    user.courses.push(course);
    console.log(user);
   }
   removecourse(user,course){
       user.courses.filter(u=>
        {
            return u.course != user.course;
       })
   }
}