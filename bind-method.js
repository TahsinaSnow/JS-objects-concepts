const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibrea',
    treatDay: function(expense){
        this.money = this.money - expense;
        console.log('here',this);
        return this.money;
    }
}

const heroBalam = { 
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}

const normalGolam = { 
    id: 102,
    money: 6000,
    name: 'Normal Golam',
}

kibria.treatDay(100);

const heroTreatDay = kibria.treatDay.bind(heroBalam);


heroTreatDay(500);
heroTreatDay(300);
heroTreatDay(400);
kibria.treatDay(400);

const normalTreatDay = kibria.treatDay.bind(normalGolam);
normalTreatDay(2000);