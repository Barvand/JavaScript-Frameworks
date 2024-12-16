import { ContactPageForm } from "../components/contact-form";
import ContactCards from "../components/contact-cards";

export function ContactPage() {
  return (
    <div className="grid grid-cols-12 gap-4 py-2">
      <ContactCards />
      <ContactPageForm />
    </div>
  );
}
