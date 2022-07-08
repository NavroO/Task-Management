import Image from "next/image";
import logo from "../assets/logo-dark.svg";
import boardIcon from "../assets/boardIcon.svg";

const SideBar = () => {
  return (
    <aside className="h-screen w-72">
      <div>
        <Image src={logo} />
        <div>
          <p>ALL BOARDS (8)</p>
          <ul>
            <li>
              <Image src={boardIcon} />
              <span>Platform Launch</span>
            </li>
            <li>
              <Image src={boardIcon} />
              <span>Marketing Plan</span>
            </li>
            <li>
              <Image src={boardIcon} />
              <span>Roadmap</span>
            </li>
            <li>
              <Image />
              <span>+ Create New Board</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span>
          <Image />
          Hide Sidebar
        </span>
      </div>
    </aside>
  );
};

export default SideBar;
