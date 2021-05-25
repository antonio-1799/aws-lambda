import { HttpResponse } from '../../../libs/Contracts/HttpResponse';

export class Responses {
    static STATUS_200: HttpResponse = {
        code: 200,
        message: 'Registration successful',
    };
}

export class EmailExistError {
    public code = 409;
    public message = 'Email already exist!';
}

export class MobileExistError {
    public code = 409;
    public message = 'Mobile already exist!';
}
