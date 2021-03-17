import React, { FunctionComponent } from "react";

export interface ErrorPageProps {
  title: string;
  description: string;
}

export const ErrorPage: FunctionComponent<ErrorPageProps> = ({ title, description }) => {
  return (
    <div className="container flex flex-col items-center h-full mt-12 pt-4">
      <div>
        <svg
          style={{ height: "15vh" }}
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="331.000000pt"
          height="434.000000pt"
          viewBox="0 0 331.000000 434.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(0.000000,434.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M503 3758 l-383 -383 0 -597 0 -597 26 -20 c44 -35 51 -33 331 95 92 42 182 82 199 90 l31 13 165 -138 c238 -199 232 -195 274 -188 19 3 99 41 177 83 78 43 211 115 296 161 l153 83 167 -118 c330 -235 329 -234 387 -190 16 12 93 84 171 160 78 76 146 138 152 138 5 0 98 -47 208 -105 109 -58 210 -105 224 -105 15 0 38 9 53 21 l26 21 -2 826 -3 827 -27 58 c-35 75 -123 166 -201 208 l-62 34 -990 3 -990 2 -382 -382z m2359 194 c57 -28 102 -78 119 -129 9 -28 13 -223 15 -750 l2 -713 -51 29 c-171 94 -291 151 -318 151 -33 0 -63 -25 -254 -212 l-110 -108 -55 39 c-30 21 -134 93 -230 160 -163 114 -178 123 -212 118 -23 -3 -152 -67 -323 -161 -157 -86 -290 -157 -294 -159 -5 -1 -48 32 -97 73 -269 229 -297 250 -327 250 -28 0 -122 -38 -332 -135 -44 -21 -88 -41 -97 -46 -15 -8 -16 25 -17 464 l-1 472 343 343 342 343 925 -3 925 -3 47 -23z" />
            <path d="M941 3874 c-19 -24 -21 -41 -21 -153 -1 -315 -67 -380 -386 -381 -107 0 -124 -2 -148 -21 -35 -28 -36 -86 -2 -118 23 -22 28 -23 212 -19 183 3 191 4 241 30 80 42 165 128 207 207 l36 69 0 184 c0 180 -1 185 -23 206 -34 32 -89 30 -116 -4z" />
            <path d="M555 1916 c-276 -124 -413 -193 -424 -215 -9 -15 -11 -192 -9 -639 l3 -617 32 -66 c42 -84 118 -160 202 -202 l66 -32 1170 -3 c727 -2 1194 1 1233 7 35 6 83 20 105 31 66 34 162 135 194 204 l28 61 3 623 3 623 -29 27 c-29 26 -286 183 -387 236 -27 14 -61 26 -74 26 -19 0 -71 -46 -210 -184 l-186 -184 -229 184 c-181 146 -235 184 -258 184 -18 0 -154 -61 -345 -155 -174 -85 -320 -155 -325 -155 -5 0 -77 60 -161 133 -192 168 -204 177 -236 177 -14 -1 -89 -29 -166 -64z m225 -182 c246 -217 293 -254 319 -254 14 0 150 61 301 136 291 144 376 180 394 165 6 -4 109 -88 229 -185 189 -152 224 -176 254 -176 31 0 52 17 225 185 l190 185 46 -27 c43 -24 184 -109 240 -144 l23 -14 -3 -560 c-4 -539 -5 -562 -24 -605 -23 -50 -69 -94 -124 -119 -31 -14 -166 -15 -1205 -16 -960 0 -1177 2 -1208 14 -53 18 -106 68 -131 121 -20 44 -21 63 -23 605 l-3 560 207 97 c115 53 210 96 213 97 3 0 39 -29 80 -65z" />
          </g>
        </svg>
        {/* <img className="mx-auto" src={errorPage} alt="error_img" style={{ height: "15vh" }} /> */}
      </div>
      <h2 className="text-orange uppercase pt-5 pb-2 text-3xl md:text-4xl lg:text-5xl font-semibold">{title}</h2>
      <p className="text-black pb-2 text-base md:text-lg lg:text-2xl">{description}</p>
      <a
        className="mt-4 inline-block px-8 py-4 bg-navy hover:bg-orange text-white hover:text-white border-none rounded-full font-semibold uppercase no-underline transition duration-300 ease-out text-sm"
        href="/"
      >
        Go back to home
      </a>
    </div>
  );
};
