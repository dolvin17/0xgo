import Deposit from './Deposit';
import Stake from './Stake';
import Earnanddonate from './Earnanddonate';



export default function Process() {
  return (
	<>
		<div className="max-w-screen-xl mx-auto rounded-lg px-auto ">
		<div className="flex flex-col items-start justify-center px-24 md:gap-8 md:flex-row md:justify-center ">
		<div className="max-w-sm mx-auto mb-6 md:mb-0">
		<Deposit />
		</div>
		<div className="max-w-sm mx-auto mb-6 md:mb-0">
		<Stake />
		</div>
		<div className="max-w-sm mx-auto mb-6 md:mb-0">
		<Earnanddonate />
		</div>
		</div>
		</div>
	</>
	);
}