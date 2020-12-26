import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Model, ModelCtor } from 'sequelize';

export function createResourceRouter<T>(
  basePath: string,
  repo: ModelCtor<Model<T, T>>
): Router {
  const router = Router();

  router
    .get(basePath, (req, res) => {
      const payload = repo.findAll({
        where: req.query as any,
      });
      res.status(StatusCodes.OK).send(payload);
    })

    .post(basePath, (req, res) => {
      res.send(repo.create(req.body, req.query));
    })

    .post(basePath + '/many', (req, res) => {
      res.send(repo.bulkCreate(req.body, req.query));
    })

    .put(basePath, (req, res) => {
      res.send(repo.upsert(req.body, req.query));
    })

    .delete(basePath, (req, res) => {
      res.send(repo.destroy({ where: req.query as any }));
    });

  return router;
}
