function About({ currentTheme }) {
  const textClass = currentTheme === 'dark' ? 'dark-text' : 'light-text';

  const tableCols = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <>
    <div className="pageContent">
      <h2 className={textClass}>Our Mission</h2>
      <p className={textClass}>
        Our aim is to get you to where you want to be with your fitness or martial arts.
      </p>
      <hr className={textClass} />
      <h2 className={textClass}>About the Gym</h2>
      <p></p>
      <p className={textClass}>The gym has several facilities such as a matted martial arts area, fully equipped gym, a sauna, steamroom, showering and changing facilities.</p>
      <p className={textClass}>We are located right in the heart of town and are very easy to find.</p>
      <hr className={textClass}/>
      <p className={textClass}>Below is our timetable to our classes and sessions.</p>
      <p></p>
      <h1 className={textClass}> </h1>
      
    </div>
    <table border="1" className='timetable'>
        <tr>
        {tableCols.map((col) => (
            <th className={textClass}>{col}</th>
        ))}
        </tr>
        <tr>
            <th className={textClass}>06:00-07:30</th>
            <td className={textClass}>Jiu-Jitsu</td>
            <td className={textClass}>Karate</td>
            <td className={textClass}>Judo</td>
            <td className={textClass}>Jiu-Jitsu</td>
            <td className={textClass}>Muay Thai</td>
        </tr>
        <tr>
            <th className={textClass}>08:00-10:00</th>
            <td className={textClass}>Muay Thai</td>
            <td className={textClass}>Private Tuition</td>
            <td className={textClass}>Private Tuition</td>
            <td className={textClass}>Private Tuition</td>
            <td className={textClass}>Jiu Jitsu</td>
            <td className={textClass}>Private Tuition</td>
            <td className={textClass}>Private Tuition</td>
        </tr>
        <tr>
            <th className={textClass}>10:30-12:00</th>
            <td className={textClass}>Private Tuition</td>
            <td className={textClass}>Private Tuition</td>
            <td className={textClass}>Private Tuition</td>
            <td className={textClass}>Private Tuition</td>
            <td className={textClass}>Private Tuition</td>
            <td className={textClass}>Judo</td>
            <td className={textClass}>Karate</td>
        </tr>
        <tr>
            <th className={textClass}>13:00-14:30</th>
            <td className={textClass}>Open Mat/Personal Practice</td>
            <td className={textClass}>Open Mat/Personal Practice</td>
            <td className={textClass}>Open Mat/Personal Practice</td>
            <td className={textClass}>Open Mat/Personal Practice</td>
            <td className={textClass}>Open Mat/Personal Practice</td>
            <td className={textClass}>Karate</td>
            <td className={textClass}>Judo</td>
        </tr>
        <tr>
            <th className={textClass}>15:00-17:00</th>
            <td className={textClass}>Kids Jiu-Jitsu</td>
            <td className={textClass}>Kids Judo</td>
            <td className={textClass}>Kids Karate</td>
            <td className={textClass}>Kids Jiu-Jitsu</td>
            <td className={textClass}>Kids Judo</td>
            <td className={textClass}>Muay Thai</td>
            <td className={textClass}>Jiu-Jitsu</td>
        </tr>
        <tr>
            <th className={textClass}>17:30-19:00</th>
            <td className={textClass}>Karate</td>
            <td className={textClass}>Muay Thai</td>
            <td className={textClass}>Judo</td>
            <td className={textClass}>Jiu-Jitsu</td>
            <td className={textClass}>Muay Thai</td>
        </tr>
        <tr>
            <th className={textClass}>19:00-21:00</th>
            <td className={textClass}>Jiu-Jitsu</td>
            <td className={textClass}>Judo</td>
            <td className={textClass}>Jiu-Jitsu</td>
            <td className={textClass}>Karate</td>
            <td className={textClass}>Private Tuition</td>
        </tr>
      </table>
    </>
  );
}

export default About;