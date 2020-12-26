import { Router } from 'express';

export interface IController {
  name: string;
  basePath: string;
  router: Router;
  methods?: {
    [key: string]: {
      path: string;
      args: {
        paramIndex: number;
        key: any;
        type: 'query' | 'params' | 'cookies';
        value: any;
      }[];
    };
  };
}
