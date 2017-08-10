import { MODIFICA_EMAIL_CADASTRO } from './types';

export const modificaEmailCadastro = (texto) => ({
    type: MODIFICA_EMAIL_CADASTRO,
    payload: texto
});
