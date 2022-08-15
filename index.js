const { crawler } = require('./crawler');
const { getFile } = require('./download');

(async () => {
    const url = '';
    const videos = crawler(url);
    console.log('videos', videos);

    for (let url of videos) {
        await getFile(url);
    }
})();
