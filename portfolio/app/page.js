import mountains from "../public/wallhaven.jpg";
import rushi from "../public/rushi.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub ,faLinkedinIn , faInstagram,faXTwitter} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Image
        alt="Mountains"
        src={mountains}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

      <div className="h-screen w-screen absolute    ">
        <div className="flex items-center justify-center h-screen  ">
          <div className=" backdrop-blur-md pl-20 pr-20 pt-5 pb-5 rounded-lg shadow-md">
            <div className=" flex  justify-center overflow-auto">
              <Image src={rushi} alt={rushi} width={150} height={80} className="rounded-full" />
            </div>

            <p className=" text-3xl font-serif  font-bold text-center pt-5 ">
           Rushikesh Nimkar            </p>
            <p className=" text-lg  font-semibold"> Programmer // Exproler // Photographer</p>
            <div className=" flex  justify-between  pt-2">
            <Link href={"https://github.com/Rushikeshnimkar"}>
            <button >
            <FontAwesomeIcon icon={faGithub} width={40}/>
            </button>
            </Link>
            <Link href={"https://www.linkedin.com/in/rushikesh-nimkar-0961361ba/"}>
            <button  >
            <FontAwesomeIcon icon={faLinkedinIn} width={40}/>
            </button>
            </Link>
            <Link href={"https://www.instagram.com/_rushikeshnimkar_3/"}>
            <button  >
            <FontAwesomeIcon icon={faInstagram} width={40}/>
            </button>
            </Link>
            <Link href={"https://twitter.com/RushikeshN22296"}>
            <button  >
            <FontAwesomeIcon icon={faXTwitter} width={40}/>
            </button>
            </Link>

           
            </div>
          </div>
          
          
        </div>
      </div>
    </>
  );
}
