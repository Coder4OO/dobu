import "react";

function OurStaff({ currentTheme }) {
  const textClass = currentTheme === "dark" ? "dark-text" : "light-text";

  let tableCols = ["Name and Job", "Details"];

  return (
    <>
      <hr className={textClass}></hr>
      <div className="pageContent">
        <h1 className={textClass}>Our Staff</h1>
        <p className={textClass}>
          {" "}
          We have a wide range of qualified staff to help you learn martial arts
          or to improve your fitness. In the table below, you can see our
          friendly instructors and fitness coaches and what they specialise in.
        </p>
      </div>

      <table border="1" className="timetable">
        <tr>
          {tableCols.map((col) => (
            <th className={textClass}>{col}</th>
          ))}
        </tr>
        <hr className={textClass}></hr>
        <tr>
          <th className={textClass}>
            Mauricio Gomez (Gym Owner/Head Martial Arts Coach)
          </th>
          <td className={textClass}>
            Coaches in all martial arts: 4th Dan Blackbelt Judo, 3rd Dan
            Blackbelt Jiu-Jitsu, 1st Dan Blackbelt Karate <p></p> Accredited
            Muay Thai coach
          </td>
        </tr>
        <hr className={textClass}></hr>
        <tr>
          <th className={textClass}>
            Sarah Nova (Assistant Martial Arts Coach)
          </th>
          <td className={textClass}>5th Dan Karate</td>
        </tr>
        <hr className={textClass}></hr>
        <tr>
          <th className={textClass}>
            Guy Victory (Assistant Martial Arts Coach)
          </th>
          <td className={textClass}>
            2nd Dan Blackbelt Jiu-Jitsu, 1st Dan Blackbelt Judo
          </td>
        </tr>
        <hr className={textClass}></hr>
        <tr>
          <th className={textClass}>
            Morris Davis (Assistant Martial Arts Coach)
          </th>
          <td className={textClass}>
            Accredited Muay Thai coach<p></p> 3rd Dan Blackbelt Karate
          </td>
        </tr>
        <hr className={textClass}></hr>
        <tr>
          <th className={textClass}>Traci Santiago (Fitness Coach)</th>
          <td className={textClass}>
            BSc in Sports Science <p></p> Qualified in health and nutrition.
            Specialises in devising strength and conditioning programs for
            combat athletes
          </td>
        </tr>
        <hr className={textClass}></hr>
        <tr>
          <th className={textClass}>Harpreet Kaur (Fitness Coach)</th>
          <td className={textClass}>
            BSc in Physiotherapy MSc in Sports Science
          </td>
        </tr>
      </table>
    </>
  );
}

export default OurStaff;
