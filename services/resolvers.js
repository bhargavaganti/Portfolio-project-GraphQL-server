const levels = require('./levels');
const labels = require('./labels');
const sources = require('./sources');
const teachers = require('./teachers');
const courses = require('./courses');

module.exports = {
    Query: {
        levels: levels.Query.query,
        labels: labels.Query.query,
        sources: sources.Query.query,
        teachers: teachers.Query.query,
        courses: courses.Query.query,
    },
    Mutation: {
        createLevel: levels.Mutation.create,
        deleteLevel: levels.Mutation.delete,
        updateLevel: levels.Mutation.update,

        createLabel: labels.Mutation.create,
        deleteLabel: labels.Mutation.delete,
        updateLabel: labels.Mutation.update,

        createSource: sources.Mutation.create,
        deleteSource: sources.Mutation.delete,
        updateSource: sources.Mutation.update,

        createTeacher: teachers.Mutation.create,
        deleteTeacher: teachers.Mutation.delete,
        updateTeacher: teachers.Mutation.update,

        createCourse: courses.Mutation.create,
        deleteCourse: courses.Mutation.delete,
        updateCourse: courses.Mutation.update,
    },
    Subscription: {
        levels: levels.Subscription,
        labels: labels.Subscription,
        sources: sources.Subscription,
        teachers: teachers.Subscription,
        courses: courses.Subscription,
    },
    Label: {
        courses: labels.Graph.courses,
    },
    Level: {
        courses: levels.Graph.courses,
    },
    Source: {
        courses: sources.Graph.courses,
    },
    Teacher: {
        courses: teachers.Graph.courses,
    },
    Course: {
        levels: courses.Graph.levels,
        labels: courses.Graph.labels,
        sources: courses.Graph.sources,
        teachers: courses.Graph.teachers,
    }
}