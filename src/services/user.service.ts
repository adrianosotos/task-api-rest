import { omit, get } from 'lodash';
import { FilterQuery, QueryOptions } from 'mongoose';
import config from 'config';
import userModel, { User } from '../models/user.model';
import { excludedFields } from '../controllers/auth.controller';
import { signJwt } from '../utils/jwt';
import redisClient from '../utils/connectRedis';
import { DocumentType } from '@typegoose/typegoose';
import { SetOptions } from 'redis';

export const createUser = async (input: Partial<User>) => {
  const user = await userModel.create(input);
  return omit(user.toJSON(), excludedFields);
};

export const findUserById = async (id: string) => {
  const user = await userModel.findById(id).lean();
  return omit(user, excludedFields);
};

export const findAllUsers = async () => {
  return await userModel.find();
};

export const findUser = async (
  query: FilterQuery<User>,
  options: QueryOptions = {}
) => {
  return await userModel.findOne(query, {}, options).select('+password');
};

export const signToken = async (user: DocumentType<User>) => {
  const access_token = signJwt(
    { sub: user._id },
    {
      expiresIn: `${config.get<number>('accessTokenExpiresIn')}m`,
    }
  );

  const userId = user._id.toString();

const setOptions: SetOptions = {
  EX: 60 * 60,
};

  redisClient.set(userId, JSON.stringify(user), setOptions);

  return { access_token };
};
