'use strict';
function startGame({ tableClass, btnStartID, pointsDisplay, levelsBlock }, { easyLevel, normalLevel, hardLevel }, self) {

    const table = new Table(tableClass);
    table.createLevelsBlock(levelsBlock);
    self.style.display = 'none';
    table.chooseLevel({ btnStartID }, pointsDisplay, { easyLevel, normalLevel, hardLevel });

}


