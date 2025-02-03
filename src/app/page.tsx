"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Notable } from "@/components/notable";
import Confeti from "@/components/confeti";

export default function Home() {
	const [showConfetti, setShowConfetti] = useState(false);

	const handleConfetti = () => {
		setShowConfetti(true);
		setTimeout(() => {
			setShowConfetti(false);
		}, 5000);
	};

	return (
		<main className="mx-auto my-12 w-full max-w-lg text-2xl md:text-4xl space-y-12 px-12">
			<div className={showConfetti ? "visible" : "invisible"}>
				<Confeti />
			</div>
			<Notable r={-3} size="large">
				Jonas Plakat
			</Notable>

			<p className="pointer-events-none">
				<Notable r={-4}>Jonas</Notable>, auch endlich
				<Image
					src={"/20.svg"}
					width={120}
					height={120}
					alt="20"
					className="aspect-square w-8 inline-block mx-6 scale-[2] rotate-6 z-10 pointer-events-auto"
					onClick={handleConfetti}
				/>
				Jahr, erkennt man unschwer an dem Körperhaar.
			</p>
			<p>
				Er fährt den Fiesta durch <Notable r={5}>Ennsdorfs</Notable> Hood, seit
				dem Bundesheer gehts im garnicht gut.
			</p>
			<p>
				Für <Notable r={-7}>Drink</Notable> immer zu haben, trotz all der
				Plagen, können wir alle sagen, Joni mag das Bier vertragen.
			</p>
			<p>
				Wenns dann endlich mal soweit ist, sehen wir ihn auf dem{" "}
				<Notable r={3}>CLS500er</Notable> Sitz.
			</p>
			<p>
				Bis Dahin, gute Fahrt im Fiest, bis der{" "}
				<Notable r={-3}>Zahnriehmen</Notable> fliegt oder das Getriebe spiest.
			</p>
			<p>Alles Gute Superjonsche unser Held, </p>
		</main>
	);
}
