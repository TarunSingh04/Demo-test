"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import EditProfile from "../../../assets/editprofile.webp";
import country_data from "../../../utilities/country_data";
import sector_data from "../../../utilities/sectors_data";
import utility_data from "../../../utilities/utility_data";
import utility_sector_data from "../../../utilities/utility_sector";
import certificate_data from "../../../utilities/certificate_data";
import { FaExclamationCircle } from "react-icons/fa";
import Select from "react-select";
import { FileUploader } from "react-drag-drop-files";
import DragFile from "./drag-and-drop/Dragfile";
// import Pricing from "../pricing/Pricing";
import { useRouter } from "next/navigation";

interface QuestionaireProps {
  questionaireState: number; // Current state value (1-based index)
  setquestionaireState: React.Dispatch<React.SetStateAction<number>>; // Function to update state
}

const fileTypes = ["PDF", "DOC"];

const Questionaire: React.FC<QuestionaireProps> = ({
  questionaireState,
  setquestionaireState,
}) => {
  const [selectedImage, setSelectedImage] = useState<any>("");
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedSector, setSelectedSector] = useState<any>([]);
  const [selectedUtility, setSelectedUtility] = useState<any>([]);
  const [selectedUtilitySector, setselectedUtilitySector] = useState<any>([]);
  const [utility_datas, setutility_datas] = useState<any>([]);
  const [certificates, setcertificates] = useState<any>([]);
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [file, setFile] = useState<any>(null);
  const router = useRouter();

  const onFileChange = (files: any) => {
    console.log(files);
    setFile(files);
  };

  useEffect(() => {
    if (selectedCountry && selectedUtilitySector.length > 0) {
      console.log(selectedCountry);
      console.log(selectedUtilitySector);
      const filteredUtilities = utility_data
        .filter((utility) => {
          // First filter by country
          return utility.countryCode === selectedCountry.value;
        })
        .filter((utility) => {
          // Then filter by any one of the sector values in selectedUtilitySector
          return selectedUtilitySector.some(
            (sector:any) => sector.value === utility.sectorName
          );
        });
      console.log(filteredUtilities);
      setutility_datas(filteredUtilities);
    } else {
      setutility_datas([]);
    }
  }, [selectedCountry, selectedUtilitySector]);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); 
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage("");
  };

  const nextQuestionaire = () => {
    setquestionaireState(questionaireState + 1);
  };

  const previousQuestionaire = () => {
    setquestionaireState(questionaireState - 1);
  };

  const submitQuestionaire = () => {
    console.log("questionaire submitted");
    router.push("/pages/pricing");
  };

  const handleChange = (file:any) => {
    setFile(file);
  };

  return (
    <div className={styles.sidenavQuestion}>
      <div className={styles.questionaire1}>
        {questionaireState === 1 && (
          <div className={styles.question1content}>
            <h2>Business Details</h2>
            <div className={styles.ImageContainer}>
              <Image
                src={selectedImage || EditProfile} // Conditionally render the uploaded image or the default
                width={150}
                height={150}
                alt="profile"
                className={styles.ProfileImage}
              />
              <div className={styles.ImageButtons}>
                <label className={styles.uploadButton}>
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </label>
                <button
                  className={styles.removeButton}
                  onClick={handleRemoveImage}
                  disabled={!selectedImage}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Business Name</p>
              <input type="text" placeholder="Enter your Business Name" />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Registration Name</p>
              <input type="text" placeholder="Enter your Registration Name" />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Vat Number</p>
              <input type="text" placeholder="Enter your Vat Number" />
            </div>
          </div>
        )}

        {questionaireState === 2 && (
          <div className={styles.question2content}>
            <h2>Account Info</h2>
            <div className={styles.wrapperInputBox1}>
              <p>Country</p>
              <Select
                value={selectedCountry}
                onChange={setSelectedCountry}
                options={country_data}
                isSearchable
                className={styles.selectors}
              />
            </div>

            <div className={styles.wrapperInputBox2}>
              <p>Sectors</p>
              <Select
                value={selectedSector}
                onChange={setSelectedSector}
                options={sector_data}
                isSearchable
                isMulti
                className={styles.selectors}
              />
            </div>
          </div>
        )}

        {questionaireState === 3 && (
          <div className={styles.question2content}>
            <h2>Utilities Details</h2>
            <div className={styles.wrapperInputBox1}>
              <p>Utilities sector</p>
              <Select
                value={selectedUtilitySector}
                onChange={setselectedUtilitySector}
                options={utility_sector_data}
                isSearchable
                isMulti
                className={styles.selectors}
              />
              {selectedUtilitySector.map((data: any, index: any) => {
                return (
                  <div
                    className={
                      index + 1 === selectedUtilitySector.length
                        ? styles.sectorCard2
                        : styles.sectorCard
                    }
                    key={index}
                  >
                    <FaExclamationCircle className={styles.sectorIcon} />
                    <div className={styles.cardItems}>
                      <h3>{data.label}</h3>
                      <p>{data.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.wrapperInputBox2}>
              <p>Utilities</p>
              <Select
                value={selectedUtility}
                onChange={setSelectedUtility}
                options={utility_datas}
                isSearchable
                isMulti
                className={styles.selectors}
              />
            </div>
          </div>
        )}

        {questionaireState === 4 && (
          <div className={styles.question1content}>
            <h2>Certificates Details</h2>
            <div className={styles.wrapperInputBox1}>
              <p>Certificates</p>
              <Select
                value={certificates}
                onChange={setcertificates}
                options={certificate_data}
                isSearchable
                isMulti
                className={styles.selectors}
              />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Certificate Name</p>
              <input type="text" placeholder="Enter your Certificate Name" />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Country</p>
              <input type="text" placeholder="Enter your Country Name" />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Description</p>
              <input type="text" placeholder="Enter your description" />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Sector</p>
              <input type="text" placeholder="Enter your Sector" />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Upload certificate</p>
              <DragFile onFileChange={(files) => onFileChange(files)} />
            </div>
          </div>
        )}

        {questionaireState !== 4 && (
          <div
            className={questionaireState === 1 ? styles.btnBox1 : styles.btnBox}
          >
            {questionaireState !== 1 && (
              <div className={styles.btnBox}>
                <button
                  className={styles.continuebtn}
                  onClick={previousQuestionaire}
                >
                  Back
                </button>
              </div>
            )}
            <button className={styles.continuebtn} onClick={nextQuestionaire}>
              Continue
            </button>
          </div>
        )}

        {questionaireState === 4 && (
          <div className={styles.btnBox}>
            <div className={styles.btnBox}>
              <button
                className={styles.continuebtn}
                onClick={previousQuestionaire}
              >
                Back
              </button>
            </div>
            <button className={styles.continuebtn} onClick={submitQuestionaire}>
              Submit
            </button>
          </div>
        )}
      </div>
      {/* <Pricing/> */}
    </div>
  );
};

export default Questionaire;
