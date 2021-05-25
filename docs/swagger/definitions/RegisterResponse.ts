import { API_STANDARD, TYPES } from '../default';

module.exports.default = {
    RegisterResponse: {
        ...API_STANDARD(),
        user: {
            type: TYPES.object,
            description: 'User information',
            properties: {
                name: {
                    type: TYPES.string,
                    description: "User's full name",
                },
                email: {
                    type: TYPES.string,
                    description: "User's email address",
                },
                mobile: {
                    type: TYPES.string,
                    description: "User's mobile number",
                },
                emailVerifiedAt: {
                    type: TYPES.string,
                    description: 'User email verified at',
                },
                mobileVerifiedAt: {
                    type: TYPES.string,
                    description: 'User mobile verified at',
                },
            },
        },
    },
};
