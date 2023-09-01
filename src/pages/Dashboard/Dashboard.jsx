import React, { useState } from "react";
import "./dashboard.scss";
import AssesmentOverview from "../../@components/Assesments/AssesmentOverview/AssesmentOverview";
import Card from "../../@common/Cards/Card";
import NewAssesmentCard from "../../@components/NewAssesmentCard/NewAssesmentCard";
import ModalCustom from "../../@common/ModalCustom/ModalCustom";
import NewAssesModalContent from "../../@components/NewAssesModalContent/NewAssesModalContent";
import search from "../../assets/images/search.svg";
import filter_list_alt from "../../assets/images/filter_list_alt.svg";
import bar_chart from "../../assets/images/bar_chart.svg";

export default function Dashboard() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cardsData, setCardsData] = useState([1, 2]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleCardsData = (newFormData) => {
    setCardsData([...cardsData, newFormData]);
  };

  return (
    <div className="dahboard-container">
      <section>
        <AssesmentOverview />
      </section>

      <ModalCustom modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <NewAssesModalContent handleCardsData={handleCardsData} closeModal={closeModal} />
      </ModalCustom>

      <section className="add-assesment-section">
        <div className="my-assesment-flex">
        <h1 className="assesment-heading">My Assessment</h1>
        <div className="my-assesment-images">
          <img src={search} alt="search" />
          <img className="my-assesment-img" src={filter_list_alt} alt="filter" />
          <img className="my-assesment-img" src={bar_chart} alt="bar_chart" />
        </div>
        </div>
        
        <div className="cards-container">
          <NewAssesmentCard openModal={openModal} />
          {
            cardsData.map((val, idx)=>{
              return(
                <Card 
                key={idx}
                val={val}
                />
              )
            })
          }
        </div>
      </section>
    </div>
  );
}
