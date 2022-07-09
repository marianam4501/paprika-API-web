exports.testUsers = [
    {
        "id":1,
        "name": "Test",
        "lastname": "User",
        "email": "test@ucr.ac.cr",
        "password": "$2b$10$bu8RfIcSCUYBcjDuyNePYevVcvpHTIK8tlyogugjWGU/tC8VLNtWe", //t3stp4ssw0rd
        "profile_picture": ""
    },
    {
        "id":2,
        "name": "Nathan",
        "lastname": "Miranda",
        "email": "nathan.miranda@ucr.ac.cr",
        "password": "$2b$10$bu8RfIcSCUYBcjDuyNePYevVcvpHTIK8tlyogugjWGU/tC8VLNtWe", //t3stp4ssw0rd
        "profile_picture": ""
    },
    {
        "id":3,
        "name": "Mariana",
        "lastname": "Murillo",
        "email": "mariana.murilloquintana@ucr.ac.cr",
        "password": "$2b$10$bu8RfIcSCUYBcjDuyNePYevVcvpHTIK8tlyogugjWGU/tC8VLNtWe", //t3stp4ssw0rd
        "profile_picture": ""
    },
    {
        "id":4,
        "name": "César",
        "lastname": "López",
        "email": "cesar.lopezurena@ucr.ac.cr",
        "password": "$2b$10$bu8RfIcSCUYBcjDuyNePYevVcvpHTIK8tlyogugjWGU/tC8VLNtWe", //t3stp4ssw0rd
        "profile_picture": ""
    },
    {
        "id":4,
        "name": "César",
        "lastname": "López",
        "email": "cesar.lopezurena@ucr.ac.cr",
        "password": "$2b$10$bu8RfIcSCUYBcjDuyNePYevVcvpHTIK8tlyogugjWGU/tC8VLNtWe" //t3stp4ssw0rd
    }
];
exports.testCodes = [
    {
        "userId":3,
        "code": 364470
    },
];

exports.testRoles = [
    {
        "id": 1, 
        "name": "Admin"
    },
    {
        "id": 2,
        "name": "Client"
    }
];

exports.testUsersRoles = [
    {
        "userId": 1, 
        "roleId": 1,
    },
    {
        "userId": 2, 
        "roleId": 1,
    },
    {
        "userId": 2,
        "roleId": 2,
    },
    {
        "userId": 3,
        "roleId": 1,
    },
    {
        "userId": 3,
        "roleId": 2,
    },
    {
        "userId": 4,
        "roleId": 1,
    },
    {
        "userId": 4,
        "roleId": 2,
    }
];