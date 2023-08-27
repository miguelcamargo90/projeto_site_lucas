// importImages.js

import logo from "../images/logo.png";
import React from "react";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '').replace(/\.(jpg|jpeg|png|gif)$/i, '')] = r(item);
  });
  return images;
}

const images = {
  acrilico: {
    capa_acrilico: importAll(require.context('./Acrilico', false, /\.(jpg|jpeg|png|gif)$/)).capa_acrilico,
    images: Object.values(importAll(require.context('./Acrilico', false, /\.(jpg|jpeg|png|gif)$/))),
  },
  backlight: {
    capa_backlight: importAll(require.context('./Backlight', false, /\.(jpg|jpeg|png|gif)$/)).capa_backlight,
    images: Object.values(importAll(require.context('./Backlight', false, /\.(jpg|jpeg|png|gif)$/))),
  },
  fachada: {
    capa_fachada: importAll(require.context('./Fachada', false, /\.(jpg|jpeg|png|gif)$/)).capa_fachada,
    images: Object.values(importAll(require.context('./Fachada', false, /\.(jpg|jpeg|png|gif)$/))),
  },
  ledneon: {
    capa_ledneon: importAll(require.context('./LedNeon', false, /\.(jpg|jpeg|png|gif)$/)).capa_ledneon,
    images: Object.values(importAll(require.context('./LedNeon', false, /\.(jpg|jpeg|png|gif)$/))),
  },
  letracaixa: {
    capa_letracaixa: importAll(require.context('./Letra_Caixa', false, /\.(jpg|jpeg|png|gif)$/)).capa_letracaixa,
    images: Object.values(importAll(require.context('./Letra_Caixa', false, /\.(jpg|jpeg|png|gif)$/))),
  },
  placas: {
    capa_placas: importAll(require.context('./Placas', false, /\.(jpg|jpeg|png|gif)$/)).capa_placas,
    images: Object.values(importAll(require.context('./Placas', false, /\.(jpg|jpeg|png|gif)$/))),
  },
  totem: {
    capa_totem: importAll(require.context('./Totem', false, /\.(jpg|jpeg|png|gif)$/)).capa_totem,
    images: Object.values(importAll(require.context('./Totem', false, /\.(jpg|jpeg|png|gif)$/))),
  },
  trofeus: {
    capa_trofeus: importAll(require.context('./Trofeus', false, /\.(jpg|jpeg|png|gif)$/)).capa_trofeus,
    images: Object.values(importAll(require.context('./Trofeus', false, /\.(jpg|jpeg|png|gif)$/))),
  },
  // Certifique-se de adicionar a chave correta para a imagem padrão aqui
  capa_default: <img src={logo} alt="Logo" className="w-60 h-40 md:w-400 md:h-250" />,
};

export default images;
