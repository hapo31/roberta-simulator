import { useEffect, useState } from "react";
import "./App.scss";
import AudioButton from "./AudioButton";
import useAudioPlay from "./hooks/useAudioPlay";

type AudioList = [string, string][][];

function App() {
  const { handlers, play } = useAudioPlay({
    defaultAudioPath: "silent.wav",
    onPlayEnd: () => setPlayingIndex((index) => index + 1),
  });
  const [playing, setPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [queue, setQueue] = useState<[string, string][]>([]);

  useEffect(() => {
    if (playing) {
      const head = queue[playingIndex];
      if (head == null) {
        setPlaying(false);
        setPlayingIndex(0);
      } else {
        const [_, path] = head;
        play(path);
      }
    }
  }, [play, playing, playingIndex, queue]);

  return (
    <div className="App" {...handlers}>
      <div className="page-title">
        <span className="title">
          ロベルタ
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ボイスシミュレーター
        </span>
        <span className="sub-title mobile-none">
          Roberta
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;voice simulator
        </span>
      </div>
      <div className="audio-lists">
        {audios.map((groups, index) => (
          <div className="audio-list-wrap" key={`gr-${index}`}>
            <div className="label-title">{groups[0][0]}</div>
            <ul className="audio-list">
              {groups.map(([label, path]) => (
                <li key={`${label}`}>
                  <AudioButton
                    label={label}
                    path={path}
                    onClick={() => {
                      setPlaying(false);
                      setPlayingIndex(0);
                      setQueue((state) => [...state, [label, path]]);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="links mobile-none">
        {/* <span className="title">リンク集</span> */}
      </div>
      <div className="queue">
        <div className="queue-list-wrap">
          <div className="queue-title mobile-none">
            <span className="title">再生リスト</span>
          </div>
          <div className="queue-list">
            {queue.map(([label], index) => (
              <span
                className={`label ${
                  playing && playingIndex === index ? "playing" : ""
                }`}
                key={`${label}${index}`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="controller">
          <button className="controll-button" onClick={() => setQueue([])}>
            Clear
          </button>
          <button
            className="controll-button"
            onClick={async () => {
              setPlaying(false);
              setPlayingIndex(0);
            }}
          >
            Stop
          </button>
          <button
            className="controll-button play"
            onClick={() => setPlaying(true)}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

const audios: AudioList = [
  [
    ["作戦中1", "full_01.mp3"],
    ["表面筋", "01_hyoumenkin.mp3"],
    ["電位追跡", "01_deni_tsuiseki.mp3"],
    ["オートフィリング", "01_autofilling.mp3"],
    ["コンシーラー", "01_concealer.mp3"],
  ],
  [
    ["作戦中2", "full_02.mp3"],
    ["バクダンムシ", "02_bakudanmushi.mp3"],
    ["抽出液", "02_chushutsueki.mp3"],
    ["スタイリング", "02_styling.mp3"],
    ["スプレー", "02_spray.mp3"],
  ],
  [
    ["作戦中3", "full_03.mp3"],
    ["フェイシャルボーン", "03_feisharuborne.mp3"],
    ["フルフルストラクチャード", "03_fullstructured.mp3"],
    ["セルフイメージ", "03_self_image.mp3"],
    ["シェーディング", "03_shading.mp3"],
    ["ハイライター", "03_highlighter.mp3"],
  ],
  [
    ["作戦中4", "full_04.mp3"],
    ["ウェット", "04_wet.mp3"],
    ["ドライ", "04_dry.mp3"],
    ["両用", "04_ryouyou.mp3"],
    ["アンビエントカラー", "04_ambient_color.mp3"],
    ["アダプト", "04_adapt.mp3"],
    ["グロスチーク", "04_grosscheak.mp3"],
  ],
];
