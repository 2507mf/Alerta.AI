// Configuração central de ambiente do painel.
//
// API_URL  → URL do backend .NET (AlertAi). Em produção, defina VITE_API_URL.
// DEMO_MODE → quando ativo, o painel funciona sem backend (login mock + dados
//             simulados), ideal para demonstrações. É ligado automaticamente
//             quando o site está publicado e nenhum VITE_API_URL foi configurado.

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5019'

const semBackendConfigurado = !import.meta.env.VITE_API_URL
const hostnameLocal =
  typeof window !== 'undefined' &&
  ['localhost', '127.0.0.1', ''].includes(window.location.hostname)

export const DEMO_MODE =
  import.meta.env.VITE_DEMO_MODE === 'true' ||
  (semBackendConfigurado && !hostnameLocal)
