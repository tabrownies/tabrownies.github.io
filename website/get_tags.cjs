const fs = require('fs');
const path = require('path');

function getTags(dir) {
    const tags = new Set();
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        if (file.endsWith('.md')) {
            const content = fs.readFileSync(path.join(dir, file), 'utf8');
            const match = content.match(/^tags:\s*\[(.*?)\]/m);
            if (match && match[1]) {
                match[1].split(',').forEach(tag => {
                    const trimmed = tag.trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');
                    if (trimmed) tags.add(trimmed);
                });
            }
        }
    });
    return Array.from(tags).sort();
}

console.log("PROJECTS:");
console.log(JSON.stringify(getTags('src/content/projects')));
console.log("BLOG:");
console.log(JSON.stringify(getTags('src/content/blog')));
