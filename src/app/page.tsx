import Contact from '@/components/Contact';
import FeaturedRepos from '@/components/Featured';
import Highlights from '@/components/Highlights';
import Intro from '@/components/Intro';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
		<main className="h-full">
			<Intro />
		  <Highlights />
		  <FeaturedRepos />
		  <Contact/>
		  
		</main>
	);
}

export default page
