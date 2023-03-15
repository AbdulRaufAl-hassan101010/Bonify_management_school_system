import HeroSection from "../../components/landingPage/HeroSection";
import Navbar from "../../components/landingPage/Navbar";
import UserOffers from "../../components/landingPage/UserOffers";

import admin_img from "../../assets/images/adminstrator.jpg";
import teacher_img from "../../assets/images/teachers.png";
import student_img from "../../assets/images/students.png";
import accoutant_img from "../../assets/images/accountant.png";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | BSMS";
  }, []);

  
  return (
    <>
      <Navbar />
      <HeroSection />
      <section className="text-center py-5 bg-white">
        <div className="container">
          <h2 className="display-2">What we offer here?</h2>
          <p className="text-light-dark">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here.
          </p>
        </div>
      </section>
      <UserOffers
        title="Adminstrator"
        intro="It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout."
        list={[
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
        ]}
        image={admin_img}
      />
      <UserOffers
        title="Teachers"
        intro="It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout."
        list={[
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
        ]}
        image={teacher_img}
        reverse={true}
      />
      <UserOffers
        title="Students"
        intro="It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout."
        list={[
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
        ]}
        image={student_img}
      />
      <UserOffers
        title="Accounting"
        intro="It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout."
        list={[
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
          "It is a long established fact that a reader will be distracted.",
        ]}
        image={accoutant_img}
        reverse={true}
      />
    </>
  );
};

export default Home;
