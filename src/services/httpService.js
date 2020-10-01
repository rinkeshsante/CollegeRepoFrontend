import axios from "axios";

// handeling unexpected error
axios.interceptors.response.use(null, (error) => {
  const expected_err =
    error.respose && error.respose.status >= 400 && error.respose.status < 500;

  if (!expected_err) {
    alert("Something Failed While Loading!");
  }

  console.log(error);
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
