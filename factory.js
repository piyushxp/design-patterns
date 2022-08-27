function Developer(name){
  this.name = name;
  this.type = 'Developer'
  return this
}

function Designer(name){
  this.name = name;
  this.type = 'Designer'
  return this
}

function Tech(){
  this.create = (name,type) => {
   switch(type){
    case 1:
    return new Developer(name)
    case 2 :
    return new Designer(name)
    default:
    return {}
  }
  }
}

function Say(){
  let str= `This is ${this.name} , I work as ${this.type}`
  console.log(str)
}

const Factory = new Tech();
const emp = []

emp.push(Factory.create('Piyush',1))
emp.push(Factory.create('Ayush',2))
emp.push(Factory.create('Amir',2))
emp.push(Factory.create('Roku',1))

console.log(emp)

emp.forEach(emp => Say.call(emp))

