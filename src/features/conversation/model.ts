export type Message = { id: number; author: 'cheese' | 'user'; text: string };
export const initialMessages: Message[] = [{ id: 0, author: 'cheese', text: 'Olá! Eu sou o Cheese. Ainda estou aprendendo a existir por aqui. O que você gostaria de explorar?' }];
export function localReply(input: string): string {
  if (!input.trim()) return '';
  return 'Recebi sua mensagem! Nesta primeira versão, minha resposta é simulada e nossa conversa fica apenas nesta sessão.';
}
