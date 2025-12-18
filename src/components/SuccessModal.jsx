import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const SuccessModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-slate-800 border border-green-500/30 rounded-2xl shadow-[0_0_50px_rgba(34,197,94,0.3)] p-8 max-w-md w-full relative transform animate-scale-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                    <FaTimes size={20} />
                </button>

                <div className="flex flex-col items-center text-center space-y-4">
                    {/* Green Parrot / Success Icon */}
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                        <FaCheckCircle className="text-5xl text-green-500 drop-shadow-md" />
                    </div>

                    <h2 className="text-3xl font-bold text-white tracking-tight">
                        Message Sent
                    </h2>

                    <p className="text-slate-300 text-lg font-medium leading-relaxed">
                        I will reach you faster.
                    </p>

                    <button
                        onClick={onClose}
                        className="mt-6 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 active:scale-95 w-full"
                    >
                        Okay, Great!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
