const { levels: sql } = require('../utils/sql');
const f = require('../utils/func');
const e = require('../utils/err-messages');

const subscription = async (pubsub, mutation, data) => pubsub.publish(`levels`, { levels: { mutation, data } });
const validation = async (c, name) => ((await f.query(c, sql.nameValidate, name))[0]).count > 0

module.exports = {
    async create(parent, { name }, { pubsub, connection: con }, info) {
        if (await validation(con, name)) {
            return new Error(e.nameExists);
        }
        const result = await f.query(con, sql.create, name);
        const [record] = await f.query(con, sql.selectOne, result.insertId);
        subscription(pubsub, 'CREATED', record);
        return record;
    },
    async delete(parent, { id }, { pubsub, connection: con }, info) {
        const v = await f.query(con, sql.selectOne, id);
        if (v.length === 0) {
            return new Error(e.recordExists);
        }
        const [record] = await f.query(con, sql.selectOne, id);
        subscription(pubsub, 'DELETED', record);
        const result = await f.query(con, sql.delete, id);
        return record;
    },
    async update(parent, { id, name }, { pubsub, connection: con }, info) {
        if (await validation(con, name)) {
            return new Error(e.nameExists);
        }
        const result = await f.query(con, sql.update, [name, id]);
        const [record] = await f.query(con, sql.selectOne, id);
        subscription(pubsub, 'UPDATED', record);
        return record;
    }
}
