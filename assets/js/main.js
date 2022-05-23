const size = document.getElementById('size');
const age = document.getElementById('age');
const weight = document.getElementById('weight');
const genderFemale = document.getElementById('gender_female');
const genderMale = document.getElementById('gender_male');
const activity = document.getElementById('activity');
const outputBasicKcal = document.getElementById('output_basic_kcal');
const outputBasicKj = document.getElementById('output_basic_kj');
const outputTotalKcal = document.getElementById('output_total_kcal');
const outputTotalKj = document.getElementById('output_total_kj');

calcCalories = () => {
    let basicKcal = '';
    let totalKcal = '';
    if (genderFemale.checked) {
        basicKcal = (655.1 + (9.6 * weight.value) + (1.8 * size.value) - (4.7 * age.value)).toFixed(1);
    } else if (genderMale.checked) {
        basicKcal = (664.7 + (13.7 * weight.value) + (5 * size.value) - (6.8 * age.value)).toFixed(1);
    }
    switch (activity.value) {
        case '1':
            totalKcal = (basicKcal * 0.95).toFixed(1);
            break;
        case '2':
            totalKcal = (basicKcal * 1.2).toFixed(1);
            break;
        case '3':
            totalKcal = (basicKcal * 1.5).toFixed(1);
            break;
        case '4':
            totalKcal = (basicKcal * 1.7).toFixed(1);
            break;
        case '5':
            totalKcal = (basicKcal * 1.9).toFixed(1);
            break;
        case '6':
            totalKcal = (basicKcal * 2.2).toFixed(1);
            break;
    }
    outputBasicKcal.innerHTML = basicKcal;
    outputTotalKcal.innerHTML = totalKcal;
    outputBasicKj.innerHTML = (basicKcal * 4.1868).toFixed(1);
    outputTotalKj.innerHTML = (totalKcal * 4.1868).toFixed(1);
}