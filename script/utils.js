// Normaliser le texte
// return {string} texte normalisé
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize("NFD") // décomposer les graphèmes combinés en simple
    .replace(/[\u0300-\u036f]/g, ""); //enlever les signes diacritiques
};

// Créer les élements du DOM avec la class
const createGenericElt = (eltTag, eltClass = null) => {
  const elt = document.createElement(eltTag);
  if (eltClass) elt.className = eltClass;
  return elt;
};

// Créer les lien des élements avec la class
const createLinkElt = (eltHref, eltContent, eltClass = null) => {
  const elt = createGenericElt("a", eltClass);
  elt.setAttribute("href", eltHref);
  elt.setAttribute("title", eltContent);
  elt.textContent = eltContent;

  return elt;
};

export { createGenericElt, createLinkElt, normalizeText };


