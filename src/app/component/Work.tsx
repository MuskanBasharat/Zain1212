"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PopupScreen from "./PopupScreen"; // adjust path if needed

export const Work = () => {
  const [showPopup, setShowPopup] = useState(false);

  const img1 =
    "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/development.png";
  const img2 =
    "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/update.png";
  const img3 =
    "https://raw.githubusercontent.com/ZAINBASHARATALI/Large-Gif/master/deployment.png";
  const arrow =
    "https://uploads-ssl.webflow.com/5e8c566954381032f62e178b/63f77d1ae3dd0b82694a1dc2_right-arrow.svg";

  return (
    <div className="work" id="work">
      <div className="header-h1">
        <p className="text-p">Passion led us here</p>
        <h1 className="heading">What I do</h1>
      </div>

      <div className="cards">
        <Card className="card">
          <a
            href="mailto:hi@zainali.dev?subject=Developing MVP"
            className="links-email"
          >
            <CardHeader>
              <img src={img1} className="card-img" alt="img" />
              <CardTitle className="card-heading">Developing MVP</CardTitle>
              <CardDescription className="text-p description">
                Empower founders to turn their ideas into reality by developing
                Mobile Apps that deliver great user experience by prioritizing
                tested features, rapid iterations & performance.
              </CardDescription>
            </CardHeader>
            <CardFooter className="card-footer">
              Make my App<img src={arrow} alt="img" />
            </CardFooter>
          </a>
        </Card>

        <Card className="card">
          <a
            href="mailto:hi@zainali.dev?subject=App Customization"
            className="links-email"
          >
            <CardHeader>
              <img src={img2} className="card-img" alt="img" />
              <CardTitle className="card-heading">App Customization</CardTitle>
              <CardDescription className="text-p description">
                Add or Fix Features in your already built mobile app. Completely
                revamp your old native mobile app for improved user experience
                and performace with Flutter.
              </CardDescription>
            </CardHeader>
            <CardFooter className="card-footer">
              Fix my app<img src={arrow} alt="img" />
            </CardFooter>
          </a>
        </Card>

        <Card className="card">
          <a
            href="mailto:hi@zainali.dev?subject=App Deployment"
            className="links-email"
          >
            <CardHeader>
              <img src={img3} className="card-img" alt="img" />
              <CardTitle className="card-heading">App Deployment</CardTitle>
              <CardDescription className="text-p description">
                Assist you in deploying mobile apps to both App Store and Play
                Store by configuring app metadata & handling the submission
                process to ensure a successful deployment.
              </CardDescription>
            </CardHeader>
            <CardFooter className="card-footer">
              Deploy my app<img src={arrow} alt="img" />
            </CardFooter>
          </a>
        </Card>
      </div>

      <div className="book">
        <Button onClick={() => setShowPopup(true)}>Book Free Consultation</Button>
      </div>

      {showPopup && <PopupScreen onClose={() => setShowPopup(false)} />}
    </div>
  );
};
