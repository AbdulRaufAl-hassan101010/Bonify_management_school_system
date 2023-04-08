import axios from "axios";

const url = `http://127.0.0.1:5000/api/users`;

class User {
  static async addUser(data) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default User;
