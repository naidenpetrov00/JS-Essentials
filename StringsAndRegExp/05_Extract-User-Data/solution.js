function solve() {
    const users = JSON.parse(document.getElementById('arr').value);

    const nameExtract = (user) => {
        const pattern = /^[A-Z][a-z]* [A-Z][a-z]* /;
        const match = user.match(pattern);
        return match && match[0];
    }

    const phoneNumberExtract = (user) => {
        const pattern = /(\+359 \d \d{3} \d{3})|(\+359-\d-\d{3}-\d{3})/;
        const match = user.match(pattern);
        return match && match[0];
    }

    const emailExtract = (user) => {
        const pattern = / [a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        const match = user.match(pattern);
        return match && match[0];
    }

    users.forEach(user => {
        const name = nameExtract(user);
        const phoneNumber = phoneNumberExtract(user);
        const email = emailExtract(user);

        if(!name || !phoneNumber || !email){
            console.log('Invalid data');
            return;
        }

        console.log(name);
        console.log(phoneNumber);
        console.log(email);
    });

}