const question = document.getElementById("question");
const answer = document.getElementById("answer");

let init = 0;

const botSay = (data) => {
    return [
        "Hi CIL, I'm NOT sultan-bot, what can I call you?",
        `Udah tau,  ${data?.name} kan? how old are you?`,
        `Wow, you're still ${data?.age}??? very young (bocil). So, do you have a hobby?`,
        `Woah, udah tau. Tapi hobby gua bukan ${data?.hobby}, Lu mau tau gak kenapa gw selalu bilang lu ga peka?`,
        `${data?.partner}? mau. Sejujurnya aku juga gatau sih lu emang ga peka atau cuman gamau ngebahas aja, tapi gue ini sebenernya lagi berusaha buat deketin lu pea. KALAU misalnya ternyata lu emg udh peka NGESELIN SIH karena lu diem aja TAPI TTP CHATIN GUA TIAP HARI??? TAPI KALAU ternyata lu emg ga peka YAUDA GW BENER BERARTI LU GA SE PEKA ITU HAHAHAH sisanya lanjut di DM :)`
    ];
};
question.innerHTML = botSay()[0];

let usersData = []

function botStart() {
    init++
    if (init === 1){
        botDelay({ name: answer.value})
    } else if(init === 2){ 
        botDelay({ age : answer.value})
    } else if (init === 3) {
        botDelay({hobby: answer.value})
    } else if (init === 4){
        botDelay({partner: answer.value})
    }
    else if (init === 5){
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(userAnswer){
    console.log ({usersData: usersData})
    setTimeout(() => {
        question.innerHTML = botSay(userAnswer)[init]
    }, [900]);
    usersData.push(answer.value)
    answer.value = ''
}

function finishing() {
    question.innerHTML = `Thank you for getting acquainted with Sultan-Bot, Nice to meet you,${usersData[0]},
     Lets play ${usersData[2]} next time, Goodbyee!.`
    answer.value = 'Aight then nice to meet you to, cya'
}

function botEnd() {
    window.location.reload()
}