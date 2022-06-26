import axios from "axios";

export default async function ({ token, id }) {
  var data = JSON.stringify({
    id: id,
  });
  var config = {
    method: "post",
    url: process.env.URL_SERVER + "/institute",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    data: data,
  };

  const response = await axios(config)
    .then(function (response) {
      return {
        message: "Instituição criada com sucesso",
        status: "success",
        data: { ...response.data },
      };
    })
    .catch(function (error) {
      return {
        message: "Falha ao criar instituição",
        status: "error",
        data: error.response.data,
      };
    });
  return response;
}
