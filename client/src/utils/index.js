import { surpriseMePrompts } from '../constants'

export function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomprompts = surpriseMePrompts[randomIndex];

    if (randomprompts === prompt) return getRandomPrompt(prompt);

    return randomprompts;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}