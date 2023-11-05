import Intro from '@/components/Intro';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
		<main className="w-full lg:container relative top-20 m-2">
			<Intro />
		</main>
	);
}

export default page
