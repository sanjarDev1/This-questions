[В ответ на Sanjarbek]
const users = [
    {
        id: 5,
        name: "Abdulloh",
        status: "AMIT",
        department:"ATT",
    },
    {
        id: 2,
        name: "Umar",
        status: "AMIT",
        department:"ATT",
    },
    {
        id: 4,
        name: "Sodiq",
        status: "CS",
        department:"IT",
    },
    {
        id: 12,
        name: "Yusuf",
        status: "CS",
        department:"AI",
    },
];

const sorted = (type='name') => {
  return  users.sort((a,b) => {
        a[type].localeCompare(b[type])
    });
}

// console.log(sorted('status'));

// const onDelete = (type='id', val) =>{
//     return users.filter((value) => value[type] !== val)    
// }
// console.log(onDelete( undefined, 4));


// const onRead = (field) => {
//     return users.map((item) => console.log(item[field]));
//   };
  
  
//   onRead("name");



// const onCreate = (data={}) =>{
//      users.push(data);
//      return users
// }

// console.log(onCreate({id: 11, name: 'Ali', status: 'AMIT', department: 'ATT'}));


const onUpdate = (id,type,val)=>{
   let ar =  users.filter((value) =>  value.id === id);
     Object.entries(ar).map(([key,value])=>value[type] = val)
    return users;
}

// console.log(users.filter((val) => val.id == 2))
console.log(onUpdate(12,"name",'jasur'));