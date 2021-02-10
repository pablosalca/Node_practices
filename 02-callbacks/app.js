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
    // call objects 
const getEmployeed = (id, callback) => {
    const employeed = employees.find(e => e.id === id)

    if (employeed) {
        return callback(null, employeed)
    } else {
        callback(`Employeed ${id} not exist`);
    }
}
const getSalary = (id, callback) => {
    const salary = salaries.find(e => e.id === id);
    if (salary) {
        return callback(null, salary)
    } else {
        callback(`does not exist salary for employeed with id ${id}`)
    }
}



const id = 4

//consume objects
getEmployeed(id, (err, employeed) => {
    if (err) {
        return console.log(err)
    }
    getSalary(id, (err, salary) => {
        if (err) {
            return console.log(err)
        } else {
            console.log("The:", employeed, "has a salary of:", salary.salary)
        }
    })
})