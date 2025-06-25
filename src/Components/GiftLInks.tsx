import { FaAmazon, FaShoppingCart } from "react-icons/fa";

const GiftLinks = () => {
  const links = [
    {
      nome: "Amazon",
      url: "https://www.amazon.com.br/hz/wishlist/ls/1WBG5WK9WQ1PM?ref_=wl_share",
      icone: <FaAmazon size={24} />,
      descricao: "Lista de presentes na Amazon",
    },
    {
      nome: "Mercado Livre",
      url: "https://www.mercadolivre.com.br/presentes/casamento-kv-tapb0",
      icone: <FaShoppingCart size={24} />,
      descricao: "Lista de presentes no Mercado Livre",
    },
    {
      nome: "Havan",
      url: "https://lista.havan.com.br/Convidado/ItensListaPresente/836253",
      icone: <FaShoppingCart size={24} />,
      descricao: "Lista de presentes na Havan",
    },
  ];

  return (
    <div className="gift-links">
      <div className="havan-info-section">
        <div className="havan-details">
          <p className="havan-description">
            Visite qualquer loja Havan e encontre opções presenciais especiais
            selecionadas pelos noivos.
          </p>

          <div className="search-info">
            <h4>📋 Como encontrar nossa lista:</h4>
            <div className="names-box">
              <strong>
                Victor Henrique Monteiro Lima <br />&<br /> Karinne Rocha de
                Lima
              </strong>
            </div>
          </div>

          <div className="havan-instructions">
            <h4>🛍️ Passo a passo:</h4>
            <ol>
              <li>Dirija-se a qualquer loja Havan</li>
              <li>Procure o balcão de atendimento ou seção de presentes</li>
              <li>Informe os nomes dos noivos</li>
              <li>Escolha o presente desejado da nossa lista</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="online-options">
        <h3>🌐 Opções Online</h3>
        <ul className="gift-link-list">
          {links.map((link) => (
            <li key={link.nome} className="gift-link-item">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gift-link-button"
              >
                {link.icone}
                <span>{link.descricao}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GiftLinks;
