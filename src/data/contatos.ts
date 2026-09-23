export const SCHOOL_NAME = 'Recanto do Fazer'
export const SCHOOL_TAGLINE = 'A primeira e única escola Waldorf da Baixada Fluminense'
export const SCHOOL_ADDRESS = 'R. Ministro Lafaiete de Andrade, 1777 - Comendador Soares - Marco II, Nova Iguaçu - RJ, 26261-220'
export const INSTAGRAM_URL = 'https://www.instagram.com/recantodofazer/'
export const WHATSAPP_URL = 'https://wa.me/+5521996946737'
export const WHATSAPP_NUMBER = '5521996946737'

// The original place URL was not present in the available conversation context.
// This address-based search is a functional fallback and can be replaced with the school's exact place URL.
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SCHOOL_ADDRESS)}`
export const SCHOOL_DESCRIPTION = `${SCHOOL_TAGLINE}, em Nova Iguaçu. Educação infantil e Fundamental I com turmas pequenas, natureza e cuidado.`
