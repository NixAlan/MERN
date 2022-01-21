import React, {useState} from "react";

const Userform = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [nameError,] = useState("`that field must be at least 2 characters`")
    const [email, setEmail] = useState("")
    const [emailError,] = useState("Email must be at least 5 characters")
    const [password, setPassword] = useState("")
    const [passwordError] = useState("Password must be 8 characters")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError] = useState("Passwords Must Match")
    

    return(
        <form>
            <div className='input-box'>
            <label >First Name</label>
            <input type="text" value={firstName} onChange = {(e) => setFirstName(e.target.value)}/>
            </div>
            {
            firstName.length === 1 && <p>{nameError}</p>
            }
            <div className='input-box'>
            <label >Last Name</label>
            <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
            </div >
            {
            lastName.length === 1 && <p>{nameError}</p>
            }
            <div className='input-box'>
            <label >Email:</label>
            <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)}/>
            </div >
            {
            email.length > 0 && email.length < 5 &&   <p>{emailError}</p> 
            }
            
            <div className='input-box'>
            <label >Password</label>
            <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            {
            password.length > 0 && password.length < 8 && <p>{passwordError}</p>
            }
            
            <div className='input-box'>
            <label >Confirm Password</label>
            <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
            </div>
            {
            confirmPassword.length > 0 && password != confirmPassword && <p>{confirmPasswordError}</p>
            }
        </form>
        
    )
}

export default Userform