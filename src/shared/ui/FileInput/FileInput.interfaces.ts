import { IBlockProps } from '@/shared/render';

export interface IFileInputProps extends IBlockProps {
  acceptedFiles: string;
  name: string;
}
