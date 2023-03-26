import React from 'react';
import { useEffect, useState } from 'react';
import Slider from "../components/Slider.js";
import { db } from '../firebase-config.js';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import CountUp from 'react-countup';

import "./Home.css";

const interestMeetingImages = [
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8690.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8691.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8694.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8695.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8696.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8697.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8698.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8700.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8701.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8702.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_8703.JPEG")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_9964.HEIC")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_9965.HEIC")},
  {image: require("../images/Home/Interest Meeting (8.30.22)/Copy of IMG_9966.HEIC")},
]

const firstMeetingImages = [
  {image: require("../images/Home/First Meeting (9.13.22)/catch1.jpg")},
  {image: require("../images/Home/First Meeting (9.13.22)/catch2.jpg")},
  {image: require("../images/Home/First Meeting (9.13.22)/catch3.jpg")},
  {image: require("../images/Home/First Meeting (9.13.22)/catch4.jpg")},
  {image: require("../images/Home/First Meeting (9.13.22)/catch5.jpg")},
  {image: require("../images/Home/First Meeting (9.13.22)/catch6.jpg")}
]

const lateNightImages = [
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1748.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1749.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1750.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1751.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1752.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1753.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1754.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1755.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1756.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1757.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1758.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1759.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1760.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1761.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1762.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1763.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1764.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1765.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1766.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of IMG_1767.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-001A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-002A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-003A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-004A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-005A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-006A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-007A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-008A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-009A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-010A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-011A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-012A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-013A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-014A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-015A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-016A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-017A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-018A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-019A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-020A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-021A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-022A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-023A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-024A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-025A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-026A.JPG")},
  {image: require("../images/Home/Late Night with Toys (9.9.22)/Copy of R1-07720-027A.JPG")}
]


export default function Home() {
  const toysRef = collection(db, "toys"); //reference to toys collection in firestore database
  const [toys, setToys] = useState([]);
  const [donatedSum, setDonatedSum] = useState(0);
  

  useEffect(() => {
    const getToys = async () => {
      const data = await getDocs(toysRef);
      setToys(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getToys()
  })

  useEffect(() => {
    const getSum = async () => {
      let sum = 0;
      toys.forEach(element => {
        sum += element.donated;
      });
      setDonatedSum(sum);
    }
    getSum()
  }, [toys])

  return (
    <>
      <h1>Total Donated</h1>
      <h1>
        <CountUp
          duration={2}
          end={donatedSum}
          useEasing={true}
        />
      </h1>
      <hr></hr>
      <h2>Recent Events</h2>
      <div className="carousel">
        <div className="carouselItem">
          <p>Late Night with Toys (9.9.22)</p>
          <Slider slides={lateNightImages} />
        </div>
        <div className="carouselItem">
          <p>First Meeting (9.13.22)</p>
          <Slider slides={firstMeetingImages} />
        </div>
        <div className="carouselItem">
          <p>Interest Meeting (8.30.22)</p>
          <Slider slides={interestMeetingImages} />
        </div>
      </div>
    </>
  )
}