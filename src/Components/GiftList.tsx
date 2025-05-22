import { useState } from "react";
import PixQRCode from "./PIXCode";
import GiftLinks from "./GiftLInks";

const GiftList = () => {
  // Substitua pela sua chave PIX

  const [showPixModal, setShowPixModal] = useState(false);
  const [showGiftList, setShowGiftList] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  const openPixModal = () => {
    setShowPixModal(true);
  };

  const closePixModal = () => {
    setShowPixModal(false);
  };

  const closeGiftList = () => {
    setShowGiftList(false);
  };
  return (
    <section id="presentes" className="gift-section">
      <div className="container">
        <h2>Lista de Presentes</h2>

        <div className="gift-intro">
          <p>Sua presença é o presente mais importante para nós!</p>
          <p>
            Mas se desejarem nos presentear, preparamos algumas opções
            especiais.
          </p>
        </div>

        <div className="gift-options">
          {/* Opção PIX */}
          <div className="gift-option pix-option">
            <div className="gift-icon">
              <span>💝</span>
            </div>
            <h3>PIX dos Noivos</h3>
            <p>
              Contribua com qualquer valor para nos ajudar a realizar nossos
              sonhos
            </p>
            <button className="pix-button" onClick={openPixModal}>
              Fazer PIX
            </button>
          </div>

          {/* Outras opções de presente */}
          <div className="gift-option">
            <div className="gift-icon">
              <span>🏠</span>
            </div>
            <h3>Para Nosso Lar</h3>
            <p>Itens para decorar e organizar nossa nova casa</p>
            <button
              className="gift-button"
              onClick={() => setShowGiftList(true)}
            >
              Ver Lista
            </button>
          </div>

          <div className="gift-option">
            <div className="gift-icon">
              <span>✈️</span>
            </div>
            <h3>Lua de Mel</h3>
            <p>Ajude-nos a criar memórias inesquecíveis em nossa viagem</p>
            <button className="gift-button" onClick={openPixModal}>
              Contribuir
            </button>
          </div>
        </div>

        {/* Modal do PIX */}
        {showPixModal && (
          <div className="modal-overlay" onClick={closePixModal}>
            <div className="pix-modal" onClick={(e) => e.stopPropagation()}>
              <div className="pix-modal-header">
                <h3>PIX dos Noivos</h3>
                <button className="close-button" onClick={closePixModal}>
                  ×
                </button>
              </div>

              <div className="pix-modal-body">
                <div className="pix-info">
                  <h4>Chave PIX:</h4>
                  <div className="pix-key">
                    <PixQRCode isCopied={copiedPix} OnCopy={setCopiedPix} />
                  </div>
                </div>

                <div className="pix-instructions">
                  <h4>Como fazer o PIX:</h4>
                  <ol>
                    <li>Abra o app do seu banco</li>
                    <li>Escolha a opção PIX</li>
                    <li>Cole a chave PIX copiada</li>
                    <li>Insira o valor desejado</li>
                    <li>Confirme a transferência</li>
                  </ol>
                </div>

                <div className="pix-message">
                  <p>💕 Muito obrigado pelo carinho e generosidade!</p>
                  <p>
                    <strong>Karinne & Victor</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showGiftList && (
          <div className="modal-overlay" onClick={closePixModal}>
            <div className="pix-modal" onClick={(e) => e.stopPropagation()}>
              <div className="pix-modal-header">
                <h3>Listas de Presentes</h3>
                <button className="close-button" onClick={closeGiftList}>
                  ×
                </button>
              </div>

              <div className="pix-modal-body">
                <GiftLinks />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftList;
