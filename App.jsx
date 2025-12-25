
// import Card1 from './components/card1'
// import React from 'react'

// const cardData = [
//   {
//     id: 1,
//     status: "Available",
//     price: "$22",
//     name: "Rahul Sharma",
//     jobRole: "UI / UX Designer",
//     company: "Epic Coder",
//     skills: "PHP / Developer",
//     description: "Creative UI/UX designer with a passion for clean and modern design."
//   },
//   {
//     id: 2,
//     status: "Available",
//     price: "$30",
//     name: "Anjali Verma",
//     jobRole: "Frontend Developer",
//     company: "Pixel Studio",
//     skills: "React / JavaScript",
//     description: "Frontend developer focused on performance and smooth user experience."
//   },
//   {
//     id: 3,
//     status: "Busy",
//     price: "$45",
//     name: "Amit Singh",
//     jobRole: "Full Stack Developer",
//     company: "Tech Wave",
//     skills: "Node / MongoDB",
//     description: "Full stack developer with strong backend and scalable systems."
//   },
//   {
//     id: 4,
//     status: "Available",
//     price: "$28",
//     name: "Neha Kapoor",
//     jobRole: "Product Designer",
//     company: "Design Hub",
//     skills: "Figma / UX Research",
//     description: "Product designer specializing in user-centric and minimal designs."
//   },
//   {
//     id: 5,
//     status: "Available",
//     price: "$35",
//     name: "Rohit Mehta",
//     jobRole: "Backend Developer",
//     company: "CodeStack",
//     skills: "Java / Spring Boot",
//     description: "Backend engineer focused on secure and scalable architectures."
//   },
//   {
//     id: 6,
//     status: "Busy",
//     price: "$50",
//     name: "Sneha Iyer",
//     jobRole: "Mobile App Developer",
//     company: "Appify",
//     skills: "Flutter / Dart",
//     description: "Cross-platform mobile developer building smooth and elegant apps."
//   },
//   {
//     id: 7,
//     status: "Available",
//     price: "$40",
//     name: "Karan Malhotra",
//     jobRole: "DevOps Engineer",
//     company: "CloudOps",
//     skills: "AWS / Docker",
//     description: "DevOps engineer ensuring fast deployments and high availability."
//   },
//   {
//     id: 8,
//     status: "Available",
//     price: "$26",
//     name: "Pooja Nair",
//     jobRole: "Graphic Designer",
//     company: "Creative Box",
//     skills: "Photoshop / Illustrator",
//     description: "Graphic designer with a strong eye for luxury and branding."
//   },
//   {
//     id: 9,
//     status: "Busy",
//     price: "$55",
//     name: "Arjun Patel",
//     jobRole: "Data Analyst",
//     company: "DataCraft",
//     skills: "Python / Power BI",
//     description: "Data analyst turning raw data into meaningful business insights."
//   },
//   {
//     id: 10,
//     status: "Available",
//     price: "$60",
//     name: "Meera Joshi",
//     jobRole: "AI Engineer",
//     company: "NeuroTech",
//     skills: "Python / Machine Learning",
//     description: "AI engineer building intelligent and scalable ML solutions."
//   }
// ];const App = () => {
//   return (
//     <>
//       {cardData.map((elem) => (
//         <Card1
//           key={elem.id}   // ✅ unique key
//           status={elem.status}
//           price={elem.price}
//           id={elem.id}
//           name={elem.name}
//           jobRole={elem.jobRole}
//           skills={elem.skills}
//           company={elem.company}
//           description={elem.description}
//         />
//       ))}
//     </>
//   );
// };

// export default App;
// import Function from './fucntion'
// import Section1 from './components/section1/section1'
// import Section2 from './components/section2/section2'
// const App = () => {
//   return (
//     <>
// <Function/>
//     </>
//   )
// }

// export default App
//

// import React from 'react'
// import { useState } from 'react'
// const App = () => {     
// const [num, setnum] = useState(10)
// const [Users, setUsers] = useState([10,20,30])
// //  const usestate use to show to direct change value in screen 

// function change(){
//   setnum(num +1)
//   setUsers([50,60,70])
// }


//   return (
//     // <div>App</div>
//     <>
//     <h1>the value of num is {num}</h1>
//     <h1>{Users}</h1>

//     <button className='bg-amber-300 border-amber-200 ' onClick={change}> click me </button>
//     </>
//   )
// }

// export default App
// import React from 'react'
// import { useState } from 'react'


// const Counter = () => {
//   const [count, setcount] = useState(0)

// const increment =()=>{
//   setcount(count+1)
// }


//  const decrement = () => {
//   if (count > 0) {
//     setcount(count - 1)
//   }
// }


//   return (
//    <>
//   <div className="text-3xl font-semibold text-gray-800 tracking-wide mb-6 
//                 bg-white/70 backdrop-blur-md px-6 py-4 rounded-2xl 
//                 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
//   Counter App value {count}
// </div>

// <button
//   className="
//     w-16 h-16 
//     rounded-full 
//     bg-gradient-to-br from-amber-400 to-yellow-500 
//     shadow-lg shadow-amber-300/50 
//     hover:scale-110 transition-all duration-300 
//     active:scale-95
//   "
//   onClick={ increment}
// > increment</button>
// <button onClick={decrement}>decrement</button>

//    </>

//   )
// }

// export default Counter









import React from 'react'
import { useState } from 'react'
const App = () => {
  const [num, setnum] = useState(0)

  const increment =()=>{
    setnum(num +1)
  }

  const decrement =()=>{
    if(num > 0){
      setnum (num -1)
    }
  }
  return (
    <div>
<h1>{num}</h1>
<button onClick={increment}>increment</button>
<button onClick={decrement}>decrement</button>

    </div>
  )
}

export default App







