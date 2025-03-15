// Charger les variables d'environnement
require('dotenv').config();

const nodemailer = require('nodemailer');

// Configurer le transporteur avec les variables d'environnement
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Définir les options de l'email
const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Test Email',
    text: 'Hello depuis Node.js avec des variables d\'environnement !'
};

// Envoyer l'email
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error('Erreur lors de l\'envoi :', err);
    } else {
        console.log('Email envoyé :', info.response);
    }
});
