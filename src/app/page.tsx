import FeaturedRepos from '@/components/Featured';
import Highlights from '@/components/Highlights';
import Intro from '@/components/Intro';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
		<main className="w-full lg:container relative top-20">
			<Intro />
		  <Highlights />
		  <FeaturedRepos/>
		</main>
	);
}

export default page
