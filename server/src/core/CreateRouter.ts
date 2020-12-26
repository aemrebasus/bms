import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IService } from './IService';

export function createResourceRouter<T>(
  basePath: string,
  repo: IService<T>,
  dto: string[]
): Router {
  const router = Router();

  router
    .get(basePath, (req, res) => {
      const payload = repo.findAll({
        where: { ...req.query },
        attributes: dto,
      });
      res.status(StatusCodes.OK).send(payload);
    })

    .get(basePath + '/one', (req, res) => {
      res.send(repo.findOne({ where: { ...req.query }, attributes: dto }));
    })

    .get(basePath + '/:id', (req, res) => {
      res.send(repo.findById(req.params['id'], dto));
    })

    .post(basePath, (req, res) => {
      res.send(repo.create(req.body, { ...req.query }));
    })

    .post(basePath + '/many', (req, res) => {
      res.send(repo.bulkCreate(req.body, { ...req.query }));
    })

    .put(basePath, (req, res) => {
      res.send(repo.upsert(req.body, { ...req.query }));
    })

    .delete(basePath, (req, res) => {
      res.send(repo.remove({ where: { ...req.query } }));
    });

  return router;
}
