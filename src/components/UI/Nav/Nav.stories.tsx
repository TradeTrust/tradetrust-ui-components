import React, { ReactElement } from "react";
import { BackArrow, TileInfo } from "./Nav";
import { IconAddressBook } from "../Icon";

export default {
  title: "UI/Nav",
  component: TileInfo,
  parameters: {
    componentSubtitle: "Types of Links, with custom parameters.",
  },
};

// export const resolverAddressIcon: React.FunctionComponent<SVGProps<SVGElement>> = () => {
//   return (
//     <svg width="53" height="56" viewBox="0 0 53 56" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         d="M41.5994 43.4275C48.9646 36.0623 48.2554 23.4118 40.0154 15.1718C31.7755 6.93184 19.125 6.22271 11.7597 13.5879C4.39452 20.9531 5.10365 33.6037 13.3436 41.8436C21.5836 50.0836 34.2341 50.7928 41.5994 43.4275Z"
//         stroke="#D1D5D9"
//         stroke-width="2.6572"
//         stroke-miterlimit="10"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//       <path
//         d="M6.1701 30.5096H25.4401C28.2401 30.5096 30.5101 28.2396 30.5101 25.4396V16.2996L36.1201 13.0596C36.9001 12.6096 36.9001 11.4796 36.1201 11.0296L30.5101 7.78961V6.16961C30.5101 3.36961 28.2401 1.09961 25.4401 1.09961H6.1701C3.3701 1.09961 1.1001 3.36961 1.1001 6.16961V25.4396C1.1001 28.2396 3.3701 30.5096 6.1701 30.5096Z"
//         fill="white"
//         stroke="#454B50"
//         stroke-width="2.2"
//         stroke-miterlimit="10"
//       />
//       <path
//         d="M46.6302 25.0898H27.3602C24.5602 25.0898 22.2902 27.3598 22.2902 30.1598V39.2898L16.6802 42.5298C15.9002 42.9798 15.9002 44.1098 16.6802 44.5598L22.2902 47.7998V49.4198C22.2902 52.2198 24.5602 54.4898 27.3602 54.4898H46.6302C49.4302 54.4898 51.7002 52.2198 51.7002 49.4198V30.1598C51.7002 27.3598 49.4302 25.0898 46.6302 25.0898Z"
//         fill="white"
//         stroke="#454B50"
//         stroke-width="2.2"
//         stroke-miterlimit="10"
//       />
//       <path
//         d="M10.8557 15.5509C10.8557 16.4568 10.6682 17.1498 10.2932 17.6298C9.91825 18.1097 9.36929 18.3497 8.64633 18.3497C7.93238 18.3497 7.38642 18.1142 7.00844 17.6433C6.63047 17.1723 6.43698 16.4973 6.42798 15.6184V14.4125C6.42798 13.4975 6.61697 12.8031 6.99494 12.3291C7.37592 11.8551 7.92338 11.6182 8.63733 11.6182C9.35129 11.6182 9.89725 11.8536 10.2752 12.3246C10.6532 12.7926 10.8467 13.466 10.8557 14.345V15.5509ZM9.55527 14.228C9.55527 13.685 9.48028 13.2906 9.33029 13.0446C9.1833 12.7956 8.95231 12.6711 8.63733 12.6711C8.33135 12.6711 8.10487 12.7896 7.95788 13.0266C7.81389 13.2606 7.73739 13.628 7.72839 14.129V15.7219C7.72839 16.2559 7.80039 16.6533 7.94438 16.9143C8.09137 17.1723 8.32535 17.3013 8.64633 17.3013C8.96431 17.3013 9.1938 17.1768 9.33479 16.9278C9.47578 16.6788 9.54928 16.2979 9.55527 15.7849V14.228Z"
//         fill="#B4BCC2"
//       />
//       <path
//         d="M13.6455 14.8445L14.4645 13.391H15.8549L14.469 15.7759L15.9134 18.2597H14.5185L13.65 16.7298L12.7861 18.2597H11.3867L12.8311 15.7759L11.4497 13.391H12.8446L13.6455 14.8445Z"
//         fill="#B4BCC2"
//       />
//       <path
//         d="M20.917 18.2597H16.4263V17.3688L18.5457 15.1099C18.8367 14.792 19.0512 14.5145 19.1891 14.2775C19.3301 14.0405 19.4006 13.8155 19.4006 13.6025C19.4006 13.3116 19.3271 13.0836 19.1801 12.9186C19.0332 12.7506 18.8232 12.6666 18.5502 12.6666C18.2562 12.6666 18.0237 12.7686 17.8527 12.9726C17.6847 13.1736 17.6008 13.439 17.6008 13.769H16.2958C16.2958 13.37 16.3903 13.0056 16.5793 12.6756C16.7713 12.3456 17.0413 12.0876 17.3893 11.9016C17.7372 11.7127 18.1317 11.6182 18.5727 11.6182C19.2476 11.6182 19.7711 11.7802 20.1431 12.1041C20.5181 12.4281 20.7055 12.8856 20.7055 13.4765C20.7055 13.8005 20.6216 14.1305 20.4536 14.4665C20.2856 14.8025 19.9976 15.1939 19.5896 15.6409L18.1002 17.2113H20.917V18.2597Z"
//         fill="#B4BCC2"
//       />
//       <path
//         d="M23.2659 17.2113H25.6462V18.2597H21.6055V17.4678L23.8958 14.444H21.673V13.391H25.5742V14.1605L23.2659 17.2113Z"
//         fill="#B4BCC2"
//       />
//       <path
//         d="M33.2842 40.6503H30.9174L30.4674 42.0002H29.032L31.4708 35.4486H32.7218L35.1741 42.0002H33.7387L33.2842 40.6503ZM31.2819 39.5569H32.9198L32.0963 37.1045L31.2819 39.5569Z"
//         fill="#B4BCC2"
//       />
//       <path
//         d="M35.7861 42.0002V35.4486H38.0809C38.8759 35.4486 39.4788 35.6016 39.8898 35.9076C40.3008 36.2106 40.5063 36.6561 40.5063 37.244C40.5063 37.565 40.4238 37.8485 40.2588 38.0945C40.0938 38.3375 39.8643 38.5159 39.5703 38.6299C39.9063 38.7139 40.1703 38.8834 40.3623 39.1384C40.5573 39.3934 40.6547 39.7054 40.6547 40.0743C40.6547 40.7043 40.4538 41.1813 40.0518 41.5052C39.6498 41.8292 39.0769 41.9942 38.3329 42.0002H35.7861ZM37.136 39.1474V40.9158H38.2924C38.6104 40.9158 38.8579 40.8408 39.0349 40.6908C39.2148 40.5378 39.3048 40.3278 39.3048 40.0608C39.3048 39.4609 38.9944 39.1564 38.3734 39.1474H37.136ZM37.136 38.1935H38.1349C38.8159 38.1815 39.1563 37.91 39.1563 37.379C39.1563 37.082 39.0694 36.869 38.8954 36.7401C38.7244 36.6081 38.4529 36.5421 38.0809 36.5421H37.136V38.1935Z"
//         fill="#B4BCC2"
//       />
//       <path
//         d="M46.8148 39.8179C46.7639 40.5228 46.5029 41.0778 46.0319 41.4827C45.5639 41.8877 44.946 42.0902 44.178 42.0902C43.3381 42.0902 42.6766 41.8082 42.1936 41.2443C41.7137 40.6773 41.4737 39.9003 41.4737 38.9134V38.5129C41.4737 37.883 41.5847 37.328 41.8067 36.848C42.0287 36.3681 42.3451 36.0006 42.7561 35.7456C43.1701 35.4876 43.6501 35.3586 44.196 35.3586C44.952 35.3586 45.5609 35.5611 46.0229 35.9661C46.4849 36.3711 46.7519 36.9395 46.8238 37.6715H45.4739C45.4409 37.2485 45.3224 36.9425 45.1185 36.7536C44.9175 36.5616 44.61 36.4656 44.196 36.4656C43.746 36.4656 43.4086 36.6276 43.1836 36.9515C42.9616 37.2725 42.8476 37.772 42.8416 38.4499V38.9449C42.8416 39.6529 42.9481 40.1703 43.1611 40.4973C43.3771 40.8243 43.716 40.9878 44.178 40.9878C44.595 40.9878 44.9055 40.8933 45.1095 40.7043C45.3164 40.5123 45.4349 40.2168 45.4649 39.8179H46.8148Z"
//         fill="#B4BCC2"
//       />
//     </svg>
//   );
// };

export const BackArrowLink = (): ReactElement => {
  return <BackArrow />;
};

export const TileInfoLink = (): ReactElement => {
  return (
    <TileInfo title="Address Book" description="Access and update your addresses" tileIcon={<IconAddressBook />} />
  );
};
