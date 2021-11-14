import React from 'react';
import { getMarkerEnd, getSmoothStepPath } from 'react-flow-renderer';
import styled from 'styled-components';

const AnimatedPath = styled.path`
	stroke: #3fa3e7;
	stroke-dasharray: 1000 !important;
	stroke-dashoffset: 1000;
	animation: dash 8s ease-in-out forwards !important;

	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	}
`;
const CustomEdge = ({
	id,
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
	style = {},
	data,
	arrowHeadType,
	markerEndId,
}) => {
	sourceY -= 2;
	targetY += 2;
	const edgePath = getSmoothStepPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
	console.log(edgePath)
	const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);

	return (
		<>
		{/* <path id={id} style={style} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd} /> */}
		<AnimatedPath className="react-flow__edge-path" d={edgePath} />
		</>
	);
}

export default CustomEdge;