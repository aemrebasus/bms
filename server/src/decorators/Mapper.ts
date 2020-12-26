import { IController } from './IController';
import { IModule } from './IModule';

export const Modules: Map<string, IModule> = new Map();
export const Controllers: Map<string, IController> = new Map();
export const Services: Map<string, any> = new Map();
