'use strict';
let houres = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let Seattle = {
    avg: 6.3,
    customersperhour: 0,
    name='Seattle',
        getcustomers: function () {
        this.customersperhour = randomNumber();
        console.log(this);
        },
        simulated: function () {
            return Math.floor(this.randomNumber() * this.avg);
    
},
    render: function () {
        //create parent
        let parent = document.getElementById('store place');
        console.log(parent);
        //create article
        let articleElement = document.createElement('article');

        //adding artical to div
        parent.appendChild(articleElement);
        // creating element
        let h2Element = document.createElement('h2');
        articleElement.appendChild(h2Element);
        h2Element.textContent = Seattle.name;

        ////////
        let ul2Element = document.createElement('ul');
        articleElement.appendChild(ul2Element);
        for (let i = 0; i < hours.length; i++) {
            Seattle.getcustomers(23, 65);
            let li1 = document.createElement('li');

            ul2Element.append(li1);
            li1.textContent = `${houres[i]}:${this.customersperhour}`;
        }
    }
}



let Tokyo = {
    avg=1.2,
    customersperhour: 0,
    name='Tokyo',
    getcustomers: function (min, max) {
        this.customersperhour = randomNumber(min, max);
        console.log(this);
    },
    simulated: function () {
        return Math.floor(this.randomNumber() * this.avg);

},
render: function () {
    //create parent
    let parent = document.getElementById('store place');
    console.log(parent);
    //create article
    let articleElement = document.createElement('article');

    //adding artical to div
    parent.appendChild(articleElement);
    // creating element
    let h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = Tokyo.name;

    ////////
    let ul2Element = document.createElement('ul');
    articleElement.appendChild(ul2Element);
    for (let i = 0; i < hours.length; i++) {
        Seattle.getcustomers(3,24);
        let li1 = document.createElement('li');

        ul2Element.append(li1);
        li1.textContent = `${houres[i]}:${this.customersperhour}`;
    }

}  
}


let Dubai = {
    customersperhour: 0,
avg=3.7,
    name='Dubai',
    getcustomers: function (min, max) {
        this.customersperhour = randomNumber(min, max);
        console.log(this);


    },
    simulated: function () {
        return Math.floor(this.randomNumber() * this.avg);},

    render: function () {
        //create parent
        let parent = document.getElementById('store place');
        console.log(parent);
        //create article
        let articleElement = document.createElement('article');
    
        //adding artical to div
        parent.appendChild(articleElement);
        // creating element
        let h2Element = document.createElement('h2');
        articleElement.appendChild(h2Element);
        h2Element.textContent = Dubai.name;
    
        ////////
        let ul2Element = document.createElement('ul');
        articleElement.appendChild(ul2Element);
        for (let i = 0; i < hours.length; i++) {
            Seattle.getcustomers(11,48);
            let li1 = document.createElement('li');
    
            ul2Element.append(li1);
            li1.textContent = `${houres[i]}:${this.customersperhour}`;
        }
    }
}
let Paris = {
    name='Paris',
    avg=2.3,
    getcustomers: function (min, max) {
        this.customersperhour = randomNumber(min, max);
        console.log(this);
    },
    
    simulated: function () {
        return Math.floor(this.randomNumber() * this.avg);},

        render: function () {
            //create parent
            let parent = document.getElementById('store place');
            console.log(parent);
            //create article
            let articleElement = document.createElement('article');
        
            //adding artical to div
            parent.appendChild(articleElement);
            // creating element
            let h2Element = document.createElement('h2');
            articleElement.appendChild(h2Element);
            h2Element.textContent = Paris.name;
        
            ////////
            let ul2Element = document.createElement('ul');
            articleElement.appendChild(ul2Element);
            for (let i = 0; i < hours.length; i++) {
                Seattle.getcustomers(20,38);
                let li1 = document.createElement('li');
        
                ul2Element.append(li1);
                li1.textContent = `${houres[i]}:${this.customersperhour}`;
            }
        }
    }


let Lima = {
    name='Lima',
    avg=4.6,
    getcustomers: function (min, max) {
        this.customersperhour = randomNumber(min, max);
        console.log(this);


    },
    simulated: function () {
        return Math.floor(this.randomNumber() * this.avg);},

    render: function () {
        //create parent
        let parent = document.getElementById('store place');
        console.log(parent);
        //create article
        let articleElement = document.createElement('article');
    
        //adding artical to div
        parent.appendChild(articleElement);
        // creating element
        let h2Element = document.createElement('h2');
        articleElement.appendChild(h2Element);
        h2Element.textContent = Lima.name;
    
        ////////
        let ul2Element = document.createElement('ul');
        articleElement.appendChild(ul2Element);
        for (let i = 0; i < hours.length; i++) {
            Seattle.getcustomers(2,16);
            let li1 = document.createElement('li');
    
            ul2Element.append(li1);
            li1.textContent = `${houres[i]}:${this.customersperhour}`;
        }
    }
}