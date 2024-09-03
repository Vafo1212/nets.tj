import React, { useState, useEffect, useRef } from "react";
import "./Form.scss";
import img from "../../../Assets/Business/arrow.png";
import MyButton from "../../../UI/MyButton/MyButton";
import { IoMdClose } from "react-icons/io";

const Form = ({ setShowModal, show }) => {
  const [activeFile, setActiveFile] = useState(false);
  const [fileName, setFileName] = useState(""); 

  const formContainerRef = useRef(null);  

  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      setFileName(file.name);  
    }
  };
 
  const handleClickOutside = (event) => {
    if (formContainerRef.current && !formContainerRef.current.contains(event.target)) { 
    }
  };

  useEffect(() => { 
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => { 
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="form_container" ref={formContainerRef} id="form">
      <div className="form_block">
        {show && (
          <IoMdClose onClick={() => setShowModal(false)} className="formClose_icon" />
        )}
        <div className="form_item">
          <div className="form_title">
            <h3>Заявка</h3>
            <p>Оставьте данные для консультации и подключения</p>
          </div>
          <div className="form_data">
            <div className="formInput_block">
              <div className="formInput_item">
                <p>Как вас зовут</p>
                <p>Необязательно</p>
              </div>
              <input type="text" />
            </div>
            <div className="formInput_block">
              <div className="formInput_item">
                <p>Данные о юрлице или ИП</p>
                <p>Необязательно</p>
              </div>
              <input type="text" />
            </div>
            <div className="formInputPhone_block">
              <div className="formInputPhone_item">
                <p>Мобильный телефон</p>
                <input type="number" />
              </div>
              <div className="formInputPhone_item">
                <p>Email для отправки документов</p>
                <input type="text" />
              </div>
            </div>
            <div
              className="formArrowFile_block"
              onClick={() => setActiveFile(!activeFile)}
            >
              <h4>Добавить файлы</h4>
              <img
                src={img}
                alt=""
                style={{ transform: activeFile && "rotate(180deg)" }}
              />
            </div>
            {activeFile && (
              <div className="vacanciesItemFormFile_block">
                <div className="vacanciesItemFormFile_item">
                  <div className="vacanciesItemFormFile">
                    <input
                      type="file"
                      id="file"
                      onChange={handleFileChange}
                    />
                    {!fileName && (
                      <p>
                        Выберите файл <span>или переместите сюда</span>
                      </p>
                    )}
                    {fileName && <p>Выбран файл: {fileName}</p>}
                  </div>
                </div>
                <h5>Форматы файла: DOC, DOCX, PDF. Не более 5 МБ</h5>
              </div>
            )}
            <div className="formBtn_block">
              <p>
                Нажимая кнопку «Отправить», вы соглашаетесь c{" "}
                <span>условиями обработки персональных данных</span>
              </p>
              <div className="formBtn_item">
                <MyButton
                  width={"240px"}
                  height={"50px"}
                  name={"Оставить заявку"}
                  size={"17px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
