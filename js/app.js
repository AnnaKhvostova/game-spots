
'use strict';
const fieldContainer = document.getElementById('container');
const start = document.getElementById('startPlay');
start.addEventListener('click', function a() {
    const self = this;
    startGame(generalParams, LevelsValues, self)
});// const btnStart = document.getElementById('btnStart');

// const btnEasyLevel = document.getElementById('easy');
// const btnNormalLevel = document.getElementById('normal');
// const btnHardLevel = document.getElementById('hard');

// const levels = document.getElementById('levels');
// const points = document.querySelector('.points');
// const gamerPoints = document.getElementById('gamerPoints');
// const computerPoints = document.getElementById('computerPoints');
// ---------------------------------------------------------------------------------------
// const table;
// table.createTable('row', 'cell');
const generalParams = {

    tableClass: 'table',
    btnStartID: 'btnStart',
    pointsDisplay: {
        containerClass: 'points-display',
        computerID: 'computerPoints',
        gamerID: 'gamerPoints',
    },
    levelsBlock: {
        parentContainer: fieldContainer,
        levelsStyleClass: 'levels',
        btnEasyId: "easy",
        btnNormalId: 'normal',
        btnHardId: 'hard',
    }

};
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


// btnEasyLevel.addEventListener('click', () => {
//     levelSelection(generalParams);
// })

// btnNormalLevel.addEventListener('click', () => {
//     levelSelection(generalParams);
// });

// btnHardLevel.addEventListener('click', () => {
//     levelSelection(generalParams);
// })
// console.log(Number(computerPoints.textContent))