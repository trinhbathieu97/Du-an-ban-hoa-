import React from "react";
import "./NavbarPageList.modules.scss";
import { useState, useEffect } from "react";

const data1 = [
  { content: "Newest" },
  { content: "Oldest" },
  { content: "Low to high" },
  { content: "High to low" },
];

const data2 = [
  { content: "Under 10$" },
  { content: "$10 - 50$" },
  { content: "$50 - 100$" },
  { content: "Over 100$" },
];

const data3 = [
  { content: "Roses" },
  { content: "Lilies" },
  { content: "Gerberas" },
  { content: "Chrysanthemums" },
  { content: "Lisianthus" },
  { content: "Alstroemeias" },
];
const data4 = [
  { content: "Wedding" },
  { content: "Birthday" },
  { content: "Christmas" },
];

const NavbarPageList = ({
  filterPrice,
  state,
  filterSrotby,
  filterOccasion,
  filterType,
}) => {
  const [showSorter1, setShowSorter1] = useState(false);
  const [showSorter2, setShowSorter2] = useState(false);
  const [showSorter3, setShowSorter3] = useState(false);
  const [showSorter4, setShowSorter4] = useState(false);
  // const number = item.length;

  const handleToggleSorter1 = () => {
    setShowSorter1(!showSorter1);
  };
  const handleToggleSorter2 = () => {
    setShowSorter2(!showSorter2);
  };
  const handleToggleSorter3 = () => {
    setShowSorter3(!showSorter3);
  };
  const handleToggleSorter4 = () => {
    setShowSorter4(!showSorter4);
  };

  const Price = (value) => {
    filterPrice(value);
  };
  const Srotby = (value) => {
    filterSrotby(value);
  };
  const Type = (value) => {
    filterType(value);
  };
  const Occasion = (value) => {
    filterOccasion(value);
  };
  return (
    <div className="navbarPage_list">
      <div className="navbar_list">
        <div>
          <div className="navbar_list-sort">
            <div onClick={handleToggleSorter1}>
              Srot by
              <img
                src="https://cassiopeia.store/svgs/dropdown-i.svg"
                alt="icon"
              />
            </div>
            <div>
              {showSorter1 && (
                <ul className="list_sort-type">
                  {data1.map((x, i) => (
                    <span onClick={() => Srotby(x.content)} key={i}>
                      {x.content}
                    </span>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="navbar_list-sort">
            <div onClick={handleToggleSorter2}>
              Price
              <img
                src="https://cassiopeia.store/svgs/dropdown-i.svg"
                alt="icon"
              />
            </div>
            <div>
              {showSorter2 && (
                <ul className="list_sort-type">
                  {data2.map((x, i) => (
                    <span key={i} onClick={() => Price(x.content)}>
                      {x.content}
                    </span>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="navbar_list-sort">
            <div onClick={handleToggleSorter3}>
              Type
              <img
                src="https://cassiopeia.store/svgs/dropdown-i.svg"
                alt="icon"
              />
            </div>
            <div>
              {showSorter3 && (
                <ul className="list_sort-type">
                  {data3.map((x, i) => (
                    <span key={i} onClick={() => Type(x.content)}>
                      {x.content}
                    </span>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="navbar_list-sort">
            <div onClick={handleToggleSorter4}>
              Occasion
              <img
                src="https://cassiopeia.store/svgs/dropdown-i.svg"
                alt="icon"
              />
            </div>
            <div>
              {showSorter4 && (
                <ul className="list_sort-type">
                  {data4.map((x, i) => (
                    <span key={i} onClick={() => Occasion(x.content)}>
                      {x.content}
                    </span>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>{state.length}item</div>
    </div>
  );
};

export default NavbarPageList;
