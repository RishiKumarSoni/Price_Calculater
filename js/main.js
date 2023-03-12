logoRef = document.getElementById("logo");

itemWeightRef = document.getElementById("itemWeight");
itemRateRef = document.getElementById("itemRate");
addItemRef = document.getElementById("addItem");

function clear(){
    console.log('hello my friend');
    itemWeightRef.innerHTML = '';
    itemRateRef.innerText = '';
    addItemRef.value = '';
    console.log('clicked on logo');
}

console.log('Hello World');
