import { describe, expect, it } from 'vitest';
import { localReply } from './model';

describe('conversa local', () => {
  it('ignora entradas vazias', () => expect(localReply('  ')).toBe(''));
  it('identifica a resposta como simulada', () => expect(localReply('Olá')).toContain('simulada'));
});
