
let hours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//create the function for random custemer number
function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
object=[];
//create the constructor for all object store cookies


let parent= document.getElementById('parent');
//create table in globel
let table=document.createElement('table');
//appeand
parent.appendChild(table);
//craet tr element in table
let headingrow=document.createElement('tr');
//append tr to table
table.appendChild(headingrow);

let thelemn=document.createElement('th');
headingrow.appendChild(thelemn);

for (let i =0;i<hours.length;i++){
    // create the first row
     thelemn=document.createElement('th');
    //appeanding
    headingrow.appendChild(thelemn);
    //give the element the contant
    thelemn.textContent=hours[i];

}

let th2Element = document.createElement('th');
headingrow.appendChild(th2Element);
th2Element.textContent = "Daily Location Total";


function cookies (name,min,max,avg)
{
    this.min=min;
    this.max=max;
    this.avg=avg;
this.name=name;

this.total=0;
randomnumber();
 this.cookiesperhour=[];

object.push(this);

}

const Seattle=new cookies('Seattle',23,65,6.3);
console.log(Seattle);

const Tokyo=new cookies('Tokyo',3,24,1.2);
console.log(Seattle);

const Dubai=new cookies('Dubai',11,38,3.7);
console.log(Seattle);

const Paris=new cookies('Paris',20,38,2.3);
console.log(Seattle);

const Lima=new cookies('Lima',2,16,4.6);
console.log(Seattle);

//creating function by using cons (methode with const)
//calculate the random custumer per hour 
cookies.prototype.calcookiesperhour=function(){
for(let i=0;i<hours.length;i++){
    //here calculate the number cookies and multiply with avg in same function 
    this.cookiesperhour.push(Math.floor(randomnumber(this.min,this.max))*this.avg);
    this.total += this.cookiesperhour[i];

    
}

}
cookies.prototype.render=function (){
    let storerow=document.createElement('tr');
    table.appendChild(storerow); 
    let datarow=document.createElement('td');
    table.appendChild(storerow);

    for(let i =0;i<hours.length;i++){
       
       
let datarow=document.createElement('td');
storerow.appendChild(datarow);
datarow.textContent=`${this.cookiesperhour[i]}`;

        
    }
    datarow=document.createElement('td');
    storerow.appendChild(datarow);
    datarow.textContent=`${this.total}`;

}






//create render function dom


//Tokyo.calcookiesperhour();
//Seattle.calcookiesperhour();
//Dubai.calcookiesperhour();
//Paris.calcookiesperhour();
//Lima.calcookiesperhour();



// renderfunction
