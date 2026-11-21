import '../styles/components/tabela.css';
import type { FaixaAplicada } from '../types/simulacao';
import { formatarMoeda, formatarPercentual } from '../utils/formatadores';

export function renderExtratoTabela(
  container: HTMLElement,
  faixas: FaixaAplicada[],
): void {
  const table = document.createElement('table');
  table.className = 'tabela';

  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  for (const heading of ['Faixa', 'Alíquota', 'Desconto']) {
    const th = document.createElement('th');
    th.textContent = heading;
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);

  const tbody = document.createElement('tbody');
  for (const faixa of faixas) {
    const row = document.createElement('tr');

    const tdDesc = document.createElement('td');
    tdDesc.textContent = faixa.descricao;

    const tdAliquota = document.createElement('td');
    tdAliquota.textContent = formatarPercentual(faixa.aliquota);

    const tdValor = document.createElement('td');
    tdValor.textContent = formatarMoeda(faixa.valorDescontado);

    row.append(tdDesc, tdAliquota, tdValor);
    tbody.appendChild(row);
  }

  table.append(thead, tbody);
  container.replaceChildren(table);
}
