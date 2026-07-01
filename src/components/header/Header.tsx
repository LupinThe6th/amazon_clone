import Image from "next/image";
import { useEffect } from "react";
import logo from "../../images/logo.png"
import cart from "../../images/cart.png"
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { stateProps } from "../../../type";
import { useSession, signIn } from "next-auth/react";
import { addUser } from "@/store/nextSlice";

const Header = () =>  {
   const {productData,favoriteData, userInfo} = useSelector((state:stateProps)=>state.next);
   const dispatch = useDispatch();
   const { data: session } = useSession();
   useEffect(()=>{
        if(session){
            dispatch(addUser({
                name:session?.user?.name,
                email:session?.user?.email,
                image:session?.user?.image,
            })
        );
        }
    },[session]);
    const rawImage = userInfo?.image;
    
    const secureUserImage = rawImage && rawImage.startsWith("http://") 
     ? rawImage.replace("http://", "https://") 
     : rawImage;
     
    return (
        <div className="w-full h-20 bg-amazon_blue text-lighttext sticky top-0 z-50">
           <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
            {/* Logo */}
            <Link href={"/"} className="p-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]">
               <Image className="w-28 object-cover" alt="logo" src={logo}/>
            </Link>
            {/* Delivery */}
            <div className="p-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]">
               <SlLocationPin color="white" />
               <div className="text-xs">
                  <p className="text-gray-400" >Deliver to</p>
                  <p className="text-white font-bold uppercase">Durban</p>
               </div>
            </div>
            {/* Searchbar */}
            <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
               <input className="w-full h-full bg-white rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none
                focus-visible:border-amazon_yellow"
               type="text" 
               placeholder="Search amazon products"/>
               <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-md rounded-br-md">
                  <HiOutlineSearch />
               </span>
            </div>
            {/* Sign in */}
            {userInfo? 
            <div  className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
                <img src={secureUserImage} alt="userImage" className="w-8 h-8 rounded-full object-cover" />
                <div  className="text-gray-100 flex flex-col justify-between">
                   <p className="text-white font-bold">{userInfo.name}</p>
                   <p>{userInfo.email}</p>
                </div>
            </div>
            :
            <div onClick={()=>signIn("google")} className="p-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%]">
               <p className="text-white">Hello, sign in</p>
               <p className="text-white font-bold flex items-center ">Accounts & Lists{" "}  
               <span><BiCaretDown color="white"/></span> </p>
            </div>
            }
            {/* Favourite */}
            <div className="p-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] relative">
               <p className="text-white">Marked</p>
               <p className="text-white font-bold">& Favourites</p>
               {
                    favoriteData.length > 0 && (
                        <span className="absolute right-3 top-3 w-4 h-4 
                        border-[1px] border-gray-400 flex items-center justify-center text-s
                        text-amazon_yellow">{favoriteData.length}</span>
                    )
                }
            </div>
            {/* Cart */}
            <Link href={"/cart"} className=" flex items-center p-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] relative">
               <Image className="w-auto object-cover h-8" src={cart} alt="cart" />
               <p className="text-ml text-white font-bold mt-3">Cart</p>
               <span className="absolute text-amazon_yellow text-sml top-2 left-[29px] font-semibold">
                  {productData ? productData.length: 0}
               </span>
            </Link>
           </div>
        </div>
   );
}

export default Header;