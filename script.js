import mongoose from "mongoose";
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

import { projectModel } from "./models/project.js";

const addProject = (project) => {
  projectModel.create(project).then((project) => {
    console.info("Successfully added");
    mongoose.connection.close();
  });
};

const findProject = (name) => {
  const search = new RegExp(name, "i");
  projectModel.find({ name: search }).then((project) => {
    console.info(project);
    console.log(`${project.length} matches`);
    mongoose.connection.close();
  });
};

const updateProject = (_id, project) => {
  projectModel.updateOne({_id}, project)
  .then(project =>{
    console.info('Successfully updated');
    mongoose.connection.close();
  })
}

const removeProject = (_id) => {
  projectModel.remove({ _id }).then((project) => {
    console.info("Successfully removed");
    mongoose.connection.close();
  });
};

const listProject = ()=>{
  projectModel.find()
  .then(projects =>{
    console.info(projects);
    console.log(`${projects.length} projects`);
    mongoose.connection.close();
  })
}
export { addProject, findProject, updateProject, removeProject, listProject };
