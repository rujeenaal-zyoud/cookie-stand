'use strict';
const houres = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let Seattle = {
    avg: 6.3,
    total:0,
    min:23,
    max:65,
    customersperhour: [],
    cookiesperhour:[],
    name:'Seattle',
        getcustomersperhour: function () {
            for(let i;i<hours.length;i++){
                this.customersperhour.push(randomNumber(this.min,this.max));
            }
    
        },
        getcookiesperhour: function () {
            for(let i;i<hours.length;i++){
         this.cookiesperhour.push(Math.floor(this.customersperhour[i] * this.avg));
         this.total =this.cookiesperhour[i];
}
},

   
render: function () {
    let parent = document.getElementById('parent');
    
console.log(parent);
    
    let h2Element = document.createElement('h2');
    parent.appendChild(h2Element);
    h2Element.textContent = Seattle.name;
    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      
        let li1 = document.createElement('li');
        ulElement.appendChild(li1);

        li1.textContent = `${houres[i]}:${this.cookiesperhour[i]} cookies`;
    }
    let totalp=document.createElement('li');
    ulElement.appendChild(li1);
    totalp.textContent=`TOtal:${this.total}cookies`;
}



}

let Tokyo = {

    total:0,
    min:3,
    max:24,
    customersperhour: [],
    cookiesperhour:[],
    avg:1.2,
    
    name:'Tokyo',
    getcustomersperhour: function () {
        for(let i;i<hours.length;i++){
            this.customersperhour.push(randomNumber(this.min,this.max));
        }

    },
    getcookiesperhour: function () {
        for(let i;i<hours.length;i++){
     this.cookiesperhour.push(Math.floor(this.customersperhour[i] * this.avg));
     this.total+=this.cookiesperhour[i];
}
},


render: function () {
    //create parent
    let parent = document.getElementById('parent');
    
console.log(parent);
    
    let h2Element = document.createElement('h2');
    parent.appendChild(h2Element);
    h2Element.textContent = Tokyo.name;
    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      
        let li1 = document.createElement('li');
        ulElement.appendChild(li1);

        li1.textContent = `${houres[i]}:${this.cookiesperhour[i]} cookies`;
    }
    let totalp=document.createElement('li');
    ulElement.appendChild(li1);
    totalp.textContent=`TOtal:${this.total}cookies`;
}




}



let Dubai = {
avg:3.7,
total:0,
min:11,
max:48,
    name:'Dubai',
    customersperhour: [],
    cookiesperhour:[],
        getcustomersperhour: function () {
            for(let i;i<hours.length;i++){
                this.customersperhour.push(randomNumber(this.min,this.max));
            }
    
        },
        getcookiesperhour: function () {
            for(let i;i<hours.length;i++){
         this.cookiesperhour.push(Math.floor(this.customersperhour[i] * this.avg));
         this.total+=this.cookiesperhour[i];
}
},

    render: function () {
        //create parent
        let parent = document.getElementById('parent');
        
    console.log(parent);
        
        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = Dubai.name;
        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        for (let i = 0; i < hours.length; i++) {
          
            let li1 = document.createElement('li');
            ulElement.appendChild(li1);

            li1.textContent = `${houres[i]}:${this.cookiesperhour[i]} cookies`;
        }
        let totalp=document.createElement('li');
        ulElement.appendChild(li1);
        totalp.textContent=`TOtal:${this.total}cookies`;
    }


}
let Paris = {
    name:'Paris',
    min:20,
    max:38,
    avg:2.3,
    total:0,

    customersperhour: [],
    cookiesperhour:[],
        getcustomersperhour: function () {
            for(let i;i<hours.length;i++){
                this.customersperhour.push(randomNumber(this.min,this.max));
            }
    
        },
        getcookiesperhour: function () {
            for(let i;i<hours.length;i++){
         this.cookiesperhour.push(Math.floor(this.customersperhour[i] * this.avg));
    this.totalp+=this.cookiesperhour[i];
}
},

   
render: function () {
    //create parent
    let parent = document.getElementById('parent');
    
console.log(parent);
    
    let h2Element = document.createElement('h2');
    parent.appendChild(h2Element);
    h2Element.textContent = Paris.name;
    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      
        let li1 = document.createElement('li');
        ulElement.appendChild(li1);

        li1.textContent = `${houres[i]}:${this.cookiesperhour[i]} cookies`;
    }
    let totalp=document.createElement('li');
    ulElement.appendChild(li1);
    totalp.textContent=`TOtal:${this.total}cookies`;
}




}

let Lima = {
    name:'Lima',
    avg:4.6,
    min:2,
    max:16,
    totall:0,
    customersperhour: [],
    cookiesperhour:[],
        getcustomersperhour: function () {
            for(let i;i<hours.length;i++){
                this.customersperhour.push(randomNumber(this.min,this.max));
            }
    
        },
        getcookiesperhour: function () {
            for(let i;i<hours.length;i++){
         this.cookiesperhour.push(Math.floor(this.customersperhour[i] * this.avg));
         this.totall+=this.cookiesperhour[i];
}
},


render: function () {
    //create parent
    let parent = document.getElementById('parent');
    
console.log(parent);
    
    let h2Element = document.createElement('h2');
    parent.appendChild(h2Element);
    h2Element.textContent = Lima.name;
    let ulElement = document.createElement('ul');
    parent.appendChild(ulElement);
    for (let i = 0; i < hours.length; i++) {
      
        let li1 = document.createElement('li');
        ulElement.appendChild(li1);

        li1.textContent = `${houres[i]}:${this.cookiesperhour[i]} cookies`;
    }
    let totalp=document.createElement('li');
    ulElement.appendChild(li1);
    totalp.textContent=`TOtal:${this.total}cookies`;
}


}