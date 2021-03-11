import electron from 'electron';

process.once('loaded', () => {
    console.log('---- preload.js loaded ----');
    global.process = process;
    global.electron = electron;
    global.module = module;
});