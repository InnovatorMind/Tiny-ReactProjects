import { useState } from 'react';
import { HeartIcon, SpinnerIcon } from './icons.jsx';

const API_URL = 'https://questions.greatfrontend.com/api/questions/like-button';

export default function LikeButton() {
  const [status, setStatus] = useState('default'); // 'default' | 'hover' | 'liked' | 'loading'
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = async () => {
    const action = status === 'liked' ? 'unlike' : 'like';
    setStatus('loading');
    setError('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(action === 'like' ? 'liked' : 'default');
      } else {
        setStatus(isHovered ? 'hover' : 'default');
        setError(data.message);
      }
    } catch {
      setStatus(isHovered ? 'hover' : 'default');
      setError('Network error. Please try again.');
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (status === 'default') setStatus('hover');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (status === 'hover') setStatus('default');
  };

  const renderIcon = () => {
    if (status === 'loading') return <SpinnerIcon className="icon" />;
    return <HeartIcon className="icon" />;
  };

  const getStyles = () => {
    switch (status) {
      case 'default':
        return { border: '1px solid #888', color: '#888', background: 'transparent' };
      case 'hover':
        return { border: '1px solid #f00', color: '#f00', background: 'transparent', fontWeight: 'bold' };
      case 'liked':
        return { background: '#f00', color: '#fff', border: 'none', fontWeight: 'bold' };
      case 'loading':
        return { background: '#f00', color: '#fff', border: 'none', fontWeight: 'bold' };
      default:
        return {};
    }
  };

  return (
    <div className='flex justify-center items-center h-150'>
      <button
        style={{
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          ...getStyles(),
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        disabled={status === 'loading'}
      >
        {renderIcon()} Like
      </button>
      {error && <div style={{ color: '#f00', marginTop: '8px' }}>{error}</div>}
    </div>
  );
}
