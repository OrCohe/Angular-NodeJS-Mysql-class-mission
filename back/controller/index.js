const db = require('../model');
const dB = new db();

module.exports = class Controller {
    getMembers(callBack) {
        dB.getMembers((result) => { 
            if(result.status && !result.data[0]) {
                return callBack({status: false, data: "No items found!"});
            }
            return callBack(result);
        } );
    }
    getTasks(callBack) {
        dB.getTasks((result) => {
            if(result.status && !result.data[0]) {
                return callBack({status: false, data: "No items found!"});
            }
            return callBack(result); 
        } );
    }
    addMember(name, nickname, role, callBack) {
        dB.addMember(name, nickname, role, (result) => callBack(result) );
    }
    addTask(description, date, personId, callBack) {
        dB.addTask(description, date, personId, (result) => callBack(result) );
    }
    deleteMember(id, callBack) {
        dB.deleteMember(id, (result) => callBack(result) );
    }
    deleteTask(id, callBack) {
        dB.deleteTask(id, (result) => callBack(result) );
    }
}

