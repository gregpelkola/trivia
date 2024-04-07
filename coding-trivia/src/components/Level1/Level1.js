import React, { useState } from 'react';
import './Level1.css';

function Level1({ progressToNextLevel }) {
    const [selectedWord, setSelectedWord] = useState('');
    const [selectedPositions, setSelectedPositions] = useState([]);
    const wordsToFind = ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE", "EXPRESS", "MONGODB", "MERN", "FULLSTACK"];
    const [foundWords, setFoundWords] = useState([]);
}

const grid = {
    
}