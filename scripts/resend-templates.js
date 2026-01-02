/**
 * Resend Template Management Utility
 * 
 * Usage:
 * node scripts/resend-templates.js list
 * node scripts/resend-templates.js create <name> <html>
 * node scripts/resend-templates.js get <id>
 * node scripts/resend-templates.js update <id> <name> <html>
 * node scripts/resend-templates.js remove <id>
 */

import 'dotenv/config';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const [, , command, ...args] = process.argv;

async function manageTemplates() {
    try {
        switch (command) {
            case 'list':
                console.log('Listing templates...');
                const list = await resend.templates.list();
                console.dir(list, { depth: null });
                break;

            case 'create':
                const [name, html] = args;
                if (!name || !html) return console.error('Usage: create <name> <html>');
                console.log(`Creating template: ${name}`);
                const newTemplate = await resend.templates.create({ name, html });
                console.log('Created Template:', newTemplate);
                break;

            case 'get':
                const [getId] = args;
                if (!getId) return console.error('Usage: get <id>');
                const template = await resend.templates.get(getId);
                console.log('Template Details:', template);
                break;

            case 'update':
                const [updateId, updateName, updateHtml] = args;
                if (!updateId) return console.error('Usage: update <id> <name> <html>');
                console.log(`Updating template: ${updateId}`);
                const updated = await resend.templates.update(updateId, {
                    name: updateName,
                    html: updateHtml
                });
                console.log('Updated Template:', updated);
                break;

            case 'remove':
            case 'delete':
                const [removeId] = args;
                if (!removeId) return console.error('Usage: remove <id>');
                console.log(`Removing template: ${removeId}`);
                await resend.templates.remove(removeId);
                console.log('Template removed successfully.');
                break;

            default:
                console.log('Unknown command. Available commands: list, create, get, update, remove');
        }
    } catch (error) {
        console.error('Error managing templates:', error.message);
    }
}

if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_your_api_key_here') {
    console.error('Error: RESEND_API_KEY not found or not configured in .env');
} else {
    manageTemplates();
}
