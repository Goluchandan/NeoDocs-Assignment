import React from 'react'
import styles from './styles.module.css'

const SelectedStudent = ({arr}) => {

   console.log(arr);
  return (
    <div className = {styles.selectedStudent_main_container}>
        {arr.map((elem,i)=>{
            return (
                <div key={i} className = {elem.student1 || elem.student2 || elem.student3 || elem.student4 ? `${styles.selected_map_div}`:null}>
                    {elem.status ?
                    <>     
                        <h3>{elem.tName}</h3>
                        <ul>
                            {elem.student1 ? <li>{elem.sName1}</li> : null}
                            {elem.student2 ? <li>{elem.sName2}</li> : null}
                            {elem.student3 ? <li>{elem.sName3}</li> : null}
                            {elem.student4 ? <li>{elem.sName4}</li> : null}
                        </ul>
                        <h6>
                            All the students of <b className={styles.color}>{elem.tName}</b> has been selected
                        </h6> 
                    </>
                    :
                    <>
                      <h3>{elem.tName}</h3>
                        <ul>
                            {elem.student1 ? <li>{elem.sName1}</li> : null}
                            {elem.student2 ? <li>{elem.sName2}</li> : null}
                            {elem.student3 ? <li>{elem.sName3}</li> : null}
                            {elem.student4 ? <li>{elem.sName4}</li> : null}
                        </ul>
                    </>}
                </div>
            )
        })}

    </div>
  )
}

export default SelectedStudent