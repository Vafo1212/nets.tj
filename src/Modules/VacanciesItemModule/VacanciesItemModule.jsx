import React, { useEffect, useState } from "react";
import VacanciesItemHeader from "../../Components/VacanciesItem/VacanciesItemHeader/VacanciesItemHeader";
import Menu from "../../Components/General/Menu/Menu";
import Footer from "../../Components/General/Footer/Footer";
import VacanciesItemCard from "../../Components/VacanciesItem/VacanciesItemCard/VacanciesItemCard";
import VacanciesItemText from '../../Components/VacanciesItem/VacanciesItemText/VacanciesItemText'
import VacanciesItemForm from "../../Components/VacanciesItem/VacanciesItemForm/VacanciesItemForm";
import { useParams } from "react-router-dom";
import { vacanciesItem } from "./VacanciesItemLogic/VacanciesItemApi";

const VacanciesItemModule = () => {
  const param = useParams()
  const [vacancieItem, setVacanciesItem] = useState()
  console.log(param.id, 'param')
  
  const getVacanciesItem = () => {
    vacanciesItem(param.id).then(res=> {
      console.log(res.data, 'ressssssssss')
      setVacanciesItem(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

   useEffect(()=> {
    getVacanciesItem()
   }, [])
  return (
    <div>
      <Menu />
      <VacanciesItemHeader title={vacancieItem?.title} img={vacancieItem?.image}/>
      <VacanciesItemCard requirements={vacancieItem?.requirements} />
      <VacanciesItemText content={vacancieItem?.content} />
      <VacanciesItemForm/>
      <Footer />
    </div>
  );
};

export default VacanciesItemModule;
