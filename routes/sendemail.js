const express = require("express");
const router = express.Router();
const Joi = require("joi")
const sendEmail = require("../utils/maile")

//sign up
router.post("/", async (req, res) => {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	sendEmail(req.body, () => console.log("SEnd email"))
		
	// input validation
	const validate = (req) => {
		const schema = Joi.object({
			fullname: Joi.string().min(5).max(100).required(),
			email: Joi.string().min(5).max(100).required().email({
				minDomainSegments: 2,
				tlds: {
					allow: ["com", "net", "org", "co.ke", "world", "info" ] }
			}),
			company: Joi.string().min(5).max(100).required(),
			telephone: Joi.string().min(5).max(100).required(),
			message: Joi.string().min(20).max(2000).required(),
		});
		return schema.validate(req);
	};
});

module.exports = router;
