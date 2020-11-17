import fs from 'fs';
import path from 'path';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

export default {
  appPath: resolveApp('.'),
  appSrc: resolveApp('src'),
  appPublic: resolveApp('public'),
  appBuild: resolveApp('build'),
  appMain: resolveApp('src/index.tsx'),
  appIndexHtml: resolveApp('public/index.html')
};