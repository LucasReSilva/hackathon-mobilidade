import {
	MODIFICA_EMAIL_CADASTRO,
	MODIFICA_SENHA_CADASTRO }
from '../actions/types';

const INITIAL_STATE = {
	email_novo_usuario: '',
	senha_novo_usuario: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MODIFICA_EMAIL_CADASTRO:
			return { ...state, email_novo_usuario: action.payload };
		case MODIFICA_SENHA_CADASTRO:
			return { ...state, senha_novo_usuario: action.payload };
		default:
			return state;
	}
};
