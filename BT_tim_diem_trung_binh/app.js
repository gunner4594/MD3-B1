let sudentList = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];

let findMale = sudentList.filter(student => student.gender === 'male');
let averageMale = findMale.reduce((a,b) => a + b.poin, 0) / findMale.length;
console.log('Điểm trung bình của các bạn nam: ' + averageMale);

let findFemale = sudentList.filter(student => student.gender === 'female');
let averageFemale = findFemale.reduce((a,b) => a + b.poin, 0) / findFemale.length;
console.log('Điểm trung bình của các bạn nữ: ' + averageFemale);
