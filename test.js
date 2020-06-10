
// const abbrevName=name=>name.split(' ').map(word=>word[0]).join('.').toUpperCase();

// const sortReindeer = reindeerNames => console.log(reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1])));

// const getNiceNames=people=>people.filter(obj=>obj.wasNice===true).map(obj=>obj.name)
// const getNaughtyNames=people=>people.filter(obj=>obj.wasNice===false).map(obj=>obj.name)

// const greet =name=>'Hello '+(name[0].toUpperCase()+name.slice(1).toLowerCase())+'!'

// const solve=(a,b)=>(a+b).split('').filter(lett=>(!a.includes(lett) || !b.includes(lett))).join('')

// const divisibleByThree = str=> (str.split('').map(elem=>+elem).reduce((total,num)=>total+num,0))%3===0?true:false

// const splitInParts =(s, partLength)=>{
//     let chunks = [];
//     for (let i = 0, charsLength = s.length; i < charsLength; i += partLength) {
//         chunks.push(s.substring(i, i + partLength));
//     };
//     let result=chunks.join(' ');
//     return result
// }

// const solution=digits=>{
//     let answer=0;
//     for(let i=0;i<digits.length;i++){
//         if(answer<+digits.substr(i,5)){
//             answer=+digits.substr(i,5);
//         };
//     };
//     return answer;
// };

// const disemvowel = str =>{
//     let glasn=['a','e','i','o','u'];
//     str=str.split('').filter(el=>!glasn.includes(el.toLowerCase())).join('');
//     return(str)
// }
let audio = new Audio();
audio.preload = 'auto';
audio.src = './audio.mp3';
audio.loop='true';

let date=new Date(),
    nowYear=date.getFullYear(),
    nowMonth=date.getMonth()+1,
    nowDay=date.getDate()+1;
if((''+nowMonth).length<2){
    nowMonth='0'+nowMonth;
};
function toMs(str){
    let arr=str.split(':');
    let ms=arr[0]*60*60*1000+arr[1]*60*1000+arr[2]*1000;
    return ms;
}
let now=nowYear+'-'+nowMonth+'-'+nowDay+'T';
console.log(now);
let blSeconds=document.querySelector('.seconds'),
    blMinutes=document.querySelector('.minutes'),
    blHours=document.querySelector('.hours'),
    vremya=document.querySelector('.vremya');

function getTimeRemaining(end){
    let t=end-Date.parse(new Date),
        seconds=Math.floor((t/1000)%60),
        minutes=Math.floor((t/1000/60)%60),
        hours=Math.floor((t/1000/60/60));
    return [seconds,minutes,hours];
};
let title=document.querySelector('.title')
function updateTime(){
    blSeconds.textContent=getTimeRemaining(end)[0];
    blMinutes.textContent=getTimeRemaining(end)[1];
    blHours.textContent=getTimeRemaining(end)[2];
    title.textContent=blHours.textContent+':'+blMinutes.textContent+':'+blSeconds.textContent;
    if(blHours.textContent+':'+blMinutes.textContent+':'+blSeconds.textContent==='0:0:0'){
        
    };
};
let zadat=document.querySelector('.zadat');
zadat.addEventListener('click',function(){
    end=Date.parse(new Date)+toMs(vremya.value);
    let timerId = setTimeout(function tick() {
        updateTime();
        if(end<=Date.parse(new Date)){
            audio.play();
            alert('Конец');
            audio.pause();
            audio.currentTime = 0.0;
            clearTimeout();
            return false;
        }
        timerId = setTimeout(tick, 10); // (*)
    }, 10);
    
});

