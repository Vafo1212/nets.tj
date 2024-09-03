import React from "react";
import VacanciesItemHeader from "../../Components/VacanciesItem/VacanciesItemHeader/VacanciesItemHeader";
import Menu from "../../Components/General/Menu/Menu";
import Footer from "../../Components/General/Footer/Footer";
import VacanciesItemCard from "../../Components/VacanciesItem/VacanciesItemCard/VacanciesItemCard";
import VacanciesItemText from '../../Components/VacanciesItem/VacanciesItemText/VacanciesItemText'
import VacanciesItemForm from "../../Components/VacanciesItem/VacanciesItemForm/VacanciesItemForm";

const VacanciesItemModule = () => {
  return (
    <div>
      <Menu />
      <VacanciesItemHeader />
      <VacanciesItemCard />
      <VacanciesItemText />
      <VacanciesItemForm/>
      <Footer />
    </div>
  );
};

export default VacanciesItemModule;
