const { m2mCourseSources: sql } = require('../utils/sql');
const f = require('../utils/func');

module.exports = {
    async courses({ id }, args, { connection: conn }, info) {
        return (await f.query(conn, sql.selectCourseLeg, id));
    },
}