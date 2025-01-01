/*
- Remember its object not json
- For Those method which doesn't take anything just give errorMessage Part
-----------/---------------= {
   fieldName: {
     Name_Of_Method:{
     options: {
     errorMessage: "---/----"
     }     
     },
     Another_Of_Method: {
     options: {
     "----/-----"
     }     
     },
     ... so on
   },
   Another FieldName: {
     Name_Of_Method:{
     options: {
     errorMessage: "---/----"
     }     
     },
     Another_Of_Method: {
     options: {
     "----/-----"
     }     
     },
     ... so on
   }
    ... so on
}
*/


export const studentValidationForQueryParameters = {
    firstName: {
        isString: {
            options:{
                errorMessage: "First Name Must be String"
            }
        },
        isEmpty: {
            options:{
                errorMessage: "First Name Must Not be Empty"
            }
        },
        isLength:{
            options:{
                min: 3,
                max: 10,
                errorMessage: "Min Character: 3 and Max Character: 10"
            }
        }
    },
    lastName:{
        isString:{
            options:{
                errorMessage: "Last Name must be String"
            }
        },
        isEmpty:{
            options:{
                errorMessage: "Last Name Must Not Be Empty"
            }
        }
    }
};


export const studentValidationForJSON = {
    firstName: {
        isString: {
            options:{
                errorMessage: "First Name Must be String"
            }
        },
        isEmpty: {
            options:{
                errorMessage: "First Name Must Not be Empty"
            }
        },
        isLength:{
            options:{
                min: 3,
                max: 10,
                errorMessage: "Min Character: 3 and Max Character: 10"
            }
        }
    },
    lastName:{
        isString:{
            options:{
                errorMessage: "Last Name must be String"
            }
        },
        isEmpty:{
            options:{
                errorMessage: "Last Name Must Not Be Empty"
            }
        }
    },
    mobile:{
        isEmpty:{
            options:{
                errorMessage: "Mobile Number must not be empty."
            }
        }
    }
};