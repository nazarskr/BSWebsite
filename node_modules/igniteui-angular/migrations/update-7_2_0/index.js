"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks_1 = require("@angular-devkit/schematics/tasks");
const UpdateChanges_1 = require("../common/UpdateChanges");
const add_normalize_1 = require("../../schematics/ng-add/add-normalize");
const version = '7.2.0';
function default_1() {
    return (host, context) => {
        context.logger.info(`Applying migration for Ignite UI for Angular to version ${version}`);
        const update = new UpdateChanges_1.UpdateChanges(__dirname, host, context);
        update.applyChanges();
        // add normalize:
        if (add_normalize_1.addResetCss(host)) {
            context.addTask(new tasks_1.NodePackageInstallTask());
        }
    };
}
exports.default = default_1;
