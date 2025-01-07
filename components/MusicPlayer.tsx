import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null); // Δηλώνουμε τον τύπο HTMLAudioElement

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause(); // Τώρα το TypeScript καταλαβαίνει ότι η `pause` είναι έγκυρη μέθοδος
            } else {
                audioRef.current.play(); // Ομοίως και για την `play`
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        // Ορισμός αρχικής έντασης
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio
                ref={audioRef}
                loop
                autoPlay
                src="/manipulation.mp3" // Χρησιμοποίησα έγκυρο mp3 αρχείο για δοκιμή
            />
            <button
                onClick={togglePlay}
                className="group flex items-center justify-center w-12 h-12 bg-black/80 hover:bg-black text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
                {isPlaying ? (
                    <Volume2 className="w-6 h-6 group-hover:text-red-500 transition-colors" />
                ) : (
                    <VolumeX className="w-6 h-6 group-hover:text-green-500 transition-colors" />
                )}
            </button>
        </div>
    );
}