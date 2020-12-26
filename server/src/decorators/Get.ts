import { Controllers } from './Mapper';

export function Get(path: string = ''): MethodDecorator {
  return (target: any, propertyKey: string, descriptor) => {
    setTimeout(() => {
      const controller = Controllers.get(target.constructor.name);

      const resolvedPath = '/' + controller.basePath + '/' + path;

      if (!controller.methods) {
        controller.methods = {};
      }
      
      controller.methods[propertyKey] = {
        args: [],
        path: path,
      };

      controller.router.get(resolvedPath, (req, res) => {
        const args = controller.methods[propertyKey].args.sort((e, b) =>
          e.paramIndex > b.paramIndex ? 1 : -1
        );

        args.map((a) => {
          a.value = req[a.type];
          if (a.key) {
            a.value = a.value[a.key];
          }
          return a;
        });

        res.send(target[propertyKey](...args.map((a) => a.value)));
      });
    }, 500);
  };
}
