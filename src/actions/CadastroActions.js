import { MODIFICA_EMAIL_CADASTRO, MODIFICA_SENHA_CADASTRO } from './types';

export const modificaEmailCadastro = (texto) => ({
    type: MODIFICA_EMAIL_CADASTRO,
    payload: texto
});

export const modificaSenhaCadastro = (texto) => ({
    type: MODIFICA_SENHA_CADASTRO,
    payload: texto	
});
