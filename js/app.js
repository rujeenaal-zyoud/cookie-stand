'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//create the function for random custemer number
function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let stores = [];
//create the constructor for all object store cookies

function Cookie(name, min, max, avg) {
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.name = name;

    this.total = 0;
    // randomnumber();
    this.cookiesperhour = [];

    stores.push(this);

}
// another way of solving total of toals
// let globalTotal=0;

//calculate the random custumer per hour
Cookie.prototype.calcCustomerPerHour = function () {
    return randomnumber(this.min, this.max);
}

//  and the average per customer for each hour
Cookie.prototype.calcookiesperhour = function () {
    for (let i = 0; i < hours.length; i++) {
        //here calculate the number cookies and multiply with avg in same function 
        this.cookiesperhour.push(Math.floor(this.calcCustomerPerHour() * this.avg));
        this.total += this.cookiesperhour[i];
        // globalTotal+=this.cookiesperhour[i];
    }
}

const Seattle = new Cookie('Seattle', 23, 65, 6.3);
// console.log(Seattle);

const Tokyo = new Cookie('Tokyo', 3, 24, 1.2);
// console.log(Tokyo);

const Dubai = new Cookie('Dubai', 11, 38, 3.7);
// console.log(Dubai);

const Paris = new Cookie('Paris', 20, 38, 2.3);
// console.log(Paris);

const Lima = new Cookie('Lima', 2, 16, 4.6);
// console.log(Lima);

console.log('stores', stores);




let parent = document.getElementById('parent');
//create table in globel
let table = document.createElement('table');
//appeand
parent.appendChild(table);


// making header function

function makingHeader() {
    //create tr element in table
    let headingrow = document.createElement('tr');
    //append tr to table
    table.appendChild(headingrow);


    let firstTh = document.createElement('th');
    headingrow.appendChild(firstTh);
    firstTh.textContent = 'Name';

    for (let i = 0; i < hours.length; i++) {
        // create the first row
        let hoursTh = document.createElement('th');
        //appeanding
        headingrow.appendChild(hoursTh);
        //give the element the contant
        hoursTh.textContent = hours[i];

    }

    let finalTh = document.createElement('th');
    headingrow.appendChild(finalTh);
    finalTh.textContent = "Daily Location Total";


}






//creating function by using cons (methode with const)

Cookie.prototype.render = function () {
    // make a store row 
    let storeRow = document.createElement('tr');
    // append to the table
    table.appendChild(storeRow);

    // first td element
    let nameTd = document.createElement('td');
    // append to the store row
    storeRow.appendChild(nameTd);
    // give text content
    nameTd.textContent = this.name;


    for (let i = 0; i < hours.length; i++) {
        // make a td element for every hour
        let cookiesTd = document.createElement('td');
        // append to store row
        storeRow.appendChild(cookiesTd);
        // give text content of the avarage cookies per hour
        cookiesTd.textContent = this.cookiesperhour[i];
    }

    // made total td for every shop
    let totalTd = document.createElement('td');
    // append total to the store row
    storeRow.appendChild(totalTd);
    // give text content
    totalTd.textContent = this.total;

}



// footer function
function makingFooter() {
    // making footer row
    let footerRow = document.createElement('tr');

    // append footer row to the table
    table.appendChild(footerRow);

    // make first th for footer

    let firstTh = document.createElement('th');

    // append th to the footer row
    footerRow.appendChild(firstTh);

    // give text content
    firstTh.textContent = 'Totals';

    let totalForEachHour;
    let megaTotal = 0;
    // making the totals
    for (let i = 0; i < hours.length; i++) {
        totalForEachHour = 0;
        for (let j = 0; j < stores.length; j++) {
            // console.log(hours[i]);
            // console.log(stores[j]);
            totalForEachHour += stores[j].cookiesperhour[i];
            megaTotal += stores[j].cookiesperhour[i];

        }
        console.log(totalForEachHour);
        // create final th
        let footerTh = document.createElement('th');

        // append to footer row
        footerRow.appendChild(footerTh);

        // give text conent
        footerTh.textContent = totalForEachHour;

    }

    // make final th total of totals
    let totalTh = document.createElement('th');

    // append to the footer row
    footerRow.appendChild(totalTh);

    // give text content:
    totalTh.textContent = megaTotal;

    // if you want to solve it with global total
    // totalTh.textContent=globalTotal;




}
// here get the element by id that in HTML for form tage
let form = document.getElementById('form');
console.log(form);
//add the event  listener into form
form.addEventListener('submit', newstore);

//Know create a function  submitter that call and run when event submit
function newstore(event) {
    // prevent the default behaviour of refreshing the page
    event.preventDefault();
    console.log(event);
    // to show the data that enter in consol
    let newplace = event.target.StoreCountery.value;
    console.log(newplace);
    let min = event.target.MinCustmerPerHour.value;
    console.log(min);
    let max = event.target.MixCustmerPerHour.value;
    console.log(max);
    let avg = event.target.AvgSallesPerHour.value;
    console.log(avg);


    const addedstore = new Cookie(newplace, min, max, avg);
    console.log(addedstore);

    let container = document.getElementById('add');

    container.textContent = '';

    for (let i = 0; i < stores.length; i++) {
        stores[i].calcookiesperhour();
        

    }
    addedstore.render();
   // makingFooter();

}


makingHeader();

for (let i = 0; i < stores.length; i++) {
    stores[i].calcookiesperhour();
    stores[i].render();

}
makingFooter();






