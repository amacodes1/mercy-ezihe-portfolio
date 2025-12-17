import Github from "@/app/assets/tsxsvgs/github-logo.svg"
import Linkedin from "@/app/assets/svgs/linkedin.svg"
import Xsocial from "@/app/assets/svgs/x-social.svg"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/amacodes1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-xs">GH</div> */}
          <Image className="w-6 h-6 bg-white" src={Github} alt="" />
        </a>
        <a
          href="https://linkedin.com/in/mercyezihe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="w-6 h-6 bg-white" src={Linkedin} alt="" />
        </a>
        <a
          href="https://x.com/amacodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="w-6 h-6 bg-white" src={Xsocial} alt="" />
        </a>
      </div>
      <p className="text-white/60 text-sm">
        © {new Date().getFullYear()} Mercy. All rights reserved.
      </p>
    </footer>
  );
}