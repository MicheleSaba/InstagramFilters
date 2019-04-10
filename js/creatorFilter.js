'use strict';

var filterByName = document.getElementById('filter-by');
function searchByName() {   
    var creatorsArray = []; 
    for (var i = 0; i < Effect.all.length; i++) {
        var newCreator = Effect.all[i].creator;
        // var array = [];
        creatorsArray.indexOf(newCreator) === -1 ? creatorsArray.push(newCreator) : console.log("duplicate");
            }
    console.log(creatorsArray.length);
    for (var j = 0; j < creatorsArray.length; j++) {
        var option = document.createElement('option');
        option.innerText = creatorsArray[j]; 
        filterByName.appendChild(option);
    }
}
searchByName();