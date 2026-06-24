/**
 * QRGenerator Component – Core QR generation feature
 */
import React, { useState, useRef, useCallback } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import toast from 'react-hot-toast';
import './QRGenerator.css';

const SIZE_OPTIONS = [
  { label: 'Small',  value: 128 },
  { label: 'Medium', value: 256 },
  { label: 'Large',  value: 384 },
];

const MAX_CHARS = 500;

const QRGenerator = ({ onGenerate }) => {
  const [inputValue, setInputValue]     = useState('');
  const [qrValue, setQrValue]           = useState('');
  const [selectedSize, setSelectedSize] = useState(256);
  const [isLoading, setIsLoading]       = useState(false);
  const [hasError, setHasError]         = useState(false);

  const handleGenerate = useCallback(() => {
    if (!inputValue.trim()) {
      setHasError(true);
      toast.error('Please enter some text or a URL!');
      return;
    }
    setHasError(false);
    setIsLoading(true);

    setTimeout(() => {
      setQrValue(inputValue.trim());
      setIsLoading(false);

      const entry = {
        id: Date.now(),
        text: inputValue.trim(),
        size: selectedSize,
        timestamp: new Date().toLocaleString(),
      };
      const prev    = JSON.parse(localStorage.getItem('qr-history') || '[]');
      const updated = [entry, ...prev].slice(0, 10);
      localStorage.setItem('qr-history', JSON.stringify(updated));
      if (onGenerate) onGenerate(updated);

      toast.success('QR Code generated! 🎉');
    }, 600);
  }, [inputValue, selectedSize, onGenerate]);

  const handleDownload = useCallback(() => {
    const canvas = document.querySelector('#qr-canvas canvas');
    if (!canvas) { toast.error('Generate a QR code first!'); return; }
    const url  = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = `SmartQR_${Date.now()}.png`;
    link.click();
    toast.success('Downloaded successfully! 📥');
  }, []);

  const handleCopyInput = useCallback(() => {
    if (!inputValue.trim()) { toast.error('Nothing to copy!'); return; }
    navigator.clipboard.writeText(inputValue.trim())
      .then(() => toast.success('Copied to clipboard! 📋'))
      .catch(() => toast.error('Copy failed. Try manually.'));
  }, [inputValue]);

  const handleClear = useCallback(() => {
    setInputValue('');
    setQrValue('');
    setHasError(false);
    toast('Cleared! Start fresh. ✨', { icon: '🗑️' });
  }, []);

  return (
    <section id="generator" className="generator-section">
      <div className="generator-card glass-card">

        <div className="card-header">
          <h2 className="card-title"><span className="title-icon">⚡</span> QR Code Generator</h2>
          <p className="card-subtitle">Convert any text, URL, email, or phone number into a scannable QR code.</p>
        </div>

        <div className="input-section">
          <div className={`input-wrapper ${hasError ? 'error' : ''}`}>
            <textarea
              id="qr-input"
              className="qr-input"
              placeholder="Enter text, URL, email, phone… anything!"
              value={inputValue}
              onChange={(e) => {
                if (e.target.value.length <= MAX_CHARS) {
                  setInputValue(e.target.value);
                  setHasError(false);
                }
              }}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleGenerate(); } }}
              rows={4}
              aria-label="QR code input"
            />
            <button className="copy-btn icon-btn" onClick={handleCopyInput} title="Copy input text">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </button>
          </div>
          <div className="char-counter">
            <span className={inputValue.length > MAX_CHARS * 0.8 ? 'near-limit' : ''}>
              {inputValue.length} / {MAX_CHARS}
            </span>
            {hasError && <span className="error-msg">⚠ Input cannot be empty</span>}
          </div>
        </div>

        <div className="size-selector">
          <span className="size-label">QR Size:</span>
          <div className="size-options">
            {SIZE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                className={`size-btn ${selectedSize === opt.value ? 'active' : ''}`}
                onClick={() => setSelectedSize(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary generate-btn" onClick={handleGenerate} disabled={isLoading} id="generate-btn">
            {isLoading ? <><span className="spinner" /> Generating…</> : <><span>⚡</span> Generate QR Code</>}
          </button>
          <button className="btn btn-secondary clear-btn" onClick={handleClear} id="clear-btn">
            <span>🗑</span> Clear
          </button>
        </div>

        {qrValue && !isLoading && (
          <div className="qr-output" id="qr-canvas">
            <div className="qr-frame">
              <QRCodeCanvas value={qrValue} size={selectedSize} bgColor="#ffffff" fgColor="#0f0f1a" level="H" includeMargin={true} />
            </div>
            <p className="qr-value-preview">
              <strong>Encoded:</strong>{' '}
              <span title={qrValue}>{qrValue.length > 60 ? qrValue.slice(0, 60) + '…' : qrValue}</span>
            </p>
            <button className="btn btn-download" onClick={handleDownload} id="download-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PNG
            </button>
          </div>
        )}

        {isLoading && (
          <div className="qr-skeleton"><div className="skeleton-box" /></div>
        )}
      </div>
    </section>
  );
};

export default QRGenerator;
