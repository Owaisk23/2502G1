import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Maincontent from './components/Maincontent';
import Cards from './components/Cards';
import Bachra from './assets/bahra.jpg';

function App() {

  // const pakwheels = "Suneel Munj";
  // console.log(`Pakwheels by ${pakwheels}`);
  // console.log(`Pakwheels by ${pakwheels}`);

  let employeesData = [
    {
      name: "Haris Naseer",
      designation: "Software Engineer",
    },
    {
      name: "Usama Riaz",
      designation: "Senior Software Engineer",
    },
    {
      name: "Afzal Siddiqui",
      designation: "Mob App Developer",
    },
    {
      name: "Karim Khan",
      designation: "UIUX Engineer",
    },
    {
      name: "Ashar Ahmed",
      designation: "SQA Engineer",
    },

  ]

 let studentsData = [
  {
    "stdName": "Sandra O'Kon",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/49.jpg",
    "stdAge": "2002-04-25T22:08:50.768Z",
    "stdCountry": "Dyfed",
    "id": "1"
  },
  {
    "stdName": "Sadie Cremin",
    "stdImages": "https://res.cloudinary.com/dnfiycc46/image/upload/v1791300676/bahra_qgh3cc.jpg",
    "stdAge": "1948-02-02T04:06:16.461Z",
    "stdCountry": "Worcestershire",
    "id": "2"
  },
  {
    "stdName": "Marguerite Williamson",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/62.jpg",
    "stdAge": "1967-05-27T02:39:32.734Z",
    "stdCountry": "Fife",
    "id": "3"
  },
  {
    "stdName": "Oscar Pfannerstill",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/22.jpg",
    "stdAge": "2007-04-22T15:58:44.222Z",
    "stdCountry": "County Down",
    "id": "4"
  },
  {
    "stdName": "Sabrina Weissnat",
    "stdImages": "https://avatars.githubusercontent.com/u/9376876",
    "stdAge": "1951-06-20T19:36:15.530Z",
    "stdCountry": "Fife",
    "id": "5"
  },
  {
    "stdName": "Lynn Schuster",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/88.jpg",
    "stdAge": "1995-12-11T01:25:45.130Z",
    "stdCountry": "Clark County",
    "id": "6"
  },
  {
    "stdName": "Toby Dietrich",
    "stdImages": "https://avatars.githubusercontent.com/u/1631591",
    "stdAge": "1956-10-26T05:50:45.121Z",
    "stdCountry": "Hampshire",
    "id": "7"
  },
  {
    "stdName": "Louise Yundt",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/16.jpg",
    "stdAge": "1989-07-18T15:39:13.447Z",
    "stdCountry": "Shropshire",
    "id": "8"
  },
  {
    "stdName": "Marcella Prohaska",
    "stdImages": "https://avatars.githubusercontent.com/u/6667746",
    "stdAge": "1988-11-02T21:24:26.866Z",
    "stdCountry": "Bedfordshire",
    "id": "9"
  },
  {
    "stdName": "Gayle Kautzer",
    "stdImages": "https://avatars.githubusercontent.com/u/64180400",
    "stdAge": "1976-08-11T21:10:30.731Z",
    "stdCountry": "Dumfries and Galloway",
    "id": "10"
  },
  {
    "stdName": "Hazel Larkin",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/91.jpg",
    "stdAge": "1987-04-01T08:14:09.447Z",
    "stdCountry": "County Antrim",
    "id": "11"
  },
  {
    "stdName": "Gary Stark",
    "stdImages": "https://avatars.githubusercontent.com/u/76374241",
    "stdAge": "2007-09-14T06:45:02.465Z",
    "stdCountry": "Somerset",
    "id": "12"
  },
  {
    "stdName": "Andrew Orn",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/38.jpg",
    "stdAge": "1947-01-27T10:07:11.428Z",
    "stdCountry": "Lee County",
    "id": "13"
  },
  {
    "stdName": "Courtney Rohan",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/16.jpg",
    "stdAge": "1954-11-02T00:53:51.744Z",
    "stdCountry": "Avon",
    "id": "14"
  },
  {
    "stdName": "Daryl Powlowski-Schulist",
    "stdImages": "https://avatars.githubusercontent.com/u/45358088",
    "stdAge": "1985-07-18T21:52:30.705Z",
    "stdCountry": "Northamptonshire",
    "id": "15"
  },
  {
    "stdName": "Mr. Darryl Reinger",
    "stdImages": "https://avatars.githubusercontent.com/u/25986913",
    "stdAge": "2005-03-28T09:08:44.137Z",
    "stdCountry": "Jackson County",
    "id": "16"
  },
  {
    "stdName": "Kristi Schuster",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/89.jpg",
    "stdAge": "1977-06-25T14:47:28.426Z",
    "stdCountry": "Tayside",
    "id": "17"
  },
  {
    "stdName": "June Dicki",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/31.jpg",
    "stdAge": "1971-11-23T00:03:35.488Z",
    "stdCountry": "Pike County",
    "id": "18"
  },
  {
    "stdName": "Krista Dickinson",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/14.jpg",
    "stdAge": "1969-08-13T11:57:29.368Z",
    "stdCountry": "Wiltshire",
    "id": "19"
  },
  {
    "stdName": "Lynn Leuschke",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/88.jpg",
    "stdAge": "1994-04-16T09:42:05.900Z",
    "stdCountry": "Pike County",
    "id": "20"
  },
  {
    "stdName": "Sophie Bashirian",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/58.jpg",
    "stdAge": "1959-11-11T23:37:35.513Z",
    "stdCountry": "Dorset",
    "id": "21"
  },
  {
    "stdName": "Alton Sawayn",
    "stdImages": "https://avatars.githubusercontent.com/u/41172295",
    "stdAge": "1999-05-05T07:46:46.160Z",
    "stdCountry": "County Tyrone",
    "id": "22"
  },
  {
    "stdName": "Lester Breitenberg",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/11.jpg",
    "stdAge": "1971-05-29T21:58:36.781Z",
    "stdCountry": "Wiltshire",
    "id": "23"
  },
  {
    "stdName": "Mr. Casey Ondricka V",
    "stdImages": "https://avatars.githubusercontent.com/u/71070093",
    "stdAge": "2002-07-16T10:58:19.691Z",
    "stdCountry": "Calhoun County",
    "id": "24"
  },
  {
    "stdName": "Lawrence Lubowitz",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/76.jpg",
    "stdAge": "2006-10-13T19:50:33.448Z",
    "stdCountry": "Crawford County",
    "id": "25"
  },
  {
    "stdName": "Maureen Kunze PhD",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/33.jpg",
    "stdAge": "1981-04-09T04:13:23.689Z",
    "stdCountry": "Isle of Wight",
    "id": "26"
  },
  {
    "stdName": "Rick O'Kon IV",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/15.jpg",
    "stdAge": "2005-02-11T08:51:08.961Z",
    "stdCountry": "West Yorkshire",
    "id": "27"
  },
  {
    "stdName": "Ms. Kerry Torp",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/22.jpg",
    "stdAge": "2004-10-13T18:11:01.693Z",
    "stdCountry": "Calhoun County",
    "id": "28"
  },
  {
    "stdName": "Judy Kris-Von",
    "stdImages": "https://avatars.githubusercontent.com/u/55493074",
    "stdAge": "1976-10-29T00:44:10.379Z",
    "stdCountry": "Logan County",
    "id": "29"
  },
  {
    "stdName": "Mrs. Cheryl Heidenreich",
    "stdImages": "https://avatars.githubusercontent.com/u/23193281",
    "stdAge": "1993-04-28T22:26:10.517Z",
    "stdCountry": "Montgomery County",
    "id": "30"
  },
  {
    "stdName": "Leonard Ratke III",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/61.jpg",
    "stdAge": "1947-07-08T06:47:39.498Z",
    "stdCountry": "Gwent",
    "id": "31"
  },
  {
    "stdName": "Lucas Schmidt",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/49.jpg",
    "stdAge": "1993-10-03T19:57:05.215Z",
    "stdCountry": "Hampshire",
    "id": "32"
  },
  {
    "stdName": "Bernard Jast",
    "stdImages": "https://avatars.githubusercontent.com/u/25839697",
    "stdAge": "1982-10-23T22:19:03.652Z",
    "stdCountry": "Perry County",
    "id": "33"
  },
  {
    "stdName": "Tanya McGlynn",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/47.jpg",
    "stdAge": "1986-09-23T05:46:51.033Z",
    "stdCountry": "County Fermanagh",
    "id": "34"
  },
  {
    "stdName": "Judith Larson-Cummerata",
    "stdImages": "https://avatars.githubusercontent.com/u/57874643",
    "stdAge": "1974-09-18T18:15:38.091Z",
    "stdCountry": "County Armagh",
    "id": "35"
  },
  {
    "stdName": "Sylvia Crooks II",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/99.jpg",
    "stdAge": "1992-11-26T06:23:36.092Z",
    "stdCountry": "Clark County",
    "id": "36"
  },
  {
    "stdName": "Ian Parisian",
    "stdImages": "https://avatars.githubusercontent.com/u/72832135",
    "stdAge": "1991-07-28T19:05:49.634Z",
    "stdCountry": "Suffolk",
    "id": "37"
  },
  {
    "stdName": "Krystal Johnson",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/32.jpg",
    "stdAge": "1995-06-06T00:07:44.911Z",
    "stdCountry": "Powys",
    "id": "38"
  },
  {
    "stdName": "Clifford Franey",
    "stdImages": "https://avatars.githubusercontent.com/u/86772298",
    "stdAge": "1963-05-06T03:20:22.437Z",
    "stdCountry": "Powys",
    "id": "39"
  },
  {
    "stdName": "Vivian Fahey DDS",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/96.jpg",
    "stdAge": "1973-07-07T15:10:33.707Z",
    "stdCountry": "Isle of Wight",
    "id": "40"
  },
  {
    "stdName": "Dora Beier",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/22.jpg",
    "stdAge": "1946-01-04T18:22:57.325Z",
    "stdCountry": "Hertfordshire",
    "id": "41"
  },
  {
    "stdName": "Shawn Zieme",
    "stdImages": "https://avatars.githubusercontent.com/u/90015541",
    "stdAge": "1979-12-16T10:04:09.205Z",
    "stdCountry": "Clay County",
    "id": "42"
  },
  {
    "stdName": "Cristina Hyatt",
    "stdImages": "https://avatars.githubusercontent.com/u/75965269",
    "stdAge": "2001-03-29T03:02:22.121Z",
    "stdCountry": "Cleveland",
    "id": "43"
  },
  {
    "stdName": "Roland Funk",
    "stdImages": "https://avatars.githubusercontent.com/u/23439505",
    "stdAge": "1985-07-08T06:42:49.543Z",
    "stdCountry": "County Antrim",
    "id": "44"
  },
  {
    "stdName": "Laura Moen",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/8.jpg",
    "stdAge": "2000-02-29T00:45:31.170Z",
    "stdCountry": "Somerset",
    "id": "45"
  },
  {
    "stdName": "Mr. Mathew Bernhard",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/64.jpg",
    "stdAge": "1954-09-14T00:25:16.545Z",
    "stdCountry": "Fife",
    "id": "46"
  },
  {
    "stdName": "Lucille Blanda",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/72.jpg",
    "stdAge": "1947-08-07T03:46:29.163Z",
    "stdCountry": "Northumberland",
    "id": "47"
  },
  {
    "stdName": "Margie Orn",
    "stdImages": "https://avatars.githubusercontent.com/u/45687530",
    "stdAge": "1996-08-19T00:36:04.443Z",
    "stdCountry": "Lincoln County",
    "id": "48"
  },
  {
    "stdName": "Homer Thiel",
    "stdImages": "https://avatars.githubusercontent.com/u/44877970",
    "stdAge": "1964-12-11T14:02:29.008Z",
    "stdCountry": "West Midlands",
    "id": "49"
  },
  {
    "stdName": "Marjorie Wuckert",
    "stdImages": "https://avatars.githubusercontent.com/u/420944",
    "stdAge": "1958-05-22T20:07:06.328Z",
    "stdCountry": "Tayside",
    "id": "50"
  },
  {
    "stdName": "Rufus Ernser",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/18.jpg",
    "stdAge": "1968-08-24T12:33:24.194Z",
    "stdCountry": "Cheshire",
    "id": "51"
  },
  {
    "stdName": "Edmund Connelly",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/83.jpg",
    "stdAge": "1987-01-02T21:53:43.347Z",
    "stdCountry": "Carroll County",
    "id": "52"
  },
  {
    "stdName": "Mr. Christian Bartell-Volkman",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/32.jpg",
    "stdAge": "1952-08-17T17:11:39.894Z",
    "stdCountry": "County Fermanagh",
    "id": "53"
  },
  {
    "stdName": "Verna Wiegand",
    "stdImages": "https://avatars.githubusercontent.com/u/38046627",
    "stdAge": "2005-09-27T22:11:26.818Z",
    "stdCountry": "Merseyside",
    "id": "54"
  },
  {
    "stdName": "Bill Pfannerstill",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/38.jpg",
    "stdAge": "2001-11-02T06:14:33.215Z",
    "stdCountry": "Worcestershire",
    "id": "55"
  },
  {
    "stdName": "Dave Cremin",
    "stdImages": "https://avatars.githubusercontent.com/u/29682126",
    "stdAge": "2008-05-10T15:34:56.285Z",
    "stdCountry": "Worcestershire",
    "id": "56"
  },
  {
    "stdName": "Bryant O'Conner I",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/84.jpg",
    "stdAge": "1989-03-15T14:49:32.419Z",
    "stdCountry": "Bedfordshire",
    "id": "57"
  },
  {
    "stdName": "Mr. Kenny Romaguera",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/46.jpg",
    "stdAge": "1979-10-25T07:58:40.130Z",
    "stdCountry": "Morgan County",
    "id": "58"
  },
  {
    "stdName": "Gary Leannon I",
    "stdImages": "https://avatars.githubusercontent.com/u/63308208",
    "stdAge": "1986-02-25T03:17:42.050Z",
    "stdCountry": "Marion County",
    "id": "59"
  },
  {
    "stdName": "Anthony Kunde",
    "stdImages": "https://avatars.githubusercontent.com/u/91525895",
    "stdAge": "1956-12-18T18:29:07.672Z",
    "stdCountry": "Logan County",
    "id": "60"
  },
  {
    "stdName": "Caleb Sporer",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/88.jpg",
    "stdAge": "1998-02-09T14:45:56.000Z",
    "stdCountry": "Borders",
    "id": "61"
  },
  {
    "stdName": "Nora Hyatt",
    "stdImages": "https://avatars.githubusercontent.com/u/42312224",
    "stdAge": "1989-09-04T22:35:50.675Z",
    "stdCountry": "Scott County",
    "id": "62"
  },
  {
    "stdName": "Mindy Sauer-Stracke",
    "stdImages": "https://avatars.githubusercontent.com/u/70105479",
    "stdAge": "1947-11-03T07:57:12.518Z",
    "stdCountry": "Cumbria",
    "id": "63"
  },
  {
    "stdName": "Emmett Kunde III",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/85.jpg",
    "stdAge": "1979-09-04T02:40:28.606Z",
    "stdCountry": "Marshall County",
    "id": "64"
  },
  {
    "stdName": "Brandy Schowalter",
    "stdImages": "https://avatars.githubusercontent.com/u/16890794",
    "stdAge": "1996-10-13T02:08:35.498Z",
    "stdCountry": "Crawford County",
    "id": "65"
  },
  {
    "stdName": "Ms. Rachael McKenzie",
    "stdImages": "https://avatars.githubusercontent.com/u/55962049",
    "stdAge": "1963-06-18T14:46:46.475Z",
    "stdCountry": "West Sussex",
    "id": "66"
  },
  {
    "stdName": "Carla Monahan",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/64.jpg",
    "stdAge": "1971-06-05T06:07:54.775Z",
    "stdCountry": "Dumfries and Galloway",
    "id": "67"
  },
  {
    "stdName": "Jane Larson I",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/87.jpg",
    "stdAge": "1973-01-09T20:38:33.543Z",
    "stdCountry": "Durham",
    "id": "68"
  },
  {
    "stdName": "Eunice Graham",
    "stdImages": "https://avatars.githubusercontent.com/u/31077973",
    "stdAge": "1964-10-10T21:19:07.817Z",
    "stdCountry": "Herefordshire",
    "id": "69"
  },
  {
    "stdName": "Susie West",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/9.jpg",
    "stdAge": "1993-12-13T15:08:51.346Z",
    "stdCountry": "Franklin County",
    "id": "70"
  },
  {
    "stdName": "Scott Kertzmann",
    "stdImages": "https://avatars.githubusercontent.com/u/66245626",
    "stdAge": "2008-04-17T23:14:18.275Z",
    "stdCountry": "Madison County",
    "id": "71"
  },
  {
    "stdName": "Dr. Renee Larson",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/98.jpg",
    "stdAge": "1958-05-04T20:44:40.914Z",
    "stdCountry": "Bedfordshire",
    "id": "72"
  },
  {
    "stdName": "Robin Hickle-Boyle",
    "stdImages": "https://avatars.githubusercontent.com/u/64841599",
    "stdAge": "2003-12-28T07:05:48.050Z",
    "stdCountry": "Surrey",
    "id": "73"
  },
  {
    "stdName": "Viola Lynch",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/70.jpg",
    "stdAge": "2008-07-06T16:53:35.511Z",
    "stdCountry": "Berkshire",
    "id": "74"
  },
  {
    "stdName": "Dr. Bob Krajcik",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/14.jpg",
    "stdAge": "1974-04-07T23:15:20.453Z",
    "stdCountry": "East Sussex",
    "id": "75"
  },
  {
    "stdName": "Miranda Hand",
    "stdImages": "https://avatars.githubusercontent.com/u/35854253",
    "stdAge": "2001-12-20T22:21:27.812Z",
    "stdCountry": "Cambridgeshire",
    "id": "76"
  },
  {
    "stdName": "Hector Miller-Padberg",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/80.jpg",
    "stdAge": "1956-10-25T17:19:35.117Z",
    "stdCountry": "County Antrim",
    "id": "77"
  },
  {
    "stdName": "Tyrone Wunsch",
    "stdImages": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/24.jpg",
    "stdAge": "1996-02-09T00:35:16.434Z",
    "stdCountry": "Central",
    "id": "78"
  }
]

  return (
    <>
      <Navbar />
      <img src={Bachra} alt="" />

      {studentsData.map((student, index) => {
        return (
          <Cards key={index} studentName={student.stdName} studentImage={student.stdImages} studentAge={student.stdAge} studentCountry={student.stdCountry} />
        )
      })}
      {/* <Maincontent empName={"Owais Ahmed"} profession={"Software Engineer"} /> */}

      {/* <Maincontent empName={employeesData[0].name} profession={employeesData[0].designation} />
      <h1>----------------------------------------------------------------------</h1>
      <Maincontent empName={employeesData[1].name} profession={employeesData[1].designation} />
      <h1>----------------------------------------------------------------------</h1>
      <Maincontent empName={employeesData[2].name} profession={employeesData[2].designation} />
      <h1>----------------------------------------------------------------------</h1>
      <Maincontent empName={employeesData[3].name} profession={employeesData[3].designation} />
      <h1>----------------------------------------------------------------------</h1>
      <Maincontent empName={employeesData[4].name} profession={employeesData[4].designation} />
      <h1>----------------------------------------------------------------------</h1> */}

      {employeesData.map((employee, index) => {
        return (
            <Maincontent key={index}  empName={employee.name} profession={employee.designation} />
        )
      })}

      <Footer />
    </>
  )
}

export default App
