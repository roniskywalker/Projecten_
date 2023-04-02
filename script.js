const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const Project = require('./models/project');
const project = require("./models/project");

const addProject = (project)=>{
    Project.create(project).then(project =>{
        console.info('Successfully added');
    })
}

const findProject = (name)=>{
    const search = new RegExp(name, 'i');
    Project.find({name:search}).then(project=>{
      console.info(project);  
      console.log(`${project.length} matches`);
    })
}

module.exports = {
  addProject,
  findProject
}