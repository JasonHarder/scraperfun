const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
let fs = require('fs');


nightmare
  .goto('https://www.google.com/')
  .type('#lst-ib', 'datatables')
  .click('input[value= "Google Search"]')
  .click('.rc >.r > a')
  .select('select[name="example_length"]',"100")


  .evaluate(function() {
    let people = document.querySelectorAll('[role="row"]');
    return people
  })

  .then(console.log)
  .catch(error =>{
    console.error('fail')
  })
//   .evaluate(function() {
//     document.getElementsByName("selectRegionAndDistrict")[0].options[3].selected = true;
// })


/* b)You will find a table example with some data.
    Please fetch/extract data from table into array.
    In the array you will have objects.
    An object will be a row from the table.
    The object properties will be data from every table column.
    Hint: Many javascript scraping frameworks like Puppetteer and
    Nightmare implement a .evaluate which would allow you to use
    .map(function(){ // return object with data }).toArray() from Jquery.

    c)Please export the array as a CSV */
