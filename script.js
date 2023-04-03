import mongoose from "mongoose";
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

import { projectModel } from "./models/project.js";

const createProject = (project) => {
  projectModel.create(project).then((project) => {
    console.info("This project is successfully created");
    mongoose.connection.close();
  });
};

const readProject = (name) => {
  const search = new RegExp(name, "i");
  projectModel.find({ name: search }).then((project) => {
    console.info(project);
    console.log(`${project.length} matches`);
    mongoose.connection.close();
  });
};

const readAllProject = () => {
  projectModel.find().then((projects) => {
    console.info(projects);
    console.log(`${projects.length} projects`);
    mongoose.connection.close();
  });
};

const updateProject = (_id, project) => {
  projectModel.updateOne({ _id }, project).then((project) => {
    console.info("This project is successfully updated");
    mongoose.connection.close();
  });
};

const deleteProject = (_id) => {
  projectModel.deleteOne({ _id }).then((project) => {
    console.info("This project is successfully deleted");
    mongoose.connection.close();
  });
};

const deleteAllProject = () => {
  projectModel.deleteMany().then(() => {
    console.info("All projects are successfully deleted");
    mongoose.connection.close();
  });
};

export {
  createProject,
  readProject,
  readAllProject,
  updateProject,
  deleteProject,
  deleteAllProject,
};
