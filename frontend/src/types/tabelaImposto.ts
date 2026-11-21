export type TipoImposto = 'INSS' | 'IRPF';

export interface TabelaImposto {
  id: number;
  tipo_imposto: TipoImposto;
  ano_vigencia: number;
  data_inicio: string;
  data_fim?: string | null;
  ativo: boolean;
  faixa_salarial_inicio: number;
  faixa_salarial_fim?: number | null;
  aliquota: number;
  parcela_deduzir: number;
}
