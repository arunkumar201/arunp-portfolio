// import { Image } from '@nextui-org/react'

import { PORTFOLIO_IMAGE, PORTFOLIO_NAME } from '@/constants'

import  Image  from "next/image";
import Link from 'next/link';
import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  return (
	  <div className="h-full w-full px-2 py-4">
		   <div  
              className="after:content group relative mb-5 block w-full  after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
		    >
			  	<Image
				className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 min-h-[400px] w-[700px] shadow-xl"
				style={{ transform: "translate3d(0, 0, 0)" }}
				width={520}
				  height={580}
				  objectPosition='cover'
				sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
				alt={`${PORTFOLIO_NAME} Image`}
				src={PORTFOLIO_IMAGE}
			/>
				</div>
		</div>
	);
}

export default Profile
