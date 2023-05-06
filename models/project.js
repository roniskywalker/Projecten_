import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  projectName: String,
  employee: String,
  choice: {
    type: String,
    require: true,
  },
  TaskOrIssueName: {
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
