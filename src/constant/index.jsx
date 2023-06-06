
import {
    AiOutlineOrderedList,
    AiOutlineUserAdd,
    AiOutlineLayout,
    AiOutlineSetting,
  } from "react-icons/ai";
  import { MdOutlineDashboard } from "react-icons/Md";
  import { GrLogin } from "react-icons/Gr";
import { SlEmotsmile } from "react-icons/Sl";
import {TbTypography} from "react-icons/Tb";
  import { GiTeacher } from "react-icons/gi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
export const routes = [
    { id: "1",
     label: "HOME",
      sub:[{
        icon:<MdOutlineDashboard size={18} />,
        id:"1",
        label:"Dashboard"
      }]
     },
    {
      id: "2",
      label: "UTILITIES",
      sub:[
        {
            icon:<TbTypography size={18} />,
            id:"1",
            label:"Typography"
        },
        {
            icon:<TbTypography size={18} />,
            id:"2",
            label:"Shadow"
        }
    ],
    },
    {
      id: "3",
      label: "AUTH",
      sub: [
        {
          isCollaspe: true,
          id: "1",
          label: "Login",
          icon:<GrLogin size={18} />,
        },
        {
          isCollaspe: false,
          id: "2",
          label: "Register",
          icon:<GrLogin size={18} />,
        },
      ],
    },
    {
      id: "4",
      label: "EXTRA",
      sub: [
        {
          id: "1",
          label: "Icons",
          icon:<SlEmotsmile size={18} />,
          isCollaspe: true,
        },
        {
            id: "2",
            label: "Sample Page",
            icon:<SlEmotsmile size={18} />,
            isCollaspe: true,
          },
       
      ],
    },
  
    
  ];
  