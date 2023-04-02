#!/usr/bin/env node
import { program } from "commander";
import inquirer from "inquirer";

import {
  addProject,
  updateProject,
  showProject,
  showAllProject,
  deleteProject,
  deleteAllProject,
} from "./script.js";

program.version("1.0.0").description("Project Management CLI");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the project about?",
  },
  {
    type: "input",
    name: "language",
    message: "Which language is majorly used for this project?",
  },
  {
    type: "input",
    name: "filePath",
    message: "Please write down the file path of this project",
  },
  {
    type: "input",
    name: "deployedLink",
    message: "Please mention the deployed link if you have",
  },
  {
    type: "input",
    name: "githubLink",
    message: "please add the github link",
  },
  {
    type: "input",
    name: "startDate",
    message: "What is start date of this project?",
  },
  {
    type: "input",
    name: "endDate",
    message: "What is end date of this project?",
  },
];
const prompt = inquirer.createPromptModule();

program
  .command("add")
  .alias("a")
  .description("Add a project")
  .action(() => {
    prompt(questions).then((answers) => addProject(answers));
  });

program
  .command("update <_id>")
  .alias("u")
  .description("Update a project")
  .action((_id) => {
    prompt(questions).then((answers) => updateProject(_id, answers));
  });

program
  .command("show <name>")
  .alias("s")
  .description("Show a project")
  .action((name) => {
    showProject(name);
  });

program
  .command("showAll ")
  .alias("sa")
  .description("Show all projects")
  .action(() => {
    showAllProject();
  });
program
  .command("delete <_id>")
  .alias("d")
  .description("Delete a project")
  .action((_id) => {
    deleteProject(_id);
  });

program
  .command("deleteAll")
  .alias("da")
  .description("Delete all projects")
  .action(() => {
    deleteAllProject();
  });

program.parse(process.argv);
