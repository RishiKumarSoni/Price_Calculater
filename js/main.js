logoRef = document.getElementById("logo");

itemWeightRef = document.getElementById("itemWeight");
itemRateRef = document.getElementById("itemRate");
addItemRef = document.getElementById("addItem");

finalRef = document.getElementById("Final");

// itemWeightRef.value = 0;
// itemRateRef.value = 0;
// addItemRef.value = 0;

function clean(){
    itemWeightRef.value = '';
    itemRateRef.value = '';
    addItemRef.value = '';
    finalRef.value = '';
}

function make() {
    if (isNaN(itemWeightRef.value)) {
        itemWeightRef.value = 0;
    }
    if (isNaN(itemRateRef.value)) {
        itemRateRef.value = 0;
    }
    if (isNaN(addItemRef.value)) {
        addItemRef.value = 0;
    }
    const finalPrice = (Number(itemWeightRef.value) * Number(itemRateRef.value) + Number(addItemRef.value)).toFixed(2);
    finalRef.value = finalPrice;
}

function ground(x) {
    if (x === 'gold') {
        itemWeightRef.value='';
    } else if (x === 'rupee') {
        itemRateRef.value='';
    } else {
        addItemRef.value='';
    }
}
