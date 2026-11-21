import type { Usuario } from '../types/usuario';
import { limparSessao, setToken, setUsuarioAtual } from '../utils/storage';
import { apiRequest } from './api';

interface AuthResponse {
  jwt: string;
  user: Usuario;
}

export async function login(identifier: string, password: string): Promise<Usuario> {
  const data = await apiRequest<AuthResponse>('/auth/local', {
    method: 'POST',
    body: JSON.stringify({ identifier, password }),
  });

  setToken(data.jwt);
  setUsuarioAtual(data.user);
  return data.user;
}

export function logout(): void {
  limparSessao();
}
