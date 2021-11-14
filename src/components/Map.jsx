import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import styled from 'styled-components';
import { characters } from '../utils/characters';
import { READ } from '../utils/navigation';

const Container = styled.div`
	overflow: hidden;
	svg {
		width: 100%;
		max-height: 100%;
		image {
			clip-path: inset(0 round 5px);
			cursor: pointer;
		}
		rect {
			cursor: pointer;
			fill: white;
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
				{characters.map(character => <image 
					x={character.position.x}
					y={character.position.y}
					width="50"
					height="50" 
					href={`/images/${character.photo}`}
					onClick={() => navigate(`/${READ}/${character.id}`)}
				/>)}
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