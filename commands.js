#!/usr/bin/env node
import { program } from "commander";
import inquirer from "inquirer";
import chalk from "chalk";

const prompt = inquirer.createPromptModule();

import {
  welcome,
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
    message: `What is the ${chalk.bgBlue("NAME")} of the project? `,
  },
  {
    type: "input",
    name: "description",
    message: `What is ${chalk.bgWhite("DESCRIPTION")} of the project? `,
  },
  {
    type: "list",
    name: "language",
    message: `Which ${chalk.bgGreen(
      "LANGUAGE"
    )} is majorly used for this project? `,
    choices: [
      '','Javascript','Python','C++','Java','HTML','CSS','Typescript','Swift','Kotlin','C#','Go','Rust','Bash','SQL','NoSQL','Matlab','PHP'
    ]
  },
  {
    type: "input",
    name: "filePath",
    message: `Please write down the ${chalk.bgCyan(
      "FILE PATH"
    )} of this project `,
  },
  {
    type: "input",
    name: "deployedLink",
    message: `Please mention the ${chalk.bgRed("DEPLOYED LINK")} `,
  },
  {
    type: "input",
    name: "githubLink",
    message: `please add the ${chalk.bgYellow("GITHUB LINK")} `,
  },
  {
    type: "input",
    name: "startDate",
    message: `What is ${chalk.bgBlueBright("START DATE")} of this project? `,
  },
  {
    type: "input",
    name: "endDate",
    message: `What is ${chalk.bgRedBright("END DATE")} of this project? `,
  },
];

program
  .command("create")
  .alias("c")
  .description("Create a project")
  .action(async () => {
    await welcome();
    prompt(questions).then((answers) => createProject(answers));
  });

program
  .command("read <name>")
  .alias("r")
  .description("Read a project")
  .action(async (name) => {
    await welcome();
    readProject(name);
  });

program
  .command("readAll ")
  .alias("ra")
  .description("Read all projects")
  .action(async () => {
    await welcome();
    readAllProject();
  });

program
  .command("update <_id>")
  .alias("u")
  .description("Update a project")
  .action(async (_id) => {
    await welcome();
    prompt(questions).then((answers) => updateProject(_id, answers));
  });

program
  .command("delete <_id>")
  .alias("d")
  .description("Delete a project")
  .action(async (_id) => {
    await welcome();
    deleteProject(_id);
  });

program
  .command("deleteAll")
  .alias("da")
  .description("Delete all projects")
  .action(async () => {
    await welcome();
    deleteAllProject();
  });

program.parse(process.argv);
