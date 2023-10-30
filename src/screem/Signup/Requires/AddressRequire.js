import axios from "axios";

export const handleCepChange = ({ text, setCep, setAddressData }) => {
  setCep(text);

  if (/^\d{8}$/.test(text)) {
    axios
      .get(`https://viacep.com.br/ws/${text}/json/`)
      .then((response) => {
        if (response.status === 200) {
          setAddressData(response.data);
        } else {
          console.error("CEP inválido ou não encontrado");
          setAddressData({});
        }
      })
      .catch((error) => {
        console.error(error);
        setAddressData({});
      });
  } else {
    setAddressData({});
  }
};
