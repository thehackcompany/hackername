const core = require('@actions/core');

try {
    const realname = core.getInput('real-name');
    const hackername = toHackername(realname);
    console.log(`W3lc0m3, ${hackername}!`);
} catch (error) {
    core.setFailed(error.message);
}

function toHackername(name) {
    return name.replace('o', '0').replace('a', '4').replace('i', '1').replace('e', '3');
}