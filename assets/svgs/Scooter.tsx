import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const Scooter = ({ size = 24 }) => (
    <Svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
    >
        <G transform="matrix(14.045455, 0, 0, 14.045455, -82.702081, -70.227273)">
            <Path
                fill="#b1babe"
                d="M24 11a.994.994 0 0 1-.515-.143l-4.05-2.43c-.466-.279-1-.427-1.543-.427H17V6h.892c.905 0 1.795.246 2.572.712L24 8.834l3.535-2.122A5 5 0 0 1 30.107 6H31v2h-.893c-.544 0-1.077.148-1.543.427l-4.05 2.43A.988.988 0 0 1 24 11z"
                opacity={1}
                data-original="#b0bec5"
                className=""
            />
            <Path
                fill="#ff847b"
                d="M26 11h-4a8 8 0 0 0-8 8v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V19a8 8 0 0 0-8-8z"
                opacity={1}
                data-original="#f44336"
                className=""
            />
            <Path
                fill="#37474f"
                d="M 27.189 31.075 L 20.812 31.075 L 20.812 38.202 C 20.812 40.031 23.47 41.173 25.595 40.259 C 26.582 39.835 27.189 39.05 27.189 38.202 L 27.189 31.075 Z"
                opacity={1}
                data-original="#37474f"
                className=""
                style={{}}
            />
            <Path
                fill="#ef2d1e"
                d="M 26.919 31.975 L 21.082 32 C 20.277 32.003 19.623 31.68 19.623 31.278 L 19.623 26.91 C 19.623 25.228 23.271 24.163 26.189 24.991 C 27.542 25.376 28.377 26.093 28.377 26.874 L 28.377 31.241 C 28.377 31.643 27.724 31.972 26.919 31.975 Z"
                opacity={1}
                data-original="#f6695e"
                className=""
                style={{}}
            />
            <Path
                fill="#ffffff"
                d="M 25 12 L 23 12 L 23 18.65 L 24 19.759 L 25 18.65 L 25 12 Z"
                opacity={1}
                data-original="#ff9800"
                className=""
                style={{}}
            />
            <Path
                fill="#beb3a7"
                d="M24 15c.348 0 .679-.059 1-.143V12h-2v2.857c.321.084.652.143 1 .143z"
                opacity={1}
                data-original="#f57c00"
                className=""
            />
            <G fill="#d32f2f">
                <Path
                    d="M23 11h-1c-.683 0-1.342.095-1.974.256A3.988 3.988 0 0 0 23 14.858zM26 11h-1v3.857a3.987 3.987 0 0 0 2.974-3.602A8.023 8.023 0 0 0 26 11z"
                    fill="#d32f2f"
                    opacity={1}
                    data-original="#d32f2f"
                    className=""
                />
            </G>
            <Path
                fill="#37474f"
                d="M31 6h4v2h-4zM13 6h4v2h-4z"
                opacity={1}
                data-original="#37474f"
                className=""
            />
            <Circle
                cx={24}
                cy={9}
                r={4}
                fill="#ff847b"
                opacity={1}
                data-original="#f44336"
                className=""
            />
            <Circle
                cx={24}
                cy={9}
                r={2.5}
                fill="#e3f2fd"
                opacity={1}
                data-original="#e3f2fd"
                className=""
            />
            <Circle
                cx={24}
                cy={23.781}
                r={1.522}
                fill="#e3f2fd"
                opacity={1}
                data-original="#e3f2fd"
                className=""
            />
        </G>
    </Svg>
);
export default Scooter;
