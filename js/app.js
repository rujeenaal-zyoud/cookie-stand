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