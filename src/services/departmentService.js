import { ApiEndpoint } from "../config.json";
import http from "./httpService";
const url = ApiEndpoint + "departments/";

export function departmentData() {
  return http.get(url);
}

export function deleteDepartment(id) {
  return http.delete(url + id + "/");
}
