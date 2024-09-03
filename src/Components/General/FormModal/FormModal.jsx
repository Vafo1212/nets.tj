import React from 'react'
import './FormModal.scss'
import Form from '../Form/Form'
const FormModal = ({setShowModal, show}) => {
  return (
    <div className='formModal_block'>
      <Form setShowModal={setShowModal} show={show}/>
    </div>
  )
}

export default FormModal
