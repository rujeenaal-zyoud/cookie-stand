const houres=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//create the constructor for all object store cookies
function salmon (name,min,max,avg)
{
    this.min=min;
    this.max=max;
    this.avg=avg;
this.name=name;
}

const Seattle=new salmon('Seattle',23,65,6.3);
console.log(Seattle);

const Tokyo=new salmon('Tokyo',3,24,1.2);
console.log(Seattle);

const Dubai=new salmon('Dubai',11,38,3.7);
console.log(Seattle);

const Paris=new salmon('Paris',20,38,2.3);
console.log(Seattle);

const Lima=new salmon('Lima',2,16,4.6);
console.log(Seattle);