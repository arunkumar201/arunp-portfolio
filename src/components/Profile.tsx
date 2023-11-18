// import { Image } from '@nextui-org/react'

import { PORTFOLIO_IMAGE, PORTFOLIO_NAME } from '@/constants'

import  Image  from "next/image";
import ImagesSeleton from './Image-skeleton';
import Link from 'next/link';
import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
	  <div className="w-full h-full px-2 py-4">
		   <div  
              className="relative block w-full mb-5 after:content group after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
		    >
			  	<Image
				className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 min-h-[400px] w-[700px] shadow-xl"
				style={{ transform: "translate3d(0, 0, 0)" }}
				width={520}
				  height={580}
				  objectPosition='cover'
				  quality={40}
				alt={`${PORTFOLIO_NAME} Image`}
				  src={PORTFOLIO_IMAGE}
				  
			/>
				</div>
		</div>
	);
}

export default Profile
