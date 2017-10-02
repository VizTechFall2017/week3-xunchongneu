var indexcard = d3.select('body').append('svg')
    .attr('width',10000)
    .attr('height',40000)
;

var svg = d3.select('svg');

/* Your code goes here */
/*var array = ["milk", "eggs", "bread", "butter"];

console.log( array[3]);

var student = { "name": "stephen", "job":"student", "age": "17"};

console.log( student.age);

var classroom = [

    { "name": "stephen1", "job":"student", "age": "17"},
    { "name": "stephen2", "job":"student", "age": "17"},
    { "name": "stephen3", "job":"student", "age": "17"}

];

console.log( classroom);

console.log( classroom [1]);

console.log( classroom [1].age);*/

/*
myArray = [{},{},{},{},{}];

for (i = 0; i< 5; i++){
    //myArray(i).name = 'cirlce'

    //console.log('circle' = 1);

    myArray[i].cx = Math.random()*100;
    myArray[i].cy = i*100;
    myArray[i].r = 20
}
console.log(myArray);

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        return d.cx;

    })
    .attr('cy', function(d){
        return d.cy;

    })

    .attr('r', function(d){
        return d.r;

    })
    .attr('fill', function(d){
        return d.color;

    });
/*

 */

/*
myArray = [{},{},{},{},{}];
myArray.forEach(function (element,i){

element.cx=i * 100;
element.cy = i * 100;
element.r = 25;

})
console.log(myArray);
*/



document.bgColor="#FFB6C1"
myArray = [];

for (i =0; i<20; i++) {

    var object = {cx:500 * Math.random(),cy: Math.random()* 500, r:30};

    myArray.push(object);}

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        return d.cx;

    })
    .attr('cy', function(d){
        return d.cy;

    })

    .attr('r', function(d){
        return d.r;

    })
    .attr('fill', function(d){
        return d.color;
    })

    .attr('fill',"#00FFFF")
    .attr('stroke-width', 2)
    .attr('stroke', 'white')
    .attr('fill-opacity',0.2)
    .attr('stroke-opacity',0.5)


;



myArray = [];

for (i =0; i<30; i++) {

    var object = {cx:500 * Math.random(),cy: Math.random()* 500, r:50};

    myArray.push(object);}

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        return d.cx;

    })
    .attr('cy', function(d){
        return d.cy;

    })

    .attr('r', function(d){
        return d.r;

    })
    .attr('fill', function(d){
        return d.color;
    })

    .attr('fill','white')
    .attr('stroke-width', 5)
    .attr('stroke', 'white')
    .attr('fill-opacity',0.3)
    .attr('stroke-opacity',0.4)

;

myArray = [];

for (i =0; i<30; i++) {

    var object = {cx:500 * Math.random(),cy: Math.random()* 500, r:60};

    myArray.push(object);}

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        return d.cx;

    })
    .attr('cy', function(d){
        return d.cy;

    })

    .attr('r', function(d){
        return d.r;

    })
    .attr('fill', function(d){
        return d.color;
    })

    .attr('fill','white')
    .attr('stroke-width', 5)
    .attr('stroke', 'white')
    .attr('fill-opacity',0.3)
    .attr('stroke-opacity',0.5)

;


myArray = [];

for (i =0; i<50; i++) {

    var object = {cx:500 * Math.random(),cy: Math.random()* 500, r:20};

    myArray.push(object);}

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        return d.cx;

    })
    .attr('cy', function(d){
        return d.cy;

    })

    .attr('r', function(d){
        return d.r;

    })
    .attr('fill', function(d){
        return d.color;
    })

    .attr('fill','#87CEEB')
    .attr('stroke-width', 3)
    .attr('stroke', 'white')
    .attr('fill-opacity',0.5)
    .attr('stroke-opacity',0.8)

;

myArray = [];

for (i =0; i<30; i++) {

    var object = {cx:400 * Math.random(),cy: Math.random()* 500, r:80};

    myArray.push(object);}

svg.selectAll('circle')
    .data(myArray)
    .enter()
    .append('circle')
    .attr('cx', function(d){
        return d.cx;

    })
    .attr('cy', function(d){
        return d.cy;

    })

    .attr('r', function(d){
        return d.r;

    })
    .attr('fill', function(d){
        return d.color;
    })

    .attr('fill','blue')
    .attr('stroke-width', 4)
    .attr('stroke', 'white')
    .attr('fill-opacity',0.3)
    .attr('stroke-opacity',0.5)

;

