'use strict';
class Table {
    constructor(parentContainer,
        { gameContainerClass, tableClass, btnStartID, btnRestartID,
            pointsDisplayBlockClass, pointsDisplayTextClass, computerID, gamerID,
            levelsBlockClass, levelsBlockTextClass, btnEasyLevelID, btnNormalLevelID, btnHardLevelID,
        }, { easyLevel, normalLevel, hardLevel }) {

        this.parentContainer = parentContainer;
        this.gameContainerClass = gameContainerClass;
        this.tableClass = tableClass;
        this.btnStartID = btnStartID;
        this.btnRestartID = btnRestartID;
        // -------------
        this.pointsDisplayBlockClass = pointsDisplayBlockClass;
        this.pointsDisplayTextClass = pointsDisplayTextClass;
        this.computerID = computerID;
        this.gamerID = gamerID;
        // --------------
        this.levelsBlockClass = levelsBlockClass;
        this.levelsBlockTextClass = levelsBlockTextClass;
        this.btnEasyLevelID = btnEasyLevelID;
        this.btnNormalLevelID = btnNormalLevelID;
        this.btnHardLevelID = btnHardLevelID;
        this.easyLevelinfo = easyLevel;
        this.normalLevelinfo = normalLevel;
        this.hardLevelinfo = hardLevel;


    }
    createFullGame() {
        this.createContainer();
        this.createLevelsBlock();
        this.gameContainer.append(this.levelsBlock);
        this.createBtnStart();
        this.gameContainer.append(this.btnStart);
        this.btnStart.style.display = 'none';

        this.createPointsDisplayBlock();
        this.gameContainer.append(this.pointsDisplayBlock);
        this.pointsDisplayBlock.style.display = 'none';

        this.levelsButtonsEventsClick();

        this.createRestartBtn();
        this.gameContainer.append(this.btnRestart);
        this.btnRestart.style.display = 'none';

        this.startGameBtnClick();
        this.restartGameBtnClick();

    }
    showHideBlocks() {
        this.btnStart.style.display = 'inline';
        this.pointsDisplayBlock.style.display = 'block';
        this.levelsBlock.style.display = 'none';
    }
    levelsButtonsEventsClick() {
        this.btnEasyLevel.addEventListener('click', () => {
            this.createTable(this.easyLevelinfo);
            this.gameContainer.append(this.table);
            this.showHideBlocks();
        });
        this.btnNormalLevel.addEventListener('click', () => {
            this.createTable(this.normalLevelinfo);
            this.gameContainer.append(this.table);
            this.showHideBlocks();
        });
        this.btnHardLevel.addEventListener('click', () => {
            this.createTable(this.hardLevelinfo);
            this.gameContainer.append(this.table);
            this.showHideBlocks();
        });
    }
    startGameBtnClick() {
        this.btnStart.addEventListener('click', () => {
            this.coloringCells();
            this.clickCellsCounter();
            this.btnStart.style.display = 'none';
        })



    }
    restartGameBtnClick() {
        this.btnRestart.addEventListener('click', () => {
            this.gamerPoints.innerText = 0;
            this.computerPoints.innerText = 0;
            this.pointsDisplayBlock.style.display = 'none';
            this.levelsBlock.style.display = 'block';
            this.table.remove();
            this.btnRestart.style.display = 'none';
        });


    }
    createContainer() {
        this.gameContainer = document.createElement('div');
        this.gameContainer.classList.add(this.gameContainerClass);
        this.parentContainer.append(this.gameContainer);
    }
    createLevelsBlock() {
        this.levelsBlock = document.createElement('div');
        this.levelsBlock.classList.add(this.levelsBlockClass);
        let levelsBlockText = document.createElement('p');
        levelsBlockText.innerText = 'Choose Level:  ';
        levelsBlockText.classList.add(this.levelsBlockTextClass);
        this.levelsBlock.append(levelsBlockText);
        // --------------------
        this.btnEasyLevel = document.createElement('button');
        this.btnNormalLevel = document.createElement('button');
        this.btnHardLevel = document.createElement('button');
        this.btnEasyLevel.innerText = 'Easy';
        this.btnNormalLevel.innerText = 'Normal';
        this.btnHardLevel.innerText = 'Hard';
        this.btnEasyLevel.id = this.btnEasyLevelID;
        this.btnNormalLevel.id = this.btnNormalLevelID;
        this.btnHardLevel.id = this.btnHardLevelID;
        levelsBlockText.append(this.btnEasyLevel, this.btnNormalLevel, this.btnHardLevel);

        // --------------------
    }
    createPointsDisplayBlock() {
        this.pointsDisplayBlock = document.createElement('div');
        this.pointsDisplayBlock.classList.add(this.pointsDisplayBlockClass);
        let pointsDisplayBlockText1 = document.createElement('p');
        let pointsDisplayBlockText2 = document.createElement('p');
        pointsDisplayBlockText1.textContent = 'You';
        pointsDisplayBlockText2.textContent = 'Computer';
        pointsDisplayBlockText1.classList.add(this.pointsDisplayTextClass);
        pointsDisplayBlockText2.classList.add(this.pointsDisplayTextClass);
        this.computerPoints = document.createElement('span');
        this.computerPoints.innerText = 0;
        this.gamerPoints = document.createElement('span');
        this.gamerPoints.innerText = 0;
        this.computerPoints.id = this.computerID;
        this.gamerPoints.id = this.gamerID;
        pointsDisplayBlockText1.append(this.gamerPoints);
        pointsDisplayBlockText2.append(this.computerPoints);
        this.pointsDisplayBlock.append(pointsDisplayBlockText1, pointsDisplayBlockText2);

    }
    createTable({ rows, cellsInRows, rowClass, cellClass, timeInterval }) {
        this.timeInterval = timeInterval;
        this.table = document.createElement('table');
        this.table.classList.add(this.tableClass);
        this.rows = rows;
        this.cells = cellsInRows;
        this.multiplier = this.cells * this.rows;
        for (let i = 1; i <= this.rows; i++) {
            let row = document.createElement('tr');
            row.classList.add(rowClass);
            this.table.append(row);
            // console.log(this.object);
            for (let j = 1; j <= this.cells; j++) {
                let cell = document.createElement('td');
                cell.classList.add(cellClass);
                row.append(cell);
            }
        }
    }
    createBtnStart() {
        this.btnStart = document.createElement('button');
        this.btnStart.innerText = 'Start the Game';
        this.btnStart.id = this.btnStartID;
    }
    createRestartBtn() {
        this.btnRestart = document.createElement('button');
        this.btnRestart.id = this.btnRestartID;
        this.btnRestart.innerText = 'Restart the Game';
    }
    coloringCells() {
        let [...cells] = this.table.querySelectorAll('td');
        let i = 0;
        let indexArray = [];
        this.counter = 0;
        let timer = setInterval(() => {
            if (this.counter >= (0.5 * this.multiplier)) {
                let computer = Number.parseInt(this.computerPoints.innerText);
                const gamer = Number.parseInt(this.gamerPoints.innerText);
                const self = this;
                function timeout() {
                    setTimeout(() => {
                        if (computer > gamer) {
                            alert('Очень жаль...вы проиграли...');
                        }
                        else if (computer < gamer) {
                            alert('Поздравляю!!! Вы выиграли!');
                        }
                        else {
                            alert('У вас ничья!');
                        }
                        self.btnRestart.style.display = 'inline';

                    }, 600);
                }
                clearInterval(timer);
                if (!cells[i].classList.contains('green')) {
                    cells[i].classList.remove('blue');
                    cells[i].classList.add('red');
                    this.computerPoints.innerText = computer + 1;

                    timeout();
                }
                else {
                    timeout();
                }

            }

            else {
                if (this.counter < 1) {
                    i = Math.floor(Math.random() * this.multiplier);
                    indexArray.push(i);
                    cells[i].classList.add('blue');

                }
                else {
                    cells[i].classList.remove('blue');
                    if (!cells[i].classList.contains('green')) {
                        cells[i].classList.add('red');
                        let computer = Number.parseInt(this.computerPoints.innerText);
                        computer++;
                        this.computerPoints.textContent = computer;

                    }
                    do {
                        i = Math.floor(Math.random() * this.multiplier);
                    } while (indexArray.includes(i));

                    indexArray.push(i);
                    cells[i].classList.add('blue');
                }
                this.counter++;
            }




        }, this.timeInterval);
    };
    clickCellsCounter() {
        this.table.addEventListener('click', (e) => {
            let gPoints = Number.parseInt(this.gamerPoints.innerText);
            const cell = e.target;
            if (cell.classList.contains('blue')) {
                cell.classList.remove('blue');
                cell.classList.add('green');
                gPoints++;
                this.gamerPoints.textContent = gPoints;
            }
        })

    };
}