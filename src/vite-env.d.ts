/**
* Custom type definitios for Vite environment variables.
 * This file allows TypeScript to regonizr the specific environment vairiables used in the pro
 *
 * The `ImportMetaEnv` interface defines the expected environment
 */


interface ImportMetaEnv {
    VITE_NEWS_API_KEY: string;
    VITE_NEWS_API_URL: string;
    VITE_LOGO_API_URL: string;
    VITE_LOGO_PUBLISHABLE_API_KEWY: string;
    VITE_SOURCE_ENDPOINT_PATH: string;
    VITE_TOP_HEADLINES_ENDPOINT_PATH: string;
    VITE_PRIME_UI_LICENSE_KEY: string;

}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}