const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.calculateDonatedSum = functions.database.ref('/Toys')
    .onWrite((change, context) => {
        const donatedRef = admin.database().ref('/Toys');
        return donatedRef.once('value', (snapshot) => {
            let sum = 0;
            snapshot.forEach((childSnapshot) => {
                const donated = childSnapshot.child('donated').val();
                sum += donated ? donated : 0;
            });
            console.log(`The current sum of donated toys is ${sum}`);
            return admin.database().ref('/donatedSum').set(sum);
        });
    });