'use client';

import {useRouter} from "next/navigation";

const OffersPage = () => {
	const router = useRouter();

	return (
		<>
			<div>
                Offers
            </div>
			<button onClick={() => router.push('/')}>home</button>
		</>
	);
};

export default OffersPage;