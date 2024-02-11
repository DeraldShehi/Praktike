// let array2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(array2[1][1]);

let myArray = [1, 2, 3, 4, 5];

//  for
for (let index = 0; index < myArray.length; index++) {
    console.log("Vlerat e array jane :", myArray[index]);
};

//  forOf

for (const item of myArray) {
    console.log("Vlerat e array jane :", item);
};

// forEach 

myArray.forEach((numriRadhes) => {
    console.log("Nr me foreach eshte :", numriRadhes);
});

myStringArray = ["A", "B", "C", "D"];

myStringArray.forEach((shkronjat) => {
    console.log("Shkronjat me foreach jane :", shkronjat);
});

let arrayIbashkuar = myArray.concat(myStringArray);
console.log(arrayIbashkuar);

// slice

let arrayiprere = arrayIbashkuar.slice(5, 8);
console.log(arrayiprere);

let array2iBashkuar = myArray.concat(arrayiprere);
console.log(array2iBashkuar);

// every()

const numrat = [1, 9, 5, 3, 1];

console.log("A jane nr me te medhenj se 0 ??", numrat.every((nrCon) => nrCon > 0));
// some
console.log("A eshte te pakten 1 nr tek ?", numrat.some((nrCon) => nrCon % 2 == 1));


// find() & findLast()
const arrayToFind = ["Deraldi", "Ende", "Emri", "Array"];
const emriMe4Shkronja = arrayToFind.find((emriaktual) => {
    return emriaktual.length == 4;
});
console.log("Elementi me 4 shkronja eshte :", emriMe4Shkronja);

const nr1cift = numrat.find((nrcift) => nrcift % 2 == 0);
console.log("Nr 1 cift eshte :", nr1cift);


const nrFunditTek = numrat.findLast((nrFundTekk) => {
    return nrFundTekk % 2 == 1;
})

console.log("Nr fundit tek eshte :", nrFunditTek);

// flat() shperben arrayt ne 1 array te vetem 


//  map

const number2 = [3, 5, 6, -8, 9, 10];
const arrayMap = number2.map((vleraAktuale) => vleraAktuale > 0);


//  filter

const nrEfiltruar = number2.filter((vlerat) => vlerat % 2 == 0 && vlerat > 0);
console.log("Array e ndryshuar eshte :", number2, arrayMap, nrEfiltruar);















