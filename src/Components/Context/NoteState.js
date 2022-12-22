import React from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {

    const state = {
        "name": "iqra",
        "age": "24"
    }

  return (
    <>
    <NoteContext.Provider value={state}>
        {props.children}
    </NoteContext.Provider>

    </>
  )
}

export default NoteState;