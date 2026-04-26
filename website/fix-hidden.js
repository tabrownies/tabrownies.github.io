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
            
            // Determine if hidden
            const isHidden = content.toLowerCase().includes('placeholder');
            
            // Check if hidden field exists
            if (content.includes('hidden:')) {
                content = content.replace(/hidden:\s*(true|false)/, `hidden: ${isHidden}`);
            } else {
                // Insert before the second ---
                const frontmatterEndIndex = content.indexOf('\n---', 4);
                if (frontmatterEndIndex !== -1) {
                    content = content.slice(0, frontmatterEndIndex) + `\nhidden: ${isHidden}` + content.slice(frontmatterEndIndex);
                }
            }
            
            fs.writeFileSync(fullPath, content);
            console.log(`Updated ${file}: hidden=${isHidden}`);
        }
    }
}

processDirectory(path.join(__dirname, 'src/content/projects'));
processDirectory(path.join(__dirname, 'src/content/blog'));
