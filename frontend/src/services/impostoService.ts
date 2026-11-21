import type { TabelaImposto } from '../types/tabelaImposto';
import { apiRequest } from './api';

export async function listarTabelasImposto(): Promise<TabelaImposto[]> {
  const response = await apiRequest<{ data: TabelaImposto[] }>('/tabela-impostos');
  return response.data;
}
