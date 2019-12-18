"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-implicit-dependencies
const ts = require("typescript");
/** Returns an source file */
// export function getFileSource(sourceText: string): ts.SourceFile {
//     return ts.createSourceFile('', sourceText, ts.ScriptTarget.Latest, true);
// }
function getIdentifierPositions(sourceText, name) {
    const source = ts.createSourceFile('', sourceText, ts.ScriptTarget.Latest, true);
    const positions = [];
    const checkIdentifier = (node) => {
        if (node.kind !== ts.SyntaxKind.Identifier || !node.parent) {
            return false;
        }
        if (node.parent.kind === ts.SyntaxKind.PropertyDeclaration) {
            return false;
        }
        if (node.parent.kind === ts.SyntaxKind.PropertyAssignment ||
            node.parent.kind === ts.SyntaxKind.PropertySignature) {
            // make sure it's not prop assign  `= { IgxClass: "fake"}`
            //                  definition `prop: { IgxClass: string; }`
            //                                     name: initializer
            const propAssign = node.parent;
            if (propAssign.name.getText() === name) {
                return false;
            }
        }
        return node.text === name;
    };
    const findIdentifiers = (node) => {
        if (checkIdentifier(node)) {
            // Use `.getStart()` as node.pos includes the space(s) before the identifier text
            positions.push({ start: node.getStart(), end: node.end });
        }
        ts.forEachChild(node, findIdentifiers);
    };
    source.forEachChild(findIdentifiers);
    return positions;
}
exports.getIdentifierPositions = getIdentifierPositions;
/** Returns the positions of import from module string literals  */
function getImportModulePositions(sourceText, startsWith) {
    const source = ts.createSourceFile('', sourceText, ts.ScriptTarget.Latest, true);
    const positions = [];
    for (const statement of source.statements) {
        if (statement.kind === ts.SyntaxKind.ImportDeclaration) {
            const specifier = statement.moduleSpecifier;
            if (specifier.text.startsWith(startsWith)) {
                // string literal pos will include quotes, trim with 1
                positions.push({ start: specifier.getStart() + 1, end: specifier.end - 1 });
            }
        }
    }
    return positions;
}
exports.getImportModulePositions = getImportModulePositions;
