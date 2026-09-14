const logoApiUrl = import.meta.env.VITE_LOGO_API_URL;
const apikey = import.meta.env.VITE_LOGO_PUBLISHABLE_API_KEY;


export class LogoDevApi {
    getUrlToLogo = source => `${logoApiUrl}/${new URL(source.url.toString()).host}?token=${apiKey}`;
}