// se no lugar que o projeto estiver rodando nao ter a var de ambiente
// declarada com o VITE_BACKEND_URL então será localhost

export const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";
