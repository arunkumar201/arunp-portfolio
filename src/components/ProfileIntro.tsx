import Greets from './Greets'
import IntroText from './IntroText'
import React from 'react'

type Props = {}

const ProfileIntro = (props: Props) => {
  return (
		<>
			<Greets />
			<div
				className="w-full top-0 -left-20 -z-20 bg-gradient-to-tr from-purple-500 to-blue-400 opacity-[0.15] absolute"
				
			></div>
			<IntroText />
		</>
	);
}

export default ProfileIntro
