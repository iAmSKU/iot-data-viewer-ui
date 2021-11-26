import axios from "axios";

const endPoint = "http://localhost:3001";
const baseApi = "/api/v1";

export const SaveConfigData = (data) => {
  console.log("save request for:", data);
  axios
    .post(endPoint + baseApi + `/data`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
