import { IconType } from 'react-icons';

export interface ContactItemType {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}