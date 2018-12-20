const express = require('express');
const cont = require('../controller');
const controller = new cont();

const router = express.Router({
    mergeParams: true
});

router.get('/', (req,res,next) => {
    controller.getTasks((result) => res.send(result))
})

router.post('/', (req,res,next) => {
    const description = req.body.description;
    const date = req.body.date;
    const personId = req.body.personId;
    controller.addTask(description, date, personId, (result) => res.send(result));
})

router.delete('/:id', (req,res,next) => {
    const id = req.params.id;
    controller.deleteTask(id, (result) => res.send(result));
})

module.exports = router;