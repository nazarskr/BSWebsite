"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const util_1 = require("./util");
/**
 * Filter tree to project source dirs
 * @deprecated Temporary
 */
function filterSourceDirs(host, context) {
    // tslint:disable:arrow-parens
    let config;
    const configPath = util_1.getWorkspacePath(host);
    let sourcePaths;
    const schematicPosition = context.schematic.collection.listSchematicNames().indexOf(context.schematic.description.name);
    if (schematicPosition !== 0 && !configPath) {
        // assume already filtered
        return tree => tree;
    }
    config = util_1.getWorkspace(host);
    if (config) {
        sourcePaths = util_1.getProjectPaths(config);
    }
    else {
        context.logger.warn(`Couldn't find angular.json. This may take slightly longer to search all files.`);
        sourcePaths = host.root.subdirs.filter(x => x.indexOf('node_modules') === -1).map(x => `/${x}`);
    }
    return schematics_1.filter(x => {
        return !!sourcePaths.find(folder => x.startsWith(folder));
    });
}
exports.filterSourceDirs = filterSourceDirs;
