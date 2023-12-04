import React from 'react';
import BLOG from '../photos/BLOG.jpeg';
import PONGAI from '../photos/PONGAI.jpeg';
import pyjumper from '../photos/pyjumper.png';

export const projectList = [
    {
        name: 'AI Pong',
        image:PONGAI,
        skills: 'Python  Pygame',
        description: 'Trained an AI to play the game of pong by implementing the NEAT algorithm, a genetic algorithm of evolving neural networks',
    },
    {
        name:'Personal Blog',
        image:BLOG,
        skills:'Django  Javascript',
        description: 'Talking Turkey is a personal blog where users can view, like, and comment on a myriad of topics ranging from sports to financial markets'

    },
    {
        name:'PyJump',
        image: pyjumper,
        skills: 'Python Pygame',
        description: 'PyGame is a jump simulator that takes into account gravity, collisions, enemy spawns and objects joining/leaving the screen'
    },
];