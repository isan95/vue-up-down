import axios from 'axios';

const API_URL = 'http://javaupdown-env.eba-i5cemnij.us-east-2.elasticbeanstalk.com/api/auth/';

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
}

export default new AuthService();