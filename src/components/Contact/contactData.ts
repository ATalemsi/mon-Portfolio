import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { ContactItemType } from './types';

export const contactItems: ContactItemType[] = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "mohamadtalemsi@gmail.com",
    href: "mailto:mohamadtalemsi@gmail.com"
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+212-639-72-6393",
    href: "tel:+212-639-72-6393"
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Safi - Morocco"
  }
];