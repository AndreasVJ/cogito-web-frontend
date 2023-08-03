import styles from "../styles/Loading.module.css";
import CogitoLogo from "../public/cogito_white.svg";
import Image from "next/image";
import ReactLoading from "react-loading";

const Loading = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.imagePos}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="91"
                        height="78"
                        viewBox="0 0 91 78"
                    >
                        <g clip-path="url(#clip0_222_213)">
                            <path d="M40.8619 43.1639C40.7561 43.1609 40.6513 43.1426 40.5508 43.1094L19.3707 35.7232C19.2129 35.6688 19.0726 35.5731 18.9645 35.4461C18.8563 35.3191 18.784 35.1654 18.7555 35.0011C18.7269 34.8368 18.7429 34.6677 18.8019 34.5117C18.8608 34.3556 18.9605 34.2182 19.0906 34.1137L38.7929 18.3772C38.9271 18.2706 39.0878 18.2028 39.2578 18.1808C39.4278 18.1589 39.6005 18.1838 39.7574 18.2528C39.9114 18.3201 40.0441 18.428 40.1415 18.5649C40.2388 18.7019 40.2969 18.8628 40.3096 19.0303L41.7953 42.1531C41.799 42.3031 41.767 42.4515 41.7022 42.5867C41.6372 42.7219 41.5412 42.8397 41.422 42.9306C41.2668 43.0691 41.0695 43.1513 40.8619 43.1639ZM21.5797 34.5181L39.8429 40.8857L38.5596 20.9507L21.5797 34.5181Z" />
                            <path d="M25.2591 64.374L23.7734 63.2466L40.1077 41.6633C40.1839 41.5649 40.2791 41.4829 40.3878 41.4222L64.1658 27.6371L39.1043 19.9943C38.9207 19.9374 38.759 19.8258 38.6408 19.6742C38.5226 19.5227 38.4537 19.3387 38.4432 19.1468L37.6654 0.486838L39.5321 0.409088L40.31 18.4005L66.7716 26.4398C66.9462 26.4925 67.1015 26.5952 67.2184 26.735C67.3353 26.875 67.4086 27.0461 67.4293 27.2272C67.45 27.4084 67.4172 27.5915 67.3348 27.7542C67.2524 27.9168 67.1242 28.0519 66.966 28.1425L41.4923 42.915L25.2591 64.374Z" />
                            <path d="M66.0264 3.52466L64.1597 3.65528L65.8846 28.2865L67.7513 28.1558L66.0264 3.52466Z" />
                            <path d="M60.331 52.556L58.5342 52.0506L65.6047 27.1084C65.6562 26.9216 65.7649 26.7557 65.9158 26.6342L84.7314 11.5895L85.8981 13.0511L67.3159 27.9092L60.331 52.556Z" />
                            <path d="M14.9233 7.53607L14.1841 9.24951L39.0107 19.9525L39.75 18.239L14.9233 7.53607Z" />
                            <path d="M10.2395 58.1463L8.53602 57.3688L18.0566 36.1663L2.93568 39.6107L2.52344 37.7913L19.4645 33.9038C19.6344 33.866 19.8115 33.876 19.9761 33.9327C20.1407 33.9895 20.2863 34.0908 20.3968 34.2254C20.5072 34.3599 20.5782 34.5225 20.6017 34.695C20.6252 34.8674 20.6004 35.043 20.5301 35.2022L10.2395 58.1463Z" />
                            <path d="M41.3553 40.9991L39.6396 41.7345L46.3192 57.3051L48.0349 56.5697L41.3553 40.9991Z" />
                            <path d="M19.6746 37.4492C21.1179 37.4492 22.288 36.2797 22.288 34.8369C22.288 33.3941 21.1179 32.2245 19.6746 32.2245C18.2311 32.2245 17.061 33.3941 17.061 34.8369C17.061 36.2797 18.2311 37.4492 19.6746 37.4492Z" />
                            <path d="M66.4993 29.9774C67.9426 29.9774 69.1128 28.8077 69.1128 27.3649C69.1128 25.9222 67.9426 24.7525 66.4993 24.7525C65.0559 24.7525 63.8857 25.9222 63.8857 27.3649C63.8857 28.8077 65.0559 29.9774 66.4993 29.9774Z" />
                            <path d="M39.3767 21.7203C40.8201 21.7203 41.9901 20.5506 41.9901 19.1079C41.9901 17.6651 40.8201 16.4954 39.3767 16.4954C37.9332 16.4954 36.7632 17.6651 36.7632 19.1079C36.7632 20.5506 37.9332 21.7203 39.3767 21.7203Z" />
                            <path d="M40.8621 44.8432C42.3054 44.8432 43.4756 43.6735 43.4756 42.2307C43.4756 40.788 42.3054 39.6183 40.8621 39.6183C39.4187 39.6183 38.2485 40.788 38.2485 42.2307C38.2485 43.6735 39.4187 44.8432 40.8621 44.8432Z" />
                            <path d="M32.3995 77.9103C32.2813 77.9101 32.1637 77.8944 32.0495 77.8637L26.6048 76.4331C26.3496 76.365 26.1189 76.2258 25.9399 76.0317C25.7608 75.8376 25.6407 75.5966 25.5936 75.3368L23.5246 63.7598L19.5655 60.3854L9.45376 58.2707C9.26629 58.2329 9.08895 58.1558 8.93342 58.0446C8.77791 57.9334 8.64773 57.7905 8.55149 57.6253L0.197647 43.6303C0.0782252 43.4309 0.0106761 43.2047 0.00116527 42.9724C-0.00834556 42.7403 0.0404851 42.5093 0.1432 42.3008L2.27444 38.1023L3.17672 22.0081C3.19346 21.7418 3.28515 21.4858 3.44118 21.2694L13.4363 7.58539C13.5408 7.43358 13.6743 7.30393 13.8292 7.20387C13.984 7.1038 14.1571 7.03528 14.3385 7.00226L32.4384 4.12551L37.8444 0.261331C38.1067 0.0685778 38.43 -0.0225793 38.7544 0.00475569L64.2904 2.20508C64.4484 2.22032 64.6032 2.25965 64.7492 2.32171L85.1517 11.6517C85.4631 11.7961 85.7098 12.051 85.8439 12.367L90.8919 24.154C90.996 24.3991 91.0257 24.6695 90.9775 24.9315L87.6252 43.8714C87.5934 44.057 87.5239 44.2344 87.4209 44.3922C87.3179 44.5501 87.1836 44.685 87.0261 44.7888L73.3131 53.87C73.0472 54.0459 72.7279 54.123 72.4109 54.0877L59.8802 52.8126L48.2127 57.4776L33.5275 77.3505C33.3976 77.5268 33.2274 77.6695 33.0313 77.7668C32.8351 77.8642 32.6186 77.9134 32.3995 77.9103ZM28.1448 74.0228L31.8395 74.9869L46.1749 55.5494C46.3265 55.3406 46.5341 55.1789 46.7738 55.0829L59.1567 50.1302C59.3632 50.0447 59.5879 50.0127 59.8101 50.0369L72.193 51.3198L85.0272 42.8372L88.2007 24.8847L83.5338 13.9998L63.8315 4.94188L39.0266 2.81154L33.7918 6.56686C33.6175 6.69425 33.4145 6.77701 33.2008 6.80789L15.3108 9.67686L5.95355 22.5522L5.02016 38.5766C5.01342 38.7635 4.96562 38.9467 4.88015 39.113L2.99003 42.8839L10.6205 55.6894L20.4521 57.7497C20.6786 57.7993 20.8896 57.9034 21.0667 58.0529L25.6792 61.9404C25.9137 62.1433 26.0772 62.4157 26.1459 62.7179L28.1448 74.0228Z" />
                            <path d="M66.3648 26.0428L65.1792 27.4841L86.4112 44.9356L87.5968 43.4943L66.3648 26.0428Z" />
                            <path d="M5.16561 21.3771L3.96143 22.8031L19.076 35.557L20.2802 34.1311L5.16561 21.3771Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_222_213">
                                <rect width="91" height="78" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={styles.loadingPos}>
                    <ReactLoading
                        type={"cylon"}
                        color={"white"}
                        height={"5%"}
                        width={"5%"}
                    />
                </div>
            </div>
        </>
    );
};

export default Loading;
