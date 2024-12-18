import http from "k6/http";
import Utils from "../utils/utils";
import { check } from "k6";

export default class Products {

  list(token) {
    let response = http.get(`${Utils.getBaseUrl()}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    check(response, {
      "Status must be 200": (r) => r.status === 200,
    });
  }
  
}
