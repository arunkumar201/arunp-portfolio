import { Metadata } from 'next';
import React from 'react'

type Props = {}

export const metadata: Metadata = {
	title: "About | Arun Kumar",
};
const page = (props: Props) => {
  return (
	  <div>page
		  Hello 
	</div>
  )
}

export default page
