import { QRCodeSVG } from "qrcode.react";

const gerarPayloadPix = ({
  chave,
  nome,
  cidade,
  valor,
  txid,
}: {
  chave: string;
  nome: string;
  cidade: string;
  valor: string;
  txid: string;
}) => {
  const formatarCampo = (id: string, valor: string) =>
    `${id}${String(valor.length).padStart(2, "0")}${valor}`;

  const gerarCRC16 = (str: string) => {
    let polinomio = 0x1021;
    let resultado = 0xffff;

    for (let i = 0; i < str.length; i++) {
      resultado ^= str.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        if ((resultado & 0x8000) !== 0) {
          resultado = (resultado << 1) ^ polinomio;
        } else {
          resultado <<= 1;
        }
      }
    }

    resultado &= 0xffff;
    return resultado.toString(16).toUpperCase().padStart(4, "0");
  };

  const merchantAccountInfo =
    formatarCampo("00", "BR.GOV.BCB.PIX") + formatarCampo("01", chave);

  const additionalDataField = formatarCampo("05", txid || "****");

  let payload =
    formatarCampo("00", "01") +
    formatarCampo("26", merchantAccountInfo) +
    formatarCampo("52", "0000") +
    formatarCampo("53", "986") +
    (valor ? formatarCampo("54", valor) : "") +
    formatarCampo("58", "BR") +
    formatarCampo("59", nome.substring(0, 25)) +
    formatarCampo("60", cidade.substring(0, 15)) +
    formatarCampo("62", additionalDataField) +
    "6304";

  const crc = gerarCRC16(payload);
  return payload + crc;
};

const PixQRCode = ({
  isCopied,
  OnCopy,
}: {
  isCopied: boolean;
  OnCopy: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const chave = import.meta.env.VITE_PIX_CHAVE;
  const nome = import.meta.env.VITE_PIX_NOME;
  const cidade = import.meta.env.VITE_PIX_CIDADE;
  const valor = import.meta.env.VITE_PIX_VALOR;
  const txid = import.meta.env.VITE_PIX_TXID;

  const payload = gerarPayloadPix({ chave, nome, cidade, valor, txid });

  const copyPixToClipboard = () => {
    navigator.clipboard.writeText(payload).then(() => {
      OnCopy(true);
      setTimeout(() => OnCopy(false), 2000);
    });
  };

  return (
    <div className="pix-qrcode-container">
      <div className="qrcode">
        <QRCodeSVG value={payload} size={256} />
        <p style={{ wordBreak: "break-word", marginTop: "1rem" }}>
          <strong>Copia e Cola:</strong>
          <br />

          <input value={payload} className="w-100" />
          <button
            className={`w-100 mt-2 copy-button ${isCopied ? "copied" : ""}`}
            onClick={copyPixToClipboard}
          >
            {isCopied ? "✓ Copiado!" : "Copiar"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default PixQRCode;
