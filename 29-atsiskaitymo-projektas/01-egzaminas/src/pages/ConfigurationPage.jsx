import { useState, useEffect } from "react"

import styles from "./ConfigurationPage.module.css"

// import car from "./images/auto.png"

import carBlack from "./images/blackCar.jpg"
import carGrey from "./images/greyCar.jpg"
import carWhite from "./images/whiteCar.jpg"
import carRed from "./images/redCar.jpg"
import carGreen from "./images/greenCar.jpg"
import carBlue from "./images/blueCar.jpg"

import selectedVector from "./images/selected.png"
import blackColor from "./images/black.png"
import greyColor from "./images/grey.png"
import whiteColor from "./images/white.png"
import redColor from "./images/red.png"
import greenColor from "./images/green.png"
import blueColor from "./images/blue.png"
import selectedVectorSquare from "./images/selected2.png"

import LottieComponent from "./LottieComponent"

const ConfigurationPage = () => {
  const [selectedPack, setSelectedPack] = useState("Minimalus");
  const [selectedColor, setSelectedColor] = useState("Juoda");
  const [selectedEngine, setSelectedEngine] = useState("Benzinas");
  const [selectedSalon, setSelectedSalon] = useState("Medziaginis");
  const [selectedAdds, setSelectedAdds] = useState([
    "Stoglangis",
    "Parktronikai",
  ]);

  const carImages = {
    Juoda: carBlack,
    Pilka: carGrey,
    Balta: carWhite,
    Raudona: carRed,
    Zalia: carGreen,
    Melyna: carBlue
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [totalPrice, setTotalPrice] = useState(18000);

  const prices = {
    packs: {
      Minimalus: 18000,
      Bazinis: 20000,
      Pilnas: 25000,
    },
    colors: {
      Juoda: 0,
      Pilka: 0,
      Balta: 0,
      Raudona: 100,
      Zalia: 300,
      Melyna: 200,
    },
    engines: {
      Benzinas: 0,
      Dyzelinas: 2000,
      Elektra: 5000,
    },
    salons: {
      Medziaginis: 0,
      Odinis: 200,
    },
    adds: {
      Stoglangis: 200,
      Parktronikai: 300,
      GalineVaizdoKamera: 250,
    },
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total =
        (prices.packs[selectedPack] || 0) +
        (prices.colors[selectedColor] || 0) +
        (prices.engines[selectedEngine] || 0) +
        (prices.salons[selectedSalon] || 0) +
        selectedAdds.reduce((sum, add) => sum + (prices.adds[add] || 0), 0);

      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [selectedPack, selectedColor, selectedEngine, selectedSalon, selectedAdds]);


  const addHandler = (add) => {
    setSelectedAdds((prev) => {
      if (prev.includes(add)) {
        return prev.filter((item) => item !== add);
      } else {
        return [...prev, add];
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.configurator}>

        <div className={`${styles.configurationPage} ${!isSubmitted ? styles.active : ''}`}>

          <div className={styles.firstRow}>

            <div className={styles.image}>
              {/* <img src={car} alt="car" /> */}
              <img src={carImages[selectedColor]} alt="Car" />
            </div>

            <div className={styles.firstRowRight}>
              <div className={styles.pack}>
                <h3>Pagrindinis paketas</h3>
                <div className={styles.buttons}>
                  <button className={selectedPack === "Minimalus" ? styles.btnActive : ""}
                    onClick={() => setSelectedPack("Minimalus")}>
                    <p>Minimalus</p>
                    <p><span>18 000 €</span></p>
                    {selectedPack === "Minimalus" && (
                      <img src={selectedVector} alt="selected" />
                    )}
                  </button>
                  <button className={selectedPack === "Bazinis" ? styles.btnActive : ""}
                    onClick={() => setSelectedPack("Bazinis")}>
                    <p>Bazinis</p>
                    <p><span>20 000 €</span></p>
                    {selectedPack === "Bazinis" && (
                      <img src={selectedVector} alt="selected" />
                    )}
                  </button>
                  <button className={selectedPack === "Pilnas" ? styles.btnActive : ""}
                    onClick={() => setSelectedPack("Pilnas")}>
                    <p>Pilnas</p>
                    <p><span>25 000 €</span></p>
                    {selectedPack === "Pilnas" && (
                      <img src={selectedVector} alt="selected" />
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className={styles.secondRow}>

            <div className={styles.secondRowColors}>
              <h3>Spalva</h3>
              <div className={styles.buttons}>
                <div className={styles.buttonsLeft}>
                  <button className={selectedColor === "Juoda" ? styles.btnActive : ""}
                    onClick={() => setSelectedColor("Juoda")}>
                    <div className={styles.image}>
                      <img src={blackColor} alt="black" />
                    </div>
                    <div className={styles.text}>
                      <p>Juoda</p>
                      <p><span>+0 €</span></p>
                    </div>
                    {selectedColor === "Juoda" && (
                      <div className={styles.vectorImage}>
                        <img src={selectedVector} alt="selected" />
                      </div>
                    )}
                  </button>
                  <button className={selectedColor === "Pilka" ? styles.btnActive : ""}
                    onClick={() => setSelectedColor("Pilka")}>
                    <div className={styles.image}>
                      <img src={greyColor} alt="grey" />
                    </div>
                    <div className={styles.text}>
                      <p>Pilka</p>
                      <p><span>+0 €</span></p>
                    </div>
                    {selectedColor === "Pilka" && (
                      <div className={styles.vectorImage}>
                        <img src={selectedVector} alt="selected" />
                      </div>
                    )}
                  </button>
                  <button className={selectedColor === "Balta" ? styles.btnActive : ""}
                    onClick={() => setSelectedColor("Balta")}>
                    <div className={styles.image}>
                      <img src={whiteColor} alt="white" />
                    </div>
                    <div className={styles.text}>
                      <p>Balta</p>
                      <p><span>+0 €</span></p>
                    </div>
                    {selectedColor === "Balta" && (
                      <div className={styles.vectorImage}>
                        <img src={selectedVector} alt="selected" />
                      </div>
                    )}
                  </button>
                </div>

                <div className={styles.buttonsRight}>
                  <button className={selectedColor === "Raudona" ? styles.btnActive : ""}
                    onClick={() => setSelectedColor("Raudona")}>
                    <div className={styles.image}>
                      <img src={redColor} alt="red" />
                    </div>
                    <div className={styles.text}>
                      <p>Raudona</p>
                      <p><span>+100 €</span></p>
                    </div>
                    {selectedColor === "Raudona" && (
                      <div className={styles.vectorImage}>
                        <img src={selectedVector} alt="selected" />
                      </div>
                    )}
                  </button>
                  <button className={selectedColor === "Zalia" ? styles.btnActive : ""}
                    onClick={() => setSelectedColor("Zalia")}>
                    <div className={styles.image}>
                      <img src={greenColor} alt="green" />
                    </div>
                    <div className={styles.text}>
                      <p>Žalia</p>
                      <p><span>+300 €</span></p>
                    </div>
                    {selectedColor === "Zalia" && (
                      <div className={styles.vectorImage}>
                        <img src={selectedVector} alt="selected" />
                      </div>
                    )}
                  </button>
                  <button className={selectedColor === "Melyna" ? styles.btnActive : ""}
                    onClick={() => setSelectedColor("Melyna")}>
                    <div className={styles.image}>
                      <img src={blueColor} alt="blue" />
                    </div>
                    <div className={styles.text}>
                      <p>Mėlyna</p>
                      <p><span>+200 €</span></p>
                    </div>
                    {selectedColor === "Melyna" && (
                      <div className={styles.vectorImage}>
                        <img src={selectedVector} alt="selected" />
                      </div>
                    )}
                  </button>
                </div>

              </div>
            </div>

            <div className={styles.secondRowEngine}>
              <h3>Variklis</h3>
              <div className={styles.buttons}>
                <button className={selectedEngine === "Benzinas" ? styles.btnActive : ""}
                  onClick={() => setSelectedEngine("Benzinas")}>
                  <p>Benzinas</p>
                  <p><span>+0 €</span></p>
                  {selectedEngine === "Benzinas" && (
                    <img src={selectedVector} alt="selected" />
                  )}
                </button>
                <button className={selectedEngine === "Dyzelinas" ? styles.btnActive : ""}
                  onClick={() => setSelectedEngine("Dyzelinas")}>
                  <p>Dyzelinas</p>
                  <p><span>+2 000 €</span></p>
                  {selectedEngine === "Dyzelinas" && (
                    <img src={selectedVector} alt="selected" />
                  )}
                </button>
                <button className={selectedEngine === "Elektra" ? styles.btnActive : ""}
                  onClick={() => setSelectedEngine("Elektra")}>
                  <p>Elektra</p>
                  <p><span>+5 000 €</span></p>
                  {selectedEngine === "Elektra" && (
                    <img src={selectedVector} alt="selected" />
                  )}
                </button>
              </div>

            </div>
          </div>

        

        <div className={styles.thirdRow}>
          <div className={styles.thirdRowSalon}>
            <h3>Salonas</h3>
            <div className={styles.buttons}>
              <button className={selectedSalon === "Medziaginis" ? styles.btnActive : ""}
                onClick={() => setSelectedSalon("Medziaginis")}>
                <p>Medžiaginis</p>
                <p><span>+0 €</span></p>
                {selectedSalon === "Medziaginis" && (
                  <img src={selectedVector} alt="selected" />
                )}
              </button>
              <button className={selectedSalon === "Odinis" ? styles.btnActive : ""}
                onClick={() => setSelectedSalon("Odinis")}>
                <p>Odinis</p>
                <p><span>+200 €</span></p>
                {selectedSalon === "Odinis" && (
                  <img src={selectedVector} alt="selected" />
                )}
              </button>
            </div>
          </div>

          <div className={styles.thirdRowAdds}>
            <h3>Papildomi priedai</h3>
            <div className={styles.buttons}>
              <button className={selectedAdds.includes("Stoglangis") ? styles.btnActive : ""}
                onClick={() => addHandler("Stoglangis")}>
                <p>Stoglangis</p>
                <p><span>+200 €</span></p>
                {selectedAdds.includes("Stoglangis") && (
                  <img src={selectedVectorSquare} alt="selected" />
                )}
              </button>
              <button className={selectedAdds.includes("Parktronikai") ? styles.btnActive : ""}
                onClick={() => addHandler("Parktronikai")}>
                <p>Parktronikai</p>
                <p><span>+300 €</span></p>
                {selectedAdds.includes("Parktronikai") && (
                  <img src={selectedVectorSquare} alt="selected" />
                )}
              </button>
              <button className={selectedAdds.includes("GalineVaizdoKamera") ? styles.btnActive : ""}
                onClick={() => addHandler("GalineVaizdoKamera")}>
                <p>Galinė vaizdo kamera</p>
                <p><span>+250 €</span></p>
                {selectedAdds.includes("GalineVaizdoKamera") && (
                  <img src={selectedVectorSquare} alt="selected" />
                )}
              </button>
            </div>
          </div>

        </div>

        <div className={styles.greyRow}></div>

        <div className={styles.priceRow}>
          <p>Galutinė kaina: <span>{totalPrice} €</span></p>
          <button onClick={() => setIsSubmitted(true)}>Pirkti</button>
        </div>
      
      </div>

        <div className={`${styles.changedWindow} ${isSubmitted ? styles.active : ''}`}>
          <LottieComponent />
          <h3>Dėkojame!</h3>
          <p>Artimiausiu metu su jumis susisieks mūsų vadybininkas.</p>
          <button onClick={() => setIsSubmitted(false)}>
            Grįžti atgal
          </button>
        </div>

      </div>
    </div>
  )
}

export default ConfigurationPage