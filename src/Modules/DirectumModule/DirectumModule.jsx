import React from "react";
import "./DirectumModule.scss";

import img from "../../Assets/Directum/img/IMAGE(12).png";
import img2 from "../../Assets/Directum/img/IMAGE (13).png";
import img3 from "../../Assets/Directum/img/IMAGE (14).png";
import img4 from "../../Assets/Directum/img/IMAGE (15).png";
import img5 from "../../Assets/Directum/img/IMAGE (16).png";
import img6 from "../../Assets/Directum/img/IMAGE (17).png";
import img7 from "../../Assets/Directum/img/IMAGE (18).png";
// import img8 from "../../Assets/Directum/img/IMAGE (19).png";
import img9 from "../../Assets/Directum/img/IMAGE (20).png";
import img10 from "../../Assets/Directum/img/IMAGE (21).png";
import img11 from "../../Assets/Directum/img/IMAGE (22).png";
import img12 from "../../Assets/Directum/img/IMAGE (23).png";
import img13 from "../../Assets/Directum/img/IMAGE (24).png";

import directumProductCard1 from "../../Assets/Directum/img/directumProduct.png";
import directumProductCard2 from "../../Assets/Directum/img/directumProduct2.png";
import directumProductCard3 from "../../Assets/Directum/img/directumProduct3.png";
import Form from "../../Components/General/Form/Form";
import WhoisResponse from "../../Components/Whois/WhoisResponse/WhoisResponse";
import Menu from "../../Components/General/Menu/Menu";
import Footer from "../../Components/General/Footer/Footer";
import LendingAddress from "../../Components/General/LendingAddress/LendingAddress";

const DirectumModule = () => {
  const directumBussinessCard = [
    { id: 1, text: "Договоры", img: img3 },
    { id: 2, text: "Делопроизводство", img: img4 },
    { id: 3, text: "Кадровый ЭДО", img: img5 },
    { id: 4, text: "Отпуска", img: img6 },
    { id: 5, text: "Командировки и авансовые отчеты", img: img7 },
    { id: 6, text: "Совещания", img: img9 },
    { id: 7, text: "Управление проектами", img: img10 },
    { id: 8, text: "Долговременный архив", img: img11 },
    { id: 9, text: "Финансовый архив", img: img12 },
    { id: 10, text: "ЭДО с контрагентами", img: img13 },
  ];
  const directumProductCard = [
    {
      id: 1,
      text: "Интеллектуальная система управления цифровыми процессами и документами",
      link: "https://www.directum.ru/products/directum",
      img: directumProductCard1,
    },
    {
      id: 2,
      text: "Профессиональное управление проектами и командами",
      link: "https://www.directum.ru/products/directum-projects",
      img: directumProductCard2,
    },
    {
      id: 3,
      text: "Обработка информации из любых систем AI-сервисами",
      link: "https://www.directum.ru/products/ario",
      img: directumProductCard3,
    },
  ];
  const resdata = [
    {
      id: 1,
      title: "Какие преимущества у системы?",
      subTitle:
        "Directum предоставляет эффективную автоматизацию бизнес-процессов, сокращая ручной труд, уменьшая вероятность ошибок и улучшая оперативность. Система также обеспечивает централизованное управление информацией, задачами и документами, что способствует повышению общей эффективности предприятия.",
    },
    {
      id: 2,
      title: "Кому полезен сервис Directum?",
      subTitle:
        "Directum предназначен для организаций любого размера и направления, которые стремятся оптимизировать свои бизнес-процессы и повысить уровень автоматизации. Система адаптирована под различные отрасли, обеспечивая гибкость в решении разнообразных задач.",
    },
    {
      id: 3,
      title: "Как Directum улучшит эффективность?",
      subTitle:
        "С Directum бизнес-процессы становятся более прозрачными и управляемыми, что позволяет сократить время выполнения задач, улучшить взаимодействие сотрудников и снизить риски ошибок. Система способствует централизованному контролю и обеспечивает оперативный доступ к необходимой информации, повышая общую эффективность организации.",
    },
  ];
  return (
    <div class="directumLending_container">
      <Menu />
      <div class="directumLending_block">
        <div class="directumLendingCard">
          <div class="directumLendingCard_block">
            <a href="https://www.directum.ru/" target="_blank" rel="noreferrer">
              <img src={img} alt="" />
            </a>
            <h1>Цифровые решения для управления процессами и документами</h1>
            <p>Для крупных, средних организаций и государственных органов</p>
            <div class="directumLendingCard_btn">
              <a
                href="https://www.directum.ru/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Получить демодоступ</button>
              </a>
            </div>
          </div>
        </div>

        <div class="directumLendingDescription_block">
          <h1>
            Российский разработчик программных продуктов и сервисов для
            управления цифровыми процессами и документами.
          </h1>
          <div class="directumLendingDescription_item">
            <p>
              Directum — российская ИТ-компания, разработчик интеллектуальных
              программных продуктов и сервисов для управления цифровыми
              процессами и документами. ИТ-решения Directum отвечают требованиям
              импортонезависимости, обладают богатыми функциональными
              возможностями, подходят для стабильной работы десятков тысяч
              пользователей, отличаются надежностью и гибкостью. 
            </p>
            <p>
              Встроенные в Directum RX интеллектуальные сервисы помогают
              выстроить работу с рутинными операциями: автоматически
              регистрируют документы и обращения с заполнением реквизитов в
              системе; создают проекты поручений из текста протокола или
              приказа; сравнивают версии документов; визуализируют изменения;
              оценивают риски в договорных документах и пр.
            </p>
          </div>
        </div>

        <div class="directumLendingBussinesCard_content">
          <div class="directumLendingBussinesCard_block">
            <div class="directumLendingBussinesCardPhoto_block">
              <img src={img2} alt="" />
            </div>
            <h2>Готовые решения для разных задач бизнеса</h2>
            <div class="directumLendingBussinesCard_item">
              {directumBussinessCard?.map((e) => (
                <div class="directumLendingBussinesCardItem_block" key={e.id}>
                  <img src={e.img} alt="" />
                  <p>{e.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div class="directumLendingBussinesCard_btn">
            <a href="https://www.directum.ru/solutions" target="_blank">
              <button>Посмотреть все решения</button>
            </a>
          </div>
        </div>

        <div class="directumLendingProduct_block">
          <h1>
            Всё, что нужно для эффективной цифровизации как внутренних, так и
            внешних процессов компаний:
          </h1>
          <div class="directumLendingProduct_item">
            {directumProductCard?.map((e) => (
              <div class="directumLendingProductCard_block" key={e.id}>
                <div class="directumLendingProductCardImg_block">
                  <img src={e.img} alt="" />
                </div>
                <p>{e.text}</p>
                <a href={e.link} target="_blank" rel="noreferrer">
                  <button>Подробнее</button>
                </a>
              </div>
            ))}
          </div>
        </div>
        <Form />
        <div className="hostingResponse_container">
          <div className="hostingResponse_block">
            <WhoisResponse data={resdata} />
          </div>
        </div>
       <LendingAddress/>
      </div>
      <Footer />
    </div>
  );
};

export default DirectumModule;
