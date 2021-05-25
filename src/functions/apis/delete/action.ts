import { Connection } from 'typeorm';
import { UserRepository } from '../../../repositories/UserRepository';
import { UserNotFoundError } from './responses';
import { Logger } from '../../../libs/Logger';

export class DeleteAction {
    private connection: Connection;
    private repository: UserRepository;

    constructor(connection: Connection) {
        this.connection = connection;
        this.repository = connection.getCustomRepository(UserRepository);
    }

    async execute(id: string): Promise<void> {
        const user = await this.repository.getUserByUUID(id);
        if (user == undefined) throw new UserNotFoundError();

        await this.repository.softDelete(user);
        return;
    }
}
