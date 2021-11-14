import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ReactFlow from 'react-flow-renderer';
import CustomEdge from './CustomGraphEdge';
import { BIBLIOGRAPHY, CREDITS, READ } from './navigation';

const onChartLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
    // reactFlowInstance.setTransform({ y: 0 });
}
  
const Container = styled.div`
    animation: fade_in 1s ease-in-out;
    @keyframes fade_in {
      0%   {opacity: 0;}
      100% {opacity: 1;}
    }
    display: flex;
    width: 100vw;
    height: 100vh;
    > div:first-child {
        width: 27ch;
        padding: 21px 0px;
        font-size: 1em;
        font-family: 'Poppins', sans-serif;
        box-shadow: inset -29px 0 14px -15px #0c0c0c;
        > div, > a {
            display: flex;
            color: white;
            text-decoration: none;
            margin: 0px 30px 0px 20px;
            padding: 15px 20px;
            cursor: pointer;
            border-radius: 5px;
            :hover {
                /* background-color: #252a463e;     */
                background-blend-mode: darken;
                color: black;
                background-color: white;
            }
        }
    }
    > div:not(:first-child) {
        background-color: #121212;
        color: white;
        flex: 1;
    }
    canvas {
        width: 100%;
    }
    h3 {
        text-align: center;
        font-size: 4em;
        font-weight: 300;
        font-family: 'Marcellus SC';
    }
    img {
      width: 4em;
      height: 4em;
    }
`;

const initialElements = [
    {
      id: '1',
      data: {
        label: (
            <img src="/images/face.jpg" />
        ),
      },
      position: { x: 250, y: 0 },
    },
    {
      id: '2',
      data: {
        label: (
          <img src="/images/face.jpg" />
        ),
      },
      position: { x: 100, y: 100 },
    },
    {
        id: '3',
        data: {
          label: (
            <img src="/images/face.jpg" />
          ),
          href: 'asdf'
        },
        position: { x: 400, y: 100 },
      },

      {
        id: '4',
        data: {
          label: (
            <>
              Bottom
            </>
          ),
          href: 'asdf'
        },
        position: { x: 250, y: 400 },
      },

      
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        arrowHeadType: 'arrow',
        type: 'smoothstep',
        animated: true,
        style: { stroke: '#76df61' },
    
    },
    {
        arrowHeadType: 'arrow',
        id: 'e1-3',
        source: '1',
        target: '3',
        type: 'custom',
        animated: true,
        data: { text: 'custom edge' },
    },
  ];

const genGraphData = (nodes) => {
    const layerHeight = 100;
    const columnWidth = 200;
    const totalWidth = Math.max(...nodes.map(layer => layer.length));
    console.log(columnWidth * totalWidth);
    const data = nodes.map((layer, height) => 
            layer.map((element, width) => ({
                id: element.id,
                data: {
                    label: <>hello</>,
                    href: element.href
                },
                position: {
                    x: width * columnWidth +  columnWidth * ((totalWidth - layer.length) / 2),
                    y: height * layerHeight
                }
            })
        )
    ).flat();
    return data;
} 
const nodes = [
    [{
        id: 'top',
        label: 'top',
        href: 'href'
    },{
        id: 'right',
        label: 'right',
        href: 'href'
    }],
    [{
        id: 'left',
        label: 'left',
        href: 'href'
    },{
        id: 'right',
        label: 'right',
        href: 'href'
    },{
        id: 'right',
        label: 'right',
        href: 'href'
    }],
]
const edgeTypes = {
  custom: CustomEdge,
};
// console.log(genGraphData(nodes))
const data = genGraphData(nodes);
const Game = ({}) => {
    const navigate = useNavigate();

    const onElementClick = (event, element) => {
        if (!element) {
            return;
        }
        if (element.data?.href) {
            navigate(`/${READ}/${element.data?.href}`)
            // console.log(element.data?.href);
        }
    };

    return (
        <Container>
            <div>
                <Link to={BIBLIOGRAPHY} >Bibliography</Link>
                <Link to={CREDITS} >Credits</Link>
                <div>Reading Mode</div>
            </div>
            <div>
                <h3>Lord of the Odyssey</h3>
                <ReactFlow
                    elements={initialElements}
                    onLoad={onChartLoad}
                    onElementClick={onElementClick}
                    edgeTypes={edgeTypes}
                    // snapToGrid={true}
                    // snapGrid={[15, 15]}
                    elementsSelectable={false}
                    nodesDraggable={false}
                    nodesConnectable={false}
                    paneMoveable={false}
                    zoomOnScroll={false}
                    zoomOnPinch={false}
                    zoomOnDoubleClick={false}
                    // panOnScroll
                    // panOnScrollMode={'vertical'}
                    // translateExtent={[[-100000, -0], [100000, 1000]]}
                />

            </div>
        </Container>
    );
}
export default Game;