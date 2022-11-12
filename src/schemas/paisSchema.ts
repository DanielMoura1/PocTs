import Joi from "joi";

export const PaisScrema=Joi.object({
    time:Joi.string().required()
})
