
export const checkValidateForm = (email,password,name,isSignInForm)=>{
    const isEmailValid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isnamevalid =/^[A-Za-z]\\w{5,29}$/.test(name)
    // if(!isnamevalid && !isSignInForm) return "user name is not valid."
    if(!isEmailValid) return "Email ID is not valid."
    if(!isPasswordValid) return "Incorrect password."
    

    return null;
}