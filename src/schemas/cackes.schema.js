import joi from 'joi';

const cakeSchema = joi.object({
    //description pode ser vazia
    name: joi.string().min(2).required(),
    price: joi.number().min(0).required(),
    description: joi.string(),
    image: joi.string().uri().required()
});

export default cakeSchema;

    
