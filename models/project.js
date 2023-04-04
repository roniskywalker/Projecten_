import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: String,
  language: {
    type: String,
    require: true,
  },
  filePath: String,
  deployedLink: String,
  githubLink: String,
  startDate: String,
  endDate: String,
});

const projectModel = mongoose.model("Project", projectSchema);

export { projectModel };