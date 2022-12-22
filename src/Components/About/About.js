import React, { useContext } from 'react'
import NoteContext from '../Context/NoteContext'

const About = () => {

    const a = useContext(NoteContext);
    return (
        <>
            <p> My name is {a.name} and my age is {a.age} </p>


        </>
    )
}

export default About