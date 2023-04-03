#!/usr/bin/env node
import { program } from "commander";
import inquirer from "inquirer";

const prompt = inquirer.createPromptModule();

import {
  createProject,
  readProject,
  readAllProject,
  updateProject,
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

program
  .command("create")
  .alias("c")
  .description("Create a project")
  .action(() => {
    prompt(questions).then((answers) => createProject(answers));
  });

program
  .command("read <name>")
  .alias("r")
  .description("Read a project")
  .action((name) => {
    readProject(name);
  });

program
  .command("readAll ")
  .alias("ra")
  .description("Read all projects")
  .action(() => {
    readAllProject();
  });

program
  .command("update <_id>")
  .alias("u")
  .description("Update a project")
  .action((_id) => {
    prompt(questions).then((answers) => updateProject(_id, answers));
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
