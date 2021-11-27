import axios from "axios";

const apiEndPoint = window.location.protocol === 'https:' ? (this.appPort ? `https://${window.location.hostname}:${this.appPort}/api/v1` :
  `https://${window.location.hostname}/api/v1`) : `http://${window.location.hostname}:3001/api/v1`;

export const SaveConfigData = (data) => {
  axios
    .post(apiEndPoint + `/data`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
