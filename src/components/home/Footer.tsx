import { Contact } from "@/constants/Contact";
import { NAV_LINKS } from "@/constants/NavLink";
import { SOCIAL_LINKS } from "@/constants/Sociallinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiEnvelope, HiMapPin, HiMiniPhone } from "react-icons/hi2";
export default function Footer() {
  return (
    <footer
      id="footer"
      className="to-neutral-white bg-gradient-to-b from-transparent via-white/50 text-neutral-700 dark:via-black/50 dark:to-black dark:text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-36">
        <div className="flex justify-between max-lg:flex-col">
          <div className="">
            <div className="mb-4 flex items-center">
              <Link href="/">
                <Image
                  src="/sudev-logo.svg"
                  alt="Sudev Industries Logo"
                  className="h-10 w-auto"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300 lg:max-w-lg">
              Sudev Industries Limited is a publicly listed company specializing
              in the manufacturing of rubber and plastic products.
            </p>

            <div className="flex gap-4">
              <SocialLinks href={SOCIAL_LINKS.LINKEDIN}>
                <BsLinkedin />
              </SocialLinks>
              <SocialLinks href={SOCIAL_LINKS.INSTAGRAM}>
                <BsInstagram />
              </SocialLinks>
            </div>
          </div>

          <div className="flex justify-between gap-10 max-lg:mt-10 max-md:flex-col md:gap-20">
            {/* Links Section */}
            <div className="">
              <h3 className="mb-4 font-bold uppercase">Links</h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <FooterLink key={link.link} href={link.link}>
                    {link.title}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="">
              <h3 className="mb-4 font-bold uppercase">Contact</h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <HiEnvelope className="mr-2 mt-0.5 min-h-5 min-w-5 text-neutral-700 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300">
                    <FooterEmail email={Contact.EMAIL_1} />
                    <br />
                    <FooterEmail email={Contact.EMAIL_2} />
                  </span>
                </li>
                <li className="flex items-start">
                  <HiMiniPhone className="mr-2 mt-0.5 min-h-5 min-w-5 text-neutral-700 dark:text-neutral-300" />
                  <span>
                    <FooterContact phoneNumber={Contact.PHONE_1} />
                    <br />
                    <FooterContact phoneNumber={Contact.PHONE_2} />
                    <br />
                    <FooterContact phoneNumber={Contact.PHONE_3} />
                  </span>
                </li>
                <li className="flex items-start">
                  <HiMapPin className="mr-2 mt-0.5 min-h-5 min-w-5 text-neutral-700 dark:text-neutral-300" />
                  <address className="max-w-48 text-neutral-700 dark:text-neutral-300">
                    {Contact.ADDRESS}
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-neutral-300 dark:border-neutral-900"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between uppercase md:flex-row">
          <div className="mb-4 text-center text-sm text-neutral-400 md:mb-0">
            &copy; {new Date().getFullYear()} Sudev Industries. All Rights
            Reserved.
          </div>
          <div className="text-center text-sm text-neutral-400">
            Developed by{" "}
            <a
              href="https://www.thesocialbling.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-neutral-800 dark:text-neutral-100"
              aria-label="Visit The Social Bling website"
            >
              The Social Bling
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
function FooterLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-neutral-700 hover:text-neutral-950 hover:underline dark:text-neutral-300 hover:dark:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterContact({ phoneNumber }: { phoneNumber: string }) {
  return (
    <a
      href={`tel:+91${phoneNumber}`}
      className="text-neutral-700 hover:text-neutral-950 hover:underline dark:text-neutral-300 hover:dark:text-white"
    >
      +91 {phoneNumber}
    </a>
  );
}
function FooterEmail({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-neutral-700 hover:text-neutral-950 hover:underline dark:text-neutral-300 hover:dark:text-white"
    >
      {email}
    </a>
  );
}

function SocialLinks({
  href,
  className,
  children
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white [&_svg]:size-5",
        className
      )}
    >
      {children}
    </a>
  );
}
