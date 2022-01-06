import {body} from 'express-validator'

export const addEmployeeValidation=[
    body('name')
        .exists()
        .isLength({min:1,max:20})
        .withMessage("Name should be less than 20 characters"),

    body('dateOfBirth')
        .exists()
        .isAfter("1900-01-01")
        .withMessage("Birth Date should be after 1900-01-01"),

    body('gender')
        .exists()
        .isLength({ max: 6, min: 4 })
        .withMessage("Please enter valid gender"),
        
    body('salary')
        .exists()
        .isFloat({ max: 500000, min: 5000 })
        .withMessage("salary should be between 5000 and 500,000"),
]



export const updateEmployeeValidation=[
    body('name')
        .isLength({min:1,max:20})
        .withMessage("Name should be less than 20 characters"),

    body('dateOfBirth')
        .isAfter("1900-01-01")
        .withMessage("Birth Date should be after 1900-01-01"),

    body('gender')
        .isLength({max:6,min:4})
        .withMessage("please enter valid gender"),

    body('salary')
        .isFloat({ max: 500000, min: 5000 })
        .withMessage("salary should be between 5000 and 500,000"),
]