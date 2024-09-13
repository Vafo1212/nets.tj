import React from "react";
import './LendingAddress.scss'
const LendingAddress = () => {
  return (
    <div class="directumLendingAddress_content">
      <div class="directumLendingAddress_block">
        <div class="directumLendingAddress_item">
          <h2>Хотите стать клиентом Nets?</h2>
          <p>
            <a href="tel:4848" target="_blank" rel="noreferrer">
              Закажите обратный звонок
            </a>
          </p>
        </div>
        <div class="directumLendingAddress_item">
          <h2>Есть вопросы по услуге?</h2>
          <p>
            <a href="/directum/#contact">Свяжитесь с нами</a>
          </p>
        </div>
        <div class="directumLendingAddress_item">
          <h2>Адреса офисов:</h2>
          <p>
            <a
              href="https://maps.app.goo.gl/esnpMxxYZLkY4MRw5"
              target="_blank"
              rel="noreferrer"
            >
              Посмотреть на карте
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LendingAddress;
