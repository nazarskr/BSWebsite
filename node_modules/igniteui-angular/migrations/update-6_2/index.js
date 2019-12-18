"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateChanges_1 = require("../common/UpdateChanges");
const version = '6.2.0';
function default_1() {
    return (host, context) => {
        context.logger.info(`Applying migration for Ignite UI for Angular to version ${version}`);
        const update = new UpdateChanges_1.UpdateChanges(__dirname, host, context);
        update.addCondition("igxIcon_is_material_name", function (matchedOwner) {
            if (!matchedOwner) {
                return true;
            }
            const fontSetMatches = matchedOwner.match(new RegExp(`fontSet=(["'])(.+?)${'\\1'}`));
            if (fontSetMatches && fontSetMatches.length > 0) {
                const fontSet = fontSetMatches[fontSetMatches.length - 1];
                return fontSet === 'material' || fontSet === 'material-icons';
            }
            return true;
        });
        update.applyChanges();
    };
}
exports.default = default_1;
