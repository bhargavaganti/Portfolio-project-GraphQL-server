module.exports = {
    levels: {
        selectOne: 'SELECT * FROM courses.levels WHERE `id` = ?',
        selectSome: 'SELECT * FROM courses.levels  WHERE `id` IN ',
        selectMany: 'SELECT * FROM courses.levels',
        create: 'INSERT INTO courses.levels (`name`) VALUES (?)',
        delete: 'DELETE FROM courses.levels WHERE `id` = ?',
        update: 'UPDATE courses.levels SET `name` = ? WHERE `id` = ?',
        nameValidate: 'SELECT COUNT(*) AS count FROM courses.levels WHERE `name` = ?',
    },
    labels: {
        selectOne: 'SELECT * FROM courses.labels WHERE `id` = ?',
        selectSome: 'SELECT * FROM courses.labels  WHERE `id` IN ',
        selectMany: 'SELECT * FROM courses.labels',
        create: 'INSERT INTO courses.labels (`name`) VALUES (?)',
        delete: 'DELETE FROM courses.labels WHERE `id` = ?',
        update: 'UPDATE courses.labels SET `name` = ? WHERE `id` = ?',
        nameValidate: 'SELECT COUNT(*) AS count FROM courses.labels WHERE `name` = ?',
    },
    teachers: {
        selectOne: 'SELECT * FROM courses.teachers WHERE `id` = ?',
        selectSome: 'SELECT * FROM courses.teachers  WHERE `id` IN ',
        selectMany: 'SELECT * FROM courses.teachers',
        create: 'INSERT INTO courses.teachers (`name`, `workplace`) VALUES (?, ?)',
        delete: 'DELETE FROM courses.teachers WHERE `id` = ?',
        update: 'UPDATE courses.teachers SET `name` = ? WHERE `id` = ?',
        nameValidate: 'SELECT COUNT(*) AS count FROM courses.teachers WHERE `name` = ?',
    },
    sources: {
        selectOne: 'SELECT * FROM courses.sources WHERE `id` = ?',
        selectSome: 'SELECT * FROM courses.sources  WHERE `id` IN ',
        selectMany: 'SELECT * FROM courses.sources',
        create: 'INSERT INTO courses.sources (`name`, `url`) VALUES (?, ?)',
        delete: 'DELETE FROM courses.sources WHERE `id` = ?',
        update: 'UPDATE courses.sources SET `name` = ? WHERE `id` = ?',
        nameValidate: 'SELECT COUNT(*) AS count FROM courses.sources WHERE `name` = ?',
    },
    courses: {
        selectOne: 'SELECT * FROM courses.courses WHERE `id` = ?',
        selectSome: 'SELECT * FROM courses.courses  WHERE `id` IN ',
        selectMany: 'SELECT * FROM courses.courses',
        create: 'INSERT INTO courses.courses (`name`) VALUES (?)',
        delete: 'DELETE FROM courses.courses WHERE `id` = ?',
        update: 'UPDATE courses.courses SET `name` = ? WHERE `id` = ?',
        nameValidate: 'SELECT COUNT(*) AS count FROM courses.courses WHERE `name` = ?',
    },
    m2mCourseLevels: {
        selectCourseLeg: 'SELECT o.* FROM courses.M2M_course_level m INNER JOIN courses.courses o ON m.course_id = o.id  WHERE level_id = ?',
        selectLevelLeg: 'SELECT o.* FROM courses.M2M_course_level m INNER JOIN courses.levels o ON m.level_id = o.id  WHERE course_id = ?',
    },
    m2mCourseLabels: {
        selectCourseLeg: 'SELECT o.* FROM courses.M2M_course_label m INNER JOIN courses.courses o ON m.course_id = o.id  WHERE label_id = ?',
        selectLabelLeg: 'SELECT o.* FROM courses.M2M_course_label m INNER JOIN courses.labels o ON m.label_id = o.id  WHERE course_id = ?',
    },
    m2mCourseSources: {
        selectCourseLeg: 'SELECT o.* FROM courses.M2M_course_source m INNER JOIN courses.courses o ON m.course_id = o.id  WHERE source_id = ?',
        selectSourceLeg: 'SELECT o.* FROM courses.M2M_course_source m INNER JOIN courses.sources o ON m.source_id = o.id  WHERE course_id = ?',
    },
    m2mCourseTeachers: {
        selectCourseLeg: 'SELECT o.* FROM courses.M2M_course_teacher m INNER JOIN courses.courses o ON m.course_id = o.id  WHERE teacher_id = ?',
        selectTeacherLeg: 'SELECT o.* FROM courses.M2M_course_teacher m INNER JOIN courses.teachers o ON m.teacher_id = o.id  WHERE course_id = ?',
    }
}