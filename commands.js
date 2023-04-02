const {program} = require('commander');

const {addProject, findProject} = require('./script');

program 
    .version('1.0.0')
    .description('Program Management System')

program.parse(process.argv);