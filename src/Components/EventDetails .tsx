const eventDetails = [
  {
    title: "Cerimônia",
    date: "28 de Junho de 2025",
    time: "15:00",
    location: "Café Bosque do Madeira",
    icon: "calendar-alt",
  },
  {
    title: "Sombra à vontade",
    description2:
      "O espaço da cerimônia é rodeado de verde e tem bastante sombra.",
  },
  {
    title: "Dress Code",
    description1: "Traje Esporte Fino",
    description2: "Sugerimos cores claras, exceto verde oliva.",
    icon: "tshirt",
  },
];

const EventDetails = () => {
  return (
    <section id="detalhes" className="py-16 bg-[#f9f9f7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12 text-dark-gray">
          Detalhes do Evento
        </h2>

        <div className="flex flex-wrap  gap-6 mb-12 event-details">
          {eventDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6  max-w-xs text-center detail-card"
            >
              <h3 className="text-xl text-gold mb-2 w-100">{item.title}</h3>
              {item.date && (
                <p>
                  <i className="fas fa-calendar-alt mr-2" />
                  {item.date}
                </p>
              )}
              {item.time && (
                <p>
                  <i className="fas fa-clock mr-2" />
                  {item.time}
                </p>
              )}
              {item.location && (
                <p>
                  <i className="fas fa-map-marker-alt mr-2" />
                  {item.location}
                </p>
              )}
              {item.description1 && (
                <p>
                  <i className={`fas fa-${item.icon} mr-2`} />
                  {item.description1}
                </p>
              )}
              {item.description2 && (
                <p className="text-justify">{item.description2}</p>
              )}
            </div>
          ))}
        </div>

        <div
          className="overflow-hidden rounded-xl h-[400px] w-full"
          style={{ maxWidth: "100%", width: "100%" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.254413777815!2d-63.913449123937895!3d-8.762117191289006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325bd285c74283:0xcd1a336c05f05417!2sCafé Bosque do Madeira!5e0!3m2!1spt-BR!2sbr!4v1747624175138!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0, width: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
