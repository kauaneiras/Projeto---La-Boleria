import joi from 'joi';

const cakeSchema = joi.object({
    //price deve ser maior que 0
    name: joi.string().min(2).required(),
    price: joi.number().min(0.1).required(),
    description: joi.string(),
    image: joi.string().uri().required()
});

export default cakeSchema;

    
