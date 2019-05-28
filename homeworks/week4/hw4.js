const request = require('request');

const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'mrw9p65z6kiy65x25b5f8pbzibl0uz',
  },
};

function callback(error, response, body) {
  if (!error && response.statusCode >= 200 && response.statusCode < 300) {
    const allinfo = JSON.parse(body);
    const gamedata = allinfo.data;
    for (let i = 1; i < gamedata.length ; i += 1) {
      console.log(`${gamedata[i].id}, ${gamedata[i].name}`)
    }
  }
}

request(options, callback);