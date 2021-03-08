/*
    13:00 A 15:30 B
    12:00 C 16:00 D
    10:00 B 11:00 C
    10:00 A 11:00 C
*/


const shedule = [
    ['13:00', 'A', '15:30', 'B'],
    ['12:00', 'C', '16:00', 'D'],
    ['10:00', 'B', '11:00', 'C'],
    ['10:00', 'A', '11:00', 'C']
]



//function convert

function convert(time) {
    const [h, m] = time.split(':');
    return parseInt(h) + (m[0] === '0' ? (m[1] === '0' ? 0 : 60 / m[1]) : 60 / m ) / 100;
}

function find(city, inputTime) {
    const time = convert(inputTime);
    return shedule.filter(([sTime, sCity]) => city === sCity && convert(sTime) >= time);

}
//try 1
console.log(find('A', '13:15'))


function find2(sCity, sTime, city, time){
    const cTime = convert(time);
    const s = find(sCity, sTime);

    for(const i of s) {
        if(city === i[3] && cTime >= convert(i[2])) {
            return true
        } else if (convert(i[2]) < cTime) {
            const r = find2(i[3], i[2], city, time)
            if(r) {
                return true;
            }
        }
    }
    return false
}

//try 2
console.log(find2('A', '11:00', 'D', '16:15'))

// watch?v=jsF8WcLKRww&ab_channel=DmitriyKalyuk
