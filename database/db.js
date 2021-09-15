const Pool = require('pg/lib').Pool;
const fs = require('fs');
var path = require('path');

const pool = new Pool({
    user: "",
    password: "",
    host: "",
    port: 112,
    database: "",
})

module.exports = pool;

