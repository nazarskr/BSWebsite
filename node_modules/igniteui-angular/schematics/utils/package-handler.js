"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
const extSchematicModule = 'igniteui-cli';
const schematicName = 'cli-config';
function installPackageJsonDependencies(options) {
    return (tree, context) => {
        const installTaskId = context.addTask(new tasks_1.NodePackageInstallTask());
        const cliSchematicTask = new tasks_1.RunSchematicTask(extSchematicModule, // Module
        schematicName, // Schematic Name
        {
            collection: extSchematicModule,
            name: schematicName,
            options
        });
        // Add Task for igniteu-cli schematic and wait for install task to finish
        context.addTask(cliSchematicTask, [installTaskId]);
        return tree;
    };
}
exports.installPackageJsonDependencies = installPackageJsonDependencies;
