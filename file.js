let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log("Gjetëm 4, do të ndalojmë ciklin.");
        break;  // Ndalohet cikli kur gjendet 4
    }

    if (arr[i] % 2 === 0) {
        continue;  // Kalohet në iterimin tjetër për numrat çift
    }

    console.log(arr[i]);  // Printon vetëm numrat tek
}


