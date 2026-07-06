export const getApiBaseUrl = () => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim().replace(/\s+/g, '-');
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
};

export const getApiUrl = (resource) => {
  const baseUrl = getApiBaseUrl();
  return `${baseUrl}/api/${resource}/`;
};
