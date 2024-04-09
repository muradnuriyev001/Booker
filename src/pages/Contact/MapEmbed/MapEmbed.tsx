const MapEmbed = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084411.696497726!2d29.661425127261296!3d1.3667015721235702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a69f6499f945%3A0x874155ce43014549!2sUganda!5e0!3m2!1str!2saz!4v1710876056563!5m2!1str!2saz"
      width="600"
      height="650"
      style={{ border: "2px solid var(--orange-color2)", borderRadius: "5px" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapEmbed;
