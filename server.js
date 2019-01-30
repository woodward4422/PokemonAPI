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
    },
    '3': {
        'name': 'sparky',
        'pokemon': ['stare', 'giant']
    },
    '4': {
        'name': 'brock',
        'pokemon': ['bran', 'gyrados']
    },
    '5': {
        'name': 'Nya',
        'pokemon': ['muni', 'bart', 'cable car']
    }
}

app.get('/', (req, res) => {
    res.send(trainers)
})

app.get('/:id', (req, res) => {
    console.log(req.params.id)
    // output 1
    const trainer = trainers[req.params.id]
    // output object associcated with value
    if(trainer){
        return(res.send(trainer.name))
    }
    res.send([])

})

app.get('/:id/pokemon', (req, res) => {
    const trainer = trainers[req.params.id]
    if(trainer){
        return(res.send(trainer.pokemon))
    }
    res.send([])

})

app.listen(3000, () => {
    console.log("App listening on port 3000!");
});
