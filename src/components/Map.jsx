import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import styled from 'styled-components';
import { characters } from '../utils/characters';
import { READ } from '../utils/navigation';
import { useLock } from '../utils/hooks';

const Container = styled.div`
	overflow: hidden;
	svg {
		width: 100%;
		max-height: 100%;
		image {
			clip-path: inset(0 round 5px);
			cursor: pointer;
		}
		.lockOverlay{
			clip-path: inset(0 round 5px);
			opacity: 0.5
		}
		.lock {
			stroke: #1a1a1a;
		}
		path {
			fill: none;
			stroke: white;
			stroke-width: 2px;
			stroke-dasharray: 450;

			@keyframes dash {
				from {
					stroke-dashoffset: 450;
				}
				to {
					stroke-dashoffset: 0;
				}
			}
		}
	}

`;

const start = 'M 175 50 ';
const vertical = v => `v ${v} `;
const horizontal = v => `h ${v} `;
const curve = (a,b,c,d) => `q ${5*a} ${5*b}, ${5*c} ${5*d} `;

const Map = () => {
	const { lock } = useLock();
	const navigate = useNavigate();

	const animated = !!sessionStorage.getItem("mapAnimated");
	if (!animated) {
		sessionStorage.setItem("mapAnimated", true);
	}
	const animate = {
		style: {
			animation: animated?'none':'dash 3s ease-in-out'
		}
	}

	

	return (
		<Container>
			<svg viewBox="-20 0 540 500">
				{characters.map((character, index) => <>
				<image 
					x={character.position.x}
					y={character.position.y}
					width="50"
					height="50" 
					href={`/images/${character.photo}`}
					onClick={() => navigate(`/${READ}/${character.id}`)}
				/>
				{(index > lock) && <>
					<rect 
						className='lockOverlay'
						x={character.position.x}
						y={character.position.y}
						width="50"
						height="50"
					/>
					<path
						className='lock'
						d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z" 
						transform={`translate(${character.position.x+16}, ${character.position.y+13}) scale(.4)`}
						/>
					</>
				}
				</>)}
				<path {...animate} d={start + vertical(150)} />
				<path {...animate} d={start + vertical(70) + curve(0,1,1,1) + horizontal(70)} />
				<path {...animate} d={start + vertical(120) + curve(0,1,1,1) + horizontal(90) + curve(1,0,1,1) + vertical(20)} />
				<path {...animate} d={start + vertical(120) + curve(0,1,1,1) + horizontal(190) + curve(1,0,1,1) + vertical(20)} />
				<path {...animate} d={start + vertical(120) + curve(0,1,1,1) + horizontal(290) + curve(1,0,1,1) + vertical(20)} />
				<path {...animate} d={start + vertical(120) + curve(0,1,-1,1) + horizontal(-90) + curve(-1,0,-1,1) + vertical(20)} />
				<path {...animate} d={start + vertical(120) + curve(0,1,-1,1) + horizontal(-140) + curve(-1,0,-1,1) + vertical(120)} />
			</svg>
		</Container>
	)
}

export default Map;