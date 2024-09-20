/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_ENVIRONMENT: 'development' | 'production';
  VITE_THIRDWEB_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
