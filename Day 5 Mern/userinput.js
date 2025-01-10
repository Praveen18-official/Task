const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter Name: ', function(name) {
    console.log('Entered name ' + name);
    readline.close();
});