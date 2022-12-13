import "./Filter.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Filter(props) {
  const { t } = useTranslation();
  let lng = t('lng')
  const poets = props.poetsData;
  const [filteredPoets, updateFilteredPoets] = useState(poets);


  const onFilter = (e) => {
    const search = e.target.value;
    const filteredPoets = poets.filter((poet) => {
      if(lng === 'ru'){
        return poet.fullName.toLowerCase().includes(search.toLowerCase())
      }
      else{
        return poet.nameEng.toLowerCase().includes(search.toLowerCase())
      }
    });
    updateFilteredPoets(filteredPoets)
  };

  return (
    <div className="dropdown">
      <div className="dropdown-content">
        <input
          onChange={onFilter}
          type="text"
          placeholder= {t('search')}
          id="myInput"
        />
        {filteredPoets.length > 0 ? (
          <div className="options-container">
            {filteredPoets.map((el) => {
              if(lng === 'ru'){
                return (
                  <Link to={`/poets/${el.id}`} key={el.id}>
                    {el.fullName}{" "}
                  </Link>
                );
              } else {
                return (
                  <Link to={`/poets/${el.id}`} key={el.id}>
                    {el.nameEng}{" "}
                  </Link>
                );
              }
            })}
          </div>
        ) : (
          <p>There is no match</p>
        )}
      </div>
    </div>
  );
}
