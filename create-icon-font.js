const webfontsGenerator = require('webfonts-generator');

webfontsGenerator({
    files: [
        'src/svg-icons/support.svg',
        'src/svg-icons/team.svg',
    ],
    dest: 'src/icon-dist/',
}, function(error) {
    if (error) {
        console.log('Fail!', error);
    } else {
        console.log('Done!');
    }
})