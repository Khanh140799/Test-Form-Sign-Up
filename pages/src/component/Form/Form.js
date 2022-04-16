import { useState } from "react"
import styles from "./Form.module.css"



const Form=()=>{
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const regex = /[A-Z]/g;
    const regex2 = /[a-z]/g;
    const [values,setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })
    const[errors,setErrors] = useState({})
    const[notify,setNotify] = useState('')
    const[issuccess,setIssuccess] = useState(false)
    const handleChange = e=>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    if(!values.username.trim()){
        errors.username = "Username require"
    }else{
        errors.username= ' '
    }
    if (!values.email) {
        errors.email = 'Email required';
      } else if (!filter.test(values.email)) {
        errors.email = 'Email address is invalid';
      }else{
          errors.email = ' '
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
      }else if(values.password.length>32){
        errors.password='Password needs to be less than 32 characters'
      }else if(values.password.match(regex)===null || values.password.match(regex2)===null){
        errors.password = 'Password needs contain 1 upcase character and 1 lowcase character'
     }else{
         errors.password=' '
     }
    
      if (!values.password2) {
        errors.password2 = 'Confirm password is required';
      } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
      } else{
          errors.password2=' '
      }
      const handleSubmit=e=>{
        e.preventDefault();
        setNotify(values.username)
        setIssuccess(true)
    }
    const a=(errors.username===' ' && errors.email=== ' ' && errors.password===' ' && errors.password2===' ');
    

    return(
        <div className={styles.page}>
            <form className={issuccess===false?styles.contain:styles.contain_2}>
                
                <div className={styles.title_form}>Create Account</div>
                <div className={styles.username}>
                    <div className={styles.title}>Username</div>
                    <input 
                    type="text"
                    placeholder="Enter your user name"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    className={styles.input}
                    />
                </div>
                <div className={styles.contain_error}>
                    {errors.username&&<div className={styles.error}>{errors.username}</div>}
                </div>
                <div className={styles.email}>
                    <div className={styles.title}>Email</div>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={styles.input}
                    />
                </div>
                <div className={styles.contain_error}>
                    {errors.email&&<div className={styles.error}>{errors.email}</div>}
                </div>
                <div className={styles.password}>
                    <div className={styles.title}>Password</div>
                    <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className={styles.input}
                    />
                </div>
                <div className={styles.contain_error}>
                    {errors.password&&<div className={styles.error}>{errors.password}</div>}
                </div>
                <div className={styles.password}>
                    <div className={styles.title}>Confirm Password</div>
                    <input
                    type="password"
                    placeholder="Confirm your password"
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                    className={styles.input}
                    />
                </div>
                <div className={styles.contain_error}>
                    {errors.password2&&<div className={styles.error}>{errors.password2}</div>}
                </div>
                <button 
                onClick={handleSubmit}
                className={ a===true ? styles.btn_submit : styles.btn_submit2}
                disabled={a===false}
                >SUBMIT</button>
            </form>
            <div className={issuccess===false?styles.notify_2:styles.notify}>
                    <div>{notify} Regist Success</div>
                </div> 
            
        </div>
    )
}
export default Form;