import React from 'react'

const Komp3 = () => {
    let students = [
        { id: 1, name: 'John Smith', grade: 8},
        { id: 2, name: 'Peter Smith', grade: 4},
        { id: 3, name: 'Eve Eventi', grade: 5},
        { id: 4, name: 'Jolant Abegi', grade: 7}
    ]

    // const vidurkis = () => {
    //     return students.reduce((sum, student) => sum + student.grade, 0) 
    //     / students.length
    // }

    // const vidurkis = () => {
    //     let suma = 0
    //      for (const student of students) {
    //         suma += student.grade
    //      }
    //  return suma / students.length
    // }

    const vidurkis = () => {
        return students.reduce((sum, student) => {
            return sum + student.grade
        }, 0) / students.length
    }

    // (grade - apsirašome, kaip naudosime f-joje, tai kaip norime),
    // kad suprastų, kaip paimti iš konkretaus studento

    // function arTeigiamas(grade) {}
    const arTeigiamas = (grade) => {
        if (grade >= 5) {
            return 'Taip'
        } else {
            return 'Ne'
        }
    }

    // galima buvo ir su vidurkiu lyginti,
    // bet čia jeigu jo nebūtų buvę
    const arStudVirsVidurkio = (studId) => {
        let student = students.find(student => student.id === studId)

        if (student.grade > vidurkis()) {
            return 'Taip'
        } else {
            return 'Ne'
        }
    }

  return (
    <>
        <h2>Studentai</h2>
        <p>
            Studentų bendras vidurkis:
            { vidurkis() }
        </p>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Vardas pavardė</th>
                    <th>Vidurkis</th>
                    <th>Ar teigiamas?</th>
                    <th>Ar virš vidurkio?</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => {
                        // console.log(student);
                        return <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.grade}</td>
                            <td>{ arTeigiamas(student.grade) }</td>
                            <td>{ arStudVirsVidurkio(student.id) }</td>
                        </tr>
                    })
                }
            </tbody>
            
        </table>
    </>
  )
}

export default Komp3

// .map(s => {return ...})
// .map(s => ...) vienoje eiluteje
// .map(s => (...)) keliose eilutese

