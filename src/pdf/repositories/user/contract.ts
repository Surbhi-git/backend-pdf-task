import { UserModel } from '@app/pdf/models';
import { RepositoryContract } from '@squareboat/nestjs-objection';

export interface UserRepositoryContract extends RepositoryContract<UserModel> {}
