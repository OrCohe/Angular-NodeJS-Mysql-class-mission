const express = require('express');
const cont = require('../controller');
const controller = new cont();

const router = express.Router({
    mergeParams: true
});

router.get('/', (req,res,next) => {
    controller.getMembers((result) => res.send(result))
})

router.post('/', (req,res,next) => {
    const name = req.body.name;
    const nickname = req.body.nickname;
    const role = req.body.role;
    controller.addMember(name, nickname, role, (result) => res.send(result));
})

router.delete('/:id', (req,res,next) => {
    const id = req.params.id;
    controller.deleteMember(id, (result) => res.send(result));
})

module.exports = router;