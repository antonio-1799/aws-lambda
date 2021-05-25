import { Connection } from 'typeorm';
import { UserRepository } from '../../../repositories/UserRepository';
import { UserNotFoundError } from './responses';
import { UserModel } from '../../../models/UserModel';

export class ViewAction {
    private connection: Connection;
    private repository: UserRepository;

    constructor(connection: Connection) {
        this.connection = connection;
        this.repository = connection.getCustomRepository(UserRepository);
    }

    async execute(id: string): Promise<UserModel> {
        const user = await this.repository.getUserByUUID(id);
        if (user == undefined) throw new UserNotFoundError();

        return user;
    }
}
