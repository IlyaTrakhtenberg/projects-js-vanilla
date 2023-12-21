export default function isWeekend(date){
    return (date.format('dddd')==='Saturday' || date.format('dddd')==='Sunday') && 
    'Weekend! Woohoo!'
}