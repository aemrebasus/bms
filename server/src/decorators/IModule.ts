import { IController } from './IController';

export interface IModule {
  name: string;
  controllers: IController[];
  services: any[];
}
