import Contact from '@/components/Contact'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
	title: "Contact | Arun Kumar",
};
type Props = {}

const page = (props: Props) => {
  return (
		<div className="">
			<Contact />
		</div>
	);
}

export default page
