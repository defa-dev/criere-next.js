/**
 * Redireciona o navegador para uma URL externa (ex.: checkout do Mercado Pago).
 *
 * Isolado num módulo próprio para que o efeito colateral de navegação possa ser
 * mockado em testes — jsdom blinda window.location e não permite espioná-lo.
 */
export function redirect(url: string) {
  window.location.assign(url)
}
