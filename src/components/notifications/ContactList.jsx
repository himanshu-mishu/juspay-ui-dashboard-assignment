import { contacts } from "../../data/notificationsData";

export default function ContactList() {
  return (
    <div>
      <h3 className="font-inter font-semibold text-[14px] mb-2 text-[#232e3e] dark:text-gray-200">
        Contacts
      </h3>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className="flex items-center gap-2 py-1 text-[#232e3e] dark:text-gray-200">
            <img src={contact.profile} alt={contact.name} className="w-6 h-6 rounded-full" />
            <span className="font-inter text-[14px]">{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
