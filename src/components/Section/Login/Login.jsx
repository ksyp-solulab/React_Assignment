import React from 'react'
import Style from './login.module.css'

function Login() {
  return (
    <section className={Style.form}>
        <div className="container">
            <div className="row">
                <div className="col-sm-4 offset-sm-1">
                    <div className={Style.loginForm}>
                        <h2>Login to your account</h2>
                        <form action="#">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email Address" />
							<span>
								<input type="checkbox" className={Style.checkbox} /> 
								Keep me signed in
							</span>
							<button type="submit">Login</button>
                        </form>
                    </div>
                </div>
                <div className="col-sm-1">
                <h2 className={Style.or}>OR</h2>
                </div>
                <div className="col-sm-4">
                    <div className={Style.signUp}>
                    <h2>New User Signup!</h2>
						<form action="#">
							<input type="text" placeholder="Name"/>
							<input type="email" placeholder="Email Address"/>
							<input type="password" placeholder="Password"/>
							<button type="submit">Signup</button>
						</form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login