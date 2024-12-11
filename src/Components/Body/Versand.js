// import axios from 'axios';

import { FaShippingFast } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { TbRewindBackward15 } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Versand() {
    // const [Versand , setVersand] = useState(null)
    // const VersandAPI = async () => {
    // const {data} = await axios.get('http://localhost:8000/Versand')
    //   setVersand(data)
    // }

    // useEffect(() => {
    //   VersandAPI()
    // } ,[])

    const Text = [
      {text:'Kostenloser Versand ', Icon:<FaShippingFast className=' size-8' />},
      {text:'Qualitätsprodukt', Icon: <BsCheck2Circle className=' size-8' />},
      {text:' Rückgaberecht', Icon:<TbRewindBackward15 className=' size-8'/>},
      {text:'Kunden-Support', Icon:<MdOutlineSupportAgent className=' size-8' />}
      ];
    
  return (
    <div className=' w-full py-10 flex justify-center gap-10 items-center'>
      {Text.map((item) =>
        <NavLink className='hover:bg-[#809a91] bg-[#f4f3f3] rounded-full flex gap-2 items-center justify-center flex-row-reverse  py-6 px-9 text-xl '>
          <p>{item.text}</p>
          <p className='text-[#54786a]'>{item.Icon}</p>
        </NavLink>
        
      )}
    
    </div>
  )
}
