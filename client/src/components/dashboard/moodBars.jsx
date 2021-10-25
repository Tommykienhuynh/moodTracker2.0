import React from 'react'

import greatMood from "../../assets/moodGreat.svg";
import goodMood from "../../assets/moodGood.svg";
import okayMood from "../../assets/moodOkay.svg";
import sadMood from "../../assets/moodSad.svg";
import depressedMood from "../../assets/moodDepressed.svg";


export default function MoodBars({moodPercentArr}) {



    return (
        <div className="moodBarsContainer "> 
                <div className="moodBar  shadow">
                    <div className="barFaceContainer great">
                            <img src={greatMood} />
                    </div>
                <small > {`${moodPercentArr[4]}%`} </small>
                        <div className="innerMoodBar great"
                            style={{width: `${moodPercentArr[4]}%`}}
                        >

                    </div>
                </div>
                <div className="moodBar  shadow">
                <div className="barFaceContainer good">
                            <img src={goodMood} />
                    </div>
                    <small > {`${moodPercentArr[3]}%`}  </small>
                    <div className="innerMoodBar good"
                        style={{width: `${moodPercentArr[3]}%`}}
                        >
                                <div className="innerMoodBar-liquid">

                                </div>
                    </div>
                </div>
                <div className="moodBar  shadow">
                <div className="barFaceContainer okay">
                            <img src={okayMood} />
                    </div>
                    <small > {`${moodPercentArr[2]}%`}  </small>
                    <div className="innerMoodBar okay"
                        style={{width: `${moodPercentArr[2]}%`}}
                    >

                    </div>
                </div>
                <div className="moodBar  shadow">
                <div className="barFaceContainer sad">
                            <img src={sadMood} />
                    </div>
                    <small > {`${moodPercentArr[1]}%`}  </small>
                    <div className="innerMoodBar sad"
                            style={{width: `${moodPercentArr[1]}%`}}
                    >

                    </div>
                </div>
                <div className="moodBar  shadow">
                <div className="barFaceContainer depressed">
                            <img src={depressedMood} />
                    </div>
                    <small > {`${moodPercentArr[0]}%`}  </small>
                    <div className="innerMoodBar depressed"
                        style={{width: `${moodPercentArr[0]}%`}}
                        >

                    </div>
                </div>
        </div>
    )
}
