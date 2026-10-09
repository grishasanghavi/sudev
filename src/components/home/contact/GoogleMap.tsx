"use client";

export default function GoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1381.5413036120422!2d79.10962231405202!3d21.135578082708687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1e1a30c6183%3A0xb305fc23fa36b346!2sSudev%20Industries!5e1!3m2!1sen!2sin!4v1742909794275!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: "0" }}
      allowFullScreen
      className="mt-20"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
