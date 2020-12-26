interface ModuleOptions {
  controllers: any[];
  imports: any[];
  exports: any[];
  providers: any[];
}
export function Module(options: ModuleOptions): ClassDecorator {
  return (target) => {};
}
