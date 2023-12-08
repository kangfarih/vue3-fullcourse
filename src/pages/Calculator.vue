<template>
    <div class="w-full flex">
        <div class="m-auto w-64">
            <h1 class="font-bold text-2xl text-center my-8">Calculator</h1>
            <div class="my-2 text-gray-500 flex justify-end h-20 overflow-hidden flex-col items-end">
                <div v-for="calc in calcHistory">
                    {{ calc.v1 }}{{ calc.operator }}{{ calc.v2 ? calc.v2 + '=' : '' }}{{ calc.res }}
                </div>
            </div>
            <p class="mb-4 text-3xl font-semibold text-right overflow-auto h-14 ">
                {{ calcResult }}
            </p>
            <div class="grid grid-cols-4 grid-rows-4 gap-px w-100">
                <button v-for="btn in calcButton" @click="onPressButton(btn.value)" class="min-w-full min-h-full w-14 h-14 text-xl shadow-sm 
                border-gray-200 border-2 border-solid rounded-sm hover:bg-teal-200" :class="btn.style">{{ btn.value
                }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const calcButton = [
    { value: 'C', style: 'col-span-2' },
    { value: '*', style: '' },
    { value: '/', style: '' },
    { value: '1', style: '' },
    { value: '2', style: '' },
    { value: '3', style: '' },
    { value: '+', style: '' },
    { value: '4', style: '' },
    { value: '5', style: '' },
    { value: '6', style: '' },
    { value: '-', style: '' },
    { value: '7', style: '' },
    { value: '8', style: '' },
    { value: '9', style: '' },
    { value: '=', style: 'row-span-2 bg-teal-100' },
    { value: '±', style: '' },
    { value: '0', style: '' },
    { value: '.', style: '' },
];
const calcHistory = ref([
    // { v1: 100, v2: 500, operator: '+', res: 600 },
    // { v1: 600, v2: 80, operator: '+', res: 680 },
    // { v1: 680, v2: null, operator: '+', res: null },
]);
const math_it = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
}
const calcResult = ref('')
const isReadyNextCalc = ref(false)
const keyListenener = ref(null)
// const valueType = {
//     number: 'number',
//     operator: 'operator'
// }

const onPressButton = (btnValue) => {
    switch (btnValue) {
        case 'C': case 'Backspace':
            calcResult.value = '';
            isReadyNextCalc.value = true;
            break;
        case '.':
            break;
        case '1': case '2': case '3': case '4': case '5':
        case '6': case '7': case '8': case '9': case '0':
            // On Number Pressed
            if (isReadyNextCalc.value) {
                calcResult.value = ''
                isReadyNextCalc.value = false;
            }
            calcResult.value = calcResult.value + (btnValue == '0' && calcResult.value == '' ? '' : btnValue)
            break;
        case '=': case 'Enter':
        case '*': case '/': case '+': case '-':
            if (btnValue == 'Enter') btnValue = '='
            // On Math Operator pressed
            const lastVal = calcHistory.value[calcHistory.value.length - 1]
            let tmpVal = null
            let nextVal = null

            if (!lastVal) {
                tmpVal = { v1: calcResult.value, operator: btnValue }
                calcHistory.value.push(tmpVal)
            } else {
                if (isReadyNextCalc.value) {
                    if (btnValue == '=') return
                    tmpVal = { v1: lastVal.v1, operator: btnValue }
                    calcHistory.value[calcHistory.value.length - 1] = tmpVal
                } else {
                    let res = math_it[lastVal.operator](Number(lastVal.v1), Number(calcResult.value));
                    nextVal = { v1: lastVal.v1, operator: lastVal.operator, v2: Number(calcResult.value), res }
                    calcHistory.value[calcHistory.value.length - 1] = nextVal;
                    calcResult.value = res;

                    if (btnValue == '=') {
                        tmpVal = { v1: res, operator: lastVal.operator, v2: lastVal.v2 }
                    } else {
                        tmpVal = { v1: res, operator: btnValue }
                    }
                    calcHistory.value.push(tmpVal)
                }
            }

            isReadyNextCalc.value = true;
            // let textBreakdown = calcHistory.value.split(/(\*|\+|\-|\/)/g);            
            break;
        case '±':
            break;
        default:
            break;
    }
}

function onKeyDown(e) {
    onPressButton(e.key)
}

onMounted(() => {
    keyListenener.value = window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown)
})

</script>

<style scoped></style>