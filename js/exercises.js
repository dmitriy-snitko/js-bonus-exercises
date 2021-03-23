const users = [
  { name: "Игорь", sex: "male", age: 29 },
  { name: "Михаил", sex: "male", age: 25 },
  { name: "Ирина", sex: "female", age: 20},
  { name: "Олег", sex: "male", age: 20 },
  { name: "Марина", sex: "female", age: 23 },
  { name: "Оксана", sex: "female", age: 17 },
  { name: "Алексей", sex: "male", age: - 8 },
  { name: "Антон", sex: "male", age: 47 },
  { name: "Валерия", sex: "female", age: 50 },
  { name: "Екатерина", sex: "female", age: 12 }
];

const MALE = 'male';
const FEMALE = 'female';

/* 
  1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
     Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
     !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
*/

const getYoungestUsers = users => {
  
  const sortedUsers = [...users]
    .filter(user => user.age > 18)
    .sort((a, b) => a.age - b.age);

  let youngestUsers = sortedUsers.filter(user => sortedUsers[0].age === user.age);

  let years = '';

  if (youngestUsers[0].age % 10 === 1) {
    years = 'год';
  } else if (youngestUsers[0].age % 10 > 1 && youngestUsers[0].age % 10 < 5) {
    years = 'года';
  } else {
    years = 'лет';
  }

  if (youngestUsers.length > 1) {
    const usersName = youngestUsers
      .flatMap(user => user.name)
      .reduce((accNames, name) => `${accNames}, ${name}`);
    
    console.log(`${usersName} самые молодые им ${youngestUsers[0].age} ${years}.`)
  } else {
    youngestUsers = youngestUsers[0];

    youngestUsers.sex === MALE
    ? console.log(`${youngestUsers.name} самый молодой и ему ${youngestUsers.age} ${years}.`)
    : console.log(`${youngestUsers.name} самая молодая и ей ${youngestUsers.age} ${years}.`)
  }

  return youngestUsers;
};

console.log(getYoungestUsers(users));

// ==============================================================================================

/* 
  2. В массиве users отфильтровать всех по полу, сначала female потом male 
*/

const sortedBySex = (users) => [...users].sort((a, b) => a.sex.localeCompare(b.sex));

// console.log(sortedBySex(users));

// ==============================================================================================

/* 
  3. В массиве users найти пользователя по имени Марина
*/

const findeUser = ((users, name) => {
  const user = users.find(user => user.name === name);

  if (!user) {
    return `Пользователь не найден.`
  }

  return user;
});

// console.log(findeUser(users, 'Марина'));

// ==============================================================================================

/* 
  4. Пробежаться по массиву users, если пользователь мужчина добавить 10 лет к возрасту, 
  если женщина снять 5 лет
  !!! Важно проверять что возраст не отрицательное число :)
*/

const changeUserAge = users => {
  const usersWhithChangedAge = [...users];
  const UserWhithNegativeAge = usersWhithChangedAge.find(user => user.age < 0);

  if (UserWhithNegativeAge) {
    return (`У пользователя ${UserWhithNegativeAge.name} возраст меньше ноля.`);
    
  }

  usersWhithChangedAge.forEach(user => user.sex === MALE
    ? user.age += 10
    : user.age -= 5);

  return usersWhithChangedAge;
};

// console.log(changeUserAge(users));

// ==============================================================================================
