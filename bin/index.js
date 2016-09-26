const Botkit = require('../lib/Botkit.js');
const Fs = require('fs');
const Path = require('path');

controller = Botkit.slackbot({
  debug: false
});

controller.spawn({
  token: process.env.token
}).startRTM();

const load = (path, file) => {
  const ext = Path.extname(file);
  const full = Path.join(path, Path.basename(file, ext));

  try {
    const script = require(full);
    if (typeof script === 'function') {
      script(this);
    }
  } catch(error) {
    process.exit(1);
  }
};

const path = Path.resolve('.', 'scripts')

Fs.readdirSync(path).sort().forEach(file => {
  load(path, file);
});