import { MODIFICA_EMAIL_CADASTRO } from '../actions/types';

const INITIAL_STATE = {
  email_novo_usuario: 'teste@exemplo.com'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_EMAIL_CADASTRO:
      return { ...state, email_novo_usuario: action.payload };
    default:
      return state;
  }
};
