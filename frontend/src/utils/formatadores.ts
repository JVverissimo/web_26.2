export function formatarMoeda(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatarPercentual(aliquota: number): string {
  return `${(aliquota * 100).toFixed(2).replace('.', ',')}%`;
}

export function formatarData(dataIso: string): string {
  return new Date(dataIso).toLocaleDateString('pt-BR');
}
