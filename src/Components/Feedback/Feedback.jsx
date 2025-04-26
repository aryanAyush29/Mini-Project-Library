import React, { useRef } from 'react'
import './Feedback.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/akshi.png'
import user_2 from '../../assets/jaggu.png'
import user_3 from '../../assets/abhay.png'
import user_4 from '../../assets/ayushmaan.png'


const Feedback = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if (tx > -50){
        tx -=25;
    }

    slider.current.style.transform = `translateX(${tx}%)`

}

const slideBackward = ()=>{
    if (tx < 0){
        tx +=25;
    }

    slider.current.style.transform = `translateX(${tx}%)`

}
  return (
    <div className='feedback'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}> 
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Akshi</h3>
                                <span>Computer Engineering, SE-A1</span>
                            </div>
                        </div>
                        <p>The project idea is very cool!. And so is the work, <br />
                             they have worked very hard on the project. <br />
                             They are trying that their project is best. <br />
                        </p>
                    </div>
                </li>
                
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Jaggu</h3>
                                <span>Computer Engineering, SE-A2</span>
                            </div>
                        </div>
                        <p>The project consists of several features and <br />
                            it allows you to add your own project effortlessly.<br />
                         The website also allows you to view best projects and <br />
                         understand their workings through GitHub. <br />
                         The entire project is innovative and so are the people. </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Abhay</h3>
                                <span>Computer Engineering, SE-A1</span>
                            </div>
                        </div>
                        <p>The projects turns out to be very good! <br /> 
                             The tech stacks used consists of REACT and EXPRESS JS. <br />
                             There is complexity in the project. <br/>
                             The project idea they have come up with is very good <br />
                             any super complex tech stack.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Shrek</h3>
                                <span>Computer Engineering, SE-A3</span>
                            </div>
                        </div>
                        <p>The project idea is very good, and the various features they have uploaded <br />
                             will help most students build their own projects. As many of us require examples to learn from <br />
                            this will prove to be very useful for the entire student community. <br />
                            </p>
                    </div>
                </li>
            </ul>
        </div>
    
    </div>
  )
}

export default Feedback
