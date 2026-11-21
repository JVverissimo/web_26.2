import type { Usuario } from '../types/usuario';

const TOKEN_KEY = 'tributo_facil_token';
const USER_KEY = 'tributo_facil_user';

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getUsuarioAtual(): Usuario | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as Usuario;
  } catch {
    return null;
  }
}

export function setUsuarioAtual(usuario: Usuario): void {
  localStorage.setItem(USER_KEY, JSON.stringify(usuario));
}

export function limparSessao(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
