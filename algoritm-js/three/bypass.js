let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(deparment) {
    let sum = 0;
    if (Array.isArray(deparment)) {
        return deparment.reduce((acc, el) => acc + el.salary, 0);
    }
    for (let subdep of Object.values(deparment) ) {
        sum += sumSalaries(subdep)
    }
    return sum;
}
console.log(sumSalaries(company));
