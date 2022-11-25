const ENDPOINT_ENV = "http://localhost:8989";

const GETIMAGE_API = async (params = {}) => {
  return await fetch(`${ENDPOINT_ENV}/images?` + new URLSearchParams(params))
    .then((response) => response.json())
    .then((data) => data);
};

const UPLOAD_IMAGE_API = async (file) => {
  let formData = new FormData();
  formData.append("upload", file);
  return await fetch(`${ENDPOINT_ENV}/uploads`, {
    method: "post",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data);
};
