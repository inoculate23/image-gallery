import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Modal from '../components/Modal'
import cloudinary from '../utils/cloudinary'
import getBase64ImageUrl from '../utils/generateBlurPlaceholder'
import type { ImageProps } from '../utils/types'
import { useLastViewedPhoto } from '../utils/useLastViewedPhoto'

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter()
  const { photoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
      setLastViewedPhoto(null)
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  return (
   return (
    <>
      <Head>
        <title>Haawke Neural - Las Vegas design & consulting</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId)
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">

<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="962.000000pt" height="947.000000pt" viewBox="0 0 962.000000 947.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,947.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4550 9314 c-496 -43 -868 -119 -1240 -253 -47 -16 -105 -37 -130
-46 -25 -9 -61 -23 -80 -32 -19 -8 -44 -19 -55 -23 -836 -354 -1556 -956
-2050 -1714 -121 -186 -276 -470 -355 -651 -12 -27 -27 -63 -35 -80 -66 -150
-165 -446 -214 -643 -206 -818 -185 -1683 60 -2477 50 -162 111 -330 161 -445
43 -100 53 -121 124 -262 320 -637 758 -1166 1324 -1597 218 -167 449 -310
718 -445 128 -64 181 -89 267 -126 11 -4 36 -15 55 -23 19 -9 55 -23 80 -32
25 -9 83 -30 130 -46 304 -109 648 -188 1005 -231 275 -32 755 -32 1030 0 353
42 687 118 990 226 173 61 188 67 242 92 30 13 56 24 59 24 22 0 353 167 509
258 677 393 1256 974 1648 1655 59 101 189 355 227 442 12 28 27 64 35 80 94
213 204 572 260 845 68 334 89 551 89 925 0 382 -21 603 -89 935 -56 273 -169
639 -265 856 -12 27 -28 65 -37 84 -35 79 -167 337 -220 427 -391 679 -970
1261 -1642 1652 -161 93 -387 208 -536 271 -11 4 -36 15 -55 23 -36 16 -49 21
-225 83 -296 106 -641 185 -980 225 -133 15 -256 21 -470 24 -159 1 -310 1
-335 -1z m700 -410 c315 -26 545 -73 860 -175 620 -201 1182 -541 1654 -999
507 -492 861 -1068 1074 -1745 202 -640 235 -1417 91 -2130 -86 -428 -244
-840 -478 -1242 -506 -873 -1390 -1577 -2350 -1872 -151 -46 -440 -115 -571
-135 -231 -36 -416 -49 -700 -49 -658 0 -1158 101 -1735 353 -327 143 -599
305 -920 549 -162 123 -436 385 -592 566 -467 543 -807 1263 -923 1950 -40
235 -51 357 -57 636 -14 621 62 1094 259 1609 162 426 436 888 717 1210 104
120 357 374 471 474 433 379 992 684 1551 846 290 84 448 117 698 145 316 36
594 38 951 9z"/>
<path d="M4665 8674 c-256 -13 -508 -44 -720 -90 -798 -172 -1574 -626 -2108
-1234 -557 -635 -897 -1403 -966 -2185 -97 -1103 186 -2087 834 -2895 105
-130 341 -374 489 -504 489 -429 1168 -760 1818 -886 184 -35 375 -59 584 -72
329 -20 738 11 1087 83 602 123 1210 422 1701 837 129 109 387 368 489 492
345 414 606 918 751 1447 137 501 171 1091 96 1658 -99 747 -414 1437 -920
2010 -590 670 -1401 1131 -2247 1279 -243 43 -662 71 -888 60z m655 -308 c676
-89 1317 -378 1886 -851 573 -476 986 -1139 1164 -1870 236 -967 83 -1967
-429 -2814 -157 -258 -281 -419 -481 -624 -426 -438 -930 -750 -1510 -936
-238 -76 -477 -126 -735 -152 -153 -15 -612 -15 -775 0 -628 59 -1213 273
-1750 639 -564 385 -1050 992 -1293 1612 -153 392 -223 723 -248 1170 -34 614
56 1135 291 1675 344 794 971 1434 1788 1825 377 181 806 301 1217 339 158 15
727 6 875 -13z"/>
<path d="M4545 8314 c-490 -39 -895 -151 -1340 -369 -503 -248 -910 -575
-1255 -1009 -8 -10 -27 -33 -41 -50 -42 -51 -161 -233 -229 -351 -185 -321
-343 -740 -409 -1085 -75 -393 -71 -996 10 -1435 66 -359 218 -764 404 -1080
57 -97 160 -252 188 -282 l20 -23 769 0 768 0 0 -35 0 -35 -567 -1 c-313 -1
-646 -4 -741 -8 l-173 -6 79 -95 c89 -108 320 -338 432 -431 359 -299 741
-510 1202 -663 398 -133 682 -176 1164 -176 474 0 738 40 1141 175 443 148
774 329 1143 624 132 106 334 304 456 446 l103 120 -197 6 c-108 4 -463 7
-788 8 l-592 1 -5 27 c-3 16 -3 31 0 35 2 5 372 8 822 8 l818 0 80 123 c322
490 517 1032 579 1612 21 190 23 591 5 765 -73 702 -356 1379 -795 1900 -97
115 -321 340 -431 431 -426 356 -935 623 -1440 754 -276 72 -474 95 -850 100
-154 1 -302 1 -330 -1z m2025 -2254 l0 -1210 745 0 745 0 0 125 0 125 -610 0
-610 0 0 40 0 40 650 0 650 0 0 -289 c0 -159 3 -296 6 -305 6 -15 -68 -16
-785 -16 l-791 0 0 -790 0 -790 -165 0 -165 0 0 1960 0 1960 -27 0 c-16 0 -73
2 -128 5 -55 3 -113 2 -129 -1 l-29 -6 4 -612 4 -611 -872 -3 -873 -2 0 -155
0 -155 870 0 870 0 0 -987 c0 -544 3 -1079 7 -1190 l6 -203 -170 0 -170 0 -6
152 c-4 83 -7 546 -7 1030 l0 878 -705 0 -705 0 0 -1030 0 -1030 -170 0 -170
0 0 1960 0 1960 -27 0 c-16 0 -82 1 -148 2 l-120 2 -3 -1962 -2 -1962 -170 0
-170 0 0 790 0 790 -767 1 c-423 1 -811 2 -863 3 l-95 1 0 300 0 300 733 3
732 2 0 -40 0 -40 -692 -2 -693 -3 -3 -122 -3 -123 826 0 825 0 0 1210 0 1210
1685 0 1685 0 0 -1210z m-2850 -3825 l0 -315 -427 2 -428 3 0 35 0 35 388 3
387 2 0 120 0 120 -605 0 -605 0 0 35 0 35 605 0 605 0 0 120 0 120 40 0 40 0
0 -315z m2230 195 l0 -120 620 0 620 0 0 -35 0 -35 -620 0 -620 0 0 -120 0
-120 394 0 c217 0 401 -3 410 -6 10 -4 16 -18 16 -40 l0 -34 -450 0 -450 0 0
315 0 315 40 0 40 0 0 -120z m-1042 -34 c109 -29 202 -107 255 -216 29 -58 32
-74 32 -155 0 -77 -4 -98 -27 -147 -96 -205 -367 -289 -560 -174 -64 38 -135
113 -165 175 -25 49 -28 67 -28 151 0 83 3 102 27 151 52 104 160 193 265 218
58 14 142 12 201 -3z"/>
<path d="M4203 6913 l-23 -4 0 -460 0 -459 705 0 705 0 0 465 0 465 -682 -1
c-376 -1 -693 -4 -705 -6z"/>
<path d="M1550 4715 l0 -55 826 0 825 0 -3 53 -3 52 -822 3 -823 2 0 -55z"/>
<path d="M6570 4715 l0 -55 745 0 745 0 0 55 0 55 -745 0 -745 0 0 -55z"/>
<path d="M4740 2326 c-72 -16 -113 -38 -164 -89 -49 -50 -73 -96 -87 -172 -24
-131 61 -261 209 -318 51 -20 162 -22 215 -3 87 31 170 116 197 200 70 216
-141 434 -370 382z"/>
</g>
</svg>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <Logo />
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
            Haawke Neural by Inoculate Media
              
              AI & Machine Learning, model training, data services
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
            "if it can be imagned, we can make it."
            </p>
            <a
              className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
               href="mailto:craig@inoculate.media, terbo@inoculate.media"
  

              target="_blank"
              rel="noreferrer"
            >
            Contact
            </a>
          </div>
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              key={id}
              href={`/?photoId=${id}`}
              as={`/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        <div>
 All rights reserved, 2023 - Inoculate Media - "Design, Coding. & Consulting"  
          </div>
        <div>702-776-1124    Las Vegas, NV
   
      </footer>
    
  )
}


export default Home

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(400)
    .execute()
  let reducedResults: ImageProps[] = []

  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  return {
    props: {
      images: reducedResults,
    },
  }
}
