import { execute } from './handler';
import { ApiGatewayEvent } from '../../../libs/Contracts/ApiGatewayEvent';
import { RegisterRequest } from './requests';
import * as faker from 'faker';

test('422: PARAMETER ERROR', async () => {
    const event: ApiGatewayEvent = {
        body: JSON.stringify(<RegisterRequest>{
            first_name: '',
            last_name: '',
            email: '',
            mobile: '',
            password: '',
        }),
    };

    const result = await execute(event);
    const response = JSON.parse(result.body);

    expect(result).toHaveProperty('statusCode');
    expect(result).toHaveProperty('body');
    expect(response).toHaveProperty('code');
    expect(response).toHaveProperty('message');
    expect(response).toHaveProperty('errors');
    expect(response).toHaveProperty('errors.first_name');
    expect(response).toHaveProperty('errors.last_name');
    expect(response).toHaveProperty('errors.email');
    expect(response).toHaveProperty('errors.mobile');
    expect(response).toHaveProperty('errors.password');

    expect(result.statusCode).toBe(422);
    expect(response.code).toBe(422);
});

test('409: EMAIL ALREADY EXIST', async () => {
    const event: ApiGatewayEvent = {
        body: JSON.stringify(<RegisterRequest>{
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: 'example@example.com',
            mobile: '09218818212',
            password: 'password',
        }),
    };

    const result = await execute(event);
    const response = JSON.parse(result.body);

    expect(result).toHaveProperty('statusCode');
    expect(result).toHaveProperty('body');
    expect(response).toHaveProperty('code');
    expect(response).toHaveProperty('message');

    expect(result.statusCode).toBe(409);
    expect(response.code).toBe(409);
});

test('409: MOBILE ALREADY EXIST', async () => {
    const event: ApiGatewayEvent = {
        body: JSON.stringify(<RegisterRequest>{
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
            mobile: '09123456789',
            password: 'password',
        }),
    };

    const result = await execute(event);
    const response = JSON.parse(result.body);

    expect(result).toHaveProperty('statusCode');
    expect(result).toHaveProperty('body');
    expect(response).toHaveProperty('code');
    expect(response).toHaveProperty('message');

    expect(result.statusCode).toBe(409);
    expect(response.code).toBe(409);
});

test('200: SUCCESS', async () => {
    const event: ApiGatewayEvent = {
        body: JSON.stringify(<RegisterRequest>{
            first_name: faker.name.firstName(),
            last_name: faker.name.firstName(),
            email: faker.internet.email(),
            mobile: '09918817654',
            password: 'password',
        }),
    };

    const result = await execute(event);
    const response = JSON.parse(result.body);

    expect(result).toHaveProperty('statusCode');
    expect(result).toHaveProperty('body');
    expect(response).toHaveProperty('code');
    expect(response).toHaveProperty('message');

    expect(result.statusCode).toBe(200);
    expect(response.code).toBe(200);
});
