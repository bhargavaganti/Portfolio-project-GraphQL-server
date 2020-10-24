const { levels: sql } = require('../utils/sql');
const f = require('../utils/func');
const e = require('../utils/err-messages');

module.exports = {
    async query(parent, { ids }, { connection: conn }, info) {
        if (ids) {
            if (ids.length >= 50) {
                return new Error(e.stringLength);
            }
            const arrIds = f.stringToNumberArray(ids);
            return f.query(conn, `${sql.selectSome}(${arrIds.toString()})`);
        }
        return f.query(conn, sql.selectMany);
    },
}