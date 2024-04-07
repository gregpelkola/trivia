import React, { useState } from 'react';
import './Level1.css';

function Level1({ progressToNextLevel }) {
    const [selectedWord, setSelectedWord] = useState('');
    const [selectedPositions, setSelectedPositions] = useState([]);
    const wordsToFind = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE", "EXPRESS", "MONGODB", "MERN", "STRING", "ARRAY", "FUNCTION", "BOOLEAN"];
    const [foundWords, setFoundWords] = useState([]);
}

const grid = {
    ['J', 'S', 'C', 'S', 'C', 'R', 'E', 'A', 'C', 'T'],
    ['N', 'O', 'D', 'E', 'U', 'X', 'I', 'R', 'E', 'S'],
    ['Z', 'M', 'E', 'R', 'N', 'Y', 'O', 'K', 'C', 'M'],
    ['O', 'L', 'L', 'M', 'O', 'N', 'G', 'O', 'D', 'B'],
    ['D', 'B', 'A', 'S', 'S', 'T', 'R', 'I', 'N', 'G'],
    ['F', 'U', 'N', 'C', 'T', 'I', 'O', 'N', 'B', 'O'],
    ['O', 'O', 'A', 'R', 'R', 'A', 'Y', 'G', 'D', 'B'],
    ['H', 'T', 'M', 'L', 'B', 'T', 'R', 'W', 'N', 'U'],
    ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T'],
    ['Z', 'K', 'B', 'T', 'C', 'S', 'S', 'G', 'B', 'O'],
    ['E', 'X', 'P', 'R', 'E', 'S', 'S', 'O', 'D', 'E'],
    ['P', 'E', 'R', 'B', 'O', 'O', 'L', 'E', 'A', 'N'],
};

const [letterColors, setLetterColors] = useState(Array(grid.length).fill().map(()));