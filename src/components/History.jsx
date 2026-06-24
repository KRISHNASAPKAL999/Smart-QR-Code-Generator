/**
 * History Component – Displays last 10 QR codes from localStorage
 */
import React from 'react';
import toast from 'react-hot-toast';
import './History.css';

const History = ({ history, onClearHistory }) => {
  const handleClear = () => {
    localStorage.removeItem('qr-history');
    onClearHistory([]);
    toast('History cleared! 🧹', { icon: '🗑️' });
  };

  if (!history || history.length === 0) {
    return (
      <section id="history" className="history-section">
        <div className="glass-card history-card">
          <div className="history-header">
            <h3 className="history-title"><span>🕐</span> Recent History</h3>
          </div>
          <div className="history-empty">
            <div className="empty-icon">📋</div>
            <p>No QR codes generated yet.</p>
            <span>Your history will appear here.</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="history" className="history-section">
      <div className="glass-card history-card">
        <div className="history-header">
          <h3 className="history-title">
            <span>🕐</span> Recent History
            <span className="history-count">{history.length}</span>
          </h3>
          <button className="btn-clear-history" onClick={handleClear}>Clear All</button>
        </div>

        <div className="history-list">
          {history.map((item, index) => (
            <div key={item.id} className="history-item" style={{ animationDelay: `${index * 60}ms` }}>
              <div className="history-item-index">#{index + 1}</div>
              <div className="history-item-content">
                <p className="history-text" title={item.text}>
                  {item.text.length > 55 ? item.text.slice(0, 55) + '…' : item.text}
                </p>
                <div className="history-meta">
                  <span className="history-size">Size: {item.size}px</span>
                  <span className="history-time">{item.timestamp}</span>
                </div>
              </div>
              <button
                className="history-copy-btn"
                title="Copy this text"
                onClick={() => {
                  navigator.clipboard.writeText(item.text)
                    .then(() => toast.success('Copied from history! 📋'))
                    .catch(() => toast.error('Copy failed'));
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                  <rect x="9" y="9" width="13" height="13" rx="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
