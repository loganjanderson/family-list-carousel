import Carousel from "../components/carousel";
import { Link } from "react-router-dom";

const FamilyList = ({ userData }) => {
  const renderYourLists = () => {
    if (userData.your_lists) {
      if (userData.your_lists.length) {
        return userData.your_lists.map((list) => {
          return (
            <div className="list-item-wrapper" key={list.id}>
              <Link to="#">
                <div
                  className="family-list-item"
                  style={{
                    backgroundImage: `url(${list.thumbnail})`,
                    backgroundSize: "cover",

                    backgroundPosition: "left"
                  }}
                  key={userData.your_lists.id}
                >
                  <h1>{list.category}</h1>
                </div>
              </Link>
            </div>
          );
        });
      } else {
        return (
          <h1
            style={{
              fontSize: "20px"
            }}
          >
            You have not created any lists.
          </h1>
        );
      }
    }
  };

  const renderStandardLists = () => {
    if (userData.standard_lists) {
      return userData.standard_lists.map((list) => {
        return (
          <div className="list-item-wrapper" key={list.id}>
            <Link to="#">
              <div
                className="family-list-item"
                style={{
                  backgroundImage: `url(${list.thumbnail})`,
                  backgroundSize: "cover",

                  backgroundPosition: "left"
                }}
                key={userData.standard_lists.id}
              >
                <h1>{list.category}</h1>
              </div>
            </Link>
          </div>
        );
      });
    }
  };

  return (
    <div className="family-list-content-wrapper">
      <div className="title">
        <h2>Family List</h2>
      </div>

      <div className="list-wrapper">
        <div className="create-btn">
          {/* Stripped functionality since I removed it from the app. */}
          <Link to="#">
            <button>+ Create A List</button>
          </Link>
        </div>

        <div className="mobile-lists">
          <h3>Your Lists</h3>
          {renderYourLists()}
          <h3>Standard Lists</h3>
          {renderStandardLists()}
        </div>

        <div className="desktop-lists">
          <Carousel
            imageSource={renderYourLists()}
            scrollDistance={800}
            arrowColor={"black"}
            headerText={"Your Lists"}
          />
          <Carousel
            imageSource={renderStandardLists()}
            scrollDistance={800}
            arrowColor={"black"}
            headerText={"Standard Lists"}
          />
        </div>
      </div>
    </div>
  );
};

export default FamilyList;
