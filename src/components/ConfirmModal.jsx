import React from 'react';
import './modals.css';

export default function ConfirmModal({ isOpen, title, message, onConfirm, onCancel }) {
    // If the modal state is closed, render absolutely nothing
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onCancel}>
            {/* stopPropagation prevents clicking the inner box from closing it */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3 className="modal-title">{title || "Are you sure?"}</h3>
                <p className="modal-message">{message}</p>
                
                <div className="modal-actions">
                    <button className="btn btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="btn btn-danger-modal" onClick={onConfirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
