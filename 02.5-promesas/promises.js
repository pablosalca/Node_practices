const employees = [{
        id: 1,
        Name: "Pablo",
    },
    {
        id: 2,
        Name: "Pedro"
    },
    {
        id: 3,
        Name: "Elizabeth"
    }

]
const salaries = [{
        id: 1,
        salary: 1500,
    },
    {
        id: 2,
        salary: 2000,
    },

]

const getEmployeed = (id) => {
    return new Promise((resolve, reject) => {
        const employeed = employees.find(e => e.id === id);

        (employeed) ?
        resolve(employeed):
            reject(`the employeed ${id} does not exist`);
    })

}

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(s => s.id === id);
        (salary) ? resolve(salary): reject(`the employeed with id ${id} doesnt get salary`)
    })
}


const id = 1;
// getEmployeed(id)
//     .then(employee => console.log(employee))
//     .catch(e => console.log(e));

// getSalary(id)
//     .then(salary => console.log(salary))
//     .catch(e => console.log(e));


// WORST PRACTICE
// getEmployeed(id)
//     .then(employeed => {
//         getSalary(id).then(salary => {
//             console.log(employeed, salary);
//         }).catch(e => console.log(e));
//     }).catch(e => console.log(e));

//CHAIN PROMAISES
let Employeedname;
getEmployeed(id)
    .then(employeed => {
        Employeedname = employeed;
        return getSalary(id)
    })
    .then(salary => console.log(Employeedname.Name, salary.salary));