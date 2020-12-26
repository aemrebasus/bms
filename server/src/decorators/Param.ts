import { Controllers } from './Mapper';

export function Param(key?: string): ParameterDecorator {
  return (target, propertyKey: string, paramIndex) => {
    setTimeout(() => {
      const controller = Controllers.get(target.constructor.name);
      controller.methods[propertyKey].args.push({
        paramIndex,
        key,
        type: 'params',
        value: null,
      });
    }, 1000);
  };
}
