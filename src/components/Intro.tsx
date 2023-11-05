import Highlights from './Highlights'
import Profile from './Profile'
import ProfileIntro from './ProfileIntro'
import React from 'react'

type Props = {}

const Intro = (props: Props) => {
  return (
		<section>
			<div className="flex  lg:flex-row flex-col items-start justify-between">
				{/*Profile Image section */}
				<div className="w-full md:w-[60%]">
					<Profile />
				</div>
				{/* Profile Introduction section */}
				<div className="w-full">
					<ProfileIntro />
				</div>
			</div>
					<Highlights />
		</section>
	);
}

export default Intro
