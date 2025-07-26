import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FileTree.css';

const FileNode = ({ node, level, onSelect, activePath }) => {
  const [collapsed, setCollapsed] = useState(true);
  const isFolder = node.type === 'folder';
  const isActive = activePath === node.path;

  const handleClick = () => {
    if (isFolder) {
      setCollapsed(!collapsed);
    }
    onSelect(node.path);
  };

  return (
    <div className={`file-node ${isActive ? 'active' : ''}`} style={{ marginLeft: level * 16 }}>
      <div className="node-header" onClick={handleClick}>
        {isFolder && (
          <span className="toggle-icon">{collapsed ? '+' : '-'}</span>
        )}
        <span className="node-name">{node.name}</span>
      </div>
      {isFolder && !collapsed && node.children && (
        <div className="children">
          {node.children.map((child) => (
            <FileNode
              key={child.path}
              node={child}
              level={level + 1}
              onSelect={onSelect}
              activePath={activePath}
            />
          ))}
        </div>
      )}
    </div>
  );
};

FileNode.propTypes = {
  node: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    children: PropTypes.array,
  }).isRequired,
  level: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  activePath: PropTypes.string,
};

const FileTree = ({ tree }) => {
  const [activePath, setActivePath] = useState('');

  const handleSelect = (path) => {
    setActivePath(path);
  };

  return (
    <div className="file-tree">
      {tree && (
        <FileNode
          node={tree}
          level={0}
          onSelect={handleSelect}
          activePath={activePath}
        />
      )}
    </div>
  );
};

FileTree.propTypes = {
  tree: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    children: PropTypes.array,
  }).isRequired,
};

export default FileTree;
