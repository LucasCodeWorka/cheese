export type AvatarState = 'idle' | 'listening' | 'thinking' | 'responding';
const labels: Record<AvatarState, string> = { idle: 'Em sintonia', listening: 'Escutando', thinking: 'Processando', responding: 'Respondendo' };
export function Avatar({ state }: { state: AvatarState }) {
  return <div className={`avatar-stage ${state}`} aria-label={`Avatar Cheese: ${labels[state]}`}>
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
    <div className="avatar-halo"/><div className="avatar-shell"><div className="avatar-face"><div className="brow"/><div className="eyes"><i/><i/></div><div className="mouth"/></div></div>
    <span className="avatar-coordinate coordinate-a">C / 001</span><span className="avatar-coordinate coordinate-b">● LIVE SIM</span>
  </div>;
}
