const user = {username:'jesus', age:35, country:'vnzla'};

const {username, ...values} = user;
console.log(user);
console.log(values);