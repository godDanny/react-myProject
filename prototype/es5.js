// 新建构造Father函数
function Father(name){
    this.name=name
}

// 在Father的原型属性上添加sayHello(),这个方法叫实例方法，只能通过new出来的对象来调用
Father.prototype.sayHello=function(){
    console.log('hello'+this.name)
}

//静态方法：只能通过构造函数去调用的方法叫静态方法
Father.sayHi=function(){
console.log('hi')
}

let baba=new Fatheer('马云')
baba.sayHello()  //调用实例方法
Father.sayHi()  //调用静态方法


// 创建一个Son构造函数，让Son构造函数new出来的实例也能够调用Father中的实例方法
function Son(name){
this.name=name
}
// 改变Son的原型指向，让它指向baba
Son.prototype=baba
let erzi=new Son('马云云')
erzi.sayHello()
