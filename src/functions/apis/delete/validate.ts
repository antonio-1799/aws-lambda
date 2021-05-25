import { Validation } from '../../../libs/Validation';
import { joi } from '../../../libs/Joi';
import { DeleteRequest } from './requests';

export default (request: DeleteRequest): DeleteRequest => {
    const schema = joi
        .object({
            parameter_name: joi.string().required(),
        })
        .required();

    const validate = new Validation<DeleteRequest>(schema);
    return validate.validate(request);
};
