var nos_array=[];
function submit()
{
var ds_array = [];
for (var j = 1; j <=4; j++) 
{
 var nos= document.getElementById("name_of_the_student_"+j).value;   
    console.log(nos);
    nos_array.push(nos);
}
console.log(nos_array);
var length_nos_array=nos_array.length;
console.log(length_nos_array);
for (var k = 0; k < length_nos_array; k++) {
    ds_array.push("<h4>Name - " + nos_array[k]+"</h4>");
    console.log(ds_array);
}
console.log(ds_array);
document.getElementById("display_name_with_commas").innerHTML= ds_array;
var rc= ds_array.join(" ");
console.log(rc);
document.getElementById("display_name_without_commas").innerHTML = rc;
}

function sorting()
{
nos_array.sort();
console.log(nos_array);
var length_nos_array=nos_array.length;
console.log(length_nos_array);
for (var k = 0; k < length_nos_array; k++) {
    ds_array.push("<h4>Name - " + nos_array[k]+"</h4>");
    console.log(ds_array);
}
console.log(ds_array);
document.getElementById("display_name_with_commas").innerHTML= ds_array;
var rc= ds_array.join(" ");
console.log(rc);
document.getElementById("display_name_without_commas").innerHTML = rc;
}