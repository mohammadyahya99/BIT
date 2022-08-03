//write your code here to make the tests pass
class Document{
constructor(nameEmployee){
this.EmployeeName=nameEmployee
}
}

class Employee{
    constructor(name){
this.name=name
    }
    work(office){
        for(let index=0;index<10;index++){
            office.documents.push(new Document(this.name))
        }
    }
}


class Manager{
    constructor(name){
        this.name=name
        this.employees=[]
            }

    hireEmployee(name){
       const newEmployee= new Employee(name)
        this.employees.push(newEmployee)
    }

    askEmployeesToWork(office){
this.employees.forEach(e=>e.work(office))


    }
}

class Cleaner{
    constructor(name){
        this.name=name
            }
    clean(){
        console.log("Clean");
    }
}

class Office{

constructor(){
this.documents=[] 
this.managers=[]
this.cleaners=[]
    }

hireCleaner(name){
    const newCleaner=new Cleaner(name)
    this.cleaners.push(newCleaner)
}
hireManager(name){
    const newManager=new Manager(name)
    this.managers.push(newManager)

} 

startWorkDay(){
    this.managers.forEach((manager) => manager.askEmployeesToWork(this));
    this.cleaners.forEach((cleaner) => cleaner.clean());
}
}
