const user = {
    a:["sanjarbek","qobulov"],
    b:2,
    showConsole(){
        console.log(this.a);
        return this;
    },
    bigLetters(){
        for(let i = 0; i< this.a.length; i++){
            this.a[i] = this.a[i].toUpperCase();
        }
        this.showConsole();
        return this;
    },
    smallLetters(){
        for(let i = 0; i<this.a.length; i++)
        {
            this.a[i] = this.a[i].toLowerCase();
        }
        this.showConsole();
        return this;
    },
};


user.showConsole().bigLetters().smallLetters();