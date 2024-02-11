// Praktike :

// Ne matricen me usera ku cdo user ka keto te dhena : `[ID , emer_mbiemer , mosha ]`:

var users = [
    [1, 'Klajdi Zmalaj', 24],
    [2, 'John Doe', 30],
    [3, 'test test2', 22],
    [4, 'test test3', 23],
    [5, 'test test44', 17],
]

// 1. Te krijohet nje funksion i cili gjen userin me id perkates : `gjejUserin(3)` , do ktheje : `Useri me id 3 eshte : test test2`

function gjejUserin(ID) {
    console.log(`Useri me ID ${users[ID][0]} eshte ${users[ID][1]}`);
};
gjejUserin(3);


// 2. Te krijohet nje funksion i cili kthen userat qe jane me te medhenj e 23 vjec.

const gjejMoshenMbi23 = users.filter((user) => user[2] > 23);
console.log(`Userat me te medhenj se 23 vjec jane :${gjejMoshenMbi23}`);


// 3. Duke perdorur nje cikel for/forEach shtoni per cdo user (nje vlere te 4) numrin e karaktereve te `emer_mbiemer`

users.forEach((element => {
    element.push(element[1].length)
}));
console.log(users);


// 4. Kontrolloni nqs te gjith userat jane 18vjec+. Nqs po afishoni ne alert `Po te gjith userat jane +18` dhe anasjelltas

const shfaqAlert = users.every((user) => user[2] > 18)
if (shfaqAlert === true) {
    alert("Po te gjithe userat jane +18")
} else {
    alert("Userat nuk jane te gjithe +18")
};

// 5. Nga userat ktheni nje array tjt vetem me moshat e tyre : [24,30,22,23,17] gjithashtu gjeni dhe moshen mesatare te ketij array te gjeneruar me numra.


// 6. Te ndryshohet mosha e nje useri te marre nga argumenti :
//    Shembull : `ndryshoUserin(2,23)` => Nga 22 vjec do behet 23 , tregojeni me log.


// 7. Krijo nje variabel `userNew = []` dhe ne kete user vendosni te dhenat tuaja me .push() dhe userin e ri bashkojeni dhe userat e tjere.

newUser = [];
newUser.push(10);
newUser.push("Derald Shehi");
newUser.push(29);

let newArray2 = users.concat(newUser);
console.log(newArray2);

// 8. Cdo useri ti kthehet emri mbrapsht ;
//    Shembull : `Klajdi Zmalaj` => `jalamZ idjalK` (reverse ArrayFrom dhe join


