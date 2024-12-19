import { ContactPageForm } from "../components/ContactForm";
import ContactCards from "../components/ContactCards";
import { ContactDetails } from "../components/ContactDetails";

export function ContactPage() {
  return (
    <div className="grid grid-cols-12 gap-4 py-2">
      <ContactCards />
      <div className="col-span-12 lg:col-span-6 w-full  bg-neutral rounded">
        <ContactPageForm />
      </div>
      <div className="col-span-12 lg:col-span-6 w-full bg-neutral rounded lg:h-2/3 flex justify-center items-center p-4 font-semibold">
        <ContactDetails />
      </div>
    </div>
  );
}
