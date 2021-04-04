'use strict';
let houres=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function avg (){

return Math

}

let Seattle ={
    avg:6.3,
    customersperhour :0,
    name='Seattle',
    getcustomers:function() {
        
this.customersperhour=randomNumber();
console.log(this);
},
render:function(){
    //create parent
    let parent=document.getElementById('store place');
    console.log(parent);
   //create article
   let articleElement = document.createElement('article');

   //adding artical to div
   parent.appendChild(articleElement);
// creating element
let h2Element=document.createElement('h2');
articleElement.appendChild(h2Element);
h2Element.textContent=Seattle.name;

////////
let ul2Element= document.createElement('ul');
articleElement.appendChild(ul2Element);
for(let i =0;i<hours.length;i++){
    Seattle.getcustomers(23,65);
     let li1=document.createElement('li');

   ul2Element.append(li1);
   li1.textContent=`${houres[i]}:${this.customersperhour}`
}
}
}

 

let Tokyo ={
    customersperhour :0,
name='Tokyo',
    getcustomers:function(min,max) {
this.customersperhour=randomNumber(min,max);
console.log(this);


}
}


let Dubai={
    customersperhour :0,

name='Dubai',
getcustomers:function(min,max) {
    this.customersperhour=randomNumber(min,max);
    console.log(this);
    
    
    }
}
let Paris={
    name='Paris',
    getcustomers:function(min,max) {
        this.customersperhour=randomNumber(min,max);
        console.log(this);
        
        
        }

}
let Lima ={
    name='Lima',
    getcustomers:function(min,max) {
        this.customersperhour=randomNumber(min,max);
        console.log(this);
        
        
        }


}