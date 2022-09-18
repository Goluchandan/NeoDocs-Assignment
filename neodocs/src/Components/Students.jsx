import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const Students = ({data , obj , setObj}) => {
    const [teacher, setTeacher] = useState(false)
    const [student1, setStudent1]  = useState(false)
    const [student2, setStudent2]  = useState(false)
    const [student3, setStudent3]  = useState(false)
    const [student4, setStudent4]  = useState(false)

    useEffect(() => {
        if(!student1 || !student2 || !student3 || !student4){
            setTeacher(false)
        }
        else{
            setTeacher(true)
            setObj({ ...obj, status : teacher ,tName : data.teacher })
        }

    },[student1, student2, student3, student4 ,teacher])

  return (
    <div className={styles.student_main_container}>

         <input
            type="checkbox" 
            checked={teacher} 
            onChange={(e)=>console.log(e.target.checked)}
         />
          <label htmlFor="">{data.teacher}</label>
         <ul>
             <li>
                    <input
                        type="checkbox"
                        checked={student1}
                        onChange={(e)=>{setStudent1(e.target.checked);
                            setObj({ ...obj, student1 : e.target.checked, sName1 : data.student1 , status : teacher ,tName : data.teacher})
                        }} 
                    />
                    <label htmlFor="">{data.student1}</label>
             </li>
             <li> 
                    <input
                        type="checkbox"
                        checked={student2} 
                        onChange={(e)=>{setStudent2(e.target.checked);
                            setObj({ ...obj, student2 : e.target.checked, sName2 : data.student2 , status : teacher ,tName : data.teacher})
                        }} 
                    />
                    <label htmlFor="">{data.student2}</label>
             </li>
            <li>
                    <input
                        type="checkbox"
                        checked={student3}
                        onChange={(e)=>{setStudent3(e.target.checked)
                            setObj({ ...obj, student3 : e.target.checked , sName3 : data.student3 , status : teacher ,tName : data.teacher })
                        }}
                    />
                    <label htmlFor="">{data.student3}</label>
            </li>
            <li>
                    <input 
                        type="checkbox"
                        checked={student4} 
                        onChange={(e)=>{setStudent4(e.target.checked)
                            setObj({ ...obj, student4 : e.target.checked , sName4 : data.student4 , status : teacher ,tName : data.teacher})
                        }} 
                    />
                    <label htmlFor="">{data.student4}</label>
            </li>
         </ul>
    </div>
  )
}

export default Students