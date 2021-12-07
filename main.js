name_of_the_students_array = [];
function submit(){
    var name_1 = document.getElementById("nameofthestudent1").value;
    var name_2 = document.getElementById("nameofthestudent2").value;
    var name_3 = document.getElementById("nameofthestudent3").value;
    var name_4 = document.getElementById("nameofthestudent4").value;
    name_of_the_students_array.push(name_1);
    name_of_the_students_array.push(name_2);
    name_of_the_students_array.push(name_3);
    name_of_the_students_array.push(name_4);
    console.log(name_of_the_students_array);
    document.getElementById("displayname").innerHTML = name_of_the_students_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sort() {
    name_of_the_students_array.sort();
    console.log(name_of_the_students_array);
    document.getElementById("displayname").innerHTML = name_of_the_students_array;
}