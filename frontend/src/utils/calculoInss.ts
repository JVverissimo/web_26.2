import type { TabelaImposto } from '../types/tabelaImposto';

export interface ResultadoInss {
  total: number;
}

export function calcularInss(salarioBruto: number, faixas: TabelaImposto[]): ResultadoInss {
  // TODO: implementar cálculo progressivo conforme faixas vigentes do INSS
  void salarioBruto;
  void faixas;
  return { total: 0 };
}
