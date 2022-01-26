import { Btn } from '../ContactForm/ContactForm.styled';
import { Item } from './ContactListItem.styled';

export default function ContactListItem({ contact, onDelete }) {
  return (
    <Item>
      {contact.name}: {contact.number}
      <Btn
        className="deleteBtn"
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </Btn>
    </Item>
  );
}
