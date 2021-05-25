import { TAGS_NAMES } from '../config';
import { METHODS } from '../default';
import { LANGUAGE } from '../language';

const key = 'register';
const method = METHODS.post;
const tag = TAGS_NAMES.RESOURCES;
const summary = 'User Registration';
const parameters = {
    body: {
        schema: 'RegisterRequest',
        example: {
            first_name: 'Antonio',
            last_name: 'Aradaza',
            email: 'example@example.com',
            mobile: '09123456789',
            password: 'password',
        },
    },
};
const responses = {
    422: {
        description: LANGUAGE.RESPONSES.DEFAULT['422'],
        schema: 'Response422',
        example: {
            code: 422,
            message: 'Parameter error: Please provide required parameter',
            errors: {
                first_name: 'First name is required',
                last_name: 'Last name is required',
                email: 'Email is required',
                mobile: 'Mobile is required',
                password: 'Password is required',
            },
        },
    },
    409: {
        description: LANGUAGE.RESPONSES.DEFAULT['409'],
        schema: 'Response409',
        examples: {
            EMAIL_EXIST: {
                code: 409,
                message: 'Email already exist',
            },
            MOBILE_EXIST: {
                code: 409,
                message: 'Mobile already exist',
            },
        },
    },
    200: {
        description: 'Successful Registration',
        schema: 'RegisterResponse',
        example: {
            code: 200,
            message: 'Registration successful',
            user: {
                name: 'Antonio Aradaza',
                email: 'example@example.com',
                mobile: '09123456789',
                emailVerifiedAt: null,
                mobileVerifiedAt: null,
            },
        },
    },
};

module.exports.default = {
    key,
    method,
    tag,
    summary,
    parameters,
    responses,
};
