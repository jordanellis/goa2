import ARIEN from "@/assets/ARIEN.png";
import XARGATHA from "@/assets/XARGATHA.png";
import BROGAN from "@/assets/BROGAN.png";
import WASP from "@/assets/WASP.png";
import SABINA from "@/assets/SABINA.png";
import TIGERCLAW from "@/assets/TIGERCLAW.png";
import DODGER from "@/assets/DODGER.png";
import WHISPER from "@/assets/WHISPER.png";
import MISA from "@/assets/MISA.png";
import URSAFAR from "@/assets/URSAFAR.png";
import SILVERARROW from "@/assets/SILVERARROW.png";
import TALI from "@/assets/TALI.png";
import GARRUS from "@/assets/GARRUS.png";
import BAIN from "@/assets/BAIN.png";
import CUTTER from "@/assets/CUTTER.png";
import TRINKETS from "@/assets/TRINKETS.png";
import NEBKHER from "@/assets/NEBKHER.png";
import BRYNN from "@/assets/BRYNN.png";
import MORTIMER from "@/assets/MORTIMER.png";
import WIDGET from "@/assets/WIDGET.png";
import TAKAHIDE from "@/assets/TAKAHIDE.png";
import EMMITT from "@/assets/EMMITT.png";
import MIN from "@/assets/MIN.png";
import SWIFT from "@/assets/SWIFT.png";
import WUK from "@/assets/WUK.png";
import HANU from "@/assets/HANU.png";
import IGNATIA from "@/assets/IGNATIA.png";
import ROWENNA from "@/assets/ROWENNA.png";
import MRAK from "@/assets/MRAK.png";
import SNORRI from "@/assets/SNORRI.png";
import RAZZLE from "@/assets/RAZZLE.png";
import GYDION from "@/assets/GYDION.png";
import { HeroName } from "@/types/hero";
import { StaticImageData } from "next/image";

export function getHeroImage(name: HeroName) {
	const imageMap: Record<HeroName, StaticImageData> = {
		[HeroName.ARIEN]: ARIEN,
		[HeroName.XARGATHA]: XARGATHA,
		[HeroName.BROGAN]: BROGAN,
		[HeroName.WASP]: WASP,
		[HeroName.SABINA]: SABINA,
		[HeroName.TIGERCLAW]: TIGERCLAW,
		[HeroName.DODGER]: DODGER,
		[HeroName.WHISPER]: WHISPER,
		[HeroName.MISA]: MISA,
		[HeroName.URSAFAR]: URSAFAR,
		[HeroName.SILVERARROW]: SILVERARROW,
		[HeroName.TALI]: TALI,
		[HeroName.GARRUS]: GARRUS,
		[HeroName.BAIN]: BAIN,
		[HeroName.CUTTER]: CUTTER,
		[HeroName.TRINKETS]: TRINKETS,
		[HeroName.NEBKHER]: NEBKHER,
		[HeroName.BRYNN]: BRYNN,
		[HeroName.MORTIMER]: MORTIMER,
		[HeroName.WIDGET]: WIDGET,
		[HeroName.TAKAHIDE]: TAKAHIDE,
		[HeroName.EMMITT]: EMMITT,
		[HeroName.MIN]: MIN,
		[HeroName.SWIFT]: SWIFT,
		[HeroName.WUK]: WUK,
		[HeroName.HANU]: HANU,
		[HeroName.IGNATIA]: IGNATIA,
		[HeroName.ROWENNA]: ROWENNA,
		[HeroName.MRAK]: MRAK,
		[HeroName.SNORRI]: SNORRI,
		[HeroName.RAZZLE]: RAZZLE,
		[HeroName.GYDION]: GYDION,
	};

	return imageMap[name];
}