export interface Simulacao {
  id?: number;
  id_usuario?: number;
  salario_bruto: number;
  valor_inss: number;
  valor_irpf: number;
  outros_descontos: number;
  salario_liquido: number;
  data_calculo: string;
}

export interface FaixaAplicada {
  descricao: string;
  aliquota: number;
  valorDescontado: number;
}
