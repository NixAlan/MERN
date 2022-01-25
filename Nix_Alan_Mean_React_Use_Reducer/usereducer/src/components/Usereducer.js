import React, {useReducer} from "react"

const initialState = {
        firstName: {
            value: '',
            error: null
        },
         lastName: {
             value: '',
             error: null
         },
         email: {
             value: '',
             error: null
         }
    };

    const reducer = (state, action) => {
            switch(action.type) {
                case "SET_FIRST_NAME_CHANGE":
                    return{
                        ...state,
                        firstName: {
                        ...state.firstName,
                        value: action.payload,
                        },
                    };
                    
                case "SET_FIRST_NAME_ERROR":
                    return{
                        ...state,
                        firstName: {
                            ...state.error,
                            error: action.payload
                        }

                    }
                    case "SET_LAST_NAME_CHANGE":
                    return{
                        ...state,
                        lastName: {
                        ...state.lastName,
                        value: action.payload,
                        },
                    };
                    
                case "SET_LAST_NAME_ERROR":
                    return{
                        ...state,
                        lastName: {
                            ...state.error,
                            error: action.payload
                        }
                    }
                    case "SET_EMAIL_CHANGE":
                    return{
                        ...state,
                        email: {
                        ...state.email,
                        value: action.payload,
                        },
                    };
                    
                case "SET_EMAIL_ERROR":
                    return{
                        ...state,
                        email: {
                            ...state.error,
                            error: action.payload
                        }

                    }

        }
    }

    const Form = () => {
        const [state,dispatch] = useReducer(reducer, initialState);

         const handleFirstNameChange = (e) => {
            //  const {name, value} = e.target;
             if(e.target.value.length > 0 && e.target.value.length < 4){ 
             dispatch({
                 type: "SET_FIRST_NAME_ERROR",
                 payload: "First name must be at least 4 characters",
             }); 
            } else {
             dispatch({
                type: "SET_FIRST_NAME_ERROR",
                payload: null,
                
             })
            }
             dispatch({
                 type: "SET_FIRST_NAME_CHANGE",
                 payload: e.target.value
             });
        };
        const handleLastNameChange = (e) => {
             if(e.target.value.length > 0 && e.target.value.length < 4){ 
             dispatch({
                 type: "SET_LAST_NAME_ERROR",
                 payload: "Last name must be at least 4 characters"
             }); 
            } else {
             dispatch({
                type: "SET_LAST_NAME_ERROR",
                payload: null
             })
            }
            
             dispatch({
                 type: "SET_LAST_NAME_CHANGE",
                 payload: e.target.value
             })
             }
             const handleEmailChange = (e) => {
                if(e.target.value.length > 0 && e.target.value.length < 8){ 
                dispatch({
                    type: "SET_EMAIL_ERROR",
                    payload: "Email must be at least 8 characters"
                }); 
               } else {
                dispatch({
                   type: "SET_EMAIL_ERROR",
                   payload: null
                })
               }
               
                dispatch({
                    type: "SET_EMAIL_CHANGE",
                    payload: e.target.value
                })
                }
        
        return (
        <div>
            <div>
            <label>First Name:</label>
            <input
            type="text"
            name="firstName"
            onChange={(e) => handleFirstNameChange(e) }
            />
            <p>{state.firstName.error}</p>
            </div>
            <div>
            <label>Last Name:</label>
            <input
            type="text"
            name="lastName"
            onChange={(e) => handleLastNameChange(e) }
            />
            <p>{state.lastName.error}</p>
            </div>
            <div>
            <label>Email:</label>
            <input
            type="text"
            name="email"
            onChange={(e) => handleEmailChange(e) }
            />
            <p>{state.email.error}</p> 
            </div>
        </div>
        
        )
    }
    export default Form


    