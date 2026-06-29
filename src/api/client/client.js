import { request } from "../core/request";

class ApiClient {
  get(url) {
    return request(url);
  }

  post(url, data) {
    return request(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  put(url, data) {
    return request(url, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  patch(url, data) {
    return request(url, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  delete(url) {
    return request(url, {
      method: "DELETE",
    });
  }

  upload(url, formData) {
    return request(url, {
      method: "POST",
      body: formData,
    });
  }
}

export default new ApiClient();
