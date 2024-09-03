import React from 'react'
import './TarifHosting.scss'
const TarifHosting = ({data}) => {
  return (
    <div class="tarifsHosting_contetnt">
    <div class="tarifsHosting_title">
      <h1>Тарифы  Хостинг</h1>
      <p>Хостинг - это услуга предоставления пространства на сервере, которая позволяет разместить ваш веб-сайт и обеспечить его доступность в Интернете 24/7.</p>
    </div>
    <div class="tarifsHosting_block">
      <table>
        <thead>
          <tr >
            <th>Тариф</th>
            <th>Размер, МБ</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
            {
          data?.map((e)=> 
        
          <tr >
            <td>
              {e.tarifName}
            </td>
            <td>
             {e.size}
            </td>
            <td>
             {e.price}
            </td>
          </tr>
        )
            }
        </tbody>
      </table>
      
    </div>
  </div>
  )
}

export default TarifHosting
