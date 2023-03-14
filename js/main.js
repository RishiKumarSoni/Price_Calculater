logoRef = document.getElementById("logo");

itemWeightRef = document.getElementById("itemWeight");
itemRateRef = document.getElementById("itemRate");
addItemRef = document.getElementById("addItem");

finalRef = document.getElementById("Final");

itemWeightRef.value = 0;
itemRateRef.value = 0;
addItemRef.value = 0;

function clean(){
    itemWeightRef.value = 0;
    itemRateRef.value = 0;
    addItemRef.value = 0;
    finalRef.value = '';
}

function make() {
    finalRef.value = Number(itemWeightRef.value) * Number(itemRateRef.value) + Number(addItemRef.value);
}
