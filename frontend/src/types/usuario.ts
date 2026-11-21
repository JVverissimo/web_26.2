export type TipoUsuario = 'visitante' | 'padrao' | 'administrador';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  tipo_usuario: TipoUsuario;
  numero_dependentes: number;
  deducao_pensao: number;
  deducao_saude: number;
  outras_deducoes: number;
  criado_em?: string;
  atualizado_em?: string;
}
