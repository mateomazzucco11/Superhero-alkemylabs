import axios from 'axios';

const getHeros = async(id) => {
  const token = process.env.REACT_APP_FACEBOOK_TOKEN

  const data = await axios({
    method: 'get',
    url: `/api/${token}/${id}`,
    validateStatus: () => {
      return true;
    }
  })

  return data;
}

export default getHeros;