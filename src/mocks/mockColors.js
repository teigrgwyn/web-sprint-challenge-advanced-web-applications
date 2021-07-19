import {axiosWithAuth} from '../helpers/axiosWithAuth';

export const fetchColor = () => {
  axiosWithAuth().get('/colors')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}