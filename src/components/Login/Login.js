import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const history = useHistory();
  const handleSignIn = async () => {
    try {
      const response = await axios.post('https://damp-eyrie-85760.herokuapp.com/user', {
        email: email,
        password: password
      })
      if (response.data.user !== null) {
        const email = response.data.user.email
        const user = { email: email}
        setLoggedInUser(user)
        history.push('/home')
      }
    } catch (err) {
      console.log(err.response.data.err)
      setError(err.response.data.err)
    }
    
  }
 
  return (
    <div className="md:flex md:justify-center h-screen items-center mb-6">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }} />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(event) => { setPassword(event.target.value) }} />

          </div>
          <div class="flex items-center ">
            <button onClick={handleSignIn} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>

          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;