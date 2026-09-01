export function MapEmbed() {
  return (
    <div className="relative h-full w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.50099030333!2d51.311169676394435!3d35.73848912682549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfd0646c0399f%3A0x99ce0e281ed8def!2sKourosh%20Mall!5e0!3m2!1sen!2snl!4v1788203028880!5m2!1sen!2snl"
        className="block h-[350px] w-full px-0.5 pt-1 sm:h-[515px] dark-invert"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="آدرس شرکت"
      />
    </div>
  );
}
