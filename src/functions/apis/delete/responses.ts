import { HttpResponse } from '../../../libs/Contracts/HttpResponse';

export class Responses {
    static STATUS_204: HttpResponse = {
        code: 204,
        message: 'User deleted successfully',
    };
}

export class UserNotFoundError {
    public code = 404;
    public message = 'User not found';
}
