"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUtils_1 = require("../common/tsUtils");
const UpdateChanges_1 = require("../common/UpdateChanges");
const version = '6.0.1';
function default_1() {
    return (host, context) => {
        context.logger.info(`Applying migration for Ignite UI for Angular to version ${version}`);
        const update = new UpdateChanges_1.UpdateChanges(__dirname, host, context);
        // update.applyChanges();
        // rename submodule imports
        for (const entryPath of update.tsFiles) {
            let content = host.read(entryPath).toString();
            if (content.indexOf('igniteui-angular/') !== -1) {
                const pos = tsUtils_1.getImportModulePositions(content, 'igniteui-angular/');
                for (let i = pos.length; i--;) {
                    content = content.slice(0, pos[i].start) + 'igniteui-angular' + content.slice(pos[i].end);
                }
                host.overwrite(entryPath, content);
            }
        }
    };
}
exports.default = default_1;
