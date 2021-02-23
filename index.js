const core = require('@actions/core');

try {
    const realname = core.getInput('real-name');
    const hackername = toHackername(realname);
    console.log(`W3lc0m3, ${hackername}!`);
} catch (error) {
    core.setFailed(error.message);
}

function toHackername(name) {
    return name.replace(/o|O/g, '0')
        .replace(/a|A/g, '4')
        .replace(/i|I|l/g, '1')
        .replace(/e/g, '3');
}