import type { Simulacao } from '../types/simulacao';
import { apiRequest } from './api';

export async function listarSimulacoes(): Promise<Simulacao[]> {
  const response = await apiRequest<{ data: Simulacao[] }>('/simulacoes');
  return response.data;
}

export async function salvarSimulacao(simulacao: Omit<Simulacao, 'id'>): Promise<Simulacao> {
  const response = await apiRequest<{ data: Simulacao }>('/simulacoes', {
    method: 'POST',
    body: JSON.stringify({ data: simulacao }),
  });
  return response.data;
}
