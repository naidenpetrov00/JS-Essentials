function solve() {
    const users = JSON.parse(document.getElementById('arr').value);

    const nameExtract = (user) => {
        const pattern = /^[A-Z][a-z]* [A-Z][a-z]* /;
        const match = user.match(pattern);
        return match && match[0];
    }

    const phoneNumberExtract = (user) => {
        const pattern = 
    }

    const emailExtract = (user) => {
        const pattern = //;
        const match = user.match(pattern);
        return match && match[0];
    }

    users.forEach(user => {
        console.log(nameExtract(user));
        console.log(phoneNumberExtract(user));
        console.log(emailExtract(user));
    }

}