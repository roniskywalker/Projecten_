const mongoose = require('mongoose');

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
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model('Project', projectSchema);