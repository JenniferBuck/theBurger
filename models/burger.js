const orm = require("../config/orm.js"); // import orm model

// execute commands
const burger = {
    all: function (callback) {
        orm.selectAll("burgers", function (res) {
            // execute callback function with data
            callback(res);
        });
    },
    create: function (burgername, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            burgername, false
        ], cb);
    },
    insertOne: function (burgername, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            burgername, false
        ], cb);
    },
    update: function (id, cb) {
        const condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb);
    }
};

// export object
module.exports = burger;