export interface IBaseInputProps {
  label?: string;
  name: string;
  placeholder: string;
  type?: HTMLInputElement['type'];
  error?: string;
}
