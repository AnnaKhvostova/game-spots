
'use strict';
const fieldContainer = document.getElementById('container');

const LevelsValues = {
    easyLevel: {
        rows: 10,
        cellsInRows: 10,
        rowClass: 'row-easy',
        cellClass: 'cell-easy',
        timeInterval: 1200,

    },
    normalLevel: {
        rows: 13,
        cellsInRows: 13,
        rowClass: 'row-normal',
        cellClass: 'cell-normal',
        timeInterval: 1000,
    },
    hardLevel: {
        rows: 16,
        cellsInRows: 16,
        rowClass: 'row-hard',
        cellClass: 'cell-hard',
        timeInterval: 850,
    },
}

const constructor = {
    gameContainerClass: 'game-container',
    tableClass: 'table',
    btnStartID: 'btnStart',
    btnRestartID: 'btnRestart',
    pointsDisplayBlockClass: 'points-display',
    pointsDisplayTextClass: 'points-display-text',
    levelsBlockClass: 'levels',
    levelsBlockTextClass: 'levels-text',
    btnNormalLevelID: 'btnNormal',
    btnEasyLevelID: 'btnEasy',
    btnHardLevelID: 'btnHard',
    pointsDisplayBlockClass: 'points-display',
    pointsDisplayTextClass: 'points-display-text',
    computerID: 'computerPoints',
    gamerID: 'gamerPoints',

};

const table = new Table(fieldContainer, constructor, LevelsValues);
table.createFullGame();
