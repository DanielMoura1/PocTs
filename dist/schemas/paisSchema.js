import Joi from "joi";
export var PaisScrema = Joi.object({
    time: Joi.string().required()
});
