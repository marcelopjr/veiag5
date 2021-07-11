import api from './api';

export default class FuncionarioService {
  getFuncionario() {
    return api.get('/funcionario').then(res => res.data);
  }
}
