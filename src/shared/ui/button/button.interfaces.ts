export interface IButtonProps {
  title: string;
  type: 'button' | 'submit';
  kind: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}
