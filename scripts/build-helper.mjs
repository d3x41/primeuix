import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

export function resolvePath(metaUrl) {
    const __dirname = path.dirname(fileURLToPath(metaUrl || import.meta.url));
    const __workspace = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../');
    const { INPUT_DIR = 'src/', OUTPUT_DIR = '/dist', NODE_ENV } = process.env;
    const INPUT_PATH = path.resolve(__dirname, process.env.INPUT_DIR);
    const OUTPUT_PATH = path.resolve(__dirname, process.env.OUTPUT_DIR);
    const isDEV = NODE_ENV !== 'production';

    return {
        __dirname,
        __workspace,
        INPUT_DIR,
        OUTPUT_DIR,
        INPUT_PATH,
        OUTPUT_PATH,
        isDEV
    };
}

export function removeBuild(metaUrl) {
    const { OUTPUT_DIR } = resolvePath(metaUrl);

    fs.remove(OUTPUT_DIR);
}

export function updatePackageJson(localPackageJson) {
    const { __workspace } = resolvePath();
    const packageJson = JSON.parse(fs.readFileSync(path.resolve(__workspace, './package.json'), { encoding: 'utf8', flag: 'r' }));
    const pkg = JSON.parse(fs.readFileSync(localPackageJson, { encoding: 'utf8', flag: 'r' }));

    pkg.author = packageJson.author;
    pkg.repository = { ...pkg.repository, ...packageJson.repository };
    pkg.bugs = { ...pkg.bugs, ...packageJson.bugs };
    //pkg.engines = { ...pkg.engines, ...packageJson.engines };

    fs.writeFileSync(localPackageJson, JSON.stringify(pkg, null, 4) + '\n', { encoding: 'utf8' });
}

export function clearPackageJson(localPackageJson) {
    const pkg = JSON.parse(fs.readFileSync(localPackageJson, { encoding: 'utf8', flag: 'r' }));

    delete pkg?.scripts;
    delete pkg?.devDependencies;
    delete pkg?.publishConfig?.directory;
    delete pkg?.publishConfig?.linkDirectory;

    fs.writeFileSync(localPackageJson, JSON.stringify(pkg, null, 4) + '\n', { encoding: 'utf8' });
}

export function copyDependencies(inFolder, outFolder, subFolder) {
    fs.readdirSync(inFolder, { withFileTypes: true }).forEach((entry) => {
        const fileName = entry.name;
        const sourcePath = path.join(inFolder, fileName);
        const destPath = path.join(outFolder, fileName);

        if (entry.isDirectory()) {
            copyDependencies(sourcePath, destPath, subFolder);
        } else {
            if (fileName.endsWith('d.ts')) {
                if (subFolder && sourcePath.includes(subFolder)) {
                    const subDestPath = path.join(outFolder, fileName.replace(subFolder, ''));

                    fs.ensureDirSync(path.dirname(subDestPath));
                    fs.copyFileSync(sourcePath, subDestPath);
                } else {
                    fs.ensureDirSync(path.dirname(destPath));
                    fs.copyFileSync(sourcePath, destPath);
                }
            }
        }
    });
}

export async function renameDTSFile(dir, newName) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await renameDTSFile(fullPath, newName);
        } else if (entry.name.endsWith('.d.ts')) {
            const newFullPath = path.join(dir, `${newName}.d.ts`);

            await fs.rename(fullPath, newFullPath);
        }
    }
}
