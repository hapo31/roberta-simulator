import { useCallback, useEffect, useRef, useState } from "react";

export default function useAudioPlay({
  defaultAudioPath,
  onPlayEnd,
}: {
  defaultAudioPath: string;
  onPlayEnd?: () => Promise<void> | void;
}) {
  const [firstPlay, setFirstPlay] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>();
  const onPlayEndCallback = useCallback(
    async () => await onPlayEnd?.(),
    [onPlayEnd]
  );

  useEffect(() => {
    const className = "use-audio-play-element";
    const audio = document.createElement("audio");
    audio.className = className;
    audio.volume = 0.5;
    audio.muted = true;
    audio.loop = false;
    audio.src = defaultAudioPath;
    document.body.appendChild(audio);

    audioRef.current = audio;

    return () => {
      const elements = document.getElementsByClassName(className);
      if (elements && elements[elements.length - 1]) {
        document.body.removeChild(elements[elements.length - 1]);
      }
    };
  }, [defaultAudioPath, playing]);

  const strictedFirstPlayHandler = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    if (firstPlay) {
      await audio.play();
      audio.muted = false;
      setFirstPlay(false);
    }
  }, [firstPlay]);

  const play = useCallback(
    async (filePath: string) => {
      const audio = audioRef.current;
      if (!audio || playing) {
        return;
      }
      audio.oncanplay = async () => {
        audio.play();
      };
      audio.onended = async () => {
        audio.onended = null;
        audio.oncanplay = null;
        await onPlayEndCallback();
        setPlaying(false);
      };
      audio.src = filePath;
      audio.muted = false;
      setPlaying(true);
    },

    [onPlayEndCallback, playing]
  );

  const stop = useCallback(async () => {
    return new Promise<void>((resolve) => {
      if (!playing) {
        resolve();
        return;
      }
      const audio = audioRef.current;
      if (!audio) {
        return;
      }
      audio.muted = true;
      audio.pause();
      audio.currentTime = 0;
    });
  }, [playing]);

  const setVolume = useCallback((value: number) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    audio.volume = value;
  }, []);

  return {
    handlers: { onClick: strictedFirstPlayHandler },
    play,
    stop,
    setVolume,
  };
}
