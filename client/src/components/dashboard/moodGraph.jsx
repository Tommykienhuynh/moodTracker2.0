import React from 'react'
import {Line} from 'react-chartjs-2';
import { getWeekMood } from './data';


export default function moodGraph({moodData}) {

    const greatArr = getWeekMood("Great", moodData);
    const goodArr = getWeekMood("Good", moodData);
    const okayArr = getWeekMood("Okay", moodData);
    const sadArr = getWeekMood("Sad", moodData);
    const depressedArr = getWeekMood("Depressed", moodData);

    return (
        <div className="moodGraph">
            <Line  
            data={
                {
                    labels: [
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat",
                        "Sun",
                        
                      ],
                      datasets: [{
                          label: 'Great ',
                          data: greatArr,
                          backgroundColor: [
                              '#c8ecad'
                          ],
                          borderColor: [
                              '#68d813'
                          ],
                          borderWidth: 1,

                        
                      },
                      {
                        label: 'Good ',
                        data: goodArr,
                        backgroundColor: [
                          
                            '#d8ebe8'
                        ],
                        borderColor: [
                            '#52adc8'
                        ],
                        borderWidth: 1,

                      
                    },
                    {
                        label: 'Okay ',
                        data: okayArr,
                        backgroundColor: [
                        
                            '#fee4bd'
                        ],
                        borderColor: [
                            '#eba336'
                        ],
                        borderWidth: 1,

                      
                    },
                    {
                        label: 'Sad',
                        data: sadArr,
                        backgroundColor: [
                 
                            '#ffc3bd'
                        ],
                        borderColor: [
                            '#f1503e'
                        ],
                        borderWidth: 1,
                    },
                    {
                        label: 'Depressed ',
                        data: depressedArr,
                        backgroundColor: [
                            '#dbd0ec'
                        ],
                        borderColor: [
                            
                            '#b99be5'
                        ],
                        borderWidth: 1,
                    }
                ],
                    
                }
            }
                height={200}
                width={400}
                options={{
                    maintainAspectRatio: false,
                  
                    
                }}
            />
        </div>
    )
}
