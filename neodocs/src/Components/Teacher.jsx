import React, { useState } from 'react'
import SelectedStudent from './SelectedStudent'
import Students from './Students'
import styles from './styles.module.css'

const Teacher = () => {

    const [tech1, setTech1]  = useState({})
    const [tech2, setTech2]  = useState({})
    const [tech3, setTech3]  = useState({})
    const [tech4, setTech4]  = useState({})
    const [tech5, setTech5]  = useState({})

    const tObj1 = {
        teacher: "Prateek Shukla",
        student1 : "Hardik Panday",
        student2 : "Virat Kohli",
        student3 : "MS Dhoni",
        student4 : "Suresh Raina"
    }
    const tObj2 = {
        teacher: "Ritesh Firodiya",
        student1 : "Akshay Kumar",
        student2 : "Ajay Devgan",
        student3 : "Siddharth Malhotra",
        student4 : "Varun Dhawan"
    }
    const tObj3 = {
        teacher: "Albert Sebastian",
        student1 : "Thalapathy Vijay",
        student2 : "Mahesh Babu",
        student3 : "Allu Arjun",
        student4 : "Naga Chaitanya"
    }
    const tObj4 = {
        teacher: "Varun Bhatt",
        student1 : "Christiano Ronaldo",
        student2 : "Lionel Messi",
        student3 : "Zinedine Zidane",
        student4 : "Mohamed Salah"
    }
    const tObj5 = {
        teacher: "Swanand Kadam",
        student1 : "Tom Cruise",
        student2 : "Will Smith",
        student3 : "Johhny Depp",
        student4 : "Dwayne Johnson"
    }

  return (
    <div>
        <div className = {styles.header}>
            <img src="https://neodocs.in/docassets/img/poct/neodocs-new-logo.svg" alt="" />
            <h1>Neodocs Healthcare pvt Ltd</h1>
        </div>
        <div className ={styles.teacher_main_container}>
            <div>
                <Students data = {tObj1} obj = {tech1} setObj={setTech1} />
            </div>
            <div>
                <Students data = {tObj2} obj = {tech2} setObj={setTech2} />
            </div>
            <div>
                <Students data = {tObj3} obj = {tech3} setObj={setTech3} />
            </div>
            <div>
                <Students data = {tObj4} obj = {tech4} setObj={setTech4} />
            </div>
            <div>
                <Students data = {tObj5} obj = {tech5} setObj={setTech5} />
            </div>
        
        </div>
        {/* here we will display selected students name  */}
        <div>
            <div>
                <h1 className={styles.selectedStudent}> Selected students will come below with his/her Teacher name👇</h1>
            </div>
            <SelectedStudent arr={[tech1,tech2,tech3,tech4,tech5]}/>
        </div>
    </div>
  )
}

export default Teacher