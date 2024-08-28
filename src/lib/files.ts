import fs from "fs";

export const getFileRoutes = (rootDir: string) => {
  const files = fs.readdirSync(rootDir);
  const dirs = files.filter((file) =>
    fs.statSync(`${rootDir}/${file}`).isDirectory()
  ).map(file => ({
    title: file,
    route: `/${file}`
  }))

  return dirs;
};

