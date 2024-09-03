 import './Arrows.scss'
 import img from '../../../../../../Assets/Home/img/Tarifs/Arrow 2.png'
 import img1 from '../../../../../../Assets/Home/img/Tarifs/Arrow 1.png'
export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className="nexti">

      <div
        className={`${className} arrowTarifs_block`}
        style={{ ...style, display: 'block',    }}
        onClick={onClick}
      >


         <img src={img} alt="" />

      </div>
        </div>
    );
  };
  
  export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className="previ">

      <div
        className={`${className} arrowTarifsLeft_block`}
        style={{ ...style, display: 'block', }}
        onClick={onClick}
      >
        <img src={img1} alt="" />
      </div>
        </div>
    );
  };