"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateChanges_1 = require("../common/UpdateChanges");
const version = '6.2.1';
function default_1() {
    return (host, context) => {
        context.logger.info(`Applying migration for Ignite UI for Angular to version ${version}`);
        const update = new UpdateChanges_1.UpdateChanges(__dirname, host, context);
        update.applyChanges();
    };
}
exports.default = default_1;
