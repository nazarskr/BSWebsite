import { Tree } from '@angular-devkit/schematics';
import { WorkspaceSchema, WorkspaceProject, ProjectType } from '@schematics/angular/utility/workspace-models';
export declare function getProjectPaths(config: WorkspaceSchema, appendPrefix?: boolean): string[];
export declare function getWorkspacePath(host: Tree): string;
export declare function getWorkspace(host: Tree): WorkspaceSchema;
export declare function getProjects(config: WorkspaceSchema): WorkspaceProject<ProjectType.Application>[];
export declare function escapeRegExp(string: any): any;
