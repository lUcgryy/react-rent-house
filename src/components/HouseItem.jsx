import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVectorSquare,
  faBed,
  faBath,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function HouseItem(props) {
  return (
    <Link to={`/house/${props.id}`}>
      <div className="grid grid-cols-12 gap-20 p-[30px] border border-black bg-white my-[30px]">
        <div className="col-span-5">
          <img src="/images/house-img.png" alt="" />
        </div>
        <div className="col-span-7 text-left flex flex-col justify-between">
          <div>
            <p className="text-[30px]">S2.08 - Studio</p>
            <div className="bg-white flex mt-[30px]">
              <div className="flex items-center mr-[40px]">
                <FontAwesomeIcon
                  className="text-[25px] mr-[10px]"
                  icon={faVectorSquare}
                />
                63.6 m2
              </div>
              <div className="flex items-center mr-[40px]">
                <FontAwesomeIcon
                  className="text-[25px] mr-[10px]"
                  icon={faBed}
                />
                2
              </div>
              <div className="flex items-center mr-[40px]">
                <FontAwesomeIcon
                  className="text-[25px] mr-[10px]"
                  icon={faBath}
                />
                2WC
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  className="text-[25px] mr-[10px]"
                  icon={faCompass}
                />
                Tây Bắc
              </div>
            </div>
          </div>
          <div className="font-bold text-[30px]">5.300.000đ</div>
        </div>
      </div>{" "}
    </Link>
  );
}