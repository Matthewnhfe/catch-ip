import en from './locales/en.json';
import es from './locales/es.json';

import {createI18n} from 'vue-i18n';

/**
* Shared internationalization (i18n) instance for the application
*
* This instance is created using the `createI18n` function from the `vue-i18n` library.
* It is configured with the default locale, fallback locale, and the translation messages
* for English and Spanish languages.
 */

const i18n = createI18n({
    locale: en,
    fallbackLng: 'en',
    messages: {en, es},
});

export default i18n;