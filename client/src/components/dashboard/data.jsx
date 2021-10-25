




function countMoods(data) {
    let moodCounts = {
        "greatCount":  0,
        "goodCount": 0,
        "okayCount":  0,
        "sadCount": 0,
        "depressedCount":  0,
    
    }
   
    //console.log(data);
    
    //1.Loop through and count each mood
    data.forEach(el => {
       
        switch(el.mood){
            case"Great":
                moodCounts["greatCount"] = moodCounts["greatCount"] + 5;
                break;
            case"Good":
                moodCounts["goodCount"] = moodCounts["goodCount"] + 4;
                break;
            case"Okay":
                moodCounts["okayCount"] = moodCounts["okayCount"] + 3;
                break;
            case"Sad":
                moodCounts["sadCount"] = moodCounts["sadCount"] + 2;
                break;
            case"Depressed":
                moodCounts["depressedCount"] = moodCounts["depressedCount"] + 1;
                break;
            case "none":
                break;
        }
        
        
    });

    

    return moodCounts;
    
}

function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }


const getAverageMood = (data) => {


  let moodCounts = countMoods(data);

 
    
    //2.add up all the mood counts and divide by the number of moods
        let total = 0;
        let average;
        Object.values(moodCounts).forEach(el => {
           
            total = total + el;
          

        })

        average  = total /data.length;

       //console.log(average);
       return average;
    //3.

}



function calcPercentageMood(mood, data) {
    let moodCounts = countMoods(data);

    //1.get all counts of moods
    const total = data.length;

    //2. get selected mood total
    let moodNum = moodCounts[`${mood}Count`];
  
   
    switch(mood){
        case"great":
            moodNum = moodNum / (5)
            break;
        case"good":
            moodNum = moodNum / 4
            break;
        case"okay":
            moodNum = moodNum / 3
            break;
        case"sad":
            moodNum = moodNum / 2
            break;
        case"depressed":
            moodNum = moodNum / 1
            
        break;
    }
    //console.log(moodNum);

     //3. take number of selected moods and divide by total number 
      const moodPercent = Math.trunc((Math.round((moodNum/total)   * 100) / 100) * 100);

    //return result
    return moodPercent;
    
}

function getMoodPercentArr(data) {
   let moodPercentArr = [];
   moodPercentArr.push(calcPercentageMood("depressed", data));
   moodPercentArr.push(calcPercentageMood("sad", data));
   moodPercentArr.push(calcPercentageMood("okay", data));
   moodPercentArr.push(calcPercentageMood("good", data));
   moodPercentArr.push(calcPercentageMood("great", data));

    return moodPercentArr;

   
}


function getWeekMood(mood, data){
    let moodCounts = countMoods(data);

    let weekMoodMap = {
        Great: {
            Mon: 0,
            Tue: 0,
            Wed: 0,
            Thu: 0,
            Fri: 0,
            Sat: 0,
            Sun: 0,
        },
        Good: {
            Mon: 0,
            Tue: 0,
            Wed: 0,
            Thu: 0,
            Fri: 0,
            Sat: 0,
            Sun: 0,
        },
        Okay: {
            Mon: 0,
            Tue: 0,
            Wed: 0,
            Thu: 0,
            Fri: 0,
            Sat: 0,
            Sun: 0,
        },
        Sad:{
            Mon: 0,
            Tue: 0,
            Wed: 0,
            Thu: 0,
            Fri: 0,
            Sat: 0,
            Sun: 0,
        },
        Depressed: {
            Mon: 0,
            Tue: 0,
            Wed: 0,
            Thu: 0,
            Fri: 0,
            Sat: 0,
            Sun: 0,
        },
     }



     let currentWeeksArr = [];

    //1.Grab logs from current weeks
    // https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
    // console.log(getMonday(new Date())); // Mon Nov 08 2010

    //2.Loop through Filter out days
      data.forEach(el => {
           // console.log(el.date);
          if(el.date >= getMonday(new Date()).toUTCString()){
                let day = el.date.toString();
               
                day = day.slice(0,3);
                
               
                switch(day){
                    case"Mon":
                    weekMoodMap[`${el.mood}`].Mon = weekMoodMap[`${el.mood}`].Mon + 1;
                    break;
                    case"Tue":
                    weekMoodMap[`${el.mood}`].Tue = weekMoodMap[`${el.mood}`].Tue + 1;
                    break;
                    case"Wed":
                    weekMoodMap[`${el.mood}`].Wed = weekMoodMap[`${el.mood}`].Wed + 1;
                    break;
                    case"Thu":
                    weekMoodMap[`${el.mood}`].Thu = weekMoodMap[`${el.mood}`].Thu + 1;
                    break;
                    case"Fri":
                    weekMoodMap[`${el.mood}`].Fri = weekMoodMap[`${el.mood}`].Fri + 1;
                    break;
                    case"Sat":
                    weekMoodMap[`${el.mood}`].Sat = weekMoodMap[`${el.mood}`].Sat + 1;
                    break;
                    case"Sun":
                    weekMoodMap[`${el.mood}`].Sun = weekMoodMap[`${el.mood}`].Sun + 1;
                    break;
                }
              
                
          };

          console.table(weekMoodMap);

          
      })

      Object.keys(weekMoodMap).forEach((el) => 
              {
                
                  if(el === "Great"){
                     // console.log(weekMoodMap[el]);
                    currentWeeksArr.push(weekMoodMap[el]);    
                }
                  else if(el === "Good"){
                    currentWeeksArr.push(weekMoodMap[el]);   
                  }
                  else if(el === "Okay"){
                    currentWeeksArr.push(weekMoodMap[el]);   
                  }
                  else if(el === "Sad"){
                    currentWeeksArr.push(weekMoodMap[el]);   
                  }
                  else if(el === "Depressed"){
                    currentWeeksArr.push(weekMoodMap[el]);   
                  }
                  }
                
          )

         switch(mood){
             case"Great":
             return currentWeeksArr[0];
             case"Good":
             return currentWeeksArr[1];
             case"Okay":
             return currentWeeksArr[2];
             case"Sad":
             return currentWeeksArr[3];
             case"Depressed":
             return currentWeeksArr[4];
           
             
         }
     
         
}

export  {getAverageMood, calcPercentageMood, getWeekMood, getMoodPercentArr} ;

