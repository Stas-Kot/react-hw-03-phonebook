import ContactListItem from '../ContactListItem/ContactListItem';
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
