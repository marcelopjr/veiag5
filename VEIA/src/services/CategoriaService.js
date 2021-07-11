import api from './api';

export default class CategoriaService {
  getCategoria() {
    return api.get('/categoria').then(res => res.data);
  }
}
