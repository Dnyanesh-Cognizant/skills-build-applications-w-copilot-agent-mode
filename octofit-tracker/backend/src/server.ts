import { app, PORT } from './app';
import { connectDatabase } from './config/database';

const codespaceName = process.env.CODESPACE_NAME?.trim().replace(/\s+/g, '-');
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
      console.log(`API base URL: ${baseUrl}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  });
