"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const path = require("path");
const workspace_models_1 = require("@schematics/angular/utility/workspace-models");
const configPaths = ['/.angular.json', '/angular.json'];
function getProjectPaths(config, appendPrefix = true) {
    const sourceDirs = [];
    let globalPrefix;
    if (config.schematics && config.schematics['@schematics/angular:component']) {
        // updated projects have global prefix rather than per-project:
        globalPrefix = config.schematics['@schematics/angular:component'].prefix;
    }
    const projects = getProjects(config);
    for (const proj of projects) {
        let sourcePath = path.join('/', proj.sourceRoot);
        if (appendPrefix && (proj.prefix || globalPrefix)) {
            sourcePath = path.join(sourcePath, proj.prefix || globalPrefix);
        }
        sourceDirs.push(core_1.normalize(sourcePath));
    }
    return sourceDirs;
}
exports.getProjectPaths = getProjectPaths;
function getWorkspacePath(host) {
    return configPaths.find(x => host.exists(x));
}
exports.getWorkspacePath = getWorkspacePath;
function getWorkspace(host) {
    const configPath = getWorkspacePath(host);
    if (configPath) {
        return JSON.parse(host.read(configPath).toString());
    }
    return null;
}
exports.getWorkspace = getWorkspace;
function getProjects(config) {
    const projects = [];
    for (const projName of Object.keys(config.projects)) {
        const proj = config.projects[projName];
        if ((proj.projectType && proj.projectType !== workspace_models_1.ProjectType.Application) ||
            (proj.architect && proj.architect.e2e)) {
            continue;
        }
        projects.push(proj);
    }
    return projects;
}
exports.getProjects = getProjects;
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
exports.escapeRegExp = escapeRegExp;
