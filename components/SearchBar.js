import Link from "next/link";
import { useState } from "react";
import styles from "../styles/components/SearchBar.module.scss";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    setWordEntered("");
  };
  return (
    <div className={styles.search}>
      <div>
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className="searchIcon"></div>
      </div>
      {filteredData.length != 0 && (
        <div className={styles.searchResult}>
          {filteredData.map((value) => {
            return (
              <Link href={`/cat/${value.id}`} key={value.id}>
                <a className={styles.searchResultItem}>
                  <p>{value.name} </p>
                </a>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
