document.addEventListener("DOMContentLoaded", function() {
    initGradeWidgets();
    document.getElementById('calculateButton').addEventListener('click', calculateGrade);
    document.getElementById('exportButton').addEventListener('click', exportGrades);
});

function initGradeWidgets() {
    const container = document.getElementById('gradeWidgetsContainer');
    for (let i = 1; i <= 20; i++) {
        container.appendChild(createGradeWidget(i));
    }
}

function createGradeWidget(number) {
    const widget = document.createElement('div');
    widget.className = 'gradeWidget';

    // Add a numeration label with leading zero
    const numLabel = document.createElement('span');
    numLabel.textContent = `${number < 10 ? '0' : ''}${number}: `;
    numLabel.className = 'gradeNumLabel';
    widget.appendChild(numLabel);

    for (let i = 0; i <= 4; i++) {
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.className = 'radio-button';
        radioButton.id = `grade${number}-value${i}`;
        radioButton.name = `grade${number}`;
        radioButton.value = i;
        radioButton.checked = i === 0; // Set the default grade to 0

        const label = document.createElement('label');
        label.htmlFor = radioButton.id;
        label.textContent = i;

        widget.appendChild(radioButton);
        widget.appendChild(label);
    }

    // Add the - button
    const minusButton = document.createElement('button');
    minusButton.textContent = '-';
    minusButton.className = 'gradeButton';
    widget.appendChild(minusButton);

    // Add the + button
    const plusButton = document.createElement('button');
    plusButton.textContent = '+';
    plusButton.className = 'gradeButton';
    widget.appendChild(plusButton);

    // Handle button click events
// Handle button click events
minusButton.addEventListener('click', () => {
    const radios = document.getElementsByName(`grade${number}`);
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (i > 0) {
                radios[i].checked = false;
                radios[i - 1].checked = true;
            }
            break;
        }
    }
});

plusButton.addEventListener('click', () => {
    const radios = document.getElementsByName(`grade${number}`);
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (i < radios.length - 1) {
                radios[i].checked = false;
                radios[i + 1].checked = true;
            }
            break;
        }
    }
});


    return widget;
}



function calculateGrade() {
    let totalScore = 0;
    for (let i = 1; i <= 20; i++) {
        const radios = document.getElementsByName(`grade${i}`);
        for (const radio of radios) {
            if (radio.checked) {
                totalScore += parseInt(radio.value);
                break;
            }
        }
    }
    const finalGrade = totalScore / 80 * 20;
    document.getElementById('resultLabel').textContent = `Final Grade: ${finalGrade.toFixed(2)}/20`;
}

function exportGrades() {
    const grades = [];
    for (let i = 1; i <= 20; i++) {
        const radios = document.getElementsByName(`grade${i}`);
        for (const radio of radios) {
            if (radio.checked) {
                grades.push({ number: i, value: parseInt(radio.value) / 4 });
                break;
            }
        }
    }

    let totalScore = 0;
    for (let i = 1; i <= 20; i++) {
        const radios = document.getElementsByName(`grade${i}`);
        for (const radio of radios) {
            if (radio.checked) {
                totalScore += parseInt(radio.value);
                break;
            }
        }
    }
    const finalGrade = totalScore / 80 * 20;

    const data = {
        individualGrades: grades,
        finalGrade: finalGrade.toFixed(2)
    };

    const jsonData = JSON.stringify(data, null, 2);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonData);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "grades.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
