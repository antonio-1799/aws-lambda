import { HttpResponse } from '../../../libs/Contracts/HttpResponse';

export class Responses {
    static STATUS_200: HttpResponse = {
        code: 200,
        message: 'User information',
    };
}

export class UserNotFoundError {
    public code = 404;
    public message = 'User not found';
}