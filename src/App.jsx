import React from 'react';
import FileTree from './components/FileTree.jsx';
import './App.css';

// Sample file tree data for demonstration
const sampleData = {
  name: 'root',
  type: 'folder',
  children: [
    { name: 'file1.txt', type: 'file' },
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'index.js', type: 'file' },
        {
          name: 'components',
          type: 'folder',
          children: [
            { name: 'FileTree.jsx', type: 'file' },
          ],
        },
      ],
    },
  ],
};

export default function App() {
  return (
    <div className="app">
      <h1>File Explorer Tree View</h1>
      <FileTree tree={sampleData} />
    </div>
  );
}
