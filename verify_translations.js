
import { translations } from './src/translations/translations.js';

try {
    console.log("Translations loaded successfully.");
    console.log("ES Keys:", Object.keys(translations.es));
    console.log("EN Keys:", Object.keys(translations.en));
    console.log("DE Keys:", Object.keys(translations.de));

    // Check for specific pages
    const expectedPages = ['pricePage', 'agencyPage', 'detectivesPage'];
    const langs = ['es', 'en', 'de'];

    let errors = [];
    langs.forEach(lang => {
        expectedPages.forEach(page => {
            if (!translations[lang][page]) {
                errors.push(`Missing ${page} in ${lang}`);
            }
        });
    });

    if (errors.length > 0) {
        console.error("Verification Failed:", errors);
        process.exit(1);
    } else {
        console.log("Verification Passed: All pages present in all languages.");
    }

} catch (e) {
    console.error("Syntax Error or Load Error:", e.message);
    process.exit(1);
}
