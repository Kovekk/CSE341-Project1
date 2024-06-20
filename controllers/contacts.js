const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = mongodb.getDb().db().collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = mongodb.getDb().db().collection('users').find({ _id: contactId });
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

const newContact = async (req, res) => {
    const contact = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "favoriteColor": req.body.favoriteColor,
        "birthday": req.body.birthday
    };
    // console.log(req);
    const result = mongodb.getDb().db().collection('users').insertOne(contact).then(result => {
        // console.log(result.insertedId.toString())
        res.send(result.insertedId.toString());
    })
}

const editContact = async (req, res) => {
    const contact = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "favoriteColor": req.body.favoriteColor,
        "birthday": req.body.birthday
    };
    const contactId = new ObjectId(req.params.id);
    // Get the collection
    const result = mongodb.getDb().db().collection('users')
    // Update the contact with the specified contactId
        .updateOne({_id: contactId}, {$set: contact})
        // Send the result back to the user.
        .then(result => {
            res.status(200).send({status: 200});
    });
}

const deleteContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = mongodb.getDb().db().collection('users')
        .deleteOne({ _id: contactId })
        .then(result => {
            res.status(200).send({status: 200});
        });
}

module.exports = { getAll, getSingle, newContact, editContact, deleteContact }