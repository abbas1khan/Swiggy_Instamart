import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';

const Scooters = ({ size = 24 }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={size}
        height={size}
        x={0}
        y={0}
        viewBox="0 0 48 48"
        style={{
            enableBackground: 'new 0 0 512 512',
        }}
        xmlSpace="preserve"
        className=""
    >
        <G transform="matrix(1.26,0,0,1.26,-6.2400000000000055,-6.2400000000000055)">
            <Path
                fill="#b1babe"
                d="M24 11a.994.994 0 0 1-.515-.143l-4.05-2.43c-.466-.279-1-.427-1.543-.427H17V6h.892c.905 0 1.795.246 2.572.712L24 8.834l3.535-2.122A5 5 0 0 1 30.107 6H31v2h-.893c-.544 0-1.077.148-1.543.427l-4.05 2.43A.988.988 0 0 1 24 11z"
                opacity={1}
                data-original="#b0bec5"
                className=""
            />
            <Path
                fill="#37474f"
                d="M26 35h-4v6a2 2 0 1 0 4 0z"
                opacity={1}
                data-original="#37474f"
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
                fill="#ef2d1e"
                d="M26 37h-4a1 1 0 0 1-1-1v-6a3 3 0 1 1 6 0v6a1 1 0 0 1-1 1z"
                opacity={1}
                data-original="#f6695e"
                className=""
            />
            <Path
                fill="#ffffff"
                d="M25 12h-2v12l1 2 1-2z"
                opacity={1}
                data-original="#ff9800"
                className=""
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
        </G>
    </Svg>
);
export default Scooters;
