const { m2mCourseLevels, m2mCourseLabels, m2mCourseSources, m2mCourseTeachers } = require('../utils/sql');
const f = require('../utils/func');

module.exports = {
    async levels({ id }, args, { connection: conn }, info) {
        return (await f.query(conn, m2mCourseLevels.selectLevelLeg, id));
    },
    async labels({ id }, args, { connection: conn }, info) {
        return (await f.query(conn, m2mCourseLabels.selectLabelLeg, id));
    },
    async sources({ id }, args, { connection: conn }, info) {
        return (await f.query(conn, m2mCourseSources.selectSourceLeg, id));
    },
    async teachers({ id }, args, { connection: conn }, info) {
        return (await f.query(conn, m2mCourseTeachers.selectTeacherLeg, id));
    },
}