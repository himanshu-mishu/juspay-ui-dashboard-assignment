import { contacts } from "../../data/notificationsData";

export default function ContactList() {
  return (
    <div>
      {/* Section heading styling */}
      <h3 className="font-inter font-semibold text-[14px] leading-5 tracking-normal mb-2">
        Contacts
      </h3>
      <ul>
        {contacts.map(contact => (
          <li
            key={contact.id}
            className="flex items-center gap-2 py-1"
          >
            <img
              src={contact.profile}
              alt={contact.name}
              className="w-6 h-6 rounded-full"
              style={{ minWidth: 24, minHeight: 24 }}
            />
            <span className="font-inter font-normal text-[14px] leading-5 tracking-normal p-1">
              {contact.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
