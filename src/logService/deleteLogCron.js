import cron from "node-cron";

export const deleteLogDataCronJob =()=>{
    cron.schedule("* * * * *",() =>{
        console.log('running cron schedule')
    })
}