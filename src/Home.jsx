import 'react';

import SparHome from './assets/spar-cover.png';
import GymHome from './assets/gym.png';

function Home({ currentTheme }) {
    const textClass = currentTheme === 'dark' ? 'dark-text' : 'light-text';

    return (
        <>
            <div className='pageContent'>
                <p className={textClass}>
                    Dobu Martial Arts is the leading gym for Martial Arts and fitness. We offer many classes and facilities.
                </p>
                <p className={textClass}>
                    We have lots of qualified instructors to help you reach your goal. Whether that would be to learn a martial art or to improve your fitness, we are here to help you!
                </p>
                <p className={textClass}>
                    There a wide variety of courses available:
                </p>
                <ul className={textClass}>
                    <li>Thai Chi</li>
                    <li>Judo</li>
                    <li>Jiu Jitsu</li>
                    <li>Karate</li>
                    <li>Muay Thai</li>
                    <li>Self Defence</li>
                </ul>
                <p className={textClass}>
                    More details about our courses, gym or staff are available throughout the website.
                </p>
            </div>
            <img className='sparring-cover' src={SparHome} alt='A picture of two people sparring' />
            <img className='gym' src={GymHome} alt='Picture of Dobu Martial Arts.' />
        </>
    );
}

export default Home;
