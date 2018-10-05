import { PropTypes, Component } from 'react'

export const Signup = ({ username,
							 password,
							 playername,
							 permission,
               email }) => {

	let _username, _password, _permission, _email

	const submit = (e) => {
		e.preventDefault()
		console.log('username', _username.value)
		console.log('password', _password.value)
		console.log('permission', _permission.value)
    console.log('email', _email.value)

	}

	return (
		<form onSubmit={submit} className="Signup-form">

			<label htmlFor="username">Username</label>
			<input id="username"
				   type="text"
				   required
				   defaultValue={username}
				   ref={input => _username = input}/>

			<label htmlFor="password">password</label>
			<input id="password"
				   type="text"
				   required
				   defaultValue={password}
				   ref={input => _password = input}/>

      <label htmlFor="email">Email</label>
			<input id="email"
				   type="text"
				   defaultValue={email}
				   ref={input => _email = input}/>


      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Permission
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="NA">None</a>
            <a class="dropdown-item" href="0">User</a>
            <a class="dropdown-item" href="1">Author</a>
            <a class="dropdown-item" href="2">Admin</a>
          </div>
      </div>

			<button>Signup</button>
		</form>
	)
}

Signup.defaultProps = {
	username: "User",
	password: "pass",
	permission: "None"
  email: "User@me.com"
}


Signup.propTypes = {
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
  permission: PropTypes.string.isRequired,
}
