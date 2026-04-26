import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.md')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Fix cover_image
            const coverImageMatch = content.match(/^cover_image:\s*"(.*?)"/m);
            if (coverImageMatch) {
                const imgPath = coverImageMatch[1];
                if (imgPath.startsWith('/')) {
                    content = content.replace(coverImageMatch[0], `cover_image: "../../assets${imgPath}"`);
                    modified = true;
                }
            }

            // Fix markdown images: ![alt](/path) -> ![alt](../../assets/path)
            const mdImgRegex = /!\[([^\]]*)\]\(\/([^)]+)\)/g;
            if (mdImgRegex.test(content)) {
                content = content.replace(mdImgRegex, '![$1](../../assets/$2)');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory(path.join(__dirname, 'src/content/projects'));
processDirectory(path.join(__dirname, 'src/content/blog'));
