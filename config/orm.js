const conn = require("./connection.js");

/*
 * Methods that execute the MYSQL commands
 * to insert and retrieve records from DB
 */

function notation(num) {
    /*
     * Object notation
     */
    const item = []; // construct an array of objects
    // used in composing mysql queries
    for (let i = 0; i < num; i++) {
        // push item to array
        item.push("?");
    }
    // return an array of items
    return item.toString();
}

function composeSql(object) {
    /*
     * compose a query
     */
    const item = []; // an array of items
    // insert objects
    // an object is associated with a  key
    for (let k in object) {
        item.push(k + "=" + object[k]);
    }
    // return string of items
    return item.toString();
}

// execute MYSQL commands
const orm = {
    create: function (table, cols, values, cb) {
        /*
         * compose a query
         * that inserts record into database
         */
        let query = "INSERT INTO " + table;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += notation(values.length);
        query += ") ";
        // execute command
        // push the record to database
        conn.query(query, values, function (err, data) {
            if (err) {
                throw err;
            }
            // callback function
            cb(data);
        });
    },
    selectAll: function (entry, en) {
        const query = "SELECT * FROM " + entry + ";";
        // execute query
        conn.query(query, function (err, data) {
            // error handling
            if (err) {
                throw err;
            }
            // callback
            en(data);
        });
    },
    updateOne: function (table, obj, attr, callback) {
        // compose a query
        let query = "UPDATE " + table;

        query += " SET ";
        query += composeSql(obj);
        query += " WHERE ";
        query += attr;
        // update records to database
        conn.query(query, function (err, data) {
            if (err) {
                // error handling
                throw err;
            }
            // callback function
            callback(data);
        });
    }
};

// export orm module
module.exports = orm;