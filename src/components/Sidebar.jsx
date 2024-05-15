import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaTruckFront } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <nav className="flex flex-col justify-between p-6 min-h-screen w-20 ">
      <Link to="/">
        <img src={logo} alt="" className="rounded-full" width={60} />
      </Link>
      <ul>
        {/* <li>dqs</li>
        <li>dqs</li>
        <li>dqs</li>
        <li>dqs</li> */}
        <li>
          <Link to="/arrivals">
            <i className="flex justify-center items-center">
              <FaTruckFront size={35} />
            </i>
          </Link>
        </li>
      </ul>
      {/* <span>dsd</span> */}
      <i className="flex justify-center items-center">
        <svg
          width="35"
          height="35"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.33103 0.0214844C11.7103 0.0214844 13.6522 1.89542 13.7612 4.24772L13.766 4.45648V5.38948C13.766 5.8037 13.4302 6.13948 13.016 6.13948C12.6363 6.13948 12.3225 5.85733 12.2729 5.49125L12.266 5.38948V4.45648C12.266 2.89358 11.044 1.61575 9.50347 1.52647L9.33103 1.52148H4.45603C2.89398 1.52148 1.61629 2.74362 1.52702 4.28406L1.52203 4.45648V15.5865C1.52203 17.1493 2.74394 18.4272 4.28369 18.5165L4.45603 18.5215H9.34103C10.8984 18.5215 12.1721 17.3039 12.2611 15.7693L12.266 15.5975V14.6545C12.266 14.2403 12.6018 13.9045 13.016 13.9045C13.3957 13.9045 13.7095 14.1866 13.7592 14.5527L13.766 14.6545V15.5975C13.766 17.9687 11.8992 19.9046 9.55539 20.0164L9.34103 20.0215H4.45603C2.07759 20.0215 0.135874 18.1474 0.0268609 15.7952L0.0220337 15.5865V4.45648C0.0220337 2.07743 1.89579 0.135347 4.24734 0.0263125L4.45603 0.0214844H9.33103ZM17.3261 6.50234L17.4104 6.57478L20.3384 9.48978C20.3647 9.51594 20.3879 9.54256 20.4091 9.57073L20.3384 9.48978C20.3689 9.52019 20.3963 9.55258 20.4205 9.58653C20.4376 9.61028 20.4534 9.63538 20.4677 9.66142C20.4703 9.66648 20.4729 9.67145 20.4755 9.67645C20.4881 9.70042 20.4994 9.72529 20.5093 9.75084C20.5133 9.76202 20.5174 9.77334 20.5211 9.78473C20.5284 9.80575 20.5346 9.8274 20.5397 9.84942C20.5421 9.86118 20.5446 9.87286 20.5467 9.88457C20.5509 9.90501 20.5539 9.9261 20.5559 9.94745C20.5571 9.96231 20.5581 9.97701 20.5587 9.99174C20.5593 10.0016 20.5595 10.0115 20.5595 10.0214L20.5587 10.0497C20.5581 10.0651 20.5571 10.0805 20.5555 10.0958L20.5595 10.0214C20.5595 10.0682 20.5552 10.1141 20.547 10.1585C20.5446 10.1696 20.5421 10.1814 20.5394 10.193C20.5344 10.2162 20.528 10.2387 20.5206 10.2607C20.5168 10.2709 20.513 10.2813 20.5091 10.2915C20.4998 10.3164 20.489 10.3405 20.4769 10.3639C20.4739 10.3692 20.4708 10.3751 20.4676 10.381C20.4332 10.4443 20.39 10.5015 20.3399 10.5517L20.3385 10.5527L17.4105 13.4687C17.117 13.761 16.6421 13.76 16.3498 13.4665C16.0841 13.1997 16.0607 12.783 16.2792 12.4898L16.352 12.4059L17.991 10.7705L7.76853 10.7714C7.35432 10.7714 7.01853 10.4356 7.01853 10.0214C7.01853 9.64169 7.30069 9.32789 7.66676 9.27823L7.76853 9.27139L17.993 9.27048L16.3521 7.63779C16.0852 7.37212 16.0601 6.95551 16.2773 6.66142L16.3497 6.57714C16.6154 6.31028 17.032 6.28514 17.3261 6.50234Z"
            fill="cyan"
          />
        </svg>
      </i>
    </nav>
  );
};

export default Sidebar;
