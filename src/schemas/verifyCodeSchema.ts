import Joi from "joi";

const verifyCodeSchema = Joi.object({
  code: Joi.string()
    .length(6)
    .pattern(/^\d{5}[0-689]$/)
    .invalid(Joi.ref("$invalidCodes"))
    .required()
    .messages({
      "string.base": "Verification code must be a string",
      "string.empty": "Verification code is required",
      "string.length": "Verification code must be exactly 6 characters long",
      "string.pattern.base": "Verification code must contain only digits and the last digit must not be 7",
      "any.required": "Verification code is required",
      "any.invalid": "Invalid verification code",
    }),
});

export { verifyCodeSchema };
