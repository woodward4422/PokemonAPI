const express = require("express");
const mongoose = require("mongoose");

const app = express();

const trainers = {
    '1': {
        'name': 'ash',
        'pokemon': ['charmander', 'squirtle', 'pikachu']
    },
    '2': {
        'name': 'misty',
        'pokemon': ['squirtle', 'gyrados']
    }
}

app.get('/', (req, res) => {
    res.send(trainers)
})

app.get('/:id', (req, res) => {
    const trainer = trainers[req.params.id]
    res.send(trainer.pokemon)

})

app.listen(3000, () => {
    console.log("App listening on port 3000!");
});