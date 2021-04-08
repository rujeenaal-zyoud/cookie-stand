'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let stores = [];

//create the function for random custemer number
function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// create object 
const Seattle={
    name :'Seattle',
    Min:23,
    Max:65,
    avg:6.3,
    customerPerHour:[],
    total1=0,

     calCustomersPerHour:function () {
        for (let i=0;i<hours.length;i++){
            this.customerPerHour.push(RandomNumber(this.min,this.max));
        }
    },
    calCookiesPerHour:function(){
    for(let i=0;i<hours.length;i++){
        
        this.calCookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avg))
    }
    } ,   
}
        
    const Dubai={
        name :'Seattle',
        Min:11,
        Max:38	,
        avg:3.7,
        customerPerHour:[],
        total1=0,
    
         calCustomersPerHour:function () {
            for (let i=0;i<hours.length;i++){
                this.customerPerHour.push(RandomNumber(this.min,this.max));
            }
        },
        calCookiesPerHour:function(){
        for(let i=0;i<hours.length;i++){
            
            this.calCookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avg))
        }
        } , 
    }

    const Tokyo={
        name : 'Tokyo',
   Min=3,
   Max=24,
   avg=1.2,
   customerPerHour:[],
    total1=0,
       //function from samer 
       calCustomersPerHour:function () {
        for (let i=0;i<hours.length;i++){
            this.customerPerHour.push(RandomNumber(this.min,this.max));
        }
    },
    calCookiesPerHour:function(){
    for(let i=0;i<hours.length;i++){
        
        this.calCookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avg))
    }
    } ,
}
      
    const Paris={
        name : 'Paris',
   Min=20,
   Max=38,
   customerPerHour:[],
    total1=0,
    avg=2.3,
       //function from samer 
       calCustomersPerHour:function () {
        for (let i=0;i<hours.length;i++){
            this.customerPerHour.push(RandomNumber(this.min,this.max));
        }
    },
    calCookiesPerHour:function(){
    for(let i=0;i<hours.length;i++){
        
        this.calCookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avg))
    }
    
},
     render:function () {
            const container = document.getElementById('parent');
            console.log()
            const articleEl = document.createElement('article');
            container.appendChild(articleEl);
            const h2El = document.createElement('h2');
            articleEl.appendChild(h2El);
            h2El.textContent = this.name;
        
            const ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl);
            for (let i =0 ;i <hours.length;i++){
                let liele=Document.createElement('li');
                ulE1.appendChild(liele);
                liele.textContent=`${hours[i]}: ${this.cookiesPerHour[i]}`;
            }

let total=document.createElement('li');
ulE1.appendChild(total);
totalli.textContent=`TOTAL: ${this.total1}`;
        }
    }




Seattle.calCustomersPerHour();

Seattle.calCookiesPerHour();
Seattle.render();

Tokyo.calCustomersPerHour();

Tokyo.calCookiesPerHour();
Tokyo.render();


Paris.calCustomersPerHour();

Paris.calCookiesPerHour();
Paris.render();



Lima.calCustomersPerHour();

Lima.calCookiesPerHour();
Lima.render();


