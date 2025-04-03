import "react";

function ContactUs({ currentTheme }) {
  const textClass = currentTheme === "dark" ? "dark-text" : "light-text";

  return (
    <>
      <div className="pageContent">
        <h1 className={textClass}>Contact</h1>
        <p className={textClass}>
          Dobu Martial Arts can be contacted by phone or email.
        </p>
        <hr className={textClass}></hr>
        <p className={textClass}>Phone: +44 7404703393</p>
        <p className={textClass}>Email: Mauricio.Gomez@DobuMartialArts.co.uk</p>
      </div>
    </>
  );
}

export default ContactUs;
