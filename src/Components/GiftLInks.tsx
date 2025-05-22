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
  ];

  return (
    <div className="gift-links">
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
  );
};

export default GiftLinks;
