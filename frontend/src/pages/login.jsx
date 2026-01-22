function Login(){
    return(
        <div>
            <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button className="Loginbtn">Submit</button>
            </form>
        </div>
    )
}
export default Login;