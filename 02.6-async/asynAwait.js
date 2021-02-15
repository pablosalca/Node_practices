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

const id = 4;

//transform to return a promise 
const getUserInfo = async(id) => {
    try {

        const employeed = await getEmployeed(id);
        const salary = await getSalary(id)
        return `${employeed.Name} ${salary.salary}`;
    } catch (e) {
        //the return not is equal 
        //because redirect to TODO BIEN we need redirect TODO MAL
        throw e;
    }
}

getUserInfo(id)
    .then(msg => {
        console.log("TODO BIEN");
        console.log(msg)
    })
    .catch(e => {
        console.log("TODO MAL");
        console.log(e)
    })