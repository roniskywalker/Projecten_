import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  projectName: {
    type: String,
    require: true,
  },
  employee: {
    type: String,
    require: true,
  },
  choice: {
    type: String,
    require: true,
  },
  taskOrIssueName: {
    type: String,
    require: true,
  },
  description: String,
  language: {
    type: String,
    require: true,
  },
  githubLink: String,
  assignDate: String,
  deadline: String,
});

const projectModel = mongoose.model("Project", projectSchema);

export { projectModel };
