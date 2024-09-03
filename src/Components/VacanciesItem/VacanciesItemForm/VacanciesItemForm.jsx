import React from 'react'
import './VacanciesItemForm.scss'
import MyButton from '../../../UI/MyButton/MyButton'

const VacanciesItemForm = () => {
  return (
    <div className='vacanciesItemForm_container'>
       <div className="vacanciesItemForm_block">
        <div className="vacanciesItemForm">
        <div className="vacanciesItemForm_title">
            <h1>Отклик на вакансию</h1>
            <p>Консультант call-центра</p>
        </div>
        <div className="vacanciesItemForm_item">
            <div className="vacanciesItemFormInput_block">
                <div className="vacanciesItemFormInput_item">
                    <p>Имя</p>
                    <input type="text" />
                </div>
                <div className="vacanciesItemFormInput_item">
                    <p>Фамилия</p>
                    <input type="text" />
                </div>
            </div>
            <div className="vacanciesItemFormInput_block">
                <div className="vacanciesItemFormInput_item">
                    <p>Телефон</p>
                    <input type="number" />
                </div>
                <div className="vacanciesItemFormInput_item">
                    <p>Почта</p>
                    <input type="text" />
                </div>
            </div>
            <div className="vacanciesItemFormInputHref_block">
                <p>Город</p>
                <input type="text" />
            </div>
            <div className="vacanciesItemFormInputHref_block">
                <p>Ссылка на резюме</p>
                <input type="text" />
            </div>
            <h6>или</h6>
            <div className="vacanciesItemFormFile_block">
                <div className="vacanciesItemFormFile_item">
                    <div className="vacanciesItemFormFile">

                    <input type="file" name="" id="file" />
                    <p>Выберите файл <span>или переместите резюме сюда</span></p>
                    </div> 
                </div>
                <h5>Форматы файла: DOC, DOCX, PDF. Не более 5 МБ</h5>
            </div>
            <div className="vacanciesItemFormCommet_block">
                <div className="vacanciesItemFormCommet_item">
                    <h4>Сопроводительное письмо</h4>
                    <p>Необязательно</p>
                </div>
                <textarea name="" id=""></textarea>
            </div>
            <h2>Я соглашаюсь<span> на обработку моих персональных данных</span></h2>
            <div className="vacanciesItemForm_btn">

            <MyButton name={'Отправить отклик'} width={'250px'} height={'40px'}/>
            </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default VacanciesItemForm
