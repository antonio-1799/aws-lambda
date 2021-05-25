import { Connection } from 'typeorm';
import { UserRepository } from '../../../repositories/UserRepository';
import { EmailExistError, MobileExistError } from './responses';
import { UserModel } from '../../../models/UserModel';
import * as bcrypt from 'bcrypt';

export class RegisterAction {
    private connection: Connection;
    private repository: UserRepository;

    constructor(connection: Connection) {
        this.connection = connection;
        this.repository = connection.getCustomRepository(UserRepository);
    }

    async execute(
        first_name: string,
        last_name: string,
        email: string,
        mobile: string,
        password: string,
    ): Promise<UserModel> {
        const emailExist = await this.repository.checkUserEmail(email);
        if (emailExist) throw new EmailExistError();

        const mobileExist = await this.repository.checkUserMobile(mobile);
        if (mobileExist) throw new MobileExistError();

        const salt = bcrypt.genSaltSync(5);
        const hash = await bcrypt.hash(password, salt);

        return await UserModel.create({
            name: first_name + ' ' + last_name,
            email,
            mobile,
            password: hash,
        }).save();
    }
}
