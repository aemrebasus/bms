import { Controllers } from './Mapper';

export function Query(key?: string): ParameterDecorator {
  return (target, propertyKey: string, paramIndex) => {
    setTimeout(() => {
      const controller = Controllers.get(target.constructor.name);
      controller.methods[propertyKey].args.push({
        paramIndex,
        key,
        type: 'query',
        value: null,
      });
    }, 1000);
  };
}
