import { Contact } from "@/constants/Contact";
import { HiEnvelope, HiMapPin, HiMiniPhone } from "react-icons/hi2";
import SectionHead from "../../common/Heading";
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";
export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead title="Get in touch" />

        <GoogleMap />

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <ul className="space-y-12">
              <ContactItem
                icon={<HiEnvelope />}
                title="Email"
                content={
                  <>
                    <a
                      href={`mailto:${Contact.EMAIL_1}`}
                      className="hover:underline"
                    >
                      {Contact.EMAIL_1}
                    </a>
                    ,{" "}
                    <a
                      href={`mailto:${Contact.EMAIL_2}`}
                      className="hover:underline"
                    >
                      {Contact.EMAIL_2}
                    </a>
                  </>
                }
              />
              <ContactItem
                icon={<HiMiniPhone />}
                title="Phone"
                content={
                  <>
                    <a
                      href={`tel:+91${Contact.PHONE_1}`}
                      className="hover:underline"
                    >
                      +91 {Contact.PHONE_1}
                    </a>
                    ,{" "}
                    <a
                      href={`tel:+91${Contact.PHONE_2}`}
                      className="hover:underline"
                    >
                      +91 {Contact.PHONE_2}
                    </a>
                    ,{" "}
                    <a
                      href={`tel:+91${Contact.PHONE_3}`}
                      className="hover:underline"
                    >
                      +91 {Contact.PHONE_3}
                    </a>
                  </>
                }
              />
              <ContactItem
                icon={<HiMapPin />}
                title="Address"
                content={Contact.ADDRESS}
              />
            </ul>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  content
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <li className="flex items-center gap-4">
      <span className="flex aspect-square min-w-12 items-center justify-center rounded-full bg-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 md:min-w-16 [&_svg]:size-6 md:[&_svg]:size-8">
        {icon}
      </span>
      <span>
        <h3 className="font-bold uppercase">{title}</h3>
        <p className="text-neutral-700 dark:text-neutral-300">{content}</p>
      </span>
    </li>
  );
}
