import { Controllers } from './Mapper';

export function Cookie(key?: string): ParameterDecorator {
  return (target, propertyKey: string, paramIndex) => {
    setTimeout(() => {
      const controller = Controllers.get(target.constructor.name);
      controller.methods[propertyKey].args.push({
        paramIndex,
        key,
        type: 'cookies',
        value: null,
      });
    }, 1000);
  };
}
