import { FindOptions } from 'sequelize';

export interface BaseController<CreateDTO, UpdateDTO> {
  create(createUserDto: CreateDTO);
  findAll(findOptions: FindOptions);
  findById(id: string);
  update(updateOptions, updateDTO: UpdateDTO);
  updateById(id: string, updateUserDto: UpdateDTO);
  removeById(id: string);
}
