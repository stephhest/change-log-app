import { validationResult } from "express-validator";


export const handleInputErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        res.status(400).json({message: "Invalid Input"});
    } else {
        next();
    };
}
