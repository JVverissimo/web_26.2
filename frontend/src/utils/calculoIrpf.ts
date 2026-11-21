import type { TabelaImposto } from '../types/tabelaImposto';

export interface ResultadoIrpf {
  baseCalculo: number;
  total: number;
}

export function calcularIrpf(
  baseCalculo: number,
  faixas: TabelaImposto[],
): ResultadoIrpf {
  // TODO: implementar cálculo do IRPF conforme tabela vigente e deduções
  void faixas;
  return { baseCalculo, total: 0 };
}
