'use client';
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}> 
                <div>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className={styles.logoHeader}
                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#FFFF00" stroke="none">
                    <path d="M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -604 -961 -490 -2237
                    274 -3068 425 -462 951 -737 1583 -827 119 -17 512 -16 635 1 622 86 1148 360
                    1572 820 349 378 572 861 650 1406 17 118 17 512 0 630 -59 416 -191 769 -410
                    1099 -92 140 -185 254 -315 385 -399 404 -893 653 -1462 737 -123 18 -478 26
                    -600 13z m453 -1344 c49 -21 81 -52 103 -100 60 -130 -36 -275 -182 -275 -100
                    0 -175 57 -200 152 -41 151 127 286 279 223z m459 -392 c37 -17 73 -65 73 -96
                    0 -92 -222 -266 -396 -311 -34 -9 -78 -16 -97 -16 -72 0 -78 -7 -145 -168 -34
                    -83 -62 -154 -62 -158 0 -4 48 -57 108 -118 147 -153 250 -313 332 -519 45
                    -113 26 -187 -57 -216 -76 -27 -137 12 -173 111 -61 171 -178 354 -302 474
                    -66 64 -153 134 -168 134 -5 0 -16 -26 -25 -57 -47 -160 -159 -311 -288 -386
                    -89 -52 -163 -70 -287 -71 -133 0 -167 12 -195 70 -20 43 -14 89 16 128 33 42
                    58 50 164 52 121 1 184 24 244 89 55 60 84 121 120 255 18 70 66 196 121 319
                    66 151 87 207 77 213 -21 13 -116 9 -147 -7 -60 -31 -105 -118 -134 -260 -13
                    -64 -22 -85 -46 -107 -55 -50 -130 -47 -182 9 -19 21 -23 35 -22 86 2 131 74
                    312 159 400 87 91 173 127 304 127 116 0 206 -26 354 -103 118 -61 120 -62
                    201 -62 102 1 169 30 261 116 97 91 128 103 192 72z m647 -171 c38 -41 50
                    -128 43 -327 -8 -248 -24 -299 -245 -787 -66 -144 -136 -302 -155 -349 l-34
                    -86 122 -5 c140 -6 187 -22 219 -77 43 -75 22 -157 -54 -209 l-33 -22 -1218 2
                    -1218 3 -28 21 c-52 39 -75 83 -70 137 5 55 29 93 78 122 33 20 52 20 992 20
                    l959 0 18 22 c9 12 60 122 113 245 53 123 139 321 191 441 l95 217 -72 0
                    c-105 0 -232 17 -271 35 -48 23 -62 61 -41 111 16 40 424 460 480 495 45 29
                    96 25 129 -9z"/>
                    </g>
                    </svg>
                </div>
                <ul className={styles.ul}>
                    <li>PLANOS</li>
                    <li>BLOG</li>
                    <li>CONTATO</li>
                    <li>ÁREA DO ALUNO</li>
                </ul>
                <div className={styles.iconsHeader}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className={styles.svgHeader}
                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#FFFF00" stroke="none">
                    <path d="M2321 5110 c-1340 -130 -2361 -1283 -2318 -2620 13 -389 97 -726 268
                    -1069 249 -502 647 -900 1150 -1150 815 -406 1779 -350 2539 147 297 194 579
                    482 771 788 74 116 184 342 234 478 51 138 110 376 131 531 23 157 26 521 6
                    660 -59 415 -191 769 -410 1099 -92 140 -185 254 -315 385 -399 403 -895 653
                    -1462 737 -122 18 -466 26 -594 14z m850 -1289 c23 -18 24 -25 27 -173 4 -172
                    -5 -225 -41 -232 -12 -3 -82 -7 -156 -10 -156 -6 -205 -23 -243 -84 -22 -35
                    -23 -49 -26 -239 l-3 -203 211 0 c125 0 219 -4 230 -10 40 -22 42 -42 20 -228
                    -24 -210 -26 -216 -46 -236 -13 -14 -47 -16 -215 -16 l-199 0 0 -537 c0 -485
                    -2 -538 -17 -555 -15 -16 -35 -18 -223 -18 -147 0 -209 3 -218 12 -9 9 -12
                    146 -12 555 l0 543 -159 0 c-154 0 -160 1 -175 22 -13 19 -16 57 -16 221 0
                    197 0 198 25 222 23 24 28 25 174 25 l149 0 4 253 c4 229 6 259 27 322 49 150
                    138 258 265 320 102 51 180 63 402 64 175 1 194 -1 215 -18z"/>
                    </g>
                    </svg>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className={styles.svgHeader}
                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#FFFF00" stroke="none">
                    <path d="M2321 5110 c-868 -84 -1644 -610 -2037 -1382 -139 -273 -221 -536
                    -266 -853 -20 -140 -17 -504 6 -660 39 -278 121 -541 247 -794 249 -502 647
                    -900 1150 -1150 815 -406 1779 -350 2539 147 297 194 579 482 771 788 74 116
                    184 342 234 478 51 138 110 376 131 531 23 157 26 521 6 660 -59 415 -191 769
                    -410 1099 -92 140 -185 254 -315 385 -399 403 -895 653 -1462 737 -122 18
                    -466 26 -594 14z m950 -1293 c279 -84 479 -290 550 -567 21 -81 21 -1299 0
                    -1380 -73 -285 -286 -498 -571 -571 -81 -21 -1299 -21 -1380 0 -279 72 -488
                    276 -568 555 -15 55 -17 123 -17 706 0 705 -1 685 60 825 95 213 309 391 525
                    434 30 6 64 13 75 15 11 2 301 3 645 2 554 -2 631 -4 681 -19z"/>
                    <path d="M1913 3565 c-86 -24 -154 -64 -224 -134 -72 -72 -111 -138 -134 -228
                    -23 -86 -22 -1201 0 -1288 24 -91 71 -169 142 -235 71 -67 134 -103 220 -125
                    86 -23 1201 -22 1288 0 91 24 169 71 235 142 67 71 103 134 125 220 22 85 22
                    1201 0 1286 -22 86 -58 149 -125 220 -66 71 -144 118 -235 142 -84 21 -1212
                    21 -1292 0z m1352 -186 c55 -14 111 -72 121 -124 15 -81 -47 -177 -122 -191
                    -83 -15 -154 20 -186 94 -39 87 4 184 97 217 49 17 38 17 90 4z m-561 -174
                    c184 -39 361 -177 444 -346 56 -114 75 -206 69 -334 -8 -174 -68 -305 -197
                    -435 -124 -125 -282 -190 -461 -190 -180 0 -332 64 -464 195 -131 131 -195
                    283 -195 465 0 182 64 334 195 465 164 164 381 228 609 180z"/>
                    <path d="M2417 2936 c-115 -48 -174 -104 -225 -213 -24 -52 -27 -70 -27 -163
                    0 -97 2 -110 32 -172 40 -84 107 -151 193 -192 60 -29 73 -31 170 -31 97 0
                    110 2 172 32 85 40 151 106 191 191 30 62 32 75 32 172 0 97 -2 110 -32 172
                    -40 85 -106 151 -191 191 -58 28 -79 32 -162 35 -82 2 -103 -1 -153 -22z"/>
                    </g>
                    </svg>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className={styles.svgHeader}
                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#FFFF00" stroke="none">
                    <path d="M2321 5110 c-1340 -130 -2361 -1283 -2318 -2620 13 -389 97 -726 268
                    -1069 249 -502 647 -900 1150 -1150 815 -406 1779 -350 2539 147 297 194 579
                    482 771 788 74 116 184 342 234 478 51 138 110 376 131 531 23 157 26 521 6
                    660 -59 415 -191 769 -410 1099 -92 140 -185 254 -315 385 -399 403 -895 653
                    -1462 737 -122 18 -466 26 -594 14z m509 -1299 c437 -101 781 -405 928 -821
                    53 -152 67 -237 66 -420 0 -141 -4 -181 -26 -276 -117 -501 -500 -871 -1006
                    -971 -59 -11 -136 -17 -237 -17 -179 0 -302 23 -462 86 l-102 41 -323 -77
                    c-178 -42 -329 -76 -335 -76 -7 0 -19 10 -27 23 -13 20 -8 53 54 354 l69 332
                    -40 97 c-67 160 -93 290 -93 479 -1 229 34 378 135 581 169 339 503 594 874
                    667 125 25 131 26 290 22 102 -3 177 -10 235 -24z"/>
                    <path d="M2383 3546 c-324 -62 -611 -290 -733 -583 -61 -147 -74 -212 -74
                    -393 -1 -196 15 -272 94 -437 l48 -101 -39 -188 c-22 -104 -38 -193 -37 -199
                    2 -7 70 4 195 34 l192 44 98 -46 c161 -75 239 -92 433 -92 141 0 177 4 250 23
                    291 79 523 274 652 548 67 145 82 215 82 409 1 148 -2 181 -22 255 -97 353
                    -363 616 -720 712 -99 26 -316 33 -419 14z m-194 -382 c23 -17 65 -99 122
                    -241 33 -82 31 -93 -25 -168 -50 -65 -49 -102 5 -172 99 -127 356 -333 416
                    -333 34 0 60 16 120 71 28 27 60 49 70 49 10 0 81 -18 158 -40 108 -31 145
                    -45 163 -65 35 -41 29 -83 -21 -152 -91 -123 -157 -158 -302 -158 -119 0 -207
                    24 -332 90 -117 62 -203 126 -322 240 -215 206 -321 400 -321 585 0 102 61
                    212 154 281 45 33 81 37 115 13z"/>
                    </g>
                    </svg>
                </div>
            </nav>
        </header>
    );
};