import { app } from './app.module';
import { Controller } from './decorators/Controller';
import { Controllers } from './decorators/Mapper';
import { PORT } from './environment';

setTimeout(() => {
  app.use(
    '/',
    Array.from(Controllers.values()).map((c) => c.router)
  );

  const server = app.listen(PORT, () => {
    console.log('server up an running at port ', PORT);
  });
}, 2000);
