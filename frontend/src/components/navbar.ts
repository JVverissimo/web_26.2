import '../styles/components/navbar.css';
import { getUsuarioAtual } from '../utils/storage';

export function renderNavbar(containerId = 'navbar'): void {
  const container = document.getElementById(containerId);
  if (!container) return;

  const usuario = getUsuarioAtual();

  const links: Array<{ href: string; label: string }> = [
    { href: '/index.html', label: 'Calculadora' },
  ];

  if (usuario) {
    links.push(
      { href: '/historico.html', label: 'Histórico' },
      { href: '/perfil.html', label: 'Perfil' },
    );

    if (usuario.tipo_usuario === 'administrador') {
      links.push({ href: '/admin.html', label: 'Admin' });
    }
  } else {
    links.push({ href: '/login.html', label: 'Entrar' });
  }

  const nav = document.createElement('nav');
  nav.className = 'navbar';

  const inner = document.createElement('div');
  inner.className = 'navbar__inner';

  const brand = document.createElement('a');
  brand.className = 'navbar__brand';
  brand.href = '/index.html';
  brand.textContent = 'Tributo Fácil';

  const ul = document.createElement('ul');
  ul.className = 'navbar__links';

  for (const link of links) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    li.appendChild(a);
    ul.appendChild(li);
  }

  inner.append(brand, ul);
  nav.appendChild(inner);
  container.replaceChildren(nav);
}
