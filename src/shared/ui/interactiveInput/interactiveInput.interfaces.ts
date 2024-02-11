export interface IInteractiveInputProps {
  label: string;
  name: string;
  placeholder: string;
  type?: HTMLInputElement['type'];
  error?: string;
  isDisabled: boolean;
}
