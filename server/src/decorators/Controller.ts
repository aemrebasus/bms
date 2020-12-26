import { Router } from 'express';
import { Controllers } from './Mapper';

export function Controller(path: string = ''): ClassDecorator {
  return (target) => {
    const controller = target.constructor();
    controller.router = Router();
    controller.basePath = path;
    controller.args = [];
    Controllers.set(target.name, controller);
  };
}
