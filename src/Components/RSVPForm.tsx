import { useState } from "react";
import { submitRSVP } from "../services/RSVPService";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    comparecimento: "yes",
    mensagem: "",
  });

  const [confirmacao, setConfirmacao] = useState({
    enviado: false,
    mensagem:
      "Sentiremos sua falta! Agradecemos por nos informar que não poderá comparecer ao nosso grande dia. Você estará em nossos pensamentos neste momento especial.",
  });

  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const sucesso = await submitRSVP(formData);
    if (sucesso) {
      setConfirmacao({
        enviado: true,
        mensagem:
          formData.comparecimento === "yes"
            ? `Presença confirmada! Obrigado por confirmar sua presença em nosso
            grande dia!`
            : confirmacao.mensagem,
      });
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        comparecimento: "yes",
        mensagem: "",
      });
    }
  };

  return (
    <section id="confirmacao" className="py-16 bg-white">
      <div className="max-w-xl mx-auto px-4 section-content rsvp">
        <h2 className="text-3xl text-center mb-8 text-dark-gray">
          Confirmação de Presença
        </h2>
        {confirmacao.enviado ? (
          <p className="text-center text-green-600 font-medium finished">
            {confirmacao.mensagem}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 rsvp-form">
            <div className="form-group">
              <label htmlFor="nome" className="block mb-1 font-medium">
                Nome Completo
              </label>
              <input
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block mb-1 font-medium">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone" className="block mb-1 font-medium">
                Telefone
              </label>
              <input
                id="telefone"
                type="tel"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="comparecimento"
                className="block mb-1 font-medium"
              >
                Você irá comparecer?
              </label>
              <select
                id="comparecimento"
                value={formData.comparecimento}
                onChange={handleChange}
                required
                className="input"
              >
                <option value="yes">Sim, estarei presente</option>
                <option value="no">Infelizmente não poderei comparecer</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem" className="block mb-1 font-medium">
                Alguma mensagem para os noivos?
              </label>
              <textarea
                id="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                className="input min-h-[100px]"
              />
            </div>
            <button
              type="submit"
              className="bg-gold text-white px-6 py-2 rounded hover:bg-[#a88d60] transition"
            >
              Confirmar Presença
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RSVPForm;
