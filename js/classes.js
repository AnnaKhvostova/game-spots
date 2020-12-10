'use strict';
class Table {
    constructor(tableClass) {
        this.table = document.createElement('table');
        this.tableClass = tableClass;
    }


    createTable({ rows, cellsInRows, rowClass, cellClass }) {
        this.rows = rows;
        this.cells = cellsInRows;
        this.table.classList.add(this.tableClass);
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
        this.parentContainer.append(this.table);
    };
    // ------Cоздание кнопки старта---------------------------------------------------------
    createBtnStart({ btnStartID }) {
        this.btnStart = document.createElement('button');
        this.btnStartId = btnStartID;
        this.btnStart.id = this.btnStartId;
        this.btnStart.innerText = 'Начать игру';
        this.parentContainer.prepend(this.btnStart);
    };
    // --------Создание кнопок для выбора уровня------------------------------------------------------------
    createLevelsBlock({ parentContainer, levelsStyleClass, btnEasyId, btnNormalId, btnHardId }) {
        this.parentContainer = parentContainer;
        this.btnEasyId = btnEasyId;
        this.btnNormalId = btnNormalId;
        this.btnHardId = btnHardId;

        this.levelsBlock = document.createElement('p');
        this.levelsStyleClass = levelsStyleClass;
        this.levelsBlock.classList.add(this.levelsStyleClass);
        this.levelsBlock.innerText = 'Выберать уровень: ';
        // ---------------------------------------------------
        this.btnEasyLevel = document.createElement('button');
        this.btnNormalLevel = document.createElement('button');
        this.btnHardLevel = document.createElement('button');

        this.btnEasyLevel.innerText = "Лёгкий";
        this.btnNormalLevel.innerText = "Средний";
        this.btnHardLevel.innerText = "Сложный";

        this.btnEasyLevel.id = this.btnEasyId;
        this.btnNormalLevel.id = this.btnNormalId;
        this.btnHardLevel.id = this.btnHardId;

        this.levelsBlock.append(this.btnEasyLevel);
        this.levelsBlock.append(this.btnNormalLevel);
        this.levelsBlock.append(this.btnHardLevel);

        this.parentContainer.append(this.levelsBlock);

    };
    // -----------------Выбор уровня------------------------------------------------------------------------
    chooseLevel(btnStartID, pointsDisplay, { easyLevel, normalLevel, hardLevel }) {
        this.createPointsDisplay(pointsDisplay);
        this.btnEasyLevel.addEventListener('click', () => {
            this.createBtnStart(btnStartID);
            this.timeInterval = easyLevel.timeInterval;
            console.log(this.timeInterval);
            this.levelsBlock.style.display = 'none';
            this.createTable(easyLevel);
            this.startPlay();
        });
        this.btnNormalLevel.addEventListener('click', () => {
            this.createBtnStart(btnStartID);
            this.timeInterval = normalLevel.timeInterval;
            this.levelsBlock.style.display = 'none';
            this.createTable(normalLevel);
            this.startPlay();
        });
        this.btnHardLevel.addEventListener('click', () => {
            this.createBtnStart(btnStartID);
            this.timeInterval = hardLevel.timeInterval;
            this.levelsBlock.style.display = 'none';
            this.createTable(hardLevel);
            this.startPlay();
        });


    };
    // -----------------------Создать табличку очков--------------------------------------------------------
    createPointsDisplay({ containerClass, computerID, gamerID }) {
        console.log(containerClass, computerID, gamerID);
        this.pointsDisplayContainer = document.createElement('div');
        this.pointsDisplayContainer.classList.add(containerClass);
        console.log(this.pointsDisplayContainer);
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        p1.innerText = 'Игрок: ';
        p2.innerText = 'Компьтер:';
        this.computerPoints = document.createElement('span');
        this.gamerPoints = document.createElement('span');
        this.computerPoints.id = computerID;
        this.computerPoints.innerText = 0;
        this.gamerPoints.id = gamerID;
        this.gamerPoints.innerText = 0;
        p1.append(this.gamerPoints);
        p2.append(this.computerPoints);
        this.pointsDisplayContainer.append(p1, p2);
        this.parentContainer.append(this.pointsDisplayContainer);

    };
    // --------Активация начала игры------------------------------------------------------------------------
    startPlay() {
        this.btnStart.addEventListener('click', () => {
            this.coloringCells();
            this.clickCellsCounter();
            this.btnStart.style.display = 'none';
        });
    };
    // -----Окрашивание ячеек при запуске игры  и счетчик очков компьютера----------------------------------
    coloringCells() {
        let [...cells] = this.table.querySelectorAll('td');
        let i = 0;
        let indexArray = [];
        this.counter = 0;
        let timer = setInterval(() => {

            if (this.counter >= (0.5 * this.multiplier)) {
                let computer = Number.parseInt(this.computerPoints.innerText);
                const gamer = Number.parseInt(this.gamerPoints.innerText);
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
                    }, 500);
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
    // ---------------Счетчик очков игрока------------------------------------------------------------------
    clickCellsCounter() {
        this.table.addEventListener('click', (e) => {
            // let row = e.target.parentNode.rowIndex;
            // const half = (this.cells * this.rows) * 0.5;
            let gPoints = Number.parseInt(this.gamerPoints.innerText);
            console.log("Игрок " + this.gamerPoints.innerText);
            const cell = e.target;

            if (cell.classList.contains('blue')) {
                cell.classList.remove('blue');
                cell.classList.add('green');
                gPoints++;
                this.gamerPoints.textContent = gPoints;
                console.log("Игрок+1 " + gPoints);
            }
        })

    };
}






