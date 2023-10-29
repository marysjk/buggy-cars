// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

export function generateRandomUsername() {
    const numbers = '0123456789';
    const username = 'user_' + shuffleString(numbers)
    return username;
}

export function generateRandomFirstName() {
    const firstNames = [
        'Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack',
        'Kate', 'Leo', 'Mia', 'Nathan', 'Olivia', 'Peter', 'Quinn', 'Rachel', 'Sam', 'Tina'
      ];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];

    return randomFirstName;
}

export function generateRandomLastName() {
    const lastNames = [
        'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
        'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Perez'
      ];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return randomLastName;
}

export function generateRandomPassword(length) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+{}[]|;:,.<>?';

    const allChars = lowercase + uppercase + numbers + specialChars;

    let password = '';

    // Ensure at least one of each character type
    password += getRandomChar(lowercase);
    password += getRandomChar(uppercase);
    password += getRandomChar(numbers);
    password += getRandomChar(specialChars);

    // Fill the rest of the password
    for (let i = 0; i < length - 3; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    // Shuffle the generated password for randomness
    password = shuffleString(password);

    return password;
}

function getRandomChar(characterSet) {
    return characterSet.charAt(Math.floor(Math.random() * characterSet.length));
}

function shuffleString(str) {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}