import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/api/auth/';

class AuthService {
    
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    console.log(user);
    return axios.post(API_URL + 'register',{
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
    }, { headers: authHeader()});
  }
}

export default new AuthService();